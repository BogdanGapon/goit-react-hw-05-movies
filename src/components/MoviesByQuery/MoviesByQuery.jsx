import { useLocation } from 'react-router-dom';
import { StyledLink, StyledUl } from './MoviesByQuery.styled';
import PropTypes from 'prop-types';
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

MoviesByQuery.propTypes = {
  movies: PropTypes.array.isRequired,
};
