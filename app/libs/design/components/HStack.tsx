import styled from "styled-components";
import { directionStyles } from "../styles/utils";
import Flex from "./Flex";

const Stack = styled(Flex)`
  flex-direction: row;
  align-items: center;

  ${(props) => directionStyles(props.theme.spacing).row}

  div {
    margin-right: ${(props) => props.theme.spacing * 2}px;

    &:last-child {
      margin-right: 0px;
    }
  }
`;

export default Stack;
