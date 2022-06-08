import { Box, Stack } from "@bitcoin/design";
import { TokenCollection } from "libs/types";
import Image from "next/image";
import React, { PropsWithChildren } from "react";

const CardInner = (props: PropsWithChildren<any>) => (
  <Box cursor="pointer" {...props} />
);

function Card({ name, symbol, ...props }: TokenCollection) {
  return (
    <CardInner {...props}>
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
    </CardInner>
  );
}

export default Card;
