import Mock from "../mock";
import { AxiosRequestConfig } from "axios";
import { productDetails } from "../../utils/app-storage/product";

// Get Product Details by ID
Mock.onGet(/\/api\/product\/.+/).reply(async (config: AxiosRequestConfig) => {
  try {
    // Extract the product ID from the request URL
    const productId = config.url?.split("/").pop();

    // Mock product data based on the product ID
    const product = { ...productDetails, id: productId };

    return [200, { data: product }];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});
