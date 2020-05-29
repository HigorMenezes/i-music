import React from 'react';
import PropTypes from 'prop-types';

import { Card, Image, Name, Description } from './CardListItem.styles';

function CardListItem({ id, imageUrl, name, description }) {
  return (
    <Card data-id={id}>
      <Image src={imageUrl} alt={name} />
      <Name>{name}</Name>
      {description && <Description>{description}</Description>}
    </Card>
  );
}

CardListItem.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardListItem;
