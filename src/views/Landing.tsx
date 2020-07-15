import React from "react";
import {Container, Typography} from "@material-ui/core";
import Lottie from 'react-lottie';
import {animationData} from '../lottie/iconsx-digital-marketing/data';

export const Landing: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
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
            <Lottie options={defaultOptions}/>
            <h1>open<span>-</span>data<span>.</span>cl</h1>
            <Typography variant="subtitle1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur, tellus a convallis aliquam, tellus felis porttitor quam, eu laoreet velit nibh eu orci. Praesent efficitur ipsum efficitur metus varius malesuada. Mauris tristique vitae ligula vitae sodales. Proin aliquet molestie lacus nec eleifend. Nulla mauris urna, mattis id aliquet vel, bibendum id eros. Morbi consectetur justo eu felis vestibulum, quis dapibus leo luctus. Maecenas ut quam quam. Donec nunc nulla, auctor et nisi vitae, molestie rhoncus est. Curabitur volutpat dolor a iaculis blandit. Etiam in ligula enim. Nam enim magna, ultrices in sodales in, auctor nec arcu. Vivamus sit amet erat varius, porta urna ut, viverra urna. Praesent dapibus eleifend justo, vitae elementum ex imperdiet sit amet. </Typography>

          </Container>
        </div>
      </div>
    </main>
  )
}
