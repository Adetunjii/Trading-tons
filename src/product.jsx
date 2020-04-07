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

const Product = (props) => {
  const topProducts = [
    {
      name: "Cashew Nut",
      imageUrl: cashewNuts,
      harvestSeason: "February to May",
      available: "Available Feb to May",
    },

    {
      name: "Sesame Seeds",
      imageUrl: sesameSeeds,
      harvestSeason: "November to July",
    },
    {
      name: "Turmeric",
      imageUrl: turmeric,
      harvestSeason: "December to Jan",
    },
  ];

  const bottomProducts = [
    {
      name: "Arabic Gum",
      imageUrl: arabic_gum,
      harvestSeason: "November to Jan",
    },
    {
      name: "Bird Eye Chili",
      imageUrl: birdeyechili,
      harvestSeason: "January to Dec",
    },

    {
      name: "Peanuts",
      imageUrl: peanuts,
      harvestSeason: "March to Aug",
    },
    {
      name: "Dry Ginger",
      imageUrl: dry_ginger,
      harvestSeason: "November to Jan",
    },

    {
      name: "Hibiscus",
      imageUrl: hibiscus,
      harvestSeason: "November to Jan",
    },
    {
      name: "Tigernuts",
      imageUrl: tigernuts,
      harvestSeason: "April to November",
    },
  ];

  return (
    <div className="margin" id={props.id}>
      <MDBContainer fluid>
        <div
          className="bg-white flex-center"
          style={{ borderTopLeftRadius: "40px", borderTopRightRadius: "40px" }}
        ></div>
        <div
          className="bg-white text-center"
          style={{
            paddingTop: "150px",
            paddingBottom: "150px",
            borderBottomLeftRadius: "40px",
            borderBottomRightRadius: "40px",
          }}
        >
          <p className="goods-text">OUR GOODS</p>
          <h1 className="product-header pb-4">PRODUCTS</h1>
          <div className="container">
            <div className="row justify-content-md-center">
              {topProducts.map((product) => (
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
              {bottomProducts.map((product) => (
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
