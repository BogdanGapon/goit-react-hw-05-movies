import { SerchMovies } from 'components/SearchMovies/SearchMovies';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { UrlForQuery } from 'Utilities/variables';
import { MoviesByQuery } from 'components/MoviesByQuery/MoviesByQuery';
const Movies = () => {
  const [query, setQuery] = useState('');
  const [moviesByQuery, setMoviesByQuery] = useState();

  const getQuery = query => {
    setQuery(query);
  };
  useEffect(() => {
    if (query === '' || query === undefined) {
      return;
    }
    const controller = new AbortController();
    axios
      .get(`${UrlForQuery}${query}`, {
        signal: controller.signal,
      })
      .then(res => {
        const {
          data: { results },
        } = res;
        setMoviesByQuery([...results]);
      });
    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <div>
      <SerchMovies getQuery={getQuery} />
      <MoviesByQuery movies={moviesByQuery} />
    </div>
  );
};

export default Movies;
