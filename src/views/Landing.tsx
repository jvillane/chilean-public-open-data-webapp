import React from "react";
import {Container, Typography} from "@material-ui/core";
import Lottie from "lottie-react-web";
import animation from "../lottie/digital-marketing.json";

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
            <Typography variant="h1">Título</Typography>
            <Lottie options={options}
                    height={400}
                    width={400}/>
          </Container>
        </div>
      </div>
    </main>
  )
}
