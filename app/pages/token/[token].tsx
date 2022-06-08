import { Heading, Page, Stack } from "@bitcoin/design";
import { useFeedEngine } from "@bitcoin/redux";
import { GetStaticPropsContext, TokenCollection } from "libs/types";
import type { NextPage } from "next";
import { useEffect } from "react";
import fetcher from "../utils/fetcher";

const Home: NextPage = () => {
  const feedState = useFeedEngine();

  // Get recent feed data/contexts
  const isRecentPostLoading = feedState.loading;
  const recentPosts = feedState.data.recent;
  const feedActions = feedState.actions;

  useEffect(() => {
    feedActions.getFetchRecentFeed();
  }, []);

  return (
    <Page.Container>
      <Stack>
        <Heading.H1>Tawan Exchange</Heading.H1>
        {isRecentPostLoading && <div>Loading</div>}
        {!isRecentPostLoading && recentPosts.length === 0 && <div>No news</div>}
        {!isRecentPostLoading && recentPosts.length > 0 && (
          <ul>
            {recentPosts.map((post, key) => (
              <li key={key + post.publish_date}>{post.title}</li>
            ))}
          </ul>
        )}
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
