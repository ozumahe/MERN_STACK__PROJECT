import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDialog, createPost, updatePost } from "../../actions";
import FileBase64 from "react-file-base64";
import { Button, Box, Text, Input, Textarea } from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";

const Form = ({ currentId, setCurrentId }) => {
  const post = useSelector((store) =>
    currentId ? store.post.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  // # Handles------
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }

    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });

    dispatch(setDialog());
  };

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleCancle = () => {
    dispatch(setDialog());
  };
  // # Handles-----X---

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  return (
    <Box position="relative" width={"100%"} height={"100vh"}>
      <Button
        onClick={handleCancle}
        position="absolute"
        top="10px"
        right="10px"
      >
        <FaTimes />
      </Button>
      <Box
        maxWidth={"500px"}
        borderRadius="10px"
        borderWidth="2px"
        borderColor="gray.200"
        margin="auto"
        marginTop="5px"
        padding={"10px"}
      >
        <Text fontSize="xl" fontWeight="bold">
          {currentId ? "Editing" : "Create"} Post
        </Text>
        <form onSubmit={handleSubmit}>
          <Input
            type={"text"}
            name="creator"
            value={postData.creator}
            placeholder="creator"
            width="full"
            marginBottom="10px"
            onChange={handleChange}
          />
          <Input
            type={"text"}
            name="title"
            value={postData.title}
            placeholder="title"
            width="full"
            marginBottom="10px"
            onChange={handleChange}
          />

          <Textarea
            type={"text"}
            name="message"
            value={postData.message}
            placeholder="message"
            width="full"
            height="100px"
            marginBottom="10px"
            onChange={handleChange}
          />
          <Input
            type={"text"}
            name="tags"
            value={postData.tags}
            placeholder="tags"
            width="full"
            marginBottom="10px"
            onChange={handleChange}
          />
          <Box>
            <FileBase64
              type="file"
              multile={false}
              onDone={({ base64 }) => {
                setPostData({ ...postData, selectedFile: base64 });
              }}
            />
          </Box>
          <Button type="submit" width="full" marginTop="10px">
            Post
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Form;
