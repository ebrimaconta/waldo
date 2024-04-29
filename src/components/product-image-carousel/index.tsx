"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import Box from "../box";

const CarouselContainer = styled.div<
  SpaceProps & React.HTMLAttributes<HTMLDivElement>
>`
  ${space}
`;

interface ProductImageCarouselProps {
  images: string[];
}

const ProductImageCarousel: React.FC<ProductImageCarouselProps> = ({
  images,
}) => {
  return (
    <CarouselContainer mt={4} mb={4}>
      <Carousel
        showStatus={false}
        showThumbs={true}
        swipeable
        showArrows={false}
        showIndicators={false}
        swipeScrollTolerance={5}
        transitionTime={500}
        thumbWidth={69}
        emulateTouch={true}
        dynamicHeight={false}
      >
        {images.map((image, index) => (
          <Box
            maxHeight={["150px", "200px", "280px", "220px", "200px"]}
            key={index}
          >
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          </Box>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default ProductImageCarousel;
