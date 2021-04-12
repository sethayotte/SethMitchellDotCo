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
    <div>
      <h1>Blog</h1>

      <div className="recentPostsContainer">
        <Card style={{ maxWidth: "300px" }}>
          <CardImg top src="https://place-hold.it/300x200" />
          <CardBody>
            {/* <CardTitle>{posts[0].postTitle}</CardTitle>
            <p>{posts[0].summary}</p> */}
            <Button>Read more &rarr;</Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
