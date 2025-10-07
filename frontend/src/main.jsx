import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.js';
import { GlobalStyle } from './styles/global.js';
import router from './router.jsx';
import { RouterProvider } from 'react-router-dom';
import { store } from './store/index.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <RouterProvider router={router} />
            </ThemeProvider>
        </Provider>
    </StrictMode>,
);
