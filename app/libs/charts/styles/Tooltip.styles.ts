import styled from "styled-components";

const Tooltip = styled.div`
  background-color: ${(p) => p.theme.page.background};
  color: white;
  padding: 4px 10px;
  display: flex;
  flex-direction: row;

  .price {
    margin-left: 10px;
    color: ${(p) => p.theme.colors.highlight};
  }

  .label {
    color: white;
  }
`;

export default Tooltip;
