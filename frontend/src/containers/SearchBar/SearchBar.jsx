import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import queryParams from '../../utils/queryParams';

import { Container, Input, SearchButton, SearchIcon } from './SearchBar.styles';

function SearchBar({ placeHolder }) {
  const history = useHistory();
  const [search, setSearch] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    history.push({
      search: queryParams.objectToString({ search }),
    });
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        placeholder={placeHolder}
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
