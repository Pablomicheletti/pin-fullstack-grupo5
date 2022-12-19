import React from "react";
import {Box, Container, Row, Column, FooterLink, Heading } from "./FooterStyles";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter  } from 'react-icons/ai';


const Footer = () => {
return (
	<Box>
	
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
      <p style={{ color: "grey"}}>Esta NO es una página oficial</p>
	  
		</Column>
		<Column>
						<Heading>Contactanos </Heading>
            <p style={{ color: "white",}}>E-mail: </p><FooterLink href="#">INFO@IGUAZUARGENTINA.COM</FooterLink>
			<p style={{ color: "white", }}>PUERTO IGUAZÚ - MISIONES - ARGENTINA</p><FooterLink href="#"> cataratas@gmail.com</FooterLink>
		</Column>
		<Column>
			<Heading>Seguinos en las redes!</Heading>
			<FooterLink href="#">
			<span style={{ fontSize:" 30px"}}>
      <AiOutlineFacebook/></span>
				
			
			</FooterLink>
			<FooterLink href="#">
			<span style={{ fontSize:" 30px" }}>
				<AiOutlineInstagram />
				</span>
			
        </FooterLink>
			<FooterLink href="#">
			  <span style={{ fontSize:" 30px" }}>
				<AiOutlineTwitter />
				</span>
			
			</FooterLink>
		
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;