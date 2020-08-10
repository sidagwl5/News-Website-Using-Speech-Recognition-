import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "../components/NewsCards/NewsCards";

export default function Homepage() {
  const alanApiKey =
    "086d2c1ea6b3a78feffd126c249116932e956eca572e1d8b807a3e2338fdd0dc/stage";
  const [articles, setArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: alanApiKey,
      onCommand: ({ command, articles, index }) => {
        if (command === "newHeadLines") {
          setActiveArticle(-1);
          setArticles(articles);
        }

        if (command === "activeArticle") {
          console.log(articles);
          setActiveArticle(articles);
        }
        if (command === "yes") {
          window.open(articles[index].url);
        }
      },
    });
  }, []);

  return (
    <>
      <div className="container-fluid px-0">
        <NewsCards articles={articles} activeArticle={activeArticle} />
      </div>
    </>
  );
}

Homepage.propTypes = {};
