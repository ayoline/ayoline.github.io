import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';

import App from './App';

const StyledBody = styled.body`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledBody>
    <App />
  </StyledBody>
);
