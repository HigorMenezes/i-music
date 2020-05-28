import React from 'react';
import PropTypes from 'prop-types';

import { Title } from './CustomTitle.styles';

function CustomTitle({ children }) {
  return <Title>{children}</Title>;
}

CustomTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomTitle;
