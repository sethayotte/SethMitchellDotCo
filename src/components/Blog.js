import React, { useEffect } from "react";
import allPosts from "../allPosts.json";
import Markdown from "react-markdown";
import { Badge } from "shards-react";

import { BlogPost } from "./BlogMap";

const Blog = () => {
  useEffect(() => {
    console.log(allPosts.data);
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
      <div className="recentPostsContainer">
        <BlogPost />
      </div>
    </div>
  );
};

export default Blog;
