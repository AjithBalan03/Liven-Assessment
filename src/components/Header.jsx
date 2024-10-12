import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import livenLogo from "../assets/liven-logo.png";
import { staticUrls } from "../config/UrlConfig";

export default function Header() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      sx={{ justifyContent: "space-between", width: "100%" }}
    >
      <Box
        display="flex"
        alignItems="center"
        sx={{ justifyContent: "flex-start" }}
      >
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
      <Box
        display="flex"
        alignItems="center"
        sx={{ justifyContent: "flex-end" }}
      >
        <Button
          onClick={() => {
            // window.open(staticUrls.app,'blank')
            window.location.href = staticUrls.app;
          }}
          sx={{ borderRadius: 20 }}
          color="white"
          backgroundColor="#eb4f70"
          size="sm"
        >
          Get app
        </Button>
      </Box>
    </Box>
  );
}
