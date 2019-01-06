import React from "react";
import Layout from "../components/Layout";

const IndexPage = ({ location }) => {
  const { pathname: pathName } = location;
  return <Layout pathName={pathName} />;
};

export default IndexPage;
