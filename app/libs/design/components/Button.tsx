import { PropsWithChildren } from "react";
import styled from "styled-components";

const DefaultButton = styled.button<{ active?: boolean }>`
  font-size: 1.2rem;
  line-height: 1.667em;
  border-width: 1px;
  border-color: transparent;
  background: ${(props) => (props.active ? "black" : "white")};
  color: ${(props) => (!props.active ? "black" : "white")};
  padding: 8px 30px;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.shadow};

  &:hover,
  &:focus {
    border-width: 1px;
    border-color: gray;
  }
`;

const Button = (
  props: PropsWithChildren<{ active?: boolean; onClick?: () => void }>
) => {
  return <DefaultButton {...props} />;
};

Button.Group = styled.div`
  background-color: red;
  padding: 10px;
`;

export default Button;
