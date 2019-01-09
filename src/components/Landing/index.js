import React from "react";
import { MooseAtWork } from "./image-constants";

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      webDisplayIndex: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setWebIndex(), 3000);
  }

  componentWillMount() {
    clearInterval(this.interval);
  }

  setWebIndex = () => {
    if (this.state.webDisplayIndex >= 2) {
      this.setState({ webDisplayIndex: 0 });
    } else {
      this.setState(prevState => ({
        webDisplayIndex: prevState.webDisplayIndex + 1
      }));
    }
  };

  render() {
    return (
      <div className="landing-page">
        <div className="landing-page__content">
          <div className="landing-page__content__thinking-bubble">
            <div className="landing-page__content__thinking-bubble__text">
              {this.state.webDisplayIndex === 0 && (
                <div className="animated fadeIn">HTML</div>
              )}
              {this.state.webDisplayIndex === 1 && (
                <div className="animated fadeIn">CSS</div>
              )}
              {this.state.webDisplayIndex === 2 && (
                <div className="animated fadeIn">Javascript</div>
              )}
            </div>
          </div>
          <img
            src={MooseAtWork}
            className="landing-page__content__working-image"
            alt="musango wope portfolio"
          />
        </div>
      </div>
    );
  }
}

