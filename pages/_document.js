import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body className='light'>
          <div className='modal'></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}