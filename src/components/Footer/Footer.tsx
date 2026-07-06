import { useEffect, useRef, useState } from 'react';
import { site } from '../../data/site';
import { useInView } from '../../hooks/useInView';
import bike from '../../assets/bike.png';
import styles from './Footer.module.css';

type RideMode = 'autoplay' | 'scrolldriven';

export function Footer() {
  const [topRef, topInView] = useInView<HTMLDivElement>();
  const footerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const bikeRef = useRef<HTMLImageElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<RideMode>('scrolldriven');

  const year = new Date().getFullYear();

  useEffect(() => {
    let raf = 0;

    // Position the bike + reveal contact columns for a given ride progress.
    const applyProgress = (progress: number) => {
      const track = trackRef.current;
      const bikeEl = bikeRef.current;
      const contact = contactRef.current;
      if (!track || !bikeEl || !contact) return;

      const travel = Math.max(track.clientWidth - bikeEl.offsetWidth, 0);
      bikeEl.style.transform = `translateX(${(progress * travel).toFixed(1)}px)`;

      const bikeFront = bikeEl.getBoundingClientRect().right;
      contact.querySelectorAll<HTMLElement>('[data-col]').forEach((col) => {
        const r = col.getBoundingClientRect();
        const passed = bikeFront >= r.left + r.width * 0.5;
        col.style.opacity = passed ? '1' : '0';
        col.style.transform = passed ? 'translateY(0)' : 'translateY(10px)';
      });
    };

    // The ride starts only once the last work item has scrolled fully into
    // view; the scroll distance left between that point and the bottom of
    // the page drives the bike from 0 to 1. Bounds are measured from the
    // live layout each frame, so any screen size works the same way.
    const rideBounds = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const lastWork = document.querySelector('[data-last-work-item]');
      if (!lastWork) return { start: 0, end: maxScroll };
      const itemBottom = lastWork.getBoundingClientRect().bottom + window.scrollY;
      const start = Math.min(Math.max(itemBottom - window.innerHeight, 0), maxScroll);
      return { start, end: maxScroll };
    };

    const scrollProgress = () => {
      const { start, end } = rideBounds();
      if (end <= start) return 1;
      return Math.min(Math.max((window.scrollY - start) / (end - start), 0), 1);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => applyProgress(scrollProgress()));
    };

    // When there isn't enough scroll runway left after the last work item is
    // in view (e.g. a tall screen where the rest of the page nearly fits),
    // auto-play the ride once the footer scrolls into view instead of
    // leaving the bike stuck.
    const hasRunway = () => {
      const { start, end } = rideBounds();
      return end - start > 150;
    };

    let io: IntersectionObserver | null = null;
    let autoPlayed = false;

    const autoPlay = () => {
      autoPlayed = true;
      const duration = 2200;
      let startTs = 0;
      const tick = (ts: number) => {
        if (!startTs) startTs = ts;
        const t = Math.min((ts - startTs) / duration, 1);
        applyProgress(1 - Math.pow(1 - t, 3)); // easeOutCubic
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const setup = () => {
      window.removeEventListener('scroll', onScroll);
      io?.disconnect();
      io = null;

      // There's scroll runway → the bike tracks the scroll position.
      // Otherwise → the bike auto-plays once the footer scrolls into view.
      const nextMode: RideMode = hasRunway() ? 'scrolldriven' : 'autoplay';
      setMode(nextMode);

      if (nextMode === 'scrolldriven') {
        window.addEventListener('scroll', onScroll, { passive: true });
        applyProgress(scrollProgress());
      } else {
        applyProgress(0); // reset to start, then play when in view
        io = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && !autoPlayed) autoPlay();
          },
          { threshold: 0.35 }
        );
        if (footerRef.current) io.observe(footerRef.current);
      }
    };

    const onResize = () => {
      cancelAnimationFrame(raf);
      autoPlayed = false;
      setup();
    };

    setup();
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      io?.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div ref={topRef} className={`${styles.topRow} reveal${topInView ? ' is-visible' : ''}`}>
        <span className={styles.topLabel}>GET IN TOUCH</span>
        <span className={styles.topHint}>
          {mode === 'autoplay' ? (
            'ENJOY the ride'
          ) : (
            <>
              <span className={styles.bounce}>↓</span> SCROLL to hit the gas
            </>
          )}
        </span>
      </div>

      <div ref={trackRef} className={styles.track}>
        <div className={styles.road} />
        <img ref={bikeRef} className={styles.bike} src={bike} alt="Max riding a motorcycle" />

        <div ref={contactRef} className={styles.contact}>
          <div className={styles.col} data-col>
            <span className={styles.colLabel}>EMAIL</span>
            <a className={styles.colLink} href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div className={styles.col} data-col>
            <span className={styles.colLabel}>GITHUB</span>
            <a className={styles.colLink} href={site.github} target="_blank" rel="noreferrer">
              {site.githubHandle}
            </a>
          </div>
          <div className={styles.col} data-col>
            <span className={styles.colLabel}>LINKEDIN</span>
            <a className={styles.colLink} href={site.linkedin} target="_blank" rel="noreferrer">
              {site.linkedinName}
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <span className={styles.bottomBrand}>
          MAX CHU<span className={styles.slash}>/</span>
        </span>
        <span className={styles.bottomMeta}>
          © {year} — {site.location}
        </span>
      </div>
    </footer>
  );
}
