import React, { useEffect, useState } from "react";

function useHomeMovies(movies) {
  const [homeMovies, setHomeMovies] = useState([]);

  useEffect(() => {
    let arr = [];
    if (!movies) return;
    for (let i = 0; i < 20; i++) {
      if (movies[i].original_title.length < 20) arr.push(movies[i]);
    }

    setHomeMovies(arr);
  }, [movies]);

  return { homeMovies };
}

export default useHomeMovies;
