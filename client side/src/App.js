import { Box } from "@chakra-ui/react";

import { useSelector } from "react-redux";

// # components
import Posts from "./components/Posts/Posts";
import Navbar from "./components/Navbar/Navbar";
import Dialog from "./components/Dialog/Dialog";

function App() {
  const dialog = useSelector((store) => store.setDialog);
  return (
    <Box>
      <Navbar />
      {dialog && <Dialog />}
      <Posts />
    </Box>
  );
}

export default App;
