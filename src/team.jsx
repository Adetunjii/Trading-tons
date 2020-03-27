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
  MDBModalHeader
} from "mdbreact";
import "./team.css";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal13: false,
      name: "",
      description: "",
      position: ""
    };
  }

  toggle = (nr, description, name, imageUrl, position) => () => {
    let modalNumber = "modal" + nr;

    this.setState({
      [modalNumber]: !this.state[modalNumber],
      description: description,
      name: name,
      imageUrl: imageUrl,
      position: position
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
        position: "Founder, CEO"
      },

      {
        name: "Florian Aigrain",
        imageUrl: florian,
        shortDesc:
          "Florian is CEO of the Acutronic Group, an industrial technology company based in the US and Switzerland...",
        description:
          "Florian is CEO of the Acutronic Group, an industrial technology company based in the US and Switzerland. He began his career at Goldman Sachs, where he worked in investment banking in New York and fixed-income in London. Following that, Florian founded FPXA Holdings AG, an investment company providing innovative financial solutions to start-ups, with a number of projects in emerging African markets. Florian has lived and worked in the US, Europe, and South Africa. He graduated with Distinction from the University of Virginia, with a degree in Economics and Foreign Affairs. He speaks English and French fluently (and conversational German). Florian serves as the lead investor and Chairman of Trading Tons AG.",
        position: "Co-founder, Chairman of the Board"
      },

      {
        name: "Cobus De Ridder",
        imageUrl: cobus,
        shortDesc:
          "Prior to joining Trading Tons, Cobus(of South African nationality) operated and consulted in a number of African markets and across a broad field of industries",
        description:
          "Prior to joining Trading Tons, Cobus (of South African nationality) operated and consulted in a number of African markets and across a broad field of industries. Cobus holds a degree in Managerial Sciences from the University of Stellenbosch. Having majored in Entrepreneurship and Innovation, Cobus’s strength lies in building new and innovative ways for Trading Tons to deliver value to our customers. As COO, Cobus’s role in Trading Tons principally revolves around the development, design and implementation of operational systems as well as to maximise organizational efficiency and effectiveness.",
        position: "Chief Operating officer"
      },

      {
        name: "Tunde Oloruntoba",
        imageUrl: tunde,
        shortDesc:
          "Tunde is Nigerian and has over 20 years' experience working in the Nigerian commodity industry...",
        description:
          "Tunde is Nigerian and has over 20 years’ experience working in the Nigerian commodity industry. He started has a quality inspector officer at EDF and later worked as a warehouse manager at Timsol Nigeria Ltd. His various trading roles over the years include employing sourcing strategies, building sourcing networks, finalizing orders, tracking and reporting key functional metrics to improve effectiveness, collaborate with key persons to ensure clarity of specifications. He is a graduate of Lagos State University and attended Saint Augustine College, Kogi State.",
        position: "Head Operations"
      },

      {
        name: "Charles Taylor",
        imageUrl: charles,
        shortDesc:
          "Charles is on out board and has extensive experience in commodity contracting and sales, corporate partnership development...",
        description:
          "Charles is on our board and has extensive experience in commodity contracting and sales, corporate partnership development, and guiding the company’s expansion into new markets. He has a background in finance, real estate, agriculture, and natural resource development. He is Director at Earth Partners, He is also on the board of Drylands Natural Resource Centre, an agro-forestry and environmental organization in Kenya. Charles previously consulted for the Bill & Melinda Gates Foundation within their agricultural development group, where he worked on input supply chain development and financing issues. Charles has previously worked for Bank of America Merrill Lynch in New York and McKinsey & Company. Chas is American, a graduate of the University of Virginia, he tries to spend as much time as possible on his farm in Rapidan, Virginia. Chas effectively promotes Trading Tons in the American markets.",
        position: "Advisor/Board Member"
      },

      {
        name: "Erik De Ridder",
        imageUrl: erik,
        shortDesc:
          "Erik T De Ridder is an entrepreneur and activist at large. Erik has worked with FPXA Holdings AG for several years, on projects accross Africa...",
        description:
          "Erik T de Ridder is an entrepreneur and activist at large. Erik has worked with FPXA Holdings AG for several years, on projects across Africa, and is co-CEO of Strategic Yield Investment Holding, South Africa. An alumnus of the South Africa-Washington International Programme, a co-founder of the African Student Leaders’ Summit 2010 and the BlueBuck Network, an international student coalition that formed part of civic society activities at the United Nations COP17. He is the co-founder of InkuluFreeHeid, a non-partisan South African political outreach group targeted at youth. As part of his work with FPXA Holdings, he has extensive due diligence, sourcing, and business review experience. He is a South African citizen and speaks fluent English and Afrikaans. He graduated with First Class Honours from of the University of Cape Town, with a degree in Engineering and Economics. He also has an MBA from University of Cambridge. Erik advises Trading Tons on tradingstrategies, co-operate governance.",
        position: "Advisor/Board Member"
      }
    ];

    return (
      <div className="container py-5" id={this.props.id}>
        <div className="text-center">
          <p style={{ color: "rgb(15, 214, 15)" }}>WHO WE ARE</p>
          <h1 className="about-header py-3">OUR TEAM</h1>
          <MDBRow className=" my-5 mx-md-n5 py-5">
            {team.map(team => (
              <div className="col-lg-4">
                <div className="justify-content-center">
                  <MDBCard
                    style={{
                      borderRadius: "20px",
                      marginBottom: "150px",
                      boxShadow: "0px 5px 10px 10px rgba(74, 255, 24, 0.233"
                    }}
                  >
                    <center>
                      <img
                        className="img-fluid card-img rounded-circle"
                        style={{
                          maxWidth: "200px",
                          maxHeight: "200px",
                          transform: "translateY(-80px)",
                          border: "2px solid rgba(74, 255, 24, 0.233)"
                        }}
                        src={team.imageUrl}
                        alt="lanre.jpg"
                      />
                    </center>
                    <MDBCardBody className="my-bg">
                      <h2 className="team-name">{team.name}</h2>
                      <p className="team-text px-1">{team.shortDesc}</p>
                      <button
                        className="btn btn-success btn-md team-btn white-text"
                        onClick={this.toggle(
                          13,
                          team.description,
                          team.name,
                          team.imageUrl,
                          team.position
                        )}
                      >
                        READ MORE
                      </button>
                    </MDBCardBody>
                  </MDBCard>
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
                        height: "150px"
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
