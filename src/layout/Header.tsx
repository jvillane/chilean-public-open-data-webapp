import React, {useState} from 'react';

import clsx from 'clsx';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Button, Card, Collapse, Container, Grid, List, ListItem} from '@material-ui/core';

import projectLogo from '../assets/images/react.svg';
import {NavLink} from 'react-router-dom';

import hero8 from '../assets/images/hero-bg/hero-8.jpg';
import illustration1 from '../assets/images/illustrations/pack2/graduation.svg';

export const Header: React.FC = () => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <header className="hero-wrapper bg-composed-wrapper bg-night-sky">
      <div className="header-top-section pb-2">
        <Container>
          <div
            className="bg-white-5 p-2 header-nav-wrapper header-nav-wrapper-xl rounded-bottom px-4 navbar-dark">
            <div className="app-nav-logo">
              <NavLink
                to="/"
                title="Open Data Chile"
                className="app-nav-logo app-nav-logo--light">
                <div className="app-nav-logo--icon shadow-second-sm bg-secondary border-0">
                  <img
                    alt="Open Data Chile"
                    src={projectLogo}
                  />
                </div>
                <div className="app-nav-logo--text">
                  <span>open-data</span>
                  <b>CHILE</b>
                </div>
              </NavLink>
            </div>
            <div className="header-nav-menu d-none d-lg-block">
              <ul className="d-flex nav nav-neutral-first justify-content-center">
                <li className="justify-content-center">
                  <NavLink
                    to="/proyectos"
                    onClick={() => {
                    }}
                    className="font-weight-bold rounded-sm px-3">
                    Proyectos
                    <span className="opacity-5 dropdown-arrow">
                    <FontAwesomeIcon icon={['fas', 'angle-down']}/>
                  </span>
                  </NavLink>
                  <div className="submenu-dropdown submenu-dropdown--md">
                    <div className="shadow-lg w-100 bg-deep-sky p-4 rounded">
                      <List component="div" className="nav-pills nav-transparent nav-pills-rounded flex-column">
                        <ListItem
                          button
                          className="px-4 text-white d-flex align-items-center">
                          <span>Política</span>
                          <FontAwesomeIcon
                            icon={['fas', 'angle-right']}
                            className="opacity-6 ml-auto"
                          />
                        </ListItem>
                      </List>
                    </div>
                  </div>
                </li>
                <li className="justify-content-center">
                  <NavLink
                    to="/recursos"
                    className="font-weight-bold rounded-sm px-3">
                    Recursos
                  </NavLink>
                </li>
                <li className="justify-content-center">
                  <NavLink
                    to="/nosotros"
                    className="font-weight-bold rounded-sm px-3">
                    Nosotros
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
              <span className="d-block d-lg-none">
              <button
                onClick={toggle}
                className={clsx('navbar-toggler hamburger hamburger--elastic', {
                  'is-active': collapse
                })}>
                <span className="hamburger-box">
                  <span className="hamburger-inner"/>
                </span>
              </button>
            </span>
            </div>
            <div className="d-flex d-lg-none">
              <Collapse
                in={collapse}
                className="nav-collapsed-wrapper navbar-collapse">
                <div className="nav-inner-wrapper">
                  <Button
                    onClick={toggle}
                    className="btn-danger btn-icon d-40 shadow-sm hover-scale-lg btn-animated-icon-sm nav-toggle-inner-btn p-0">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'times']}/>
                  </span>
                  </Button>

                  <div className="p-3">
                    <div className="px-4 text-uppercase py-2 text-second font-weight-bold font-size-sm">
                      Menú
                    </div>
                    <List component="div" className="nav-pills nav-neutral-primary nav-pills-rounded flex-column">
                      <ListItem
                        button
                        component={NavLink}
                        to="/proyectos"
                        className="px-4 d-flex align-items-center">
                        <span>Proyectos</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        button
                        component={NavLink}
                        to="/recursos"
                        className="px-4 d-flex align-items-center">
                        <span>Recursos</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        button
                        component={NavLink}
                        to="/nosotros"
                        className="px-4 d-flex align-items-center">
                        <span>Nosotros</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                    </List>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
        </Container>
        <div className={clsx('collapse-page-trigger', {'is-active': collapse})}
             onClick={toggle}/>
      </div>
      <div className="hero-wrapper--content">
        <div
          className="bg-composed-wrapper--image bg-composed-filter-rm"
          style={{backgroundImage: 'url(' + hero8 + ')'}}
        />
        <div className="bg-composed-wrapper--bg bg-second opacity-5"/>
        <div className="bg-composed-wrapper--content">
          <Container className="z-over shadow-container-content-5">
            <Grid container spacing={6} className="py-5">
              <Grid item lg={6}>
                <div className="pt-3 text-white pt-xl-5 pr-0 pr-xl-5">
                  <h2 className="display-3 font-weight-bold">
                    Open Data Chile
                  </h2>
                  <p className="font-size-xl py-3 text-white-50">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae fugit itaque numquam odio officiis!
                    Animi delectus doloribus ea eos est eveniet fugiat id nobis, perferendis quae quibusdam tempore
                    temporibus veniam.
                  </p>
                  <div className="pt-3">
                    <Button
                      component={NavLink}
                      to="/recursos"
                      size="large"
                      className="rounded-sm font-weight-bold shadow-second-sm btn-first">
                        <span className="btn-wrapper--label">
                          Fuentes de Información
                        </span>
                      <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'arrow-right']}/>
                        </span>
                    </Button>
                    <Button
                      component={NavLink}
                      to="/nosotros"
                      size="large"
                      className="rounded-sm bg-white-10 text-white ml-3">
                      <span>Conócenos</span>
                    </Button>
                  </div>
                </div>
              </Grid>
              <Grid item lg={6} className="d-flex align-items-center">
                <img
                  src={illustration1}
                  alt="..."
                  className="m-5 m-lg-0 img-fit-container"
                />
              </Grid>
            </Grid>
            <Grid container spacing={6}>
              <Grid item lg={4}>
                <Card className="shadow-xxl card-box-hover-rise mb-5">
                  <div className="d-flex align-items-center p-4">
                    <div
                      className="d-50 text-white d-flex align-items-center justify-content-center rounded-pill bg-warning shadow-xxl mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'suitcase']}
                        className="font-size-xxl"
                      />
                    </div>
                    <div>
                      <div className="font-weight-bold text-black">
                        Política
                      </div>
                      <div className="text-dark opacity-7">
                        y Territorio
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ea et illo in laborum
                      odio porro quibusdam repellendus rerum! Debitis mollitia quasi veniam? Distinctio, eligendi
                      excepturi fugiat numquam placeat vel?</p>
                    <Button
                      component={NavLink}
                      to="/inicio"
                      size="large"
                      className="rounded-sm font-weight-bold shadow-second-sm btn-first">
                        <span className="btn-wrapper--label">
                          Visitar
                        </span>
                      <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'arrow-right']}/>
                        </span>
                    </Button>
                  </div>
                </Card>
              </Grid>
              <Grid item lg={4}>
                <Card className="shadow-xxl card-box-hover-rise mb-5">
                  <div className="d-flex align-items-center p-4">
                    <div
                      className="d-50 text-white d-flex align-items-center justify-content-center rounded-pill bg-warning shadow-xxl mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'suitcase']}
                        className="font-size-xxl"
                      />
                    </div>
                    <div>
                      <div className="font-weight-bold text-black">
                        Que no se te olvide
                      </div>
                      <div className="text-dark opacity-7">
                        lo que votaron, dijeron...
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ea et illo in laborum
                      odio porro quibusdam repellendus rerum! Debitis mollitia quasi veniam? Distinctio, eligendi
                      excepturi fugiat numquam placeat vel?</p>
                    <Button
                      component={NavLink}
                      to="/inicio"
                      size="large"
                      className="rounded-sm font-weight-bold shadow-second-sm btn-first">
                        <span className="btn-wrapper--label">
                          Visitar
                        </span>
                      <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'arrow-right']}/>
                        </span>
                    </Button>
                  </div>
                </Card>
              </Grid>
              <Grid item lg={4}>
                <Card className="shadow-xxl card-box-hover-rise mb-5">
                  <div className="d-flex align-items-center p-4">
                    <div
                      className="d-50 text-white d-flex align-items-center justify-content-center rounded-pill bg-warning shadow-xxl mr-3">
                      <FontAwesomeIcon
                        icon={['fas', 'suitcase']}
                        className="font-size-xxl"
                      />
                    </div>
                    <div>
                      <div className="font-weight-bold text-black">
                        Saquemos cuentas
                      </div>
                      <div className="text-dark opacity-7">
                        del gasto público
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ea et illo in laborum
                      odio porro quibusdam repellendus rerum! Debitis mollitia quasi veniam? Distinctio, eligendi
                      excepturi fugiat numquam placeat vel?</p>
                    <Button
                      component={NavLink}
                      to="/inicio"
                      size="large"
                      className="rounded-sm font-weight-bold shadow-second-sm btn-first">
                        <span className="btn-wrapper--label">
                          Visitar
                        </span>
                      <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'arrow-right']}/>
                        </span>
                    </Button>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Container>
          <div className="shadow-container-blocks-5 z-below">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="var(--white)"
                fillOpacity="1"
                d="M0,288L15,266.7C30,245,60,203,90,202.7C120,203,150,245,180,240C210,235,240,181,270,170.7C300,160,330,192,360,176C390,160,420,96,450,96C480,96,510,160,540,186.7C570,213,600,203,630,186.7C660,171,690,149,720,165.3C750,181,780,235,810,218.7C840,203,870,117,900,69.3C930,21,960,11,990,10.7C1020,11,1050,21,1080,42.7C1110,64,1140,96,1170,96C1200,96,1230,64,1260,48C1290,32,1320,32,1350,69.3C1380,107,1410,181,1425,218.7L1440,256L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
