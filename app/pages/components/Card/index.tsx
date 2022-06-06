import { Box, Stack } from "@bitcoin/design";
import Image from "next/image";
import React, { PropsWithChildren } from "react";

const CardInner = (props: PropsWithChildren<any>) => (
  <Box cursor="pointer" {...props} />
);

function Card() {
  return (
    <CardInner>
      <Stack>
        <div>
          <Image
            src="https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png?v=022"
            alt="Bitcoin Cash"
            width={50}
            height={50}
          />
        </div>
        <div>Bitcoin Cash</div>
      </Stack>
    </CardInner>
  );
}

export default Card;
