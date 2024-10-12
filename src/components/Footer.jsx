import { Box, Image } from "@chakra-ui/react";
import React from "react";
import livenLogo from "../assets/liven-logo.png";

export default function Footer() {
  return (
    <Box mt="4">
      <Image
        objectFit="logo"
        src={livenLogo}
        alt="liven-logo"
        sx={{ width: "55px", height: "30px" }}
        onClick={() => {
          // window.open(staticUrls.app,'blank') -> this is for opening the app in new tab
          window.location.href = staticUrls.home;
        }}
      />
    </Box>
  );
}
