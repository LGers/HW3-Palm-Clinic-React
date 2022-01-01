import React from 'react';
import { ImageProps } from './Image.types';

export const Image: React.FC<ImageProps> = ({src, alt}) => {
  let imgSrc;
  try {
    //todo check if img exist
    imgSrc = require(`${src}`);
  } catch {
    imgSrc = '../../static/img/default.jpg';
  }
  return <img src={imgSrc} alt={alt} />
};
