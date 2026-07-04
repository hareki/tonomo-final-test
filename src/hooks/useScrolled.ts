'use client';

import { useEffect, useState } from 'react';

/** True once the window has scrolled past `threshold` px from the top. */
export function useScrolled(threshold = 16) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > threshold);
    };

    update(); // sync initial state (restored scroll position / reload mid-page)
    window.addEventListener('scroll', update, { passive: true });

    return () => {
      window.removeEventListener('scroll', update);
    };
  }, [threshold]);

  return scrolled;
}
