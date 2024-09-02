import React, { Component } from "react";
import IntroWrapper from "./Intro.style";
import Button from "../UI/Button";
import IntroHexas from "../../assets/svg/intro_hexas.svg";
import NikeImage from "../../assets/svg/nikeHyperAce2.png";

class Intro extends Component {
  handleMouseMove = (event) => {
    const { clientX: x, clientY: y } = event;
    const { innerWidth: width, innerHeight: height } = window;

    // Fare hareketine göre dönüşü hesaplayın
    const rotateX = (y / height - 0.5) * 30; // Y ekseninde dönüşüm
    const rotateY = (x / width - 0.5) * 30; // X ekseninde dönüşüm

    this.introImageContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  }

  render() {
    return (
      <IntroWrapper id={"home"}>
        <img
          className="intro__hexas"
          src={IntroHexas}
          alt="Decorative hexagon pattern"
        />
        <div className="intro__left">
          <h1>
            Nike,
            <br />
            Hyper Ace 2
          </h1>
          <p>Come run with us and celebrate empowerment</p>
          <Button href="#">Buy</Button>
        </div>

        <div className="intro__right">
          <div
            className="intro__image-container"
            ref={(ref) => (this.introImageContainer = ref)}
          >
            <img
              className="intro__image"
              src={NikeImage}
              alt="Nike Hyper Ace 2 shoe"
            />
          </div>
          <h1 className="intro__subtle-text">RUN AND SUCCESS</h1>
        </div>
      </IntroWrapper>
    );
  }
}

export default Intro;
