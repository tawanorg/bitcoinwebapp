import { Heading, HStack, Page, Stack } from "@bitcoin/design";
import { TokenCollection } from "libs/types";
import type { NextPage } from "next";
import Link from "next/link";
import Card from "./components/Card";
import fetcher from "./utils/fetcher";

interface Props {
  tokens: TokenCollection[];
}

const Home: NextPage<Props> = ({ tokens = [] }) => {
  return (
    <Page.Container>
      <Stack>
        <Heading.H1>Tawan Exchange</Heading.H1>
        <HStack>
          {tokens.map((token, key) => (
            <Link href={`/token/${token.symbol}`} key={key} passHref>
              <Card {...token} />
            </Link>
          ))}
        </HStack>
      </Stack>
    </Page.Container>
  );
};

export async function getServerSideProps() {
  const allTokenResult = await fetcher<TokenCollection[]>("/api/all-tokens");

  if (!allTokenResult)
    return {
      props: { tokens: [] },
    };

  return {
    props: {
      tokens: allTokenResult,
    },
  };
}

export default Home;
