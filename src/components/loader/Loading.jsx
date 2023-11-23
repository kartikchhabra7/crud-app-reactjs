import React from "react";
import { ThreeDots } from "react-loader-spinner";
import "./Loading.css";
const Loading = () => {
  return (
    <>
      <div className="loader-container">
        <div className="loader">
          <ThreeDots
            color="#202124"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      </div>
    </>
  );
};

export default Loading;
