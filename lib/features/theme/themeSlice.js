import { storage } from '@/config/config'
import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: (typeof window != 'undefined') ? JSON.parse(localStorage.getItem(storage.theme)) || 0 : 0
    },
    reducers: {
        updateTheme: (state, action) => {
            state.value = action.payload;
            localStorage.setItem(storage.theme, JSON.stringify(state.value));
        }
    }
})

// Action creators are generated for each case reducer function
export const { updateTheme } = themeSlice.actions

export default themeSlice.reducer