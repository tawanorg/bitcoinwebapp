import { Stack } from "@bitcoin/design";
import type { Post as PostProps } from "libs/types";
import React from "react";
import Post from "./Post";

interface Props {
  posts?: PostProps[];
  isLoading: boolean;
}

function PostList({ isLoading, posts = [] }: Props) {
  return (
    <div>
      {isLoading && <div>Loading</div>}
      {!isLoading && posts.length === 0 && <div>No news</div>}
      {!isLoading && posts.length > 0 && (
        <Stack>
          {posts.map((post, key) => (
            <Post key={key + post.publish_date} {...post} />
          ))}
        </Stack>
      )}
    </div>
  );
}

export default PostList;
