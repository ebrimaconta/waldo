"use client";
import { FC } from "react";
import StyledComponentBannerBar from "./styles";
import Box from "../box";
import Image from "../image";
import Typography from "../typography";

const productBenefits = [
  "Subscribe and save",
  "Free shipping & returns",
  "Best price guarantee",
];
const BannerBar: FC = () => {
  return (
    <StyledComponentBannerBar>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        mx={[1, 0]}
      >
        {productBenefits?.map((benefit, i) => (
          <Box
            flex={"flex"}
            key={i}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            mx={[2, 10, 20]}
            className="benefit-item"
          >
            <Image src={"icons/white-check.png"} alt="" />

            <Typography fontSize={[10, 14]} ml={"6px"} display={"inline"}>
              {benefit}
            </Typography>
          </Box>
        ))}
      </Box>
    </StyledComponentBannerBar>
  );
};

export default BannerBar;
