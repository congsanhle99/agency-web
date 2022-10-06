import React from "react";
import Layout from "../../components/Layout";
import ClientList from "./ClientList";
import Intro from "./Intro";
import Number from "./Number";

function Clients() {
  return (
    <Layout>
      <Intro />
      <ClientList />
      <Number />
    </Layout>
  );
}

export default Clients;
