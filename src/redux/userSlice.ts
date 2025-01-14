import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string;
  id: string;
}

interface UsersListState {
  userList: User[];
}

const initialState: UsersListState = {
  userList: [
    { name: "Андрей", id: "1" },
    { name: "Влад", id: "2" },
    { name: "Александр", id: "3" },
  ],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUserNameById: (
      state,
      action: PayloadAction<{ id: string; newName: string }>
    ) => {
      const { id, newName } = action.payload;

      const index = state.userList.findIndex((user) => user.id === id);
      state.userList[index].name = newName;
    },
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;
