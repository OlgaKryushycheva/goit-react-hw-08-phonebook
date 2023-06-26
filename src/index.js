import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import { store } from 'redux/store';
import { App } from 'components/App';
import { GlobalStyles } from 'Styles/GlobalStyle';
import { theme } from './Styles/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </Provider>
      <Global styles={GlobalStyles} />
    </ThemeProvider>
  </React.StrictMode>
);
