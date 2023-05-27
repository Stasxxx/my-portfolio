import styled from "styled-components";

export const Cont = styled.div`
    padding: 20px 0;
@media screen and (min-width: 1280px) {
    padding: 23px 0;
};

`;
export const Button = styled.button`
    /* order: 9; */

	position: relative;
	display: flex;
	justify-content: space-between;

	width: 51px;
	height: 28px;
	padding: 5px;
    margin-left: 40px;

	border-radius: 50px;
	background-color: #272727;

    &::before {
        content: '';

        position: absolute;
        top: 0px;
        left: 1px;

        display: block;
        width: 24px;
        height: 24px;

        border-radius: 50%;
        background-color: #fff;

        transition: left 0.2s ease-in;
}

    &::before {
	left: ${({ theme }) => theme === "dark" ? '23px' : null};
	
    
}
`;

export const Icon = styled.img`
    position: relative;
    z-index: 9;
`;