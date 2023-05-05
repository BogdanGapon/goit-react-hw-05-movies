import { Suspense, useEffect, useRef, useState } from 'react';
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
  const backLink = useRef(location.state?.from);

  const { id } = useParams();
  const [movieValue, setMovieValue] = useState({});
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
        setMovieValue({
          title: title,
          vote_average: vote_average,
          overview: overview,
          stringGenres: stringGenres,
          img: `https://image.tmdb.org/t/p/w500${poster_path}`,
        });
      })
      .catch(err => {});
    return () => {
      controller.abort();
    };
  }, [id]);
  const { title, vote_average, overview, stringGenres, img } = movieValue;
  return (
    <main>
      <section>
        п
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
            <p>Rating: {vote_average}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <b>Genres</b>
            <p>{stringGenres}</p>
          </MovieTextWrapper>
        </MoviDetailsWrapper>
      </section>
      <AddInformSection>
        <p>Additional information</p>

        <LinkWrapper>
          <StyledLink to="cast" state={{ id: id }}>
            Cast
          </StyledLink>

          <StyledLink to="reviews" state={{ id: id }}>
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
