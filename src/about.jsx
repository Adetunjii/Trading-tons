import React, { useEffect, useState } from "react";
import { MDBContainer, MDBCard, MDBRow } from "mdbreact";
import "./about.css";
import * as quality from "./assets/quality.png";
import * as specialist from "./assets/download.png";
import * as pricing from "./assets/pricing.png";

const About = (props) => {
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
      <div className="padding-top container">
        <MDBRow className="flex-row justify-content-center">
          <div className="col-sm-2 text-center py-2 px-5">
            <RenderContinents />
            <p className="quality-text">Continents Shipped To</p>
          </div>
          <div className="col-sm-2 text-center px-5 py-2">
            <RenderWeps />
            <p className="quality-text">Women Employed Per Shipment</p>
          </div>
          <div className="col-sm-2 text-center px-5 py-2">
            <RenderTonsShipped />
            <p className="quality-text">Tonnage Shipped</p>
          </div>
          <div className="col-sm-2 text-center px-5 py-2">
            <RenderTradedCommodities />
            <div className="quality-text">Traded Commodities</div>
          </div>
          <div className="col-sm-2 text-center px-5 py-2">
            <RenderEngagedFarmers />
            <p className="quality-text">Engaged Farmers</p>
          </div>
        </MDBRow>
      </div>

      <MDBContainer id={props.id} className="bg-transparent margin-extreme">
        <div className="row py-5">
          <div className="col-md-4 text-left">
            <p className="green-text ">WHO WE ARE</p>
            <h2 className="about-header">ABOUT US</h2>
          </div>
          <div className="col-md-4 mb-0 text-left">
            <p className="about-text">
              We are young, driven and relationship orientated professionals who
              work tirelessly to promote global access to local farmers. Our
              global footprint and deep-rooted presence in Nigeria enables us to
              support our local supply network whilst delivering a world class
              service to
            </p>
          </div>
          <div className="col-md-4 text-left">
            <p className="about-text">
              international clients. Our daily goal is to enhance the perception
              of doing business and sourcing food ingredients in Africa and to
              delivery consistent quality in a timely fashion.
            </p>
          </div>
        </div>

        <div className="margin card-shadow">
          <MDBCard
            className="card-rounded p-5"
            style={{ borderRadius: "15px" }}
          >
            <div className="row">
              <div className="col-md-4 p-5">
                <img
                  className="img-fluid quality-img"
                  src={quality}
                  alt="quality"
                />
                <h3 className="py-2 quality-header h2-responsive">Quality</h3>
                <p className="quality-text text-left">
                  We aim to trade only the highest quality products and are
                  continuously striving to improve our standards to drive
                  international competitiveness
                </p>
              </div>
              <div className="col-md-4 p-5">
                <img
                  className="quality-img"
                  src={specialist}
                  alt="specialist"
                />
                <h2 className="quality-header py-2 h2-responsive">
                  Specialists
                </h2>
                <p className="quality-text text-left">
                  We are specialist, global traders in niche commodities, their
                  markets, and seasons.
                </p>
              </div>
              <div className="col-md-4 p-5">
                <img
                  className="img-fluid quality-img"
                  src={pricing}
                  alt="pricing"
                />
                <h2 className="quality-header h2-responsive">Pricing</h2>
                <p className="quality-text text-left">
                  We aim to source quality commodities at highly competitive,
                  but fair prices in order to pass maximum value to our
                  customers and trading partners
                </p>
              </div>
            </div>
          </MDBCard>
        </div>
      </MDBContainer>
    </div>
  );
};

export default About;
