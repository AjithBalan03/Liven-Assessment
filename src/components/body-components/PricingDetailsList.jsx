import { Box } from "@chakra-ui/react";
import React from "react";
import { mockRes } from "../../config/MockData";
import PricingDetails from "./PricingDetails";

export default function PricingDetailsList(props) {

    const { priceList } = props

  return (
    <Box>
      {priceList?.map((item, index) => {
        return (
          <PricingDetails
            buyPrice={item?.buyPrice}
            bonusPrice={item?.bonusPrice}
            isAppExclusive={item?.isAppExclusive}
          />
        );
      })}
    </Box>
  );
}
