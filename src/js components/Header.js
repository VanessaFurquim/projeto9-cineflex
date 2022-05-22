import styledComponent from "styled-components";

export default function Header () {
    return (
        <Container>
          <HeaderTitle>cineflex</HeaderTitle>
        </Container>
    );
}

const Container = styledComponent.header`
	width: 375px;
	height: 67px;
	background: #C3CFD9;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const HeaderTitle = styledComponent.h1`
	font-size: 34px;
	font-weight: 400;
	text-transform: uppercase;
	color: #E8833A;
	line-height: 40px;
`;