import styled from "styled-components";
import { Button, TomatoButton } from "./styles/ButtonStyles";

const CardStyle = styled.article`
	border: 1px solid black;
	width: 20rem;
	height: 15rem;
	background-color: white;
`;

const Card = () => {
	return (
		<CardStyle>
			<p>This is a card</p>
			<Button>Normal Button</Button>
		</CardStyle>
	);
};

export default Card;
