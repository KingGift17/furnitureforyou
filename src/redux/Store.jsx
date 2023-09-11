import { configureStore } from "@reduxjs/toolkit";

import CartSlices from "./slices/CartSlices.jsx";

const Store = configureStore({
  reducer: {
    cart: CartSlices,
  },
});

export default Store;
