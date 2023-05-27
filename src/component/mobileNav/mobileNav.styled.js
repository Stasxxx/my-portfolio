import styled from 'styled-components';

export const Burger = styled.button`
  position: absolute;
  top: 28%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;

  background: transparent;

  border: none;
  cursor: pointer;
  padding: 0;

  transition: all 0.3s linear;
  
  
  &:hover div {
    background: ${({ theme }) => theme.accentColor };
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
      right: 12%;
      top: 28%;
  }

  div {
    width: 30px;
    height: 3.3px;
    background: ${({ theme}) => theme.text};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-of-type {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-of-type(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-of-type(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const NavMenu = styled.div`
  display: block;
  padding-top: 60px;
  background: ${({ theme }) => theme.body};
  
  transform: ${({ open }) => (!open ? 'translateX(100%)' : 'translateX(0)')};
  height: calc(100vh - 63px);
  width: 100%;
  text-align: center;
  position: absolute;
  overflow-y: scroll;
  top: 63px;
  left: 0;
  z-index: 5;

  transition: transform 0.3s ease-in-out;

  @media (min-width: 768px) {
    padding-top: 130px;
    /* height: 100vh; */
  }

  @media screen and (max-width: 1279px) {
    width: 100%;
  }

  a {
    transition: all 0.3s linear;
  }
`;
