import React from 'react';
import PropTypes from 'prop-types';

import { Title } from './PageTitle.styles';

function PageTitle({ children }) {
  return <Title>{children}</Title>;
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitle;
