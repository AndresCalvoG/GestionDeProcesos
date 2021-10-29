import React from "react";
import "./styles/documents.css";
import newOrder from "../images/newPage.png";
import search from "../images/search.png";
import Card from "../components/Card";
import Notifier from "../components/Notifier";

function Documents() {
  return (
    <main className="main-documents">
      <section className="main-documents--menu">
        <Card name="Nueva Orden" image={newOrder} route="/WorkOrder" />
        <Card name="Buscar" image={search} route="/Search" />
      </section>
      <section className="main-notify">
        <Notifier />
      </section>
    </main>
  );
}

export default Documents;
