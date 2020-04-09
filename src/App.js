import React, { useState, useEffect } from "react";
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
  MDBRow,
  MDBNavbarToggler,
} from "mdbreact";

const App = () => {
  const routes = ["Home", "About", "Products", "Contact"];
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const RenderContinents = (props) => {
    const [continents, setContinents] = useState(1);

    useEffect(() => {
      getContinents();
    }, []);

    const doSetTimeout = (i) => {
      setTimeout(function () {
        setContinents(i);
        console.log(i);
      }, i * 300);
    };

    const getContinents = () => {
      for (var counter = 1; counter < 6; counter++) {
        doSetTimeout(counter);
      }
    };

    return <h2 className="counter-text">{continents}</h2>;
  };

  const RenderWeps = () => {
    const [weps, setWeps] = useState(1);

    useEffect(() => {
      getWeps();
    }, []);

    const doTimeout = (i) => {
      setTimeout(() => {
        setWeps(i);
      }, i * 20);
    };

    const getWeps = () => {
      for (var i = 1; i < 86; i++) {
        doTimeout(i);
      }
    };

    return <h2 className="counter-text">{weps}+</h2>;
  };

  const RenderTonsShipped = () => {
    const [tonsShipped, setTonsShipped] = useState(1);

    useEffect(() => {
      getTonsShipped();
    }, []);

    const doTimeout = (i) => {
      setTimeout(() => {
        setTonsShipped(i);
      }, i * 2);
    };

    const getTonsShipped = () => {
      for (let counter = 1; counter < 1001; counter++) {
        doTimeout(counter);
      }
    };

    return <h2 className="counter-text">{tonsShipped}+</h2>;
  };

  const RenderTradedCommodities = () => {
    const [tradedCommodities, setTradedCommodities] = useState(1);

    useEffect(() => {
      getTradedCommodities();
    }, []);

    const doTimeout = (i) => {
      setTimeout(() => {
        setTradedCommodities(i);
      }, i * 200);
    };

    const getTradedCommodities = () => {
      for (let counter = 1; counter < 9; counter++) {
        doTimeout(counter);
      }
    };

    return <h2 className="counter-text">{tradedCommodities}+</h2>;
  };

  const RenderEngagedFarmers = () => {
    const [engagedFarmers, setEngagedFarmers] = useState(1);

    useEffect(() => {
      getEngagedFarmers();
    }, []);

    const doTimeout = (i) => {
      setTimeout(() => {
        setEngagedFarmers(i);
      }, i * 1);
    };

    const getEngagedFarmers = () => {
      for (let counter = 1; counter < 2301; counter++) {
        doTimeout(counter);
      }
    };

    return <h2 className="counter-text">{engagedFarmers}+</h2>;
  };

  return (
    <div>
      <header style={{ height: "100vh" }}>
        <MDBView src={cover} className="img-fluid bg">
          <Router>
            <MDBNavbar dark expand="lg" className="z-depth-0">
              <MDBContainer>
                <MDBNavbarBrand href="/">
                  <strong className="text-shadow-1">SOURCING & PRODUCE</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={handleClick} />
                <MDBCollapse isOpen={isOpen} navbar>
                  <MDBNavbarNav right>
                    {routes.map((route) => (
                      <MDBNavItem>
                        <MDBNavLink
                          onClick={handleClick}
                          to={"#" + route}
                          target="_parent"
                          active
                        >
                          <span className="nav-link white-text">{route}</span>
                        </MDBNavLink>
                      </MDBNavItem>
                    ))}
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>

            <MDBMask overlay="black-strong" className="white-text">
              <div className="container text-left my-5">
                <div
                  className="col-md-9 flex-center align-items-start flex-column"
                  style={{ paddingTop: "100px" }}
                >
                  <h2 className="header-font">
                    DELIVERING AFRICAN AGRICULTURAL COMMODITIES TO THE WORLD
                  </h2>
                  <br />
                  <div className="button" role="button">
                    <span>
                      <a href="#About" target="_parent" className="text-white">
                        ABOUT US
                      </a>
                    </span>
                  </div>
                </div>

                <div className="padding-top justify-stuff-bottom">
                  <MDBRow>
                    <div className="col-2 px-5">
                      <RenderContinents />
                      <p className="quality-text">Continents</p>
                    </div>
                    <div className="col-2 px-5">
                      <RenderWeps />
                      <p className="quality-text">
                        Women Employed Per Shipment
                      </p>
                    </div>
                    <div className="col-2 px-5">
                      <RenderTonsShipped />
                      <p className="quality-text">Tonnage Shipped</p>
                    </div>
                    <div className="col-2 px-5 text-center">
                      <RenderTradedCommodities />
                      <div className="quality-text">Traded Commodities</div>
                    </div>
                    <div className="col-2 px-5">
                      <RenderEngagedFarmers />
                      <p className="quality-text">Engaged Farmers</p>
                    </div>
                  </MDBRow>
                </div>
              </div>
            </MDBMask>
          </Router>
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
      {/* <div
        data-spy="scroll"
        data-target="#Team"
        className="scrollspy-example"
        data-offset="0"
      >
        <Team id="Team" />
      </div> */}
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
