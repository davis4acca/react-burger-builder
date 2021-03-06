import styled from "styled-components";
import Wrapper from "../../UI/Wrapper/Wrapper.styled";

export const ToolbarWrapper = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
  & nav {
    height: 100%;
  }
`;

export const LogoWrapper = styled(Wrapper)``;

export const Nav = styled.nav`
  @media (max-width: 499px) {
    ${props => (props.desktopOnly ? `display : none` : ``)};
  }
`;
