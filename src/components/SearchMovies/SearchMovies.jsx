import { useSearchParams } from 'react-router-dom';
import { StyledInput, SearchButton, SearchForm } from './SearchMovies.styled';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
import { useState } from 'react';
export const SerchMovies = ({ getQuery }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');

  const updateQuery = e => {
    setQuery(e.target.value);
  };

  const onSubmitForm = query => {
    const params = query !== '' ? { query: query } : {};
    setSearchParams(params);
    getQuery(query);
  };

  return (
    <main>
      <SearchForm
        onSubmit={e => {
          e.preventDefault();
          onSubmitForm(query);
        }}
      >
        <label htmlFor="">
          <StyledInput
            type="text"
            value={query}
            placeholder="Write the name of the movie"
            onChange={updateQuery}
          />
        </label>

        <SearchButton type="submit">
          <ImSearch width="10" height="10" />
        </SearchButton>
      </SearchForm>
    </main>
  );
};

SerchMovies.propTypes = {
  getQuery: PropTypes.func.isRequired,
};
