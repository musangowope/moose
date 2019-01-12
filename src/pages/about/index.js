import React from "react";
import Layout from "../../components/Layout";
import AboutMeImg from "../../img/about-me.jpg";

const About = () => (
  <Layout>
    <div className="about">
      <div className="about__header-img" style={{backgroundImage: `url(${AboutMeImg})`}}/>
      <div className="about__content">
        <div className="about__content__title">A Brief Intro</div>
        <br />
        <p>
          I am front end developer and aspiring UX/UI Designer that is currently
          looking for opportunities to collaborate with other partners and
          businesses to create cool innovative  web solutions.
        </p>

        <br />

        <div className="about__content__title">
          Learning Front End Development
        </div>
        <br />
        <p>
          I'm continuously growing my skills in front end development to build
          the best sites possible. I am on a journey learning new concepts one
          step at a time. Front End can be frustrating, it can be difficult, but
          delivering an the an amazing functional website that fulfills the
          needs of the user makes it all worth
        </p>
        <br />
        <p>
          I use the best technologies and techniques optimize the performance of
          websites. Utilising available tools and resources, I am able to reduce
          and streamline development time
        </p>
        <br />
        <div className="columns">
          <div className="column">
            <ul>
              <li>HTML5</li>
              <li>CSS(SCSS)</li>
              <li>Javascript</li>
              <li>Learning Git</li>
            </ul>
          </div>
          <div className="column">
            <ul>
              <li>VueJS</li>
              <li>Learning React</li>
              <li>Mobile UI Development (Quasar)</li>
              <li>Learning Git</li>
            </ul>
          </div>
        </div>

        <div className="about__content__title">UI/UX Focused Design:</div>
        <br />
        <p>
          Although I am not a seasoned designer by any means, I highly value
          good design in websites and mobile apps. In the process of building
          website I like to research resources that follow good design
          principles and use those plan out the look and feel of the website.
        </p>

        <br />

        <div className="columns">
          <div className="column">
            <ul>
              <li>Wireframing on paper</li>
              <li>Prototyping with Figma</li>
            </ul>
          </div>
          <div className="column">
            <ul>
              <li>Basic Vector and Pixel Art(GIMP)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

About.propTypes = {};

export default About;
