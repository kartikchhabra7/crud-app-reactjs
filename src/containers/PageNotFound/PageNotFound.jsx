import React from "react";
import "./PageNotFound.css";
import { CREATE } from "../../utils/constants/routes";
import { Link } from "react-router-dom";
import errorPage2 from "../../assets/images/errorPage2.jpeg"

function PageNotFound() {
  const arrOfAnImage=[errorPage2]
  const alt = "error-image";
  return (
    <>
      <div className="error-page">
        {/* <h1 className="title">Oops! Page Not Found</h1>
        <p className="message">
          I'm sorry, but the page you are looking for could not be found.
        </p> */}
        <img src={arrOfAnImage[0]} alt={alt} className="error-image"  />
        <div className="navigation">
          <Link to={CREATE}>Go to Home</Link>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
