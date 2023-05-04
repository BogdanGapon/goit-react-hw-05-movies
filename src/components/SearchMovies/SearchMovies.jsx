import { useSearchParams } from 'react-router-dom';
import { StyledInput, SearchButton, SearchForm } from './SearchMovies.styled';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
export const SerchMovies = ({ getQuery }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const updateQuery = name => {
    const params = name !== '' ? { query: name } : {};
    setSearchParams(params);
  };

  const SubmitForm = e => {
    e.preventDefault();
    getQuery(query);
  };
  return (
    <main>
      <SearchForm onSubmit={SubmitForm}>
        <label htmlFor="">
          <StyledInput
            type="text"
            value={query}
            placeholder="Write the name of the movie"
            onChange={e => updateQuery(e.target.value)}
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
