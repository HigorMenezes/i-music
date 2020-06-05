import React from 'react';
import PropTypes from 'prop-types';

import { Container, Button } from './FetchMoreButton.styles';

function FetchMoreButton({ onClick, children, loading }) {
  return (
    <Container>
      <Button onClick={onClick} disabled={loading}>
        <span>{children}</span>
        <span className="loader" />
      </Button>
    </Container>
  );
}

FetchMoreButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
};

FetchMoreButton.defaultProps = {
  onClick: () => {},
  loading: false,
};

export default FetchMoreButton;
