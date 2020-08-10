import React from "react";
import Card from "./Card";
import Category from "../Category";

const NewsCards = ({ articles, activeArticle }) => {
  return (
    <div className="row newscards">
      {articles.length > 0 ? (
        articles.map((v, i) => {
          console.log("activeArticle: " + activeArticle);
          return (
            <Card
              index={i}
              activeArticle={activeArticle}
              urlToImage={v.urlToImage}
              author={v.author}
              title={v.title}
              description={v.description}
            />
          );
        })
      ) : (
        <Category />
      )}
    </div>
  );
};

NewsCards.propTypes = {};

export default NewsCards;
