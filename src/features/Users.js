import { createSlice } from '@reduxjs/toolkit';
import { UsersData } from '../FakeData';

export const userSlice = createSlice({
  name: 'users',
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },

    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },

    updateUser: (state, action) => {
      state.value.map((user) => {
        if (user.id == action.payload.id) {
          user.nama = action.payload.nama;
          user.umur = action.payload.umur;
          user.hobi = action.payload.hobi;
          user.alamat = action.payload.alamat;
        }
      });
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
