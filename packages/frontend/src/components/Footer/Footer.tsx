import React from "react";
import styled from "@emotion/styled";
import KaraokeLogo from "./karaoke-logo.svg";
import { customTheme, propsWithcustomTheme } from "../../types";

const Foote = styled.div((props: propsWithcustomTheme) => ({
  display: "flex",
  flexFlow: "row wrap",
  padding: " 30px 30px 20px 30px",
  backgroundColor: props.theme?.colors.backgroundDark,
  bottom: "0",
  position: "absolute",
  width: "100%",
  paddingTop: " 25px",
  height: "20rem",
  letterSpacing: "2px",
}));
const FooterColumn = styled.div(() => ({
  width: "25%",
}));
interface FooterListTitleTheme{
  tema:string;
}
const FooterListTitle = styled.div((props: propsWithcustomTheme&FooterListTitleTheme) => ({
  fontFamily: "Raleway, sans-serif",
  color: props.theme?.colors.themeDark,
  textShadow:props.tema==="dark"? "2px 2px black":"1px 2px black",
  fontSize: "24px",
  paddingBottom: "10px",
}));
const FooterList = styled.div(() => ({
  listStyle: "none",
  fontFamily: " Assistant, sans-serif",
}));
const FooterListItem = styled.div((props: propsWithcustomTheme) => ({
  textDecoration: "none",
  color: props.theme?.colors.foregroundPrimary,
}));
const FooteLogo = styled.div(() => ({
  width: 100,
  height: 100,
  backgroundImage: `url(${KaraokeLogo})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundOrigin: "border-box",
}));
const FooterLink = styled.a(() => ({}));

export const Footer = (props:any) => {
  let currentTheme=props.isClearTheme? "dark":"light";
  return (
    <>
      <Foote>
        <FooterColumn>
          <FooteLogo />
        </FooterColumn>
        <FooterColumn>
          <FooterListTitle tema={currentTheme}>Products</FooterListTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink>Product Category</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink>Product Category</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink>Product Category</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterColumn>
        <FooterColumn>
          <FooterListTitle tema={currentTheme}>Company</FooterListTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink>Who we are</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink>Our values</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink>Our vision</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterColumn>
        <FooterColumn>
          <FooterListTitle tema={currentTheme}>Help</FooterListTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink>Terms & Conditions</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink>Privacy Policy</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink>Cookies</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink>FAQ</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterColumn>
      </Foote>
    </>
  );
};
