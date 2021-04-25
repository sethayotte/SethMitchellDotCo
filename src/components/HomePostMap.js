import React, { useEffect } from "react";
import allPosts from "../allPosts.json";
import Markdown from "react-markdown";
import { Badge } from "shards-react";

const HomeCardLayout = ({ item }) => {
  return (
    <div className="recentPostCards">
      <h4 className="cardArticleTitle">{item.title}</h4>
      <p className="cardArticleExcerpt">{item.summary.slice(0, 150)}...</p>
      <p className="cardReadMore">Read More</p>
    </div>
  );
};

const HomePostCard = () => {
  const posts = allPosts.data;

  return (
    <div id="cardRowOne">
      {posts.map((item, id) => (
        <HomeCardLayout key={id} item={item} />
      ))}
    </div>
  );
};

export { HomeCardLayout, HomePostCard };
