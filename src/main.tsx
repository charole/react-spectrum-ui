import {
  defaultTheme as spectrumDefaultTheme,
  Provider as SpectrumProvider,
} from '@adobe/react-spectrum';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SpectrumProvider theme={spectrumDefaultTheme} colorScheme="light">
      <App />
    </SpectrumProvider>
  </React.StrictMode>,
);
