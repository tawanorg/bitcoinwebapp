import styled from "styled-components";

const Box = styled.div`
  border-width: 1px;
  border-color: ${(props) => props.theme.page.border};
  border-style: solid;
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: ${(props) => props.theme.spacing * 2}px;
  padding: ${(props) => props.theme.spacing * 2}px;

  &:hover {
    box-shadow: none;
  }
`;

export default Box;
