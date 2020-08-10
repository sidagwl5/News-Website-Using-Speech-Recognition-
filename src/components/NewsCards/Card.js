import React, { useEffect, createRef, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Card = ({
  author,
  title,
  description,
  urlToImage,
  activeArticle,
  index,
}) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((ref) =>
      Array(20)
        .fill()
        .map((_, i) => {
          return ref[i] || createRef();
        })
    );
  }, []);

  useEffect(() => {
    if (index === activeArticle && elRefs[activeArticle]) {
      window.scroll(0, elRefs[activeArticle].current.offsetTop - 50);
    }
  }, [index, activeArticle, elRefs]);

  return (
    <div
      ref={elRefs[index]}
      className="card col-xxl-3 col-xl-3 col-sm-12 col-md-6"
    >
      {console.log("index: " + index)}
      {console.log("activeCard: " + activeArticle)}
      <div
        className={classnames(
          "nestedCard",
          activeArticle === index ? "activeCardStyle" : null
        )}
      >
        <img src={urlToImage} className="img-fluid" />
        <h1 className="display-5 px-3 font-weight-regular">{author}</h1>
        <h3 className="font-weight-regular px-3">{title}</h3>
        <p className="px-3">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
