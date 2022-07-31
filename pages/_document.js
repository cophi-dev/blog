import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@YOUR_TWITTER_USERNAME" />
          <meta name="twitter:title" content="TITLE_FOR_YOUR_PAGE" />
          <meta
            name="twitter:description"
            content="DESCRIPTION_FOR_YOUR_PAGE"
          />
          <meta name="twitter:image" content="URL_FOR_YOUR_IMAGE" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
