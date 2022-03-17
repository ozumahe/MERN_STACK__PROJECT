import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Post from "./Post/Post";
const Posts = () => {
  return (
    <Box>
      <Text fontSize="3xl" fontWeight="bold">
        Posts
      </Text>
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Posts;
