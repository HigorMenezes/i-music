import React from 'react';
import PropTypes from 'prop-types';

import { Image, Name, Description } from './CardListItem.styles';

function CardListItem({ imageUrl, name, description }) {
  return (
    <>
      <Image src={imageUrl} alt={name} />
      <Name>{name}</Name>
      {description && <Description>{description}</Description>}
    </>
  );
}

CardListItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

CardListItem.defaultProps = {
  description: '',
};

export default CardListItem;
