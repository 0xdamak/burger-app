import React from "react";
import { useNavigate } from "react-router-dom";
import BurgerAnimated from "../../components/BurgerAnimated/BurgerAnimated";

import Classes from "./LandingPage.module.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={Classes.Home}>
      <div className={Classes.Container}>
        <BurgerAnimated />
        <div className={Classes.TextContainer}>
          <div className={Classes.Title}>
            Burger Builder
            <br />
            <span>React App</span>
          </div>

          <div className={Classes.Text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit non
            aliquid quidem minus deserunt et, qui laboriosam modi! Mollitia
            asperiores placeat numquam qui error animi doloribus neque,
            molestias exercitationem quis.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit non
            aliquid quidem minus deserunt et, qui laboriosam modi! Mollitia
            asperiores placeat numquam qui error animi doloribus neque,
            molestias exercitationem quis.
          </div>
          <div className={Classes.Buttons}>
            <button onClick={() => navigate("app")}>View Live App</button>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open("http://google.com", "_blank");
              }}
            >
              View Repo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
