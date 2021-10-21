import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

function UseMediaQuery(query) {
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => {
        setMatches(media.matches);
      };
      media.addEventListener( "change",listener);
      return () => media.removeEventListener("change",listener);
    }, [matches, query]);
  
    return matches;
  }

export default UseMediaQuery;