import React, { useEffect } from "react";
import { Badge } from "shards-react";
import { HomePostCard } from "./HomePostMap";

const Home = () => {
  useEffect(() => {
    fetch(
      "https://api.github.com/repos/sethayotte/SethMitchellDotCo/contents/posts/src/building-your-first-budget.md"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

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
        <h3 id="recentPostsHeading">Recent Posts</h3>

        <HomePostCard />
      </div>
    </div>
  );
};

export default Home;
