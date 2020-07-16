import React from "react";
import {Container, List, ListItem, Typography} from "@material-ui/core";
import Lottie from "lottie-react-web";
import animation from "../lottie/digital-marketing.json";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
            <div className="figure">
              <Lottie options={options}/>
            </div>

            <h1>open<span>-</span>data<span>.</span>cl</h1>
            <Typography variant="subtitle1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur,
              tellus a convallis aliquam, tellus felis porttitor quam, eu laoreet velit nibh eu orci. Praesent efficitur
              ipsum efficitur metus varius malesuada. Mauris tristique vitae ligula vitae sodales. Proin aliquet
              molestie lacus nec eleifend. Nulla mauris urna, mattis id aliquet vel, bibendum id eros. Morbi consectetur
              justo eu felis vestibulum, quis dapibus leo luctus. Maecenas ut quam quam. Donec nunc nulla, auctor et
              nisi vitae, molestie rhoncus est. Curabitur volutpat dolor a iaculis blandit. Etiam in ligula enim. Nam
              enim magna, ultrices in sodales in, auctor nec arcu. Vivamus sit amet erat varius, porta urna ut, viverra
              urna. Praesent dapibus eleifend justo, vitae elementum ex imperdiet sit amet.
            </Typography>
            <div className="text-center">
              <div className="divider d-sm-none d-md-block rounded-circle bg-dark opacity-2 mx-auto mb-4 mt-5 w-25"/>
              <List
                component="div"
                className="nav-transparent-alt text-nowrap d-flex justify-content-center">
                <ListItem
                  button
                  className="text-facebook hover-scale-sm"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon
                    icon={['fab', 'facebook']}
                    className="font-size-lg"
                  />
                </ListItem>
                <ListItem
                  button
                  className="text-twitter hover-scale-sm"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon
                    icon={['fab', 'twitter']}
                    className="font-size-lg"
                  />
                </ListItem>
                <ListItem
                  button
                  className="text-google hover-scale-sm"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon
                    icon={['fab', 'google']}
                    className="font-size-lg"
                  />
                </ListItem>
                <ListItem
                  button
                  className="text-instagram hover-scale-sm"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    className="font-size-lg"
                  />
                </ListItem>
              </List>
              <div className="divider d-sm-none d-md-block rounded-circle bg-dark opacity-2 mx-auto my-4 w-25"/>
              <div className="text-center d-block text-black-50 pb-4">
                <a href="http://www.open-data.cl">Open-Data Chile</a> © 2020 Creative Labs - Powered by <a href="https://aws.amazon.com/">AWS</a>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </main>
  )
}
