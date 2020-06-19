import React, { Fragment } from "react";


const GalleryImage = ({  src, alt, i }) => {
  return (
    <Fragment>
      <img  key={i} src={src} alt={alt} />
    </Fragment>
  );
};

export default GalleryImage;
