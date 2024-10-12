import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import AppExcIcon from "../../assets/app-exclusive.png";

export default function AppExclusive() {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      color={"white"}
      background={"#eb4f70"}
      borderRadius={20}
      width={"fit-content"}
      height={"28px"}
      padding={1}
      justifyContent={"center"}
      alignItems={"end"}
      position={"absolute"}
      top={"-20px"}
      left={"50%"}
      transform={"translateX(-50%)"}
    >
      <Image boxSize={"20px"} mr={"6px"} ml={1} src={AppExcIcon} />
      <Text mr="1.5">App exclusive</Text>
    </Box>
  );
}
