import { Heading, HStack, Page, Stack } from "@bitcoin/design";
import type { NextPage } from "next";
import Card from "./components/Card";

const Home: NextPage = () => {
  return (
    <Page.Container>
      <Stack>
        <Heading.H1>TewEx Market</Heading.H1>
        <HStack>
          <Card />
          <Card />
          <Card />
        </HStack>
      </Stack>
    </Page.Container>
  );
};

export default Home;
