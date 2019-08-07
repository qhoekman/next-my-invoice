import puppeteer from 'puppeteer';
import { renderToStaticMarkup } from 'react-dom/server';

export const componentToPDFBuffer = async component => {
  const html = renderToStaticMarkup(component);
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const options = {
    format: 'A4',
    orientation: 'portrait',
    border: '10mm',
    footer: {
      height: '10mm'
    },
    type: 'pdf',
    timeout: 30000
  };
  await page.setContent(html);
  const buffer = await page.pdf(options);
  return buffer;
};
