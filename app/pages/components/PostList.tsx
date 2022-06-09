import { Flex, LoadingSpinner, Stack, Text } from "@bitcoin/design";
import type { Post as PostProps } from "libs/types";
import React from "react";
import Post from "./Post";

interface Props {
  posts?: PostProps[];
  isLoading: boolean;
}

function PostList({ isLoading, posts = [] }: Props) {
  const isEmpty = !isLoading && posts.length === 0;

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

  if (isEmpty) {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        paddingTop={20}
        paddingBottom={20}
      >
        <Text.P>No news</Text.P>
      </Flex>
    );
  }

  return (
    <Stack>
      {posts.map((post, key) => (
        <Post key={key + post.publish_date} {...post} />
      ))}
    </Stack>
  );
}

export default PostList;
