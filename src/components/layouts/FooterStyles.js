import styled from 'styled-components';

export const Box = styled.div`
padding: 1px 1px;
background: rgb(24, 29, 49);
position: absolute;

width: 100%;
left: -1px;
@media (max-width: 1000px) {
	padding: 30px 10px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 40px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
					minmax(300px, 1fr));
grid-gap: 40px;
@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: grey;
margin-bottom: 5px;
font-size: 13px;
text-decoration: none;
&:hover {
	color: lighblue;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 15px;
color: #fff;
margin-bottom: 15px;
font-weight: bold;
`;