import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.js';
import { GlobalStyle } from './styles/global.js';
import router from './router.jsx';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>,
);
