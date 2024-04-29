import React, { useState } from "react";
import FlexBox from "../flex-box";
import Checkbox from "../checkbox";
import Box from "../box";
import Typography, { SemiSpan } from "../typography";
import Image from "../image";

const ProductsSavingBanner = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Box bg="#E2EFDD" px="2rem" py=".8rem" width="full" borderRadius={"6px"}>
      <Checkbox
        checked={checked}
        color="#82C241"
        label={
          <FlexBox flexDirection={"column"} ml="1rem">
            <Typography
              fontWeight={400}
              fontSize={16}
              color="#222222"
              mb=".5rem"
            >
              Subscribe & save 5% off every future order
            </Typography>
            <SemiSpan
              color="primary.green"
              style={{ textDecoration: "underline" }}
              fontWeight={700}
            >
              Learn more <Image src="/icons/green-right-move.svg" ml={1} />
            </SemiSpan>
          </FlexBox>
        }
        onChange={() => setChecked(!checked)}
      />
    </Box>
  );
};

export default ProductsSavingBanner;
