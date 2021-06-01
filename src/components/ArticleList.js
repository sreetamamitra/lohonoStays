import React from "react";
import Article from "./Article";

function ArticleList({ results }) {
  let data = [];
  if (results) {
    data = results;
  }
  return (
    <div className="article-list">
      {data.map((item) => (
     <Article key={item.id} image={item} />
      ))}
    </div>
  );
}

export default ArticleList;
