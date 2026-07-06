import { useEffect, useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { site } from '../../data/site';
import styles from './Hero.module.css';

/* Resolves when the neon sign can flicker without dropped frames: fonts
   swapped in and two clean paints behind us (with a timeout in case font
   loading stalls). */
function useReadyToAnimate(fallbackMs = 1500) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let raf = 0;
    let cancelled = false;
    const reveal = () => setReady(true);
    const secondFrame = () => {
      raf = requestAnimationFrame(reveal);
    };
    const start = () => {
      if (cancelled) return;
      raf = requestAnimationFrame(secondFrame);
    };
    const timeout = globalThis.setTimeout(start, fallbackMs);
    document.fonts.ready.then(start);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      globalThis.clearTimeout(timeout);
    };
  }, [fallbackMs]);

  return ready;
}

export function Hero() {
  const [rowRef, rowInView] = useInView<HTMLDivElement>();
  const lit = useReadyToAnimate();

  return (
    <section className={styles.hero} aria-label="Intro">
      <h1 className={lit ? `${styles.title} ${styles.lit}` : styles.title}>
        {site.name}
        <span className={styles.slash}>/</span>
      </h1>
      <div
        ref={rowRef}
        className={`${styles.row} reveal${rowInView ? ' is-visible' : ''}`}
        style={{ transitionDelay: '0.1s' }}
      >
        <p className={styles.tagline}>{site.tagline}</p>
        <div className={styles.links}>
          <a className={styles.link} href={`mailto:${site.email}`}>
            EMAIL
          </a>
          <a className={styles.link} href={site.github} target="_blank" rel="noreferrer">
            GITHUB
          </a>
          <a className={styles.link} href={site.linkedin} target="_blank" rel="noreferrer">
            LINKEDIN
          </a>
        </div>
      </div>
    </section>
  );
}
