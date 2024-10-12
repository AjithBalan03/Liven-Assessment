import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function DescriptionComp() {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box>
        <Heading as="h2" size="xl">
          San Dollars
        </Heading>
      </Box>
      <Box sx={{ width:"90%", margin:"10px"}}>
        <Text noOfLines={3} color={"#6c7378"}>
          Pay now, eat more later! Earn a bonus when you buy food upfront. Tap
          now to purchase.
        </Text>
      </Box>
    </Box>
  );
}
