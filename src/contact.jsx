import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import "./contact.css";

const Contact = (props) => {
  return (
    <div className="bg-white py-5" id={props.id}>
      <div className="container">
        <div className="text-center">
          <p className="goods-text">CONTACT US</p>
          <h2 className="product-header">GET IN TOUCH</h2>
        </div>

        <div className="py-5">
          <div className="row">
            <div className="col-md-4 text-left">
              <MDBContainer>
                <MDBRow>
                  <MDBCol>
                    <form>
                      <label
                        htmlFor="defaultFormContactNameEx"
                        className="grey-text"
                      >
                        Your name
                      </label>
                      <input
                        type="text"
                        id="defaultFormContactNameEx"
                        className="form-control"
                        style={{ width: "100%" }}
                      />
                      <br />
                      <label
                        htmlFor="defaultFormContactEmailEx"
                        className="grey-text"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="defaultFormContactEmailEx"
                        className="form-control"
                      />
                      <br />
                      <label
                        htmlFor="defaultFormContactSubjectEx"
                        className="grey-text"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="defaultFormContactSubjectEx"
                        className="form-control"
                      />
                      <br />
                      <label
                        htmlFor="defaultFormContactMessageEx"
                        className="grey-text"
                      >
                        Your message
                      </label>
                      <textarea
                        type="text"
                        id="defaultFormContactMessageEx"
                        className="form-control"
                        rows="3"
                      />
                      <div className="text-center mt-4">
                        <MDBBtn color="success" outline type="submit">
                          Send
                          <MDBIcon far icon="paper-plane" className="ml-2" />
                        </MDBBtn>
                      </div>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
            <div className="col-md-7 px-5 py-3">
              <div className="flex-row">
                <h2 className="contact-header">Let's Chat</h2>
              </div>
              <div className="text-left flex-row  quality-text">
                <p>
                  We are friendly and available to chat.
                  <br />
                  How can we help you
                </p>
              </div>

              <div className="flex-row">
                <h2 className="contact-header">Address:</h2>
              </div>
              <div className="text-left flex-row quality-text">
                <p>
                  87 Allen Avenue, Ikeja Lagos State, Nigeria. <br />
                  +234 8146132690 (8am to 5pm Weekdays)
                </p>
                <p classNmae="text-left flex-row">
                  <MDBIcon fab icon="youtube" className="red-text">
                    <a className="quality-text px-2" href="#">
                      Sourcing and produce
                    </a>
                  </MDBIcon>
                </p>
                <p>
                  <MDBIcon fab icon="instagram" className="red-text" />
                  <a className="quality-text px-2">Sourcingandproduce</a>
                </p>
                <div className="flex-row">
                  <MDBBtn
                    className="text-white"
                    style={{
                      cursor: "pointer",
                    }}
                    size="md"
                    color="success"
                    href="http://webmail.sourcingandproduce.com/appsuite/#"
                  >
                    Login to our webmail
                    <span className="px-2">
                      <MDBIcon fas icon="arrow-right" />
                    </span>
                  </MDBBtn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
