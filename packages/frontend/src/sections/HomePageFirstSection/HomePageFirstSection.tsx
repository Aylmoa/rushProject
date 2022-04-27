import React from "react";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import { HomeCard } from "../../components/HomeCard";
import HomeImage from "./HomeImage.svg";
import {Title} from "../../components/MainTitle";
import { HomeCards } from "../../components/HomeCards";


const HomeCardWrapper = styled.div(() => ({
  paddingTop: 30,
  display: "grid",
  gridTemplateColumns: "auto auto auto",
  gridGap: "2rem 2rem",
  width: "100%",
  maxWidth: "100%",
  paddingBottom: "24rem",
}));

const TitleImage = styled.div(() => ({
  backgroundImage: `url(${HomeImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundOrigin: "content-box",
  height: 400,
  width: 400,
  maxWidth: "100%",
  borderRadius: 4,
  margin: "auto",
  transition: "transform 2s",
  "&:hover" : {transform:"scale(120%)"},
}));

export const HomePageFirstSection = () => {
  return (
    <div>      
        
         <Title title={"This is Home"}/> <TitleImage />
        
        <HomeCardWrapper>
        <HomeCards></HomeCards>
      </HomeCardWrapper>
    </div>
  );
};
