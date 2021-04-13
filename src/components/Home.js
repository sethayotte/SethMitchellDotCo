import React from "react";
import { Badge } from "shards-react";

const Home = () => {
  return (
    <div id="landingPage">
      <div id="landingHeader">
        <div id="titleBlock">
          <h1 id="landingH1">Hello!</h1>
          <p id="calcDescription">
            Let's chat about personal
            <br />
            finance, credit cards, and
            <br />
            preparing for a finacially
            <br />
            secure future.
          </p>
        </div>
        <div id="landingTopicNavigation">
          <h3>Explore Posts by Topic</h3>
          <div id="tagCloud">
            <Badge href="/resources" className="tag" pill>
              Personal Finance
            </Badge>{" "}
            <br />
            <Badge href="/resources" className="tag" pill>
              Budgeting
            </Badge>
            <Badge href="/resources" className="tag" pill>
              Investing
            </Badge>{" "}
            <br />
            <Badge href="/resources" className="tag" pill>
              Credit Cards
            </Badge>{" "}
            <Badge href="/resources" className="tag" pill>
              Books
            </Badge>
          </div>
        </div>
      </div>
      <div id="recentPostsContainer">
        <h3>Recent Posts</h3>
      </div>
    </div>
  );
};

export default Home;
