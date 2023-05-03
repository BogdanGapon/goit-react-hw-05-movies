import { useLocation } from 'react-router-dom';
import { StyledLink } from './PopularMovieList.styled';
import { StyledUl } from './PopularMovieList.styled';
export const PopularMovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <h2>Trending Today</h2>
      <StyledUl>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <StyledLink to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </StyledLink>
            </li>
          );
        })}
      </StyledUl>
    </>
  );
};
