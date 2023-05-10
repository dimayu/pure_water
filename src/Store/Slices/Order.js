import { createSlice } from '@reduxjs/toolkit';

import { products } from '../../Data/Data';
import { arrWeek } from '../../Helpers/arrDate';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    user: {
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    order: {
      productTitle: products[0].size,
      productPrice: products[0].price,
      dateDelivery: arrWeek[0].date + "," + arrWeek[0].check,
      timeDelivery: '',
      amount: 1,
      total: products[0].price,
    },
  },
  reducers: {
    choiceProductSize(state, action) {
      state.order.productTitle = action.payload.productSize;
    },
    choiceProductPrice(state, action) {
      state.order.productPrice = action.payload.productPrice;
    },
    calcSum(state, action) {
      state.order.total = state.order.productPrice * action.payload.count;
      state.order.amount = action.payload.count;
    },
    choiceDate(state, action) {
      state.order.dateDelivery = action.payload.checkDay;
    },
    choiceTime(state, action) {
      state.order.timeDelivery = action.payload.checkTime;
    },
    userDataName(state, action) {
      state.user.name = action.payload.name;
    },
    userDataEmail(state, action) {
      state.user.email = action.payload.email;
    },
    userDataPhone(state, action) {
      state.user.phone = action.payload.phone;
    },
    userDataAddress(state, action) {
      state.user.address = action.payload.address;
    },
  },
});

export default orderSlice.reducer;

export const {
  choiceProductSize, choiceProductPrice,
  calcSum, choiceDate, choiceTime,
  userDataName, userDataEmail,
  userDataPhone, userDataAddress
} = orderSlice.actions;
