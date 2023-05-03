import { Link, useLocation } from 'react-router-dom';
import { StyledLink, StyledUl } from './MoviesByQuery.styled';
export const MoviesByQuery = ({ movies }) => {
  const location = useLocation();
  return (
    <StyledUl>
      {movies?.map(movie => {
        return (
          <li key={movie.id}>
            <StyledLink to={`${movie.id}`} state={{ from: location }}>
              {movie.title}
            </StyledLink>
          </li>
        );
      })}
    </StyledUl>
  );
};
