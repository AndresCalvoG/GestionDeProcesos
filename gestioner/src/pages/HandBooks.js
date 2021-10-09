import React from "react";

import BG44x25_SI from "../images/handBooks/BG44x25-SI.jpg";
import pdf_BG44x25_SI from "../pdf/Manual_BG44x25-SI.pdf";
import BG44x50_SI from "../images/handBooks/BG44x50-SI.jpg";
import pdf_BG44x50_SI from "../pdf/Manual_BG44x50-SI.pdf";
import HandCard from "../components/HandCard";

function HandBooks() {
  return (
    <>
      <main className="main-container">
        <h1>Manuales</h1>
        <section className="main-container--menu">
          <HandCard
            name="Manual_BG44x25-SI"
            image={BG44x25_SI}
            route=""
            file={pdf_BG44x25_SI}
          />
          <HandCard
            name="Manual_BG44x50-SI"
            image={BG44x50_SI}
            route=""
            file={pdf_BG44x50_SI}
          />
        </section>
      </main>
    </>
  );
}

export default HandBooks;
