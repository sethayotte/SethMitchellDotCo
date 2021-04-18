const markdownJson = require("markdown-json");

const settings = {
  name: "markdown-json",
  cwd: "./",
  src: "posts",
  filePattern: "**/*.md",
  ignore: "*(icon|input)*",
  dist: "src/allPosts.json",
  metadata: true,
  server: false,
  port: 3001,
};

markdownJson(settings)
  .then((data) => {
    console.log("data:", data);
  })
  .catch((err) => {
    console.log("error:", err);
  });
