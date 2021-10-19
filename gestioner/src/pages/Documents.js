import React from "react";

import newOrder from "../images/newPage.png";
import search from "../images/search.png";
import HomeCard from "../components/HomeCard";

function Documents() {
  return (
    <>
      <main className="main-container">
        <section className="main-container--menu">
          <HomeCard name="Nueva Orden" image={newOrder} route="/WorkOrder" />
          <HomeCard name="Buscar" image={search} route="/Search" />
        </section>
      </main>
    </>
  );
}

export default Documents;
