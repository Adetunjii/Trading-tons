import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./about";
import Product from "./product";
import Contact from "./contact";
import Team from "./team";
import * as cover from "./assets/cover.jpg";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { AnimatedRoute } from "react-router-transition";
import {
  MDBView,
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBMask,
  MDBNavbarToggler,
} from "mdbreact";

const App = () => {
  const routes = ["Home", "About", "Products", "Team", "Contact"];
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header style={{ height: "100vh" }}>
        <MDBView src={cover}>
          <Router>
            <MDBNavbar dark expand="md" className="z-depth-0">
              <MDBContainer>
                <MDBNavbarBrand href="/">
                  <strong className="text-shadow-1">
                    Sourcing and produce Ltd.
                  </strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={handleClick} />
                <MDBCollapse isOpen={isOpen} navbar>
                  <MDBNavbarNav right>
                    {routes.map((route) => (
                      <MDBNavItem>
                        <MDBNavLink to={"#" + route} target="_parent" active>
                          <span className="nav-link white-text">{route}</span>
                        </MDBNavLink>
                      </MDBNavItem>
                    ))}
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
          </Router>
          <MDBMask overlay="black-strong" className="white-text">
            <div className="container text-left my-5">
              <div
                className="col-lg-9 flex-center align-items-start flex-column"
                style={{ paddingTop: "150px", paddingBottom: "150px" }}
              >
                <h2 className="header-font">
                  DELIVERING AFRICAN AGRICULTURAL COMMODITIES TO THE WORLD
                </h2>
                <br />
                <div className="button">ABOUT US</div>
              </div>
            </div>
          </MDBMask>
        </MDBView>
      </header>

      <div>
        <div
          data-spy="scroll"
          data-target="#About"
          className="scrollspy-example"
          data-offset="0"
        >
          <About id="About" />
        </div>
        <div
          data-spy="scroll"
          data-target="#Products"
          className="scrollspy-example"
          data-offset="0"
        >
          <Product id="Products" />
        </div>
      </div>
      <div
        data-spy="scroll"
        data-target="#Team"
        className="scrollspy-example"
        data-offset="0"
      >
        <Team id="Team" />
      </div>
      <div
        data-spy="scroll"
        data-target="#Contact"
        className="scrollspy-example"
        data-offset="0"
      >
        <Contact id="Contact" />
      </div>
    </div>
  );
};

export default App;
