import React from "react";

import BG44x25_SI from "../images/handBooks/BG44x25-SI.jpg";
import BG44x50_SI from "../images/handBooks/BG44x50-SI.jpg";
import Card from "../components/Card/Card";

function HandBooks() {
  return (
    <main className="main-container">
      <section className="main-container--menu">
        <Card
          name="VideoJet 1520"
          image={BG44x25_SI}
          link="https://drive.google.com/file/d/1FpbM8UCEdjO9dBscg7trbQsJB14b_ro3/view?usp=sharing"
        />
        <Card name="Manual_BG44x50-SI" image={BG44x50_SI} route="" />
      </section>
    </main>
  );
}

export default HandBooks;
