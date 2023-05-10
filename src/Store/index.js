import { configureStore } from '@reduxjs/toolkit';

import Counter from './Slices/Counter';
import Order from './Slices/Order';

export default configureStore({
  reducer: {
    counter: Counter,
    order: Order,
  },
});