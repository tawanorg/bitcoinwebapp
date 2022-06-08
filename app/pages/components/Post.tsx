import { Box, Heading, HStack } from "@bitcoin/design";
import type { Post as PostProps } from "libs/types";
import Image from "next/image";
import React from "react";

function Post({ title, thumbnail, excerpt, href }: PostProps) {
  return (
    <a href={href} title={title} target="_blank" rel="noreferrer">
      <Box>
        <HStack>
          <Box>
            <Image src={thumbnail} alt={title} width={100} height={100} />
          </Box>
          <Heading.H3>{title}</Heading.H3>
        </HStack>
      </Box>
    </a>
  );
}

export default Post;
