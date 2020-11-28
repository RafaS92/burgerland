import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

const Feature = () => {
  return (
    <FeatureContainer id="special">
      <h1>Burger of the Day</h1>
      <p>Club Burger! Angus, Chorizo, Hawain all in just one package!</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
