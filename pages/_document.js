import Document, { Head, NextScript, Main } from '../src/components/NoNext';
import Meta from '../src/components/meta';

import config from '../src/config';

export default class MyDocument extends Document {
  render() {
    const { id, version, serviceWorker } = config;

    return (
      <html lang="en" id={id} data-version={version}>
        <Head>
          <Meta />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/js/script.js" />
          {process.env.NODE_ENV === 'production' && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
if (${serviceWorker} && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' });
}
`,
              }}
            />
          )}
        </body>
      </html>
    );
  }
}
