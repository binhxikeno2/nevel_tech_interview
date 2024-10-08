import { useEffect, useState } from 'react';

export const endPoint = {
  isMobile: '(max-width: 769px)',
};

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = () => {
      setMatches(media.matches);
    };
    try {
      media.addEventListener('change', listener);
    } catch (ex) {}

    return () => {
      try {
        media.removeEventListener('change', listener);
      } catch (ex) {}
    };
  }, [matches, query]);

  return matches;
}
