import { useEffect, useState } from "react";

const useMovieRecommendation = (recommendations) => {
  const [movieRecommendation, setMovieRecommendation] = useState([]);

  useEffect(() => {
    if (recommendations) {
      let arrRecommendation = [];

      for (let i = 0; i < 6; i++) {
        let recomMovie = recommendations[i];

        if (recomMovie && recomMovie.backdrop_path)
          arrRecommendation.push(recomMovie);
      }

      setMovieRecommendation(arrRecommendation);
    }
  }, [recommendations]);

  return { movieRecommendation };
};

export default useMovieRecommendation;
