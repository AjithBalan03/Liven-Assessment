import { Box, Image, Switch, Text } from "@chakra-ui/react";
import React from "react";
import GiftIcon from "../../assets/gift-icon.svg";

export default function PurchaseAsGift(props) {

    const { handleGiftChange } = props;

    const [isChecked, setIsChecked] = React.useState(false);

  return (
    <Box display={"flex"} justifyContent={"center"} sx={{ mt: "10px" }}>
        <Box
          display={"flex"}
          alignItems={"center"}
          sx={{
            height: "40px",
            border: "1px solid #d6d6d6",
            borderRadius: "20px",
            backgroundColor: "#f3f3f3",
          }}
        >
          <Image
            marginLeft={"10px"}
            src={GiftIcon}
            boxSize={"14px"}
            alt="Gift Icon"
          />
          <Text
            color={"#7b7b7b"}
            textAlign={"left"}
            marginLeft={"5px"}
            noOfLines={1}
            fontSize={"sm"}
            sx={{ marginRight: "10px" }}
          >
            Purchase as a gift
          </Text>
          <Switch sx={{ mr: 1 }} size="lg" value={isChecked} onChange={(e) => {setIsChecked(!isChecked);handleGiftChange(!isChecked)}} />
        </Box>
    </Box>
  );
}
