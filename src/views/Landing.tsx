import React from "react";
import {Button, Container, Grid, Tooltip} from "@material-ui/core";
import Lottie from "lottie-react-web";
import animation from "../lottie/digital-marketing.json";

import name from '../img/name.png';
import votacion from '../img/votacion.png';
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
      <div className="bg-composed-wrapper--bg"/>
      <div className="bg-composed-wrapper--content">
        <div className="social-networks mr-5">
          <Container>
            <Grid container direction="row" justify="flex-end" alignItems="center">
              <Tooltip arrow title="Facebook">
                <Button
                  className="m-2 d-30 p-0 btn-pill btn-icon btn-facebook"
                  href="https://www.facebook.com/Chile-Open-Data-106864307755244"
                  rel="noopener nofollow"
                  target="_blank">
                  <FontAwesomeIcon
                    icon={['fab', 'facebook']}
                    className="font-size-lg"
                  />
                </Button>
              </Tooltip>
              <Tooltip arrow title="Twitter">
                <Button
                  className="m-2 d-30 p-0 btn-pill btn-icon btn-twitter"
                  href="https://twitter.com/chileopendata"
                  rel="noopener nofollow"
                  target="_blank">
                  <FontAwesomeIcon
                    icon={['fab', 'twitter']}
                    className="font-size-lg"
                  />
                </Button>
              </Tooltip>
              <Tooltip arrow title="Instagram">
                <Button
                  className="m-2 d-30 p-0 btn-pill btn-icon btn-instagram"
                  href="https://www.instagram.com/chileopendata"
                  rel="noopener nofollow"
                  target="_blank">
                  <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    className="font-size-lg"
                  />
                </Button>
              </Tooltip>
              <Tooltip arrow title="Github">
                <Button
                  className="m-2 d-30 p-0 btn-pill btn-github border-github"
                  variant="outlined"
                  color="default"
                  href="https://github.com/jvillane"
                  rel="noopener nofollow"
                  target="_blank">
                  <FontAwesomeIcon
                    icon={['fab', 'github']}
                    className="font-size-lg"
                  />
                </Button>
              </Tooltip>
            </Grid>
          </Container>
        </div>
        <div className="title">
          <Container>
            <Grid container spacing={6} className="py-5">
              <Grid item md={6}>
                <Grid container direction="column" justify="center" alignItems="flex-start">
                  <img src={name} alt="..."/>
                  <p className="title-paragraph">
                    Disponemos <b>datos públicos chilenos</b> en un <b>formato fácil</b> de consumir y comprender con
                    el
                    fin de <b>aportar al conocimiento</b> colectivo
                  </p>
                </Grid>
              </Grid>
              <Grid item md={6} className="py-0">
                <Lottie options={options} width={400} height={400}/>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className="projects mb-5">
          <Container>
            <Grid container spacing={6} className="py-5">
              <Grid item md={6}>
                <Grid container direction="column" justify="center" alignItems="flex-start">
                  <h1>
                    legislativo.open-data.cl
                  </h1>
                  <p className="title-paragraph">
                    Información sobre los últimos proyectos votados en las cámaras de diputados y senadores, y quienes
                    votaron por ellos
                  </p>
                  <a href="http://legislativo.open-data.cl">
                    <Button className="btn-pill">Visitar legislativo&nbsp;&nbsp;<FontAwesomeIcon
                      icon={['fas', 'arrow-right']}/></Button>
                  </a>
                </Grid>
              </Grid>
              <Grid item md={6} className="py-0">
                <img src={votacion} alt="..."/>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className="terms py-5">
          <Container className="text-center">
            <h1>Términos y Condiciones</h1>
            <p>¿Quieres utilizar en tu proyecto la información que hacemos disponible en nuestro portal?
              Tenemos una serie de principios para definir los usos posibles</p>
            <Grid container direction="row" justify="center" alignItems="center" className="term-item">
              <div className="question font-weight-bolder mx-3">
                ¿Eres un privado con una idea sin fines de lucro?
              </div>
              <div className="answer mx-3">
                ¡Dale!
              </div>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center" className="term-item">
              <div className="question font-weight-bolder mx-3">
                ¿Quieres cobrar un servicio directo o indirecto usando nuestro trabajo?
              </div>
              <div className="answer mx-3">Conversemos antes</div>
            </Grid>
          </Container>
        </div>
        <div className="footer py-5">
          <Container>
            <Grid container direction="row" justify="center" alignItems="center" className="mt-3 mb-5">
              <Tooltip arrow title="Facebook">
                <Button
                  className="m-2 d-30 p-0 btn-pill btn-icon btn-facebook"
                  href="https://www.facebook.com/Chile-Open-Data-106864307755244"
                  rel="noopener nofollow"
                  target="_blank">
                  <FontAwesomeIcon
                    icon={['fab', 'facebook']}
                    className="font-size-lg"
                  />
                </Button>
              </Tooltip>
              <Tooltip arrow title="Twitter">
                <Button
                  className="m-2 d-30 p-0 btn-pill btn-icon btn-twitter"
                  href="https://twitter.com/chileopendata"
                  rel="noopener nofollow"
                  target="_blank">
                  <FontAwesomeIcon
                    icon={['fab', 'twitter']}
                    className="font-size-lg"
                  />
                </Button>
              </Tooltip>
              <Tooltip arrow title="Instagram">
                <Button
                  className="m-2 d-30 p-0 btn-pill btn-icon btn-instagram"
                  href="https://www.instagram.com/chileopendata"
                  rel="noopener nofollow"
                  target="_blank">
                  <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    className="font-size-lg"
                  />
                </Button>
              </Tooltip>
              <Tooltip arrow title="Github">
                <Button
                  className="m-2 d-30 p-0 btn-pill btn-github border-github"
                  variant="outlined"
                  color="default"
                  href="https://github.com/jvillane"
                  rel="noopener nofollow"
                  target="_blank">
                  <FontAwesomeIcon
                    icon={['fab', 'github']}
                    className="font-size-lg"
                  />
                </Button>
              </Tooltip>
            </Grid>
            <Grid container direction="row" justify="space-between" alignItems="center">
              <span>2020 open-data.cl - Todos los derechos reservados</span>
              <span><a href="mailto:contacto@open-data.cl">contacto@open-data.cl</a></span>
            </Grid>
          </Container>
        </div>
      </div>
    </main>
  )
}
