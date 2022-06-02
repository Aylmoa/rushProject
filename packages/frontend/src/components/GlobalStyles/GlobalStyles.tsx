import React from "react";
import { Global, css, useTheme, ThemeProvider } from "@emotion/react";

export const GlobalStyles = (props:any) => {
 let theme:any = useTheme();
  return (
    <>
      <Global
        styles={css`
          body{
            background-color:${theme.palette.white} ;
            min-height: 100%;
          }
          *{
            padding: 0px;
            margin: 0px;
            box-sizing: border-box;
          }
          
        `}
      />
    </>
  );
};

