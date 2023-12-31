import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta name="twitter:card" content="summary" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#0DBBA5" />
        <meta property="og:title" content="Scrollery" />
        <meta
          property="og:description"
          content="React TypeScript library for effortlessly animating your websites on scroll."
        />
        <meta property="og:image" content="/og.png" />

        <link rel="icon" href="/logo.png" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
