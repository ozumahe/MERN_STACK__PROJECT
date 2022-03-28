import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "./actions";

// # components
import Posts from "./components/Posts/Posts";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";

function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const dialog = useSelector((store) => store.setDialog);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Box>
      <Navbar />
      {dialog && <Form currentId={currentId} setCurrentId={setCurrentId} />}
      <Box>
        <Posts currentId={currentId} setCurrentId={setCurrentId} />
      </Box>
    </Box>
  );
}

export default App;
