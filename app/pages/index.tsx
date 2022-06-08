import { Heading, Page, Stack } from "@bitcoin/design";
import { useTokenEngine } from "@bitcoin/redux";
import { TokenCollection } from "libs/types";
import type { NextPage } from "next";
import Link from "next/link";
import Card from "./components/Card";
import fetcher from "./utils/fetcher";
import makeTokenKey from "./utils/makeTokenKey";

interface Props {
  collection: TokenCollection[];
}

const Home: NextPage<Props> = ({ collection = [] }) => {
  const { data: allCachedTokens } = useTokenEngine();

  return (
    <Page.Container>
      <Stack>
        <Heading.H1>Tawan Exchange</Heading.H1>
        <Stack>
          {collection.map((collection, key) => {
            const cachedToken =
              allCachedTokens[
                makeTokenKey({
                  token: collection.token,
                  currency: collection.currency,
                })
              ];
            return (
              <Link
                href={`/token/${collection.token}/${collection.currency}`}
                key={key}
                passHref
              >
                <Card {...collection} cachedToken={cachedToken} />
              </Link>
            );
          })}
        </Stack>
      </Stack>
    </Page.Container>
  );
};

export async function getServerSideProps() {
  const allTokenCollections = await fetcher<TokenCollection[]>("/api/tokens");

  if (!allTokenCollections)
    return {
      props: { collection: [] },
    };

  return {
    props: {
      collection: allTokenCollections,
    },
  };
}

export default Home;
