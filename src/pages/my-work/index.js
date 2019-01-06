import React from "react";
import Layout from "../../components/Layout";
import { Construction} from "../image-constants";

const MyWork = props => (
  <Layout>
    <div className="my-work">
      <div className="my-work__content">
        <div className="my-work__content__title">
          This page is currently under construction
        </div>
        <div className="my-work__content__image">
          <img src={Construction} alt="musango-wope" />
        </div>
      </div>
    </div>
  </Layout>
);

MyWork.propTypes = {};

export default MyWork;
