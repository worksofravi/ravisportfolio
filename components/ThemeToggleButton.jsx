'use client';
import { updateTheme } from '@/lib/features/theme/themeSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

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
        <button
            onClick={toggleTheme}
            className='round-border-rad p-2 pt-1 theme-sticky-btn fs-25'
        >
            {isDarkMode ? <MdSunny /> : <BsMoonStarsFill />}
        </button>
    );
};

export default ThemeToggleButton;