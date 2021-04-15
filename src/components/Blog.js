import React, { useState, useEffect } from "react";
import { db, auth } from "../services/firebase";

import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Badge,
} from "shards-react";

const Blog = () => {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    console.log("mounted");
    db.collection("fl_content")
      .get()
      .then((snapshot) => {
        const posts = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          posts.push(data);
          console.log(data);
        });
        setPosts(posts);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div id="allPostsPage">
      <h1 id="allPostsHeader">All Posts</h1>
      <div id="postFilterContainer">
        <p>Filters</p>
        <Badge href="/personal-finance" className="filter" pill>
          Personal Finance
        </Badge>
        <Badge href="/budgeting" className="filter" pill>
          Budgeting
        </Badge>
        <Badge href="/investing" className="filter" pill>
          Investing
        </Badge>
        <Badge href="/credit-cards" className="filter" pill>
          Credit Cards
        </Badge>
        <Badge href="/books" className="filter" pill>
          Books
        </Badge>
      </div>
      <div className="recentPostsContainer"></div>
    </div>
  );
};

export default Blog;
