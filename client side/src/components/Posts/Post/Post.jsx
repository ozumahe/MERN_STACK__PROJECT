import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDialog } from "../../../actions";
import { Box, Image, Flex, Text, Button } from "@chakra-ui/react";
import { FaEllipsisH, FaThumbsUp, FaTrash } from "react-icons/fa";
// import { chakra } from "@chakra-ui/react";
import moment from "moment";

const Post = ({
  postData: {
    selectedFile,
    creator,
    title,
    message,
    tags,
    createdAt,
    likeCount,
    _id,
  },
  currentId,
  setCurrentId,
}) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    setCurrentId(_id);
    dispatch(setDialog());
  };

  return (
    <Box
      width="300px"
      borderColor="gray.100"
      borderWidth="2px"
      borderRadius="10px"
      height="400px"
      overflow="hidden"
      margin="10px"
    >
      <Flex padding="5px" alignItems="center" justifyContent="space-between">
        <Box>
          <Text fontWeight="bold">{creator}</Text>
          <Text fontSize="sm">{moment(createdAt).fromNow()}</Text>
        </Box>
        <Button padding="0" bg="none" onClick={handleEdit}>
          <FaEllipsisH />
        </Button>
      </Flex>
      <Box width="full" height="200px">
        <Image
          src={selectedFile}
          alt="image"
          width="full"
          height="full"
          objectFit="cover"
        />
      </Box>
      <Text margin="5px" fontSize="xl">
        {title}
      </Text>
      <Box>
        <Text>{message}</Text>
      </Box>
      <Flex padding="10px" justifyContent="space-between">
        <Box>
          <Button padding="0" bg="none" color="blue">
            <FaThumbsUp />
          </Button>
          {likeCount}
        </Box>
        <Box>
          <Button padding="0" bg="none" color="red">
            <FaTrash />
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Post;
