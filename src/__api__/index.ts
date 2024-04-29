import Mock from "./mock";

import "./__db__/cart";
import "./__db__/product";
Mock.onAny().passThrough();
