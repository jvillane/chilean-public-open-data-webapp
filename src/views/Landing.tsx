import React from "react";
import {Container} from "@material-ui/core";
import Lottie from "lottie-react-web";
import animation from "../lottie/digital-marketing.json";

import meet from '../img/meet1.png';

export const Landing: React.FC = () => {

  const options = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <main className="hero-wrapper--content">
      <div className="bg-composed-wrapper--bg bg-white opacity-5"/>
      <div className="bg-composed-wrapper--content">
        <div className="py-5">
          <Container>
            <div className="top">
              <div className="figure">
                <Lottie options={options}/>
              </div>
              <div className="text">
                <h1>open<span>-</span>data<span>.</span>cl</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur,
                  tellus a convallis aliquam, </p>
              </div>
            </div>
            <div className="bottom">
              <div className="campain"></div>
              <div className="cta">

              </div>
            </div>

            <img alt="meet" src={meet} style={{width: "300px"}}/>

            <div className="text-center d-block text-black-50 pb-4 footer">
              <a href="http://www.open-data.cl">Open-Data Chile</a> © 2020 Creative Labs - Powered by <a href="https://aws.amazon.com/">AWS</a>
            </div>
          </Container>
        </div>
      </div>

    </main>
  )
}
