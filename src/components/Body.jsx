import { Box } from '@chakra-ui/react'
import React from 'react'
import DescriptionComp from './body-components/DescriptionComp'
import PurchaseAsGift from './body-components/PurchaseAsGift'
import PricingDetailsList from './body-components/PricingDetailsList'
import { mockRes } from '../config/MockData'

export default function Body() {

    const [priceList, setPriceList] = React.useState(mockRes)

    const handleGiftChange = (isEnabled) => {
        console.log("Gift changed",isEnabled);
        let listWithoutExclusive = mockRes.filter((item) => !item.isAppExclusive)
        if(isEnabled){
            setPriceList(listWithoutExclusive)
        }else{
            setPriceList(mockRes)
        }
    }
  return (
    <Box display={'flex'} flexDirection={'column'}>
        <DescriptionComp />
        <PurchaseAsGift handleGiftChange={handleGiftChange}/>
        <PricingDetailsList priceList={priceList}/>
    </Box>
  )
}
