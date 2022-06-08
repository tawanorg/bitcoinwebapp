import { MarketChart } from "@bitcoin/charts";
import { Heading, Page, Stack } from "@bitcoin/design";
import { useFeedEngine, useTokenEngine } from "@bitcoin/redux";
import { TokenSlashCurrency } from "libs/redux/engine/token/token.types";
import { GetStaticPropsContext, TokenCollection } from "libs/types";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import fetcher from "../../utils/fetcher";

const Home: NextPage<TokenSlashCurrency> = ({ token, currency }) => {
  const feedState = useFeedEngine();
  const tokenState = useTokenEngine();
  const router = useRouter();

  // Get recent feed data/contexts
  const isRecentPostLoading = feedState.loading;
  const recentPosts = feedState.data.recent;
  const feedActions = feedState.actions;

  // Get token/currency
  const isFetchTokenLoading = tokenState.loading;
  const tokenActions = tokenState.actions;

  const currentTokenSlashCurrency = useSelector(
    tokenActions.selectTokenSlashCurrency({ token, currency })
  );

  // On mounted tasks
  useEffect(() => {
    feedActions.getFetchRecentFeed();
    tokenActions.getTokenSlashCurrency({
      token,
      currency,
    });
  }, [token, currency]);

  return (
    <Page.Container>
      <Stack>
        <div>
          <button onClick={router.back}>Back</button>
        </div>
        <Heading.H1>{token}</Heading.H1>
        {isFetchTokenLoading && <div>Loading price...</div>}
        {!isFetchTokenLoading && currentTokenSlashCurrency && (
          <>
            <div>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: currentTokenSlashCurrency?.currency,
              }).format(currentTokenSlashCurrency.spot.price / 100)}
            </div>
            <div>
              Updated at:{" "}
              {new Date(
                currentTokenSlashCurrency?.spot.stamp * 1000
              ).toLocaleString()}
            </div>
          </>
        )}
        <MarketChart
          currency={currentTokenSlashCurrency?.currency}
          data={currentTokenSlashCurrency?.history ?? []}
        />
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
  const getAllTokenResult = await fetcher<TokenCollection[]>("/api/tokens");

  if (!getAllTokenResult) {
    return {
      fallback: false,
      paths: [],
    };
  }

  const allTokenPaths = getAllTokenResult.map(({ token, currency }) => ({
    params: {
      token,
      currency,
    },
  }));

  return {
    fallback: false,
    paths: allTokenPaths ?? [],
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<TokenSlashCurrency>) {
  return {
    props: params,
  };
}

export default Home;
