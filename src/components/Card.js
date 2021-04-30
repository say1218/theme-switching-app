import styled from "styled-components";

const CardStyle = styled.article`
	display: flex;
	border: 1px solid black;
	width: 10rem;
	height: 10rem;
	background-color: white;
`;

const Card = () => {
	return (
		<CardStyle>
			<p>This is a card</p>
		</CardStyle>
	);
};

export default Card;
