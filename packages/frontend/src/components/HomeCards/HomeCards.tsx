import React,{useEffect,useCallback,useState} from "react";
import styled from "@emotion/styled";
import { HomeCard,HomeCardProps } from "../HomeCard";


export const HomeCards=()=>{
    const [cards,setCards]=useState<HomeCardProps[]>([]);

  const homeCardsData= useCallback(async()=>{
    const data=await fetch("http://localhost:4000",{
      mode:"cors"
    });
    const parsedData=await data.json();
    setCards(parsedData)
    },[]);

    useEffect(()=>{
        homeCardsData()


    },[]);
    return(
    <>
    {cards.map((card) => {
          return <HomeCard 
          title={card.title} id={card.id} userId={card.userId} completed={card.completed}
          />;
        })}
    </>
    );
}