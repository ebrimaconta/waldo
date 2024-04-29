import React from "react";
import Box from "../box";
import FlexBox from "../flex-box";
import Typography, { H2, H3 } from "../typography";
import Button from "../button";
import Image from "../image";

const BookExamBanner = () => {
  return (
    <FlexBox
      minHeight={"302px"}
      width="full"
      borderRadius={"6px"}
      justifyContent={"center"}
      alignItems={"center"}
      bg="#FFE8B6"
      flexDirection={["column", "column", "row"]}
      p={["1rem", "1rem", 0]}
      my={["1rem", "1rem", "6rem"]}
    >
      <FlexBox
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        maxWidth={"515px"}
        mr={[0, 0, 0, "9.5rem"]}
        ml={[0, 0, 0, "-12rem"]}
      >
        <H2 color={"primary.green"}>Get an Acuvue prescription</H2>
        <Typography fontSize={"15px"} color="#4B566B" my="1.3rem">
          <b>
            It's really important to have a valid prescription when buying
            contact lenses.&nbsp;
          </b>
          if you don't have an up-to-date 1-Day Acuvue Moist prescription, book
          an eye exam near you or renew an expired one in just 10 minutes.
        </Typography>
        <Button
          bg="primary.green"
          px={["1rem", "1.5rem", "5rem"]}
          height={["42px", "51px"]}
          borderRadius={"5rem"}
          mt=".5rem"
          color="white"
        >
          Book an eye exam
        </Button>
      </FlexBox>
      <Image src="/assets/images/doctor.svg" alt="doctor" />
    </FlexBox>
  );
};

export default BookExamBanner;
