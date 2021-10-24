import React from "react";

import newOrder from "../images/newPage.png";
import search from "../images/search.png";
import Card from "../components/Card";

function Documents() {
  return (
    <main className="main-container">
      <section className="main-container--menu">
        <Card name="Nueva Orden" image={newOrder} route="/WorkOrder" />
        <Card name="Buscar" image={search} route="/Search" />
      </section>
    </main>
  );
}

export default Documents;
