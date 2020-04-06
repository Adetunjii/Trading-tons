import React, { useState, useEffect } from "react";
import "./product.css";
import * as dry_ginger from "./assets/dry_ginger.jpg";
import * as hibiscus from "./assets/hibiscus.jpg";
import * as turmeric from "./assets/tumeric.jpg";
import * as arabic_gum from "./assets/arabic_gum.jpg";
import * as birdeyechili from "./assets/birdeyechill.jpg";
import * as peanuts from "./assets/peanuts.jpg";
import * as sesameSeeds from "./assets/sesame.jpg";
import * as tigernuts from "./assets/tigernuts.jpg";
import * as cashewNuts from "./assets/cashewNuts.jpg";
import { MDBRow, MDBContainer } from "mdbreact";

const Product = props => {
  const RenderContinents = props => {
    const [continents, setContinents] = useState(1);

    useEffect(() => {
      getContinents();
    }, []);

    const doSetTimeout = i => {
      setTimeout(function() {
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

    const doTimeout = i => {
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

    const doTimeout = i => {
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

    const doTimeout = i => {
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

    const doTimeout = i => {
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

  const topProducts = [
    {
      name: "Cashew Nut",
      imageUrl: cashewNuts,
      harvestSeason: "February to May",
      available: "Available Feb to May"
    },

    {
      name: "Sesame Seeds",
      imageUrl: sesameSeeds,
      harvestSeason: "November to July"
    },
    {
      name: "Turmeric",
      imageUrl: turmeric,
      harvestSeason: "December to Jan"
    }
  ];

  const bottomProducts = [
    {
      name: "Arabic Gum",
      imageUrl: arabic_gum,
      harvestSeason: "November to Jan"
    },
    {
      name: "Bird Eye Chili",
      imageUrl: birdeyechili,
      harvestSeason: "January to Dec"
    },

    {
      name: "Peanuts",
      imageUrl: peanuts,
      harvestSeason: "March to Aug"
    },
    {
      name: "Dry Ginger",
      imageUrl: dry_ginger,
      harvestSeason: "November to Jan"
    },

    {
      name: "Hibiscus",
      imageUrl: hibiscus,
      harvestSeason: "November to Jan"
    },
    {
      name: "Tigernuts",
      imageUrl: tigernuts,
      harvestSeason: "April to November"
    }
  ];

  return (
    <div className="margin" id={props.id}>
      <MDBContainer fluid>
        <div
          className="bg-white flex-center"
          style={{ borderTopLeftRadius: "40px", borderTopRightRadius: "40px" }}
        >
          <MDBContainer className="pt-5">
            <MDBRow className="justify-content-lg-center">
              <div className="col-lg-2">
                <RenderContinents />
                <p className="quality-text">Continents</p>
              </div>
              <div className="col-lg-2">
                <RenderWeps />
                <p className="quality-text">Women Employed Per Shipment</p>
              </div>
              <div className="col-lg-2">
                <RenderTonsShipped />
                <p className="quality-text">Tonnage Shipped</p>
              </div>
              <div className="col-lg-2">
                <RenderTradedCommodities />
                <div className="quality-text">Traded Commodities</div>
              </div>
              <div className="col-lg-2">
                <RenderEngagedFarmers />
                <p className="quality-text">Engaged Farmers</p>
              </div>
            </MDBRow>
          </MDBContainer>
        </div>
        <div
          className="bg-white"
          style={{
            paddingTop: "150px",
            paddingBottom: "150px",
            borderBottomLeftRadius: "40px",
            borderBottomRightRadius: "40px"
          }}
        >
          <p className="goods-text">OUR GOODS</p>
          <h1 className="product-header">PRODUCTS</h1>
          <div className="container">
            <div className="row justify-content-md-center">
              {topProducts.map(product => (
                <div className="col-md-4">
                  <img
                    className="img-100"
                    src={product.imageUrl}
                    alt={product.name}
                  />
                  <h2 className="product-name">{product.name}</h2>
                  <p className="product-text">
                    Harvest Season: {product.harvestSeason}
                  </p>
                  <p className="product-text">
                    {product.available
                      ? product.available
                      : "Available all year"}
                  </p>
                </div>
              ))}
            </div>

            <div className="row justify-content-md-center">
              {bottomProducts.map(product => (
                <div className="col-md-4 p-2">
                  <img
                    className="img-100"
                    src={product.imageUrl}
                    alt={product.name}
                  />
                  <h2 className="product-name">{product.name}</h2>
                  <p className="product-text">
                    Harvest Season: {product.harvestSeason}
                  </p>
                  <p className="product-text">
                    {product.available
                      ? product.available
                      : "Available all year"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
};

export default Product;
