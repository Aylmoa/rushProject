import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const HomeCardContainer = styled.div((props) => ({
    width: '75%',
    height: 125,
    margin: 'auto',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    borderRadius: 4,
    backgroundColor: props.theme.palette.themeLight,
    fontFamily:" Assistant, sans-serif",
    textOverflow: 'ellipsis',
    fontSize: 18,
    color: props.theme.palette.neutralDark,
    fontWeight: 300,
    "&:hover" :{ opacity: 0.9}
  }));

  const HomeCardContainerDivider = styled.div((props) => ({
    display: 'flex',
  flexFlow: 'row',
  justifyContent: 'space-evenly',
  borderRadius: 4,
  borderStyle: 'ridge',
  borderWidth: '1px 0px 0px 0px',
  backgroundColor: props.theme.palette.themeLight,
  paddingBottom: 3,
  
  }));
  const HomeCardContainerItemDescription = styled.div((props) => ({
    borderStyle: 'ridge',
    borderWidth: '1px 0px 0px 0px',
    padding: '0px 10px 20px',
    backgroundColor: props.theme.palette.neutralDark,
    maxHeight:"48px",
  }));
  const HomeCardContainerItemID = styled.div((props) => ({
    color: '#a6a900',
    fontSize: 18,
    fontWeight: 900,
    fontFamily: "Raleway, sans-serif",
    padding: '10px 0px',
    backgroundColor: props.theme.palette.neutralDark,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  }));
  interface FinishedProps{
    isFinished:boolean;
  }
  const HomeCardContainerItemFinished = styled.div<FinishedProps>((props) => ({
    fontStyle: 'italic',    
    color: props.isFinished ? "#6a7518" : " #c31f14;",
  }));
 

 export interface HomeCardProps{
  username:string;  
  _id: number;
  age: number;
  deleted: boolean;
}

export const HomeCard = (props:HomeCardProps) => {
  return <HomeCardContainer >
          <HomeCardContainerItemID>Id: {props._id}</HomeCardContainerItemID>  
          <HomeCardContainerItemDescription>Name: {props.username}</HomeCardContainerItemDescription>
          <HomeCardContainerDivider>Age: {props.age}<HomeCardContainerItemFinished isFinished={props.deleted}>{props.deleted ? "Delted":"Not Deleted"}</HomeCardContainerItemFinished>
            </HomeCardContainerDivider>
          
      
  </HomeCardContainer>;
};
