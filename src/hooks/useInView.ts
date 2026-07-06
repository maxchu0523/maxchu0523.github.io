import { useEffect, useRef, useState } from 'react';

/**
 * Reveals an element the first time it scrolls into view. Returns a ref to
 * attach and a boolean that flips to true once (and stays true).
 */
export function useInView<T extends HTMLElement>(
  options?: IntersectionObserverInit
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px', ...options }
    );
    io.observe(el);
    return () => io.disconnect();
    // Observer is set up once on mount; options are read at that time only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
}
