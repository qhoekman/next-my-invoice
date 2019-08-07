import { ThemeProvider } from 'emotion-theming';
import PropTypes from 'prop-types';
import React from 'react';
import DefaultTheme from 'react-tailwhip';

import { Footer } from './footer';

const PDFLayout = ({ children }) => (
  <ThemeProvider theme={DefaultTheme}>
    <html>
      <head>
        <meta charSet="utf8" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  </ThemeProvider>
);

PDFLayout.propTypes = {
  children: PropTypes.node
};

export default PDFLayout;
