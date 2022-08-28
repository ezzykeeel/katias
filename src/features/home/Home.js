import React, { useEffect } from "react";
import anime from "animejs";
import "./home.scss";

const Home = () => {
  useEffect(() => {
    anime.timeline({ loop: false }).add({
      targets: ".ml15 .word",
      scale: [14, 1],
      opacity: [0, 1],
      easing: "easeOutCirc",
      duration: 800,
      delay: (el, i) => 800 * i
    });
  });
  return (
    <div className="home-navigator">
      <div class="wrapper">
        <h1 class="ml15">
          <span class="word">Katia</span>
          <span class="word">Adame</span>
        </h1>
        <div class="mandala blur"></div>
      </div>
    </div>
  );
};

export default Home;
