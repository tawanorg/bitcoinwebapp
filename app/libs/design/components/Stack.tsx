import styled from "styled-components";
import { directionStyles } from "../styles/utils";
import Flex from "./Flex";

const Stack = styled(Flex)`
  flex-direction: column;
  ${(props) => directionStyles(props.theme.spacing).column}
`;

export default Stack;
