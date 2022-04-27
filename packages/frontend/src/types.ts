export interface customTheme {
    colors:{
        primary:string,
        background:string,
        themePrimary:string,
        themeDark:string,
        themeLight:string,    
        foregroundBlack:string,
        foregroundPrimary:string,
        foregroundSecondary:string,       
        backgroundLight:string,
        backgroundDark:string,

        cardBackground:string,
        cardBackgroundSecond:string,        
      }
}
export interface propsWithcustomTheme {
   theme?:customTheme;
}
