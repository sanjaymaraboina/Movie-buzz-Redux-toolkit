import React from "react";
import pagenotFoundImage from '../../assets/pnf.jpg'
import './PageNotFound.scss'

const PageNotFound = () => {
  return(
    <div className="imageFound">
      <img src={pagenotFoundImage} alt="" />  
    </div>
  );
};

export default PageNotFound;