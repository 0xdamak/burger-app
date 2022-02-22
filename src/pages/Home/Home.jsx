import React from "react";
import BurgerAnimated from "../../components/BurgerAnimated/BurgerAnimated";

import Classes from "./Home.module.css";

function Home() {
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
            <button>View Live App</button>
            <button>View Repo</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
