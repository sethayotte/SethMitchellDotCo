import React from "react";
import allPosts from "../allPosts.json";

import { Badge } from "shards-react";

const Blog = () => {
  const fetchedPost = {};

  allPosts.data.forEach((post) => {
    fetchedPost.title = post.title;
    fetchedPost.author = post.author;
    fetchedPost.date = post.date;
    fetchedPost.category = post.category;
    fetchedPost.content = post.contents;
    console.log(fetchedPost);
  });
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
        {/* <div>
          <h6>{fetchedPost.category}</h6>
          <h4>{fetchedPost.title}</h4>
          <h6>
            by {fetchedPost.author}, on {fetchedPost.date}
          </h6>
        </div> */}
      </div>
    </div>
  );
};

export default Blog;
