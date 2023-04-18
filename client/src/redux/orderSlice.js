import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../config';

const initialState = {
    order: []
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder: async (state, action) => {
            try {
              const order = action.payload;
              const response = await axios.post(`${API_URL}/orders`, order);
              state.order.push(response.data);
              toast.success('Your order has been placed successfully!');
            } catch (error) {
              toast.error('An error occurred while placing your order. Please try again later.');
            }
          },
    }
})

export const { addOrder } = orderSlice.actions;

export default orderSlice.reducer;
