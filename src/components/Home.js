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
            <Badge href="/personal-finance" className="tag" pill>
              Personal Finance
            </Badge>{" "}
            <br />
            <Badge href="/budgeting" className="tag" pill>
              Budgeting
            </Badge>
            <Badge href="/investing" className="tag" pill>
              Investing
            </Badge>{" "}
            <br />
            <Badge href="/credit-cards" className="tag" pill>
              Credit Cards
            </Badge>{" "}
            <Badge href="/books" className="tag" pill>
              Books
            </Badge>
          </div>
        </div>
      </div>
      <div id="recentPostsContainer">
        <h3>Recent Posts</h3>
        <div className="recentPostCards">
          <h4 className="cardArticleTitle">How To Start Investing</h4>
          <p className="cardArticleExcerpt">
            Achieving a healthier financial standing doesn't start with sporadic
            spending and ignoring each item on your statement as you pay it
            month to month. By building and following…
          </p>
          <p className="cardReadMore">Read More</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
