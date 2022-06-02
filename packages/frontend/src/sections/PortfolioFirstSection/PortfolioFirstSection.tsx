
import React from "react";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import {Title} from "../../components/MainTitle";
import PortfolioSvgExample1 from "./Portfolio1.svg"
import PortfolioSvgExample2 from "./Portfolio2.svg"
import PortfolioSvgExample3 from "./Portfolio3.svg"
import PortfolioSvgExample4 from "./Portfolio4.svg"


const PortfolioContainer=styled.div(()=>({
    display: 'grid',
    margin: 'auto',
    width: '50%',
    gridTemplateColumns: 'auto auto',
    gridGap: 20,
    paddingBottom: '24rem',
}));
  
const PorfolioItem=styled.div((props)=>({
    backgroundColor: props.theme.palette.themeDarkAlt,
    height: 300,
    width: 'auto',
    borderRadius: 3,
}));

interface PortfolioItemImageProp{
    PortfolioSVG?:string;
}
const PorfolioItemImage=styled.div<PortfolioItemImageProp>((props)=>({
    backgroundImage: props.PortfolioSVG,    
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundOrigin: 'border-box',
  height: 300,
  width: '100%',
}));
const PorfolioItemImageOverlay=styled.div((props)=>({
    opacity: 0,
    backgroundColor:props.theme.palette.themePrimary,
    transition: '1s ease',
    position: 'inherit',
    height: 300,
    width: '100%',
    display: 'flex',     
    "&:hover" :{ opacity: 0.9} 
}));
const PorfolioItemImageOverlayText=styled.div((props)=>({
    textAlign: 'center',
    color: props.theme.palette.black,
    margin: 'auto',
    fontFamily: "Raleway, sans-serif",
    fontSize: 24,
    letterSpacing: 1,
}));
const PortfolioBlock =(props:PortfolioItemImageProp)=>{
    return(
        <>
        <PorfolioItem>
            <PorfolioItemImage PortfolioSVG={props.PortfolioSVG}>
                <PorfolioItemImageOverlay>
                    <PorfolioItemImageOverlayText>Image title</PorfolioItemImageOverlayText>
                </PorfolioItemImageOverlay>
            </PorfolioItemImage>       
        </PorfolioItem>
        </>
    );
};

export const PortfolioFirstSection = (props:any) => {
    return (
      <div>               
            <Title title={props.title}/>          
          <PortfolioContainer>
           <PortfolioBlock PortfolioSVG={`url(${PortfolioSvgExample1})`}></PortfolioBlock>
           <PortfolioBlock PortfolioSVG={`url(${PortfolioSvgExample2})`}></PortfolioBlock>
           <PortfolioBlock PortfolioSVG={`url(${PortfolioSvgExample3})`}></PortfolioBlock>
           <PortfolioBlock PortfolioSVG={`url(${PortfolioSvgExample4})`}></PortfolioBlock>
          </PortfolioContainer>
      </div>
    );
  };