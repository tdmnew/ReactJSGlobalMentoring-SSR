import React from 'react';
import { useImage } from 'react-image';

import { IMG_FALLBACK } from '../../Core/Constants';

export default function Image({ imgSrc, title, type }) {
    const imgClass =
        type === 'moviecard' ? 'moviecard poster__img' : 'moviedetails__poster';

    const { src } = useImage({
        srcList: [imgSrc, IMG_FALLBACK],
    });

    return (
        <>
            <img className={imgClass} src={src} alt={`${title} Poster`} />
        </>
    );
}
