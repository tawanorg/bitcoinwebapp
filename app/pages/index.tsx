import { Heading, HStack, Page, Stack } from "@bitcoin/design";
import { TokenCollection } from "libs/types";
import type { NextPage } from "next";
import Link from "next/link";
import Card from "./components/Card";
import fetcher from "./utils/fetcher";

interface Props {
  collection: TokenCollection[];
}

const Home: NextPage<Props> = ({ collection = [] }) => {
  return (
    <Page.Container>
      <Stack>
        <Heading.H1>Tawan Exchange</Heading.H1>
        <HStack>
          {collection.map((collection, key) => (
            <Link
              href={`/token/${collection.token}/${collection.currency}`}
              key={key}
              passHref
            >
              <Card {...collection} />
            </Link>
          ))}
        </HStack>
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
