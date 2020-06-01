import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { Container, Input, SearchButton, SearchIcon } from './SearchBar.styles';

function SearchBar({ placeHolder }) {
  const history = useHistory();
  const { search: searchParams } = useLocation();
  const [search, setSearch] = useState('');

  useEffect(() => {
    const query = queryString.parse(searchParams);
    setSearch(query.search || '');
  }, [searchParams]);

  function handleSubmit(e) {
    e.preventDefault();
    history.push({
      search: queryString.stringify({ search }),
    });
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        placeholder={placeHolder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </Container>
  );
}

SearchBar.propTypes = {
  placeHolder: PropTypes.string,
};

SearchBar.defaultProps = {
  placeHolder: '',
};

export default SearchBar;
