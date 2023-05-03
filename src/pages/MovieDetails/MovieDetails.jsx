import { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import { KEY, UrlForMovieDetails } from 'Utilities/variables';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  AddInformSection,
  BackIcon,
  BackLink,
  MoviDetailsWrapper,
  MovieTextWrapper,
  LinkWrapper,
  StyledLink,
} from './MovieDetail.styled';

const MovieDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  const [rating, setRating] = useState('');
  const [title, setTitle] = useState('');
  const [movieDescription, setMovieDescription] = useState('');
  const [img, setImg] = useState('');
  const [movieGenres, setMovieGenres] = useState('');
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`${UrlForMovieDetails}${id}${KEY}`, { signal: controller.signal })
      .then(res => {
        const {
          data: { vote_average, title, overview, poster_path, genres },
        } = res;

        const stringGenres = genres
          ?.map(genre => {
            return genre.name;
          })
          .join(' ');

        setTitle(title);
        setRating(vote_average);
        setMovieDescription(overview);
        setMovieGenres(stringGenres);
        setImg(`https://image.tmdb.org/t/p/w500${poster_path}`);
      })
      .catch(err => {});
    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <main>
      <section>
        {location.pathname === `/movies/${id}` ? (
          <BackLink to={location.state?.from}>
            <BackIcon />
            Go back
          </BackLink>
        ) : (
          <BackLink to={location.state?.from?.state?.from}>
            <BackIcon />
            Go back
          </BackLink>
        )}

        <MoviDetailsWrapper>
          <div>
            {img === 'https://image.tmdb.org/t/p/w500null' ? (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                alt=""
                width="220"
                height="220"
              />
            ) : (
              <img src={img} alt={title} width="220px" heigt="22 0px" />
            )}
          </div>
          <MovieTextWrapper>
            <h2>{title}</h2>
            <p>Rating: {rating}</p>
            <h3>Overview</h3>
            <p>{movieDescription}</p>
            <b>Genres</b>
            <p>{movieGenres}</p>
          </MovieTextWrapper>
        </MoviDetailsWrapper>
      </section>
      <AddInformSection>
        <p>Additional information</p>

        <LinkWrapper>
          <StyledLink to="cast" state={{ id: id, from: location }}>
            Cast
          </StyledLink>

          <StyledLink to="reviews" state={{ id: id, from: location }}>
            Reviews
          </StyledLink>
        </LinkWrapper>
      </AddInformSection>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
