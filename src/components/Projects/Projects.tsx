import { useRef, useState } from 'react';
import { projects } from '../../data/projects';
import { site } from '../../data/site';
import { useInView } from '../../hooks/useInView';
import styles from './Projects.module.css';

export function Projects() {
  const [labelRef, labelInView] = useInView<HTMLDivElement>();
  const [listRef, listInView] = useInView<HTMLDivElement>();

  const previewRef = useRef<HTMLDivElement>(null);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  const year = new Date().getFullYear();

  const movePreview = (e: React.MouseEvent) => {
    const el = previewRef.current;
    if (!el) return;
    const width = 232;
    const gap = 28;
    let x = e.clientX + gap;
    if (x + width > window.innerWidth - 12) x = e.clientX - gap - width;
    el.style.left = `${x}px`;
    el.style.top = `${e.clientY}px`;
  };

  return (
    <section className={styles.section} onMouseMove={movePreview}>
      <div ref={labelRef} className={`${styles.label} reveal${labelInView ? ' is-visible' : ''}`}>
        SELECTED WORK {site.workSince} — {year}
      </div>

      <div
        ref={listRef}
        className={`${styles.list} reveal${listInView ? ' is-visible' : ''}`}
        style={{ transitionDelay: '0.1s' }}
      >
        {projects.map((project, index) => (
          <a
            key={project.num}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className={styles.row}
            data-last-work-item={index === projects.length - 1 ? '' : undefined}
            onMouseEnter={() => project.preview && setPreviewSrc(project.preview)}
            onMouseLeave={() => setPreviewSrc(null)}
          >
            <span className={styles.num}>{project.num}</span>
            <span className={styles.body}>
              <span className={styles.name}>{project.name}</span>
              <span className={styles.desc}>{project.description}</span>
            </span>
            <span className={styles.tech}>
              {project.tech}
              <br />↗
            </span>
          </a>
        ))}
      </div>

      <div
        ref={previewRef}
        className={`${styles.preview}${previewSrc ? ` ${styles.visible}` : ''}`}
        aria-hidden="true"
      >
        {previewSrc && <img className={styles.previewImg} src={previewSrc} alt="" />}
      </div>
    </section>
  );
}
