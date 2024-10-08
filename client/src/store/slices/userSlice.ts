// userSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
    username: string;
    email: string;
    password: string;
}

interface UserState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: UserState = {
    status: 'idle',
    error: null,
};

// Thunk to register a new user
export const registerUser = createAsyncThunk('user/register', async (newUser: User) => {
    const response = await axios.post('http://localhost:3000/users', newUser);
    return response.data;
});

// Thunk to login user
export const loginUser = createAsyncThunk('user/login', async (credentials: { username: string; password: string }) => {
    const response = await axios.post('http://localhost:3000/login', credentials);
    return response.data;
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to register user';
            })
            // טיפול בתהליך הלוגין
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to login';
            });
    },
});

export default userSlice.reducer;
