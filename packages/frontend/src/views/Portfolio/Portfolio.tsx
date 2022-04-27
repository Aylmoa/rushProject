import React from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { PortfolioFirstSection } from "../../sections/PortfolioFirstSection";

export const Portfolio = () => {
  let params=useParams()
  
    return (
      <PortfolioFirstSection title={params.variable} ></PortfolioFirstSection>
    );
  };