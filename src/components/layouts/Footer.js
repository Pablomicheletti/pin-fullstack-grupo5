import React from "react";
import {Box, Container, Row, Column, FooterLink, Heading, } 
from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
      <p style={{ color: "grey"}}>Bienvenido a la pagina oficial de las cataratas argentinas</p>
		</Column>
		<Column>
						<Heading>Contactanos </Heading>
            <p style={{ color: "white",}}>Telefono: </p><FooterLink href="#">99999999</FooterLink>
			<p style={{ color: "white", }}>Email</p><FooterLink href="#"> cataratas@gmail.com</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
		
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
