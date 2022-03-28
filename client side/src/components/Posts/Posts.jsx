import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
// import { CircularProgress } from "@mui/material";
import Post from "./Post/Post";

const Posts = ({ currentId, setCurrentId }) => {
  const postsData = useSelector((store) => store.post);

  if (!postsData.length) {
    return <h1>No Post Found</h1>;
    // return <CircularProgress />;
  }

  return (
    <Box>
      <Text fontSize="3xl" fontWeight="bold">
        Posts
      </Text>
      <Flex padding="10px" justifyContent="center" flexWrap="wrap">
        {postsData.map((postData) => (
          <Post
            postData={postData}
            key={postData._id}
            currentId={currentId}
            setCurrentId={setCurrentId}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Posts;
