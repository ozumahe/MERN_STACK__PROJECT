import React from "react";
import { useDispatch } from "react-redux";
import { setDialog } from "../../actions";

import { Flex, Text, Button } from "@chakra-ui/react";
import { FaPlusSquare } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <Flex
      width={"100%"}
      height={"60px"}
      bg={"blue.100"}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={"10px"}
    >
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        MERN_STACK
      </Text>
      <Button onClick={() => dispatch(setDialog())}>
        <FaPlusSquare /> Post
      </Button>
    </Flex>
  );
};

export default Navbar;
