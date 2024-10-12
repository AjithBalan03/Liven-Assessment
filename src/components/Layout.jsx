import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

export default function Layout() {
  return (
    <Box display="flex" flexDirection="column" sx={{ width: "100%" }}>
      <Box>
        <Header />
      </Box>
      <Box display="flex" justifyContent={"center"} sx={{ mt:"20px", mb:"20px", minHeight:"800px"}}>
        <Body />
      </Box>
      <Box display="flex" justifyContent={"center"}>
        <Footer />
      </Box>
    </Box>
  );
}
