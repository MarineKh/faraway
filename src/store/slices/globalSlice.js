import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {setStorageItem} from "../../helpers/localStorage";

export const globalSlice = createSlice({
    name: 'data',
    initialState: initialState(),
    reducers: {
        setUsers(state, action) {
            setStorageItem('localUsersData', action.payload);
            state.usersData = action.payload;
        },
        setSelectedUser(state, action) {
            state.selectedUser = action.payload;
        },
        isSidebarMenuOpen(state, action) {
            state.isSidebarMenuOpen = action.payload;
        },
        isEditModalOpen(state, action) {
            state.isEditModalOpen = action.payload;
        },
        isDeleteModalOpen(state, action) {
            state.isDeleteModalOpen = action.payload;
        },
    },
});

export const { setUsers, isSidebarMenuOpen, setSelectedUser, isEditModalOpen, isDeleteModalOpen } = globalSlice.actions;
export default globalSlice.reducer;