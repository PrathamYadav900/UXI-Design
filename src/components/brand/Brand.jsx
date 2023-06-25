import React from 'react';
import './brand.css';
import { google,slack,shopify,dropbox,atlassian } from './brands';

const Brand = () => {
  return (
    <div className='Brands-content Brands-content__bg-color' >
      <img src={google} alt="" />
      <img src={shopify} alt="" />
      <img src={slack} alt="" />
      <img src={dropbox} alt="" />
      <img src={atlassian} alt="" />

    </div>
  )
}

export default Brand
