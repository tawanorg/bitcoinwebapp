import styled, { CSSProperties } from "styled-components";

const Flex = styled.div<CSSProperties>`
  display: flex;
  justify-content: ${(props) => props.justifyContent ?? "flex-start"};
`;

export default Flex;
