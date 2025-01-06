import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './features/theme/themeSlice'

const store = configureStore({
    reducer: {
        theme: themeSlice,
    }
})
export default store;