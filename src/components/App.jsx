import { Route, Routes } from 'react-router-dom';
import { StyledNav, StyledLink } from './App.styled';
import { Suspense, lazy } from 'react';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
lazy(() => import('./Cast/Cast'), 'default');
lazy(() => import('./Reviews/Reviews'), 'default');
export const App = () => {
  return (
    <div>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </StyledNav>
      <Suspense fallback={<div>Loading new page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />

          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};
