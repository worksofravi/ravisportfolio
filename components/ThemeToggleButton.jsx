'use client';
import { updateTheme } from '@/lib/features/theme/themeSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ThemeToggleButton = () => {
    const [isDarkMode, setIsDarkMode] = useState(0);
    const savedTheme = useSelector((state) => state.theme.value);
    const dispatch = useDispatch();
    // Check localStorage to see if the user has a saved theme preference
    
    useEffect(() => {
        if (savedTheme) {
            setIsDarkMode(1);
            document.body.classList.add('dark-mode');
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            dispatch(updateTheme(0))
            setIsDarkMode(0);
            document.body.classList.remove('dark-mode');

        } else {
            dispatch(updateTheme(1))
            setIsDarkMode(1);
            document.body.classList.add('dark-mode');
        }
    };

    return (
        <button onClick={toggleTheme} style={{ position: "absolute", bottom: "0", right: "0", zIndex: "9999" }}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
};

export default ThemeToggleButton;