import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import DefaultTheme from 'react-tailwhip';

import Article from '../components/Article';
import PDFLayout from '../components/PDFLayout';
import { componentToPDFBuffer } from '../lib/pdfHelper';

class IndexPage extends React.Component {
  static async getInitialProps({ req, res, query }) {
    const exportPDF = query.exportPDF === 'true';
    const isServer = !!req;

    if (!process.browser && isServer && exportPDF) {
      const buffer = await componentToPDFBuffer(
        <PDFLayout>
          <Article />
        </PDFLayout>
      );

      res.setHeader('Content-disposition', 'attachment; filename="article.pdf');
      res.setHeader('Content-Type', 'application/pdf');

      res.end(buffer);
    }

    return {};
  }

  render() {
    return (
      <ThemeProvider theme={DefaultTheme}>
        <Global
          styles={{
            'html, body ': {
              margin: 0,
              overflow: 'hidden'
            },
            '*': {
              boxSizing: 'border-box'
            }
          }}
        />

        <Article />
      </ThemeProvider>
    );
  }
}

export default IndexPage;
