import { Flex, Heading, LoadingSpinner, Stack, Text } from "@bitcoin/design";
import styled from "styled-components";

const FlexRowCenter = styled.div``;
const MarketHeader = styled.div``;

interface Props {
  token: string;
  price: number;
  currency: string;
  updatedAt: number;
  isLoading: boolean;
}

function Header({
  token = "",
  price = 0,
  currency = "USD",
  updatedAt = new Date().getTime(),
  isLoading,
}: Partial<Props>) {
  if (isLoading) {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        paddingTop={20}
        paddingBottom={20}
      >
        <LoadingSpinner />
      </Flex>
    );
  }

  return (
    <Flex alignItems="center">
      <Stack>
        <Heading.H1>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency,
          }).format(price / 100)}
        </Heading.H1>
        <Text.Small>
          Updated at: {new Date(updatedAt * 1000).toLocaleString()}
        </Text.Small>
      </Stack>
      <Heading.H1>
        {token.toUpperCase()}/{currency.toUpperCase()}
      </Heading.H1>
    </Flex>
  );
}

export default Header;
