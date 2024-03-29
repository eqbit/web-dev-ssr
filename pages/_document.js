import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  
  render() {
    return (
      <Html lang='ru'>
      <Head />
      <body>
      <Main />
      <NextScript />
      </body>
      </Html>
    );
  }
}