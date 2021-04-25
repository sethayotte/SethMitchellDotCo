import React, { useEffect } from "react";
import allPosts from "../allPosts.json";
import Markdown from "react-markdown";
import { Badge } from "shards-react";

const ListItem = ({ item }) => {
  return (
    <div id="listItemContainer">
      <div>
        <img src={item.thumbnail} alt="Post Thumbnail" />
      </div>
      <h2>{item.title}</h2>
      <div>
        <h4>
          {item.author} | {item.date}
        </h4>
        <Badge>{item.category}</Badge>
      </div>

      <p>{item.summary}</p>
    </div>
  );
};

const BlogPost = () => {
  const posts = allPosts.data;

  return (
    <div>
      {posts.map((item, id) => (
        <ListItem key={id} item={item} />
      ))}
    </div>
  );
};

export { BlogPost, ListItem };
