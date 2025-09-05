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
          <div class="event_status" role="region" aria-label="Event status">
            <span>This event has been and gone, <a href="https://ffconf.org/latest">click here to see the latest
                FFConf</a></span>
            <style>{`
              .event_status {
                position: sticky;
                top: 0;
                width: 100%;
                left: 0;
                background: white;
                padding: 12px 16px;
                text-align: center;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
      
                * {
                  color: black;
                }
      
                a {
                  color: inherit;
                  text-decoration: underline;
                }
              }`}
            </style>
          </div>
        
          <Main />
          <NextScript />
          <script src="/static/js/script.js" />
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
