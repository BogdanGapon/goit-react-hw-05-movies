import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from 'Utilities/variables';
import { PopularMovieList } from 'components/PopularMovieList/PopularMovieList';
import { Main } from './Home.styled';
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(URL, {
        signal: controller.signal,
      })
      .then(res => {
        const {
          data: { results },
        } = res;
        if (results.length === 0) {
          return;
        }

        setMovies([...results]);
      })
      .catch(err => {});
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <Main>
      <PopularMovieList movies={movies} />
    </Main>
  );
};

export default Home;
