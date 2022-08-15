// import Document, { Html, Head, Main, NextScript } from 'next/document';
// class myDocument extends Document {
//     render() {
//         return (
//             <Html lang="es">
//                 <Head>
//                     <title>Data Warehouse</title>
//                 </Head>
//                 <Body>
//                     <Main />
//                     <NextScript />
//                 </Body>
//             </Html>
//         )
//     }
// }

// export default myDocument;

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
