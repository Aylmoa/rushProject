import React from "react";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import {Title} from "../../components/MainTitle";
import { propsWithcustomTheme } from "../../types";



const Contact=styled.div((props:propsWithcustomTheme)=>({
    margin: 'auto',
    width: '60%',
    borderRadius: 4,
    backgroundColor: props.theme?.colors.foregroundPrimary,
    fontSize: 18,
    boxShadow: '5px 5px 2px #202020',
    display: 'flex',
    fontFamily: 'Raleway, sans-serif',
}));
  
const ContactSideBar=styled.div(()=>({
    backgroundColor: '#121212',
  width: 420,
  display: 'flex',
  borderTopLeftRadius: 4,
  borderBottomLeftRadius: 4,
  color: '#dade00',
  flexFlow: 'column',
}));
const ContactSideBarInfo=styled.div(()=>({
    color: '#fff',
  textAlign: 'center',
  margin: 'auto',
  width: 300,
}));
const ContactSideBarLogo=styled.div(()=>({
    width: 100,
  height: 'auto',
  margin: '120px 160px 10px',
  flexFlow: 'column',
  flexBasis: 'fit-content',
  textAlign: 'center',
  fontSize: 24,
  letterSpacing: 2,
}));

const ContactForm=styled.form(()=>({
  padding: 20,
  textAlign: 'left',
  margin: 'auto',
  width: '50%',
}));
const ContactFormInput=styled.input(()=>({
  color: 'black',
  padding: 8,
  width: '100%',
  border: '1px solid #ccc',
  resize: 'vertical',
  fontFamily: 'inherit',
    fontWeight: 800,
  borderRadius: 10,
}));
const ContactFormLabel=styled.label((props:propsWithcustomTheme)=>({
  color: props.theme?.colors.background,
  fontSize: 16,
  fontWeight: 700,
  textAnchor: 'middle',  
  letterSpacing: 1,
}));
const ContactFormTextArea=styled.textarea(()=>({
  height: 100,
  borderRadius: 10,
  color: 'black',
  padding: 8,
  width: '100%',
  border: '1px solid #ccc',
  resize: 'vertical',
  fontFamily: 'inherit',
    fontWeight: 800,
  
}));
const ContactFormButton=styled.button(()=>({
  borderRadius: 10,
  color: 'black',
  backgroundColor: '#dade00',
  boxShadow: '2px 2px 5px black',
  fontSize: 22,
  height: 30,
  width: 90,
  fontFamily: 'Raleway, sans-serif',
  fontWeight: 'bold',
  letterSpacing: 1,
  "&:hover" :{ opacity: 0.9} 
}));
const ContactFormButtonPadding=styled.div(()=>({
 display:"flex",
 justifyContent:"center"
}));


export const ContactFirstSection = () => {
    return (

      <div>
        <Title title="Contact Us"></Title>
    <Contact>
		<ContactSideBar>
			<ContactSideBarLogo>How Can We Help? </ContactSideBarLogo>
            <ContactSideBarInfo>+528130565771 leonardo.gonzalez@catuxy.com</ContactSideBarInfo>
		</ContactSideBar>
			<ContactForm>
        <ContactFormLabel>Name</ContactFormLabel>
        <ContactFormInput defaultValue={"Mike"}></ContactFormInput>
        <ContactFormLabel>Phone</ContactFormLabel>
        <ContactFormInput defaultValue={"+55 81823281"}></ContactFormInput>
        <ContactFormLabel>Email</ContactFormLabel>
        <ContactFormInput defaultValue={"example@company.com"}></ContactFormInput>
        <ContactFormLabel>Description</ContactFormLabel>
        <ContactFormTextArea defaultValue={"Write your description..."}></ContactFormTextArea>
       <ContactFormButtonPadding><ContactFormButton>Send</ContactFormButton></ContactFormButtonPadding> 
      </ContactForm>													
    </Contact>
      </div>
    );
  };