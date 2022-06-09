import { MarketChart } from "@bitcoin/charts";
import { Box, Button, Flex, Heading, Page, Stack } from "@bitcoin/design";
import { useFeedEngine, useTokenEngine } from "@bitcoin/redux";
import { TokenSlashCurrency } from "libs/redux/engine/token/token.types";
import {
  ApiResponse,
  ChartTimeFrame,
  GetStaticPropsContext,
  TokenCollection,
} from "libs/types";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Header from "pages/components/Header";
import withPageBase from "pages/layouts/withPage";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PostList from "../../components/PostList";

const TokenSlashCurrencyPage: NextPage<TokenSlashCurrency> = ({
  token,
  currency,
}) => {
  const feedState = useFeedEngine();
  const tokenState = useTokenEngine();
  const router = useRouter();
  const [timeframes, _setFrametime] = useState<{
    currentTimeframe: ChartTimeFrame;
    availableTimeframe: ChartTimeFrame[];
  }>(() => ({
    currentTimeframe: "1 M",
    availableTimeframe: ["24 H", "7 D", "1 M"],
  }));

  // Get recent feed data/contexts
  const isRecentPostLoading = feedState.loading;
  const recentPosts = feedState.data.recent;
  const feedActions = feedState.actions;

  // Get token/currency
  const isFetchTokenLoading = tokenState.loading;
  const tokenActions = tokenState.actions;

  const currentCrypto = useSelector(
    tokenActions.selectTokenSlashCurrency({
      timeframe: timeframes.currentTimeframe,
      token,
      currency,
    })
  );

  // On mounted tasks
  useEffect(() => {
    feedActions.getFetchRecentFeed();
    tokenActions.getTokenSlashCurrency({
      token,
      currency,
    });
  }, [token, currency]);

  const handleSetTimeFrame = (timeframe: ChartTimeFrame) => {
    _setFrametime((prev) => ({
      ...prev,
      currentTimeframe: timeframe,
    }));
  };

  return (
    <Page.Container>
      <Stack>
        <Flex justifyContent="space-between">
          <Button onClick={router.back}>👈 Back</Button>
          <Box>
            {timeframes.availableTimeframe.map((timeframe, k) => (
              <Button
                key={`${k}-${timeframe}`}
                active={timeframe === timeframes.currentTimeframe}
                onClick={() => handleSetTimeFrame(timeframe)}
              >
                {timeframe}
              </Button>
            ))}
          </Box>
        </Flex>
        <Header
          isLoading={isFetchTokenLoading}
          updatedAt={currentCrypto?.spot.stamp}
          token={token}
          currency={currentCrypto?.currency ?? currency}
          price={currentCrypto?.spot.price}
        />
        <MarketChart
          currency={currentCrypto?.currency}
          data={currentCrypto?.history ?? []}
        />
        <Heading.H2>Recent news about {currentCrypto?.name}</Heading.H2>
        <PostList isLoading={isRecentPostLoading} posts={recentPosts} />
      </Stack>
    </Page.Container>
  );
};

export async function getStaticPaths() {
  let allTokenPaths: { params: Pick<TokenCollection, "token" | "currency"> }[] =
    [];

  const makeParams = ({ token, currency }: TokenCollection) => ({
    params: {
      token,
      currency,
    },
  });

  const fetchAllTokenResult = await fetch(process.env.URL + "/api/tokens");

  const getAllTokenResult: ApiResponse<TokenCollection[]> =
    await fetchAllTokenResult.json();

  if (!getAllTokenResult) {
    return {
      fallback: false,
      paths: [],
    };
  }

  if (getAllTokenResult?.data && getAllTokenResult.data?.length > 0) {
    allTokenPaths = getAllTokenResult.data.map(makeParams);
  }

  return {
    fallback: false,
    paths: allTokenPaths,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<TokenSlashCurrency>) {
  return {
    props: params,
  };
}

export default withPageBase(TokenSlashCurrencyPage);
