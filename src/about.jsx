import React, { useEffect, useState } from "react";
import { MDBContainer, MDBCard, MDBRow } from "mdbreact";
import "./about.css";
import * as quality from "./assets/quality.png";
import * as specialist from "./assets/download.png";
import * as pricing from "./assets/pricing.png";

const About = (props) => {
  return (
    <div>
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
