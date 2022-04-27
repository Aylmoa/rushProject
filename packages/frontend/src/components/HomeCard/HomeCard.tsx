import React from "react";
import styled from "@emotion/styled";
import { customTheme, propsWithcustomTheme } from "../../types";

const HomeCardContainer = styled.div((props:propsWithcustomTheme) => ({
    width: '75%',
    height: 125,
    margin: 'auto',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    borderRadius: 4,
    backgroundColor: props.theme?.colors.cardBackground,
    fontFamily:" Assistant, sans-serif",
    textOverflow: 'ellipsis',
    fontSize: 18,
    color: props.theme?.colors.foregroundSecondary,
    fontWeight: 300,
    "&:hover" :{ opacity: 0.9}
  }));

  const HomeCardContainerDivider = styled.div((props:propsWithcustomTheme) => ({
    display: 'flex',
  flexFlow: 'row',
  justifyContent: 'space-evenly',
  borderRadius: 4,
  borderStyle: 'ridge',
  borderWidth: '1px 0px 0px 0px',
  backgroundColor: props.theme?.colors.cardBackground,
  paddingBottom: 3,
  
  }));
  const HomeCardContainerItemDescription = styled.div((props:propsWithcustomTheme) => ({
    borderStyle: 'ridge',
    borderWidth: '1px 0px 0px 0px',
    padding: '0px 10px 20px',
    backgroundColor: props.theme?.colors.cardBackgroundSecond,
    maxHeight:"48px",
  }));
  const HomeCardContainerItemID = styled.div((props:propsWithcustomTheme) => ({
    color: '#a6a900',
    fontSize: 18,
    fontWeight: 900,
    fontFamily: "Raleway, sans-serif",
    padding: '10px 0px',
    backgroundColor: props.theme?.colors.cardBackgroundSecond,
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
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const HomeCard = (props:HomeCardProps) => {
  return <HomeCardContainer >
          <HomeCardContainerItemID>Movie: {props.id}</HomeCardContainerItemID>  
          <HomeCardContainerItemDescription>Title: {props.title}</HomeCardContainerItemDescription>
          <HomeCardContainerDivider>User: {props.userId}<HomeCardContainerItemFinished isFinished={props.completed}>{props.completed ? "Finished":"Not Finished"}</HomeCardContainerItemFinished>
            </HomeCardContainerDivider>
          
      
  </HomeCardContainer>;
};