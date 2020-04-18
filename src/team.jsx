import React, { Component } from "react";
import * as lanre from "./assets/LanreAwojoodu.jpg";
import * as charles from "./assets/charles.png";
import * as folabi from "./assets/folabi.jpg";

import {
  MDBRow,
  MDBModalBody,
  MDBModal,
  MDBMask,
  MDBContainer,
  MDBModalHeader,
} from "mdbreact";
import "./team.css";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal14: false,
      name: "",
      description: "",
      position: "",
    };
  }

  toggle = (nr, description, name, imageUrl, position) => () => {
    let modalNumber = "modal" + nr;

    this.setState({
      [modalNumber]: !this.state[modalNumber],
      description: description,
      name: name,
      imageUrl: imageUrl,
      position: position,
    });
  };

  render() {
    const team = [
      {
        name: "Lanre Awojoodu",
        imageUrl: lanre,
        description: `Lanre, has successfuly been directly involved in exporting over 2000+ Agric commodities from Nigeria since 2012.
         He has exported eight commodities such as pepper, ginger to eighteen countries from 5 continents over the last 10years.
         Lanre has a B.sc Accounting from the University of Lagos and MBA from  Obafemi Awolowo University. Prior to his foray in the Agric Commodity industry,
         Lanre is a certified SAP consultant and Project Manager. He was directly involved in the implementations enterprise softwares in an array of industries from manufacturing, oil and gas to trading.
         `,
        position: "Founder and CEO",
      },
      {
        name: "Emiel Bakker",
        imageUrl: charles,
        description: `
          He's a Dutch with over 20 years as a soft commodity trader. He specializes in the supplying of spices, raw coffee, cocoa products, tea, nuts, dried fruit, seeds and pulses.
          He has extensive relationships with suppliers of numerous countries of oriin and buyers across the globe. Emiel years of experience is a major value added for Sourcing and Produce. 
          `,
        position: "Board Advisor",
      },

      {
        name: "Folabi Esan",
        imageUrl: folabi,
        position: "Chairman of Board",
        description: `
        Folabi received a B.eng. in Mechanical Engineering(First class division) from Ahhmadu Bello University, an M.S in Manufacturing Systems Engineering from Stanford University, and an M.Sc in Innovation Management and Technology Policy from the University of London.
        Folabi is the recent past president of the Nigerian-German Chamber of Commerce, Folabi is also a partner at Adlevo Capital since it was founded in 2007 and the first Managing Director of SAP Nigeria, the Nigerian subsidiary of the leading enterprise software company, for five years.
        `,
      },
    ];

    return (
      <div className="container py-5" id={this.props.id}>
        <div className="text-center">
          <p style={{ color: "rgb(15, 214, 15)" }}>WHO WE ARE</p>
          <h1 className="about-header py-3">OUR TEAM</h1>
          <MDBRow className="my-3 py-5">
            {team.map((team) => (
              <div className="col-md-6 col-lg-4 my-4">
                <div className="box">
                  <div className="my-card">
                    <div className="imgBx">
                      <MDBMask overlay="black-strong">
                        <img src={team.imageUrl} alt={team.name} />
                      </MDBMask>
                    </div>
                    <div className="details">
                      <h2>
                        {team.name}
                        <br />
                        <span>{team.position}</span>
                        <button
                          className="btn btn-sm fadeInUp"
                          onClick={this.toggle(
                            14,
                            team.description,
                            team.name,
                            team.imageUrl,
                            team.position
                          )}
                        >
                          Read more
                        </button>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </MDBRow>

          <MDBContainer>
            <MDBModal
              isOpen={this.state.modal14}
              toggle={this.toggle(14)}
              fullHeight
              position="top"
            >
              <MDBModalHeader
                toggle={this.toggle(14)}
                className="team-name text-center"
              >
                <MDBMask className="black-strong">
                  <span>
                    <img
                      src={this.state.imageUrl}
                      alt={this.state.name}
                      className="img-fluid"
                      style={{
                        width: "150px",
                        height: "150px",
                      }}
                    />
                  </span>
                </MDBMask>
                <div>
                  {this.state.name}
                  <h4 className="grey-text text-left team-text">
                    {this.state.position}
                  </h4>
                </div>
              </MDBModalHeader>
              <MDBModalBody className="py-2">
                <div className="text-left quality-text">
                  {this.state.description}
                </div>
              </MDBModalBody>
            </MDBModal>
          </MDBContainer>
        </div>
      </div>
    );
  }
}

export default Team;
