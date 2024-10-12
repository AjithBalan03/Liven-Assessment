import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import CoinIcon from "../../assets/coin.png";
import AppExclusive from "./AppExclusive";
import { staticUrls } from "../../config/UrlConfig";

export default function PricingDetails(props) {
  const { buyPrice, bonusPrice, isAppExclusive } = props;

  return (
    <Box
      id="container"
      sx={{
        border: "2px solid #e2e2e2",
        p: 2,
        mt: 6,
        borderRadius: "15px",
        boxShadow: "0px 0px 3px 1px #e2e2e2",
      }}
      display={"flex"}
      flexDirection={"column"}
      cursor={"pointer"}
      onClick={() => {
        window.location.href = staticUrls.card
      }}
    >
      {isAppExclusive && (
        <Box id="app-exclusive" sx={{ position: "relative" }}>
          <AppExclusive />
        </Box>
      )}
      <Box
        id="parent"
        display={"flex"}
        justifyContent={"space-between"}
        marginX={3}
      >
        <Box
          id="buy-card"
          display={"flex"}
          flexDirection={"column"}
          minWidth={"100px"}
        >
          <Box>
            <Heading as={"h4"} size={"sm"} fontWeight={"normal"}>
              {" "}
              Buy{" "}
            </Heading>
            <Heading as={"h2"} size={"2xl"}>
              {buyPrice}
            </Heading>
          </Box>
        </Box>
        <Box
          id="icon-card"
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
        >
          <Image boxSize={"34px"} src={CoinIcon} />
        </Box>
        <Box
          id="bonus-card"
          display={"flex"}
          flexDirection={"column"}
          color={"#73bdb3"}
          minWidth={"100px"}
        >
          <Box>
            <Heading as={"h4"} size={"sm"} fontWeight={"normal"}>
              {" "}
              Bonus{" "}
            </Heading>
            <Heading as={"h2"} size={"2xl"}>
              {bonusPrice}
            </Heading>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
