import React from 'react';

const BlobImage = (props) =>{

    return(
        <div className={`mask-wrapper ${props.type}-wrapper`}>
            <div className={`mask-stroke blob-mask-${props.blobNumber} ${props.type}-stroke`}></div>
            <div className={`image-mask blob-mask-${props.blobNumber} ${props.type}-mask`}>
                <img src={props.image} alt={props.imageAlt} className={ `${props.type}-image`} />
            </div>
        </div>
    );
};

export default BlobImage