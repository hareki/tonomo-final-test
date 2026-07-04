'use client';

import { useEffect, useState } from 'react';

/** True once the window has scrolled past `threshold` px from the top. */
export function useScrolled(threshold = 16) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // PERF: Use a sentinel pinned to the top of the document, `threshold` px tall.
    // Once it scrolls fully out of view, scrollY has passed `threshold`.

    // A 0px sentinel never intersects reliably, so keep it at least 1px tall.
    const height = Math.max(1, threshold);

    const sentinel = document.createElement('div');

    sentinel.style.cssText = `position:absolute;top:0;left:0;width:1px;height:${height}px;pointer-events:none;visibility:hidden;`;
    document.body.appendChild(sentinel);

    const observer = new IntersectionObserver(([entry]) => {
      setScrolled(!entry.isIntersecting);
    });

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, [threshold]);

  return scrolled;
}
