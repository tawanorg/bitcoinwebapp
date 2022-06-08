import { QuickChart } from "@bitcoin/charts";
import { Box, Flex, Heading, HStack, Stack } from "@bitcoin/design";
import { GetTokenResponse, TokenCollection } from "libs/types";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const CardBox = styled(Stack)`
  font-size: 1.2rem;
  line-height: 1.667em;
  border-width: 1px;
  border-color: transparent;
  padding: 20px;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.shadow};

  &:hover,
  &:focus {
    border-width: 1px;
    border-color: gray;
    background-color: #eee;
  }
`;

function Card({
  name = "Untitled",
  token = "Untitled",
  thumbnail,
  cachedToken,
  // @ts-ignore
  children,
  ...props
}: TokenCollection & { cachedToken: GetTokenResponse | undefined }) {
  return (
    <Box {...props}>
      <CardBox>
        <HStack>
          <Stack>
            <Box>
              <Image
                src={thumbnail}
                alt="Bitcoin Cash"
                width={50}
                height={50}
              />
            </Box>
            <Heading.H2>
              {name} ({token.toUpperCase()})
            </Heading.H2>
          </Stack>
          <Flex>
            <QuickChart data={cachedToken?.history} />
          </Flex>
        </HStack>
      </CardBox>
    </Box>
  );
}

export default Card;
