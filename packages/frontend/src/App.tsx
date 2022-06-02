import { useState } from "react";
import styled from "@emotion/styled";
import { GlobalStyles } from "./components/GlobalStyles";
import { NavigaionBar } from "./components/NavigationBar";
import { Footer } from "./components/Footer";
import { Routes,Route,Link, BrowserRouter } from "react-router-dom";
import { renderRoutes } from "./routes";
import { LightTheme } from "./themes/LightTheme";
import { DarkTheme } from "./themes/DarkTheme";
import { jsx, ThemeProvider, useTheme } from '@emotion/react'

/*const Square = styled.div((props) => ({
  backgroundColor: "blue",
  width: "100px",
  height: "100px",
}));

const Square2 = styled(Square)((props) => ({
  backgroundColor: "green",
}));

interface Square3Props {
  squareColor: string;
}
const Square3 = styled(Square)<Square3Props>((props) => ({
  backgroundColor: props.squareColor,
}));

interface SquaresProps {
  squaresColor: string;
}
const Squares = (props: SquaresProps) => {
  return (
    <>
      <Square />
      <Square2 />
      <Square3 squareColor={props.squaresColor} />
    </>
  );
};
          
*/
/* 
************Old Themes*****************
const mainTheme={
  colors:{        
    themePrimary:"#dade00",
    themeDark:"#a6a900",
    themeLight:"#f4f5ac",      
    foregroundBlack:"#f8f8f8",
    foregroundPrimary:"#fff",
    foregroundSecondary:"#131313",    
    background:"#202020",
    backgroundLight:"#1e1e1e",
    backgroundDark:"#121212",
        
    cardBackground:'#f3f2f1',
    cardBackgroundSecond:"#fff",    
  }
}
const clearTheme={
  colors:{
    themePrimary:"#dade00",
    themeDark:"#e3e637",
    themeLight:"#c0c300",      
    foregroundBlack:"#1e1e1e",
    foregroundPrimary:"#202020",
    foregroundSecondary:"#0f0f0f",       
    background:"#f3f2f1",
    backgroundLight:"#fff",
    backgroundDark:"#dcd9d6",
         
        
    cardBackground:"#c4bfba",
    cardBackgroundSecond:"#f3f2f1",    
  }
}
*/

const MainContainer = styled.div(() => ({
  position: 'relative',
   minHeight: '100vh',
}));
export function App() {
  const [isLightTheme,setIsLightTheme]=useState(false)
  let currentTheme=isLightTheme? DarkTheme:LightTheme;
  return (
    <>
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <div className="App">
        <MainContainer>
        
        <BrowserRouter>
        <NavigaionBar setClearTheme={()=>setIsLightTheme(!isLightTheme)} isClearTheme={isLightTheme}/>
           <Routes>
              {renderRoutes()}
          </Routes> 
        </BrowserRouter>
          
        <Footer />
        </MainContainer>
      </div>
      </ThemeProvider>
    </>
  );
}
