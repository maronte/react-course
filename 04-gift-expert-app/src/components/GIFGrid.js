import React from 'react';
import propTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GIFGridItem } from './GIFGridItem';

export const GIFGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category)

    return (
    <>
        <h2>{category}</h2>
        {loading && <p>Loading...</p>}
        <div className='card-grid'>
            {
                images.map(img => ( 
                    <GIFGridItem
                        key={img.id}
                        {...img}
                    />
                ))
            }
        </div>
    </>
    )
}

GIFGrid.propTypes = {
    category: propTypes.string.isRequired
}