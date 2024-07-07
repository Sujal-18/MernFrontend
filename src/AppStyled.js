import styled from "styled-components";

export const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative; 
`;