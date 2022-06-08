import { Box, Stack } from "@bitcoin/design";
import { TokenCollection } from "libs/types";
import Image from "next/image";
import React from "react";

function Card({ name, symbol, ...props }: TokenCollection) {
  return (
    <Box {...props}>
      <Stack>
        <div>
          <Image
            src="https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png?v=022"
            alt="Bitcoin Cash"
            width={50}
            height={50}
          />
        </div>
        <div>
          {name} ({symbol.toUpperCase()})
        </div>
      </Stack>
    </Box>
  );
}

export default Card;
