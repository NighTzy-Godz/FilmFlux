import { useEffect, useState } from "react";

function useMovieCasts({ cast }) {
  const [movieCasts, setMovieCasts] = useState([]);

  useEffect(() => {
    let arrCasts = [];
    if (cast) {
      for (let i = 0; i < 20; i++) {
        let currCast = cast[i];
        if (currCast && currCast.profile_path) arrCasts.push(currCast);
      }

      setMovieCasts(arrCasts);
    }
  }, [cast]);

  return { movieCasts };
}

export default useMovieCasts;
