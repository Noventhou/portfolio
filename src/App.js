import './App.css';
import {Navbar, Container, Row, Col, Image, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CarouselPicture from "./assets/background-strasbourg.JPG";
import ProfilePicture from "./assets/profile-picture.JPG";
import CSharpBlack from "./assets/c-sharp-logo-noir.png"
import NodeJSBlack from "./assets/node-js-noir.jpg";
import ReactJSBlack from "./assets/react-native-noir.jpg";
import MongoDB from "./assets/mongodb.png";
import Calendar from "./assets/calendar.png";
import Phone from "./assets/phone.png";
import Mail from "./assets/mail.png";
import Work from "./assets/work-icon.png";
import Education from "./assets/education.png";
import Profile from "./assets/profile-icon.png";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark" fixed="top" >
          <Navbar.Brand href="/">
            Noven Thou
          </Navbar.Brand>
          {/* <NavLink to="/home" className="link">Home</NavLink>
          <NavLink to="/about-me" className="link"><a href="#about">About Me</a></NavLink>
          <NavLink to="/profesional-experiences" className="link">Profesional Experiences</NavLink>
          <NavLink to="/education" className="link">Education</NavLink> */}
          <a className="link" href="#about">Home</a>
          <a className="link" href="#about">About Me</a>
          <a className="link" href="#profesional-experiences">Profesional Experiences</a>
          <a className="link" href="#education">Education</a>
          <a className="link" href="#education">My Projects</a>
        </Navbar>
        <header className="App-header">
        </header>
          <Switch>
            <Route exact path="/about-me">
              {/* <About/> */}
            </Route>
          </Switch>
      </Router>
      <Container>
        <br></br>
        <Row>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselPicture}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="carousel-title">Project 1</h3>
              <p className="carousel-title">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselPicture}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="carousel-title">Project 2</h3>
              <p className="carousel-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselPicture}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="carousel-title">Project 3</h3>
              <p className="carousel-title">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </Row>
        <Row className="space"><Col><Image className="icon-title" src={Profile} /><h2 className="app-title" id="about">About Me</h2></Col></Row>
        <Row>
          <Col>
            <Image src={ProfilePicture} width={200} roundedCircle />
          </Col>
          <Col>
            <Row>
              <p className="app-text">Je m'appelle Noven et j'ai 24 ans. Je suis développeur Web pour la société Alten.</p>
              <h4 class="app-title">Skills</h4>
            </Row>
            <Row>
              <Image className="app-img" src={CSharpBlack} />
              <Image className="app-img" src={NodeJSBlack} />
              <Image className="app-img" src={ReactJSBlack} />
              <Image className="app-img" src={MongoDB} />
            </Row>
          </Col>
          <Col>
            <Row><Image className="icon" src={Calendar} width={25} height={25}/><p>Date de naissance : 18/10/1996</p></Row>
            <Row><Image className="icon" src={Phone} width={25} height={25}/><p>Téléphone : +33 7 82 45 80 43</p></Row>
            <Row><Image className="icon" src={Mail} width={25} height={25}/><p>Email : thou.noven@gmail.com</p></Row>
          </Col>
        </Row>
        <Row className="space"><Col><Image className="icon-title" src={Work} /><h2 className="app-title" id="profesional-experiences">Profesional Experiences</h2></Col></Row>
        <Row>
          <Timeline lineColor={'#000000'}>
            <TimelineItem
              key="001"
              dateText="11/2019 – Present"
              bodyContainerStyle={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              }}
              style={{ color: '#e86971' }}
            >
              <h4 className="app-title">Alten - Strasbourg, France</h4>
              <h5 className="subtitle">Ingénieur d'études et développement</h5>
              <br></br>
              <p>Développement de nouvelles fonctionnalités pour le tunnel d’abonnement des sites Presse. Gestion des spécifications fonctionnelles, des tests unitaires et d’intégration et mise en production dans les environnements de test, recette et production</p>
              <br></br>
              <ul>
                <li>
                  <b>Subscribe With Google</b>
                  <ul>
                    <li>Gestion des abonnements et permissions utilisateurs</li>
                    <li>Mise en place d’une connexion et synchronisation avec les API Google</li>
                    <li>Gestion des données avec les « connexion avec Google »</li>
                    <li>Création d'un type de paiement Google</li>
                  </ul>
                </li>
                <br></br>
                <li>
                  <b>Gamify</b>
                  <ul>
                    <li>Ajout de la notion d’option pour une offre commerciale</li>
                    <li>Gestion des abonnements</li>
                    <li>Gestion des paiements avec multiples produits</li>
                    <li>Activation/désactivation de l’option via l’espace client</li>
                    <li>Gestion des permissions utilisateurs</li>
                  </ul>
                </li>
                <br></br>
                <li>
                  <b><a class="link-a" href="https://www.jde.fr/">Journal des enfants</a></b>
                  <ul>
                    <li>Mise en place d’un nouveau site</li>
                    <li>Migration de données</li>
                    <li>Refonte du tunnel d’abonnement</li>
                    <li>Mise en place des prix dégressifs pour les offres avec une notion de variante</li>
                    <li>Gestion de la quantité pour les offres multi exemplaires</li>
                  </ul>
                </li>
              </ul>
            </TimelineItem>
            <TimelineItem
              key="002"
              dateText="03/2019 – 09/2019"
              bodyContainerStyle={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              }}
              style={{ color: '#e86971' }}
            >
              <h4 className="app-title">IQair - Beijing, Chine</h4>
              <h5 className="subtitle">Ingénieur logiciel, Stage de fin d'études</h5>
              <br></br>
              <p>Stagiaire au sein de l’équipe AirVisual. L'entreprise conçoit des purificateurs d'air et crée un service pour partager la qualité de l'air dans un lieu. Il aide les gens à organiser la journée en regardant l'application AirVisual.</p>
              <br></br>
              <ul>
                <li>
                  <b>Création de scrapers</b>
                  <ul>
                    <li>Gestion d’une masse de données</li>
                    <li>Récupération de données de pollution de l’air dans le monde</li>
                    <li>Mise en place des coordonnées géographiques des stations</li>
                    <li>Gestion les doublons et la pertinence des mesures</li>
                  </ul>
                </li>
              </ul>
            </TimelineItem>
            <TimelineItem
              key="003"
              dateText="09/2017 – 02/2018"
              bodyContainerStyle={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              }}
              style={{ color: '#e86971' }}
            >
              <h4 className="app-title">Institute of Remote Sensing and Digital Earth of China - Beijing, Chine</h4>
              <h5 className="subtitle">Ingénieur Logiciel, Stage 4e année</h5>
              <br></br>
              <p>Stagiaire au sein d'une équipe de recherche. Mise en place d'un nouveau logiciel de cartographie similaire à ArcGIS</p>
              <br></br>
              <ul>
                <li>
                  <b>Création de scrapers</b>
                  <ul>
                    <li>Gestion d’une masse de données</li>
                    <li>Récupération de données de pollution de l’air dans le monde</li>
                    <li>Mise en place des coordonnées géographiques des stations</li>
                    <li>Gestion les doublons et la pertinence des mesures</li>
                  </ul>
                </li>
              </ul>
            </TimelineItem>
          </Timeline>
        </Row>
        <Row className="space"><Col><Image className="icon-title" src={Education} /><h2 className="app-title" id="education">Education</h2></Col></Row>
        <Row>
          <Timeline lineColor={'#000000'}>
            <TimelineItem
              key="004"
              dateText="09/2014 – 07/2019"
              dateInnerStyle={{ background: '#2980b9', color: 'white' }}
              bodyContainerStyle={{
                background: '#ddd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              }}
              style={{ color: '#2980b9'}}
            >
              <h4 className="app-title">Master en Ingénierie informatique, option Data Sciences</h4>
              <h5 className="subtitle">Cesi Ecole d’ingénieurs informatique - Strasbourg, France</h5>
            </TimelineItem>
            <TimelineItem
              key="005"
              dateText="Juin 2014"
              dateInnerStyle={{ background: '#2980b9', color: 'white' }}
              bodyContainerStyle={{
                background: '#ddd',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
              }}
              style={{ color: '#2980b9'}}
            >
              <h4 className="app-title">Baccalauréat Scientifique Option Sciences de l’ingénieur/Anglais (Section européenne)</h4>
              <h5 className="subtitle">Lycée Notre-Dame - Strasbourg, France</h5>
            </TimelineItem>
          </Timeline>
        </Row>
      </Container>    
    </div>
  );
}

export default App;
