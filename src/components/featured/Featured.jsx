import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://twomonkeystravelgroup.com/wp-content/uploads/2015/11/Luxury-hotels-in-Indonesia-3.jpg"
          alt="img"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__text_with_image___twi_image/public/2021-03/Banyan-Tree-3.jpg"
          alt="img"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://img.jakpost.net/c/2016/09/28/2016_09_28_12944_1475056472._large.jpg"
          alt="img"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
