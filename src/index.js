import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';

render(
  <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);
