import { Heading, Page, Stack } from "@bitcoin/design";
import { useFeedEngine } from "@bitcoin/redux";
import { GetStaticPropsContext, TokenCollection } from "libs/types";
import type { NextPage } from "next";
import { useEffect } from "react";
import fetcher from "../utils/fetcher";

const Home: NextPage = (props) => {
  const { data, ...actions } = useFeedEngine();

  // Get recent news from source
  useEffect(() => {
    actions.getInitialFeed();
  }, []);

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

  if (!getAllTokenResult) {
    return {
      fallback: false,
      paths: [],
    };
  }

  const allTokenPaths = getAllTokenResult.map(({ symbol }) => ({
    params: {
      token: symbol,
    },
  }));

  return {
    fallback: false,
    paths: allTokenPaths ?? [],
  };
}

export async function getStaticProps({
  params: { token },
}: GetStaticPropsContext<{ token: string }>) {
  const getTokenResult = await fetcher<TokenCollection[]>(
    `/api/token/${token}`
  );

  if (!getTokenResult) {
    return { props: null };
  }

  return {
    props: { token: getTokenResult },
  };
}

export default Home;
