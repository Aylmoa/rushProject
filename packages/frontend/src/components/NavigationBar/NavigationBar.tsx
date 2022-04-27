import React from "react";
import styled from "@emotion/styled";
import {Routes,Route, Link, BrowserRouter, useMatch, PathMatch} from "react-router-dom";
import { customTheme, propsWithcustomTheme } from "../../types";



const NavBar = styled.div(() => ({
  fontFamily: "Raleway, sans-serif",
  width: "100%",
  height: "36px",
  position: "fixed",
  textAlign: "end",
  textTransform: "uppercase",
  marginTop: "12px",
  zIndex: "99",
}));
interface NavAProp {
  isactive?: PathMatch<string> | null;
}

const NavBarLink = styled(Link) ((props:propsWithcustomTheme & NavAProp) => ({
  margin: "auto",
  fontSize: "20px",
  color: props.isactive === null ? props.theme?.colors.foregroundPrimary : props.theme?.colors.themePrimary,
  padding: "32px 48px 16px",
  textDecoration: "none",
  borderRadius: "30%",
  textShadow: " 2px 2px 4px black",
  "&:hover" :{ opacity: 0.6}
}));
interface NavBarChangeThemeProps{
  themee:string;
}
const NavBarChangeTheme = styled.button((props:propsWithcustomTheme&NavBarChangeThemeProps) => ({
    margin: "auto",
    fontSize: "20px",
   color: props.themee == "Light Theme" ? props.theme?.colors.foregroundPrimary : props.theme?.colors.foregroundPrimary,
   padding: "0px 24px 16px",
   textDecoration: "none",
   borderStyle:"none",
    textShadow: " 2px 2px 4px black",
    backgroundColor:"transparent",
    fontFamily:"inherit",
    textTransform:"inherit",

   "&:hover" :{ opacity: 0.6}
}));

export const NavigaionBar = (props:any) => {
  const homeMatch=useMatch("/");
  const portfolioMatch=useMatch("portfolio");
  const contactMatch=useMatch("contact");
  let currentTheme=props.isClearTheme? "Light Theme":"Dark Theme";
  return (
    <NavBar>
      <NavBarLink isactive={homeMatch} to="/">        
        Home
      </NavBarLink>
      <NavBarLink isactive={portfolioMatch} to="portfolio"> Portfolio</NavBarLink>
      <NavBarLink isactive={contactMatch} to="contact"> Contact</NavBarLink>
      <NavBarChangeTheme onClick={props.setClearTheme} themee={currentTheme}>{currentTheme}</NavBarChangeTheme>
      
    </NavBar>
  );
};
