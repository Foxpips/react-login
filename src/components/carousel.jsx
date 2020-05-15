import React, { Component } from "react";
import Slider from "react-slick";
import * as s from "./carousel.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { setDimensions } from "../reducers/login.reducer";
import { connect } from "react-redux";

export class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { Test: "Test" };
  }

  handleResize = () => {
    setTimeout(() => {
      this.props.setDimensions({
        height: window.innerHeight,
        pageHeight: document.body.clientHeight,
        pageWidth: document.body.clientWidth,
        width: window.innerWidth,
      });
    }, 500);
  };

  componentDidMount() {
    window.addEventListener("resize", () => {
      window.requestAnimationFrame(this.handleResize);
    });
  }

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      initialSlide: 2,
      centerPadding: "80px",
    };
    if (this.props.width > 900) {
      this.slider.slickGoTo(0);
      console.log("DESKTOP ACTIVATED");
      settings = {
        dots: true,
        infinite: true,
        centerMode: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
      };
    }
    console.log(this.props.width);

    const children = [
      { name: "product" },
      { name: "product" },
      { name: "product" },
      { name: "product" },
      { name: "product" },
      { name: "product" },
      { name: "product" },
      { name: "product" },
    ];
    return (
      <div>
        <h2> Single Item</h2>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          {children.map((kid, index) => (
            <s.Product key={index}>
              <h3>{`${kid.name} ${++index}`}</h3>
            </s.Product>
          ))}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    something: "something",
    width: state.login.dimensions ? state.login.dimensions.width : 1,
  };
};

export default connect(mapStateToProps, { setDimensions })(SimpleSlider);
