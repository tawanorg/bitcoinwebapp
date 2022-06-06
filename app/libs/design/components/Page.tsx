import styled from "styled-components";

const Page = () => {};

Page.Main = styled.main((props) => ({
  backgroundColor: props.theme.page.background,
}));

export default Page;
