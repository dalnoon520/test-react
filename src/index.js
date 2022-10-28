import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './components/GlobalStyles';
import reportWebVitals from './reportWebVitals';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <AppProvider i18n={enTranslations}>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </AppProvider>
    </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
