import { Heading, Page, Stack } from "@bitcoin/design";
import { GetStaticPropsContext, TokenCollection } from "libs/types";
import type { NextPage } from "next";
import fetcher from "../utils/fetcher";

const Home: NextPage = (props) => {
  return (
    <Page.Container>
      <Stack>
        <Heading.H1>Tawan Exchange</Heading.H1>
      </Stack>
    </Page.Container>
  );
};

export async function getStaticPaths() {
  const getAllTokenResult = await fetcher<TokenCollection[]>("/api/all-tokens");
  const allTokenPaths = getAllTokenResult?.map(({ symbol }) => ({
    params: {
      token: symbol,
    },
  }));
  return {
    fallback: false,
    paths: allTokenPaths,
  };
}

export async function getStaticProps({
  params: { token },
}: GetStaticPropsContext<{ token: string }>) {
  const getTokenResult = await fetcher<TokenCollection[]>(
    `/api/token/${token}`
  );
  return {
    props: { token: getTokenResult },
  };
}

export default Home;
