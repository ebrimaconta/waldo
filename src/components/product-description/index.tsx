import React from "react";
import { ProductDescriptionBox } from "./styles";

const ProductDescription = ({ html }: { html: string }) => {
  return <ProductDescriptionBox dangerouslySetInnerHTML={{ __html: html }} />;
};

export default ProductDescription;
