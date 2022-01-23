import propTypes from 'prop-types';
import React from 'react';

export const GIFGridItem = ({ id, title, url }) => {
  return (
    <div className='card animate__animated animate__fadeIn animate__delay-1s'>
        <img src={url} alt={title ? title : id} />
        <p>{title ? title : id}</p>
    </div>
  )
}

GIFGridItem.propTypes = {
    id : propTypes.string.isRequired,
    title : propTypes.string.isRequired,
    url : propTypes.string.isRequired
}