import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Global, ThemeProvider } from '@emotion/react';

import { GlobalStyles } from 'Styles/GlobalStyle';
import { theme } from './Styles/Theme';

import { App } from 'components/App';
import { persistor, store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
      <Global styles={GlobalStyles} />
    </ThemeProvider>
  </React.StrictMode>
);
