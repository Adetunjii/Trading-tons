import React, { Component } from "react";
import * as lanre from "./assets/LanreAwojoodu.jpg";
import * as charles from "./assets/charles.png";
import * as florian from "./assets/florian.jpg";
import * as cobus from "./assets/Cobus.jpg";
import * as erik from "./assets/erik.png";
import * as tunde from "./assets/tunde.jpg";

import {
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBModalBody,
  MDBModal,
  MDBContainer,
  MDBModalHeader,
} from "mdbreact";
import "./team.css";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal13: false,
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
        shortDesc:
          "Lanre Awojoodu has over 10 years experience in a variety of trading and consulting roles in Trading...",
        description:
          "Lanre Awojoodu has over 10 years experience in a variety of trading and consulting roles in Trading, Logistics and FMCG of Nigerian companies. Before founding Trading Tons, he was responsible for leading a cross-functional team in SAP project implementation specializing in Business One and Material Management. His notable implementation projects include companies like GZI Industries (a can manufacturing company with a capacity of 1.3billion cans yearly), Cadbury Nigeria, Girvanas Ltd (nationwide distributor and importer of consumer products such as Luna milk, tin tomatoes), Clarion Bonded Terminal, Marine Platforms (Oil and Gas Servicing), Nagode Group (Importers of Ethanol, Solvents, Cosmetic chemicals into Nigeria), Elektrint Nigeria Ltd (Construction), Petrolog Group (Oil and Gas Servicing) Lanre began his career in sales as a Diebold ATM distributor at Hammond Financials. His entrepreneurial spirit has always been evident from his undergraduate days at the university, were he owned a chicken and chips joint with four employees and also extended the business at Lagos NYSC camp as a corper. As an undergraduate, he also owned and successfully managed a pig farming for 2 years. Outside of work, Lanre is an avid reader and passionate about Africa and encouraging entrepreneurship across various sectors. He believes entrepreneurship is a major driver of sustainable change and growth across the continent. In 2004, he graduated B.Sc. Accounting from the University of Lagos, with an MBA from the Obafemi Awolowo University in 2007. Lanre is an SAP certified consultant.",
        position: "Founder, CEO",
      },
      {
        name: "Charles Taylor",
        imageUrl: charles,
        shortDesc:
          "Charles is on out board and has extensive experience in commodity contracting and sales, corporate partnership development...",
        description:
          "Charles is on our board and has extensive experience in commodity contracting and sales, corporate partnership development, and guiding the company’s expansion into new markets. He has a background in finance, real estate, agriculture, and natural resource development. He is Director at Earth Partners, He is also on the board of Drylands Natural Resource Centre, an agro-forestry and environmental organization in Kenya. Charles previously consulted for the Bill & Melinda Gates Foundation within their agricultural development group, where he worked on input supply chain development and financing issues. Charles has previously worked for Bank of America Merrill Lynch in New York and McKinsey & Company. Chas is American, a graduate of the University of Virginia, he tries to spend as much time as possible on his farm in Rapidan, Virginia. Chas effectively promotes Trading Tons in the American markets.",
        position: "Director",
      },

      {
        name: "Folabi Esan",
        imageUrl: null,
        position: "Director",
      },
    ];

    return (
      <div className="container py-5" id={this.props.id}>
        <div className="text-center">
          <p style={{ color: "rgb(15, 214, 15)" }}>WHO WE ARE</p>
          <h1 className="about-header py-3">OUR TEAM</h1>
          <MDBRow className="my-3 mx-md-n5 py-5">
            {team.map((team) => (
              <div className="col-md-4 my-4">
                <div className="box">
                  <div className="my-card">
                    <div className="imgBx">
                      <img src={team.imageUrl} alt={team.name} />
                    </div>
                    <div className="details">
                      <h2>
                        {team.name}
                        <br />
                        <span>{team.position}</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </MDBRow>

          <MDBContainer>
            <MDBModal
              isOpen={this.state.modal13}
              toggle={this.toggle(13)}
              fullHeight
              position="top"
            >
              <MDBModalHeader
                toggle={this.toggle(13)}
                className="team-name text-left"
              >
                {this.state.name}
                <h4 className="grey-text text-left">{this.state.position}</h4>
              </MDBModalHeader>
              <MDBModalBody className="py-2">
                <div className="row">
                  <div className="col-lg-4">
                    <img
                      src={this.state.imageUrl}
                      alt={this.state.name}
                      className="img-responsive img-fluid"
                      style={{
                        width: "150px",
                        height: "150px",
                      }}
                    />
                  </div>
                  <div className="col-lg-8 text-left team-text">
                    {this.state.description}
                  </div>
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
