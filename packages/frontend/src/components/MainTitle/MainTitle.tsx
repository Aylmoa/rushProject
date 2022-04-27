import React from "react";
import styled from "@emotion/styled";
import { propsWithcustomTheme } from "../../types";

const TitleText = styled.div((props:propsWithcustomTheme) => ({
  fontFamily: "Raleway, sans-serif",
  fontWeight: 900,
  fontSize: 60,
  margin: 'auto',
  textAlign: 'center',
  paddingTop: 36,
  paddingBottom: 36,
  color: props.theme?.colors.themePrimary,
  letterSpacing: 6,
  })); 
  
  const TitleStartSpacing = styled.div(() => ({
    width: "100%",
    display: "flex",
    flexFlow: "row",
    paddingTop: 36,
  }));
  interface TitleProps{
    title:string;
  }
  export const Title = (props:TitleProps) => {
    return (
      <TitleStartSpacing>
        <TitleText>{props.title}</TitleText>
        </TitleStartSpacing>
      
    );
  };