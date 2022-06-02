import React from "react";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import {Title} from "../../components/MainTitle";




const Contact=styled.div((props)=>({
    margin: 'auto',
    width: '60%',
    borderRadius: 4,
    backgroundColor: props.theme.palette.neutralPrimary,
    fontSize: 18,
    boxShadow: '5px 5px 2px #202020',
    display: 'flex',
    fontFamily: 'Raleway, sans-serif',
}));
  
const ContactSideBar=styled.div((props)=>({
    backgroundColor: props.theme.palette.neutralTertiaryAlt,
  width: 420,
  display: 'flex',
  borderTopLeftRadius: 4,
  borderBottomLeftRadius: 4,
  color: props.theme.palette.themePrimary,
  flexFlow: 'column',
}));
const ContactSideBarInfo=styled.div((props)=>({
    color:  props.theme.palette.white,
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
const ContactFormInput=styled.input((props)=>({
  color: props.theme.palette.neutralDark,
  padding: 8,
  width: '100%',
  border: '1px solid #ccc',
  resize: 'vertical',
  fontFamily: 'inherit',
    fontWeight: 800,
  borderRadius: 10,
}));
const ContactFormLabel=styled.label((props)=>({
  color: props.theme.palette.black,
  fontSize: 16,
  fontWeight: 700,
  textAnchor: 'middle',  
  letterSpacing: 1,
}));
const ContactFormTextArea=styled.textarea((props)=>({
  height: 100,
  borderRadius: 10,
  color: props.theme.palette.white,
  padding: 8,
  width: '100%',
  border: '1px solid #ccc',
  resize: 'vertical',
  fontFamily: 'inherit',
    fontWeight: 800,
  
}));
const ContactFormButton=styled.button((props)=>({
  borderRadius: 10,
  color:  props.theme.palette.white,
  backgroundColor:  props.theme.palette.themePrimary,
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