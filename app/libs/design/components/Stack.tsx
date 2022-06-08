import styled from "styled-components";
import { directionStyles } from "../styles/utils";
import Flex from "./Flex";

const Stack = styled(Flex)`
  flex-direction: column;
  width: 100%;
  ${(props) => directionStyles(props.theme.spacing).column}
  ${(props) => props}
`;

export default Stack;
