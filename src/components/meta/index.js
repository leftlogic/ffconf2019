import moment from 'moment';
import { Fragment } from 'react';

import config from '../../config';
import script from 'raw-loader!../../../static/js/head.js';

const {
  themeColor,
  ticketPrice,
  year,
  dates,
  analytics,
  version,
  onSaleDate,
  fontMd5,
} = config;
const [date] = dates;
const momentDate = moment(date);
const formattedDate = momentDate.format('Do MMMM YYYY');
const twitterDates = `${momentDate.format('D-MMM')}`;
const twitterOnSaleDate = moment(onSaleDate).format('D-MMMM ha');

const Meta = () => {
  const inlineScript = `(${script})(['${date}']);`;

  return (
    <Fragment>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        name="description"
        content={`ffconf ${year} is a one day JavaScript Conference at the Duke of York’s Picturehouse in Brighton, UK run on ${formattedDate}`}
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content={themeColor} />
      <meta name="apple-mobile-web-app-title" content={`ffconf ${year}`} />
      <meta name="application-name" content={`ffconf ${year}`} />

      <title>ffconf :: JavaScript Conference :: {formattedDate}</title>

      {/* facebook open graph tags */}
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content={`https://${year}.ffconf.org/`} /> */}
      <meta property="og:title" content="ffconf :: JavaScript Conference" />
      <meta
        property="og:description"
        content="Care about the web? ffconf is curated for you. One day affordable event. 8 amazing sessions, check out the web site today!"
      />
      <meta
        property="og:image"
        content={`https://${year}.ffconf.org/static/images/twitter-card.png`}
      />

      {/* twitter card tags additive with the og: tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ffconf" />
      <meta name="twitter:creator" content="@rem" />
      <meta name="twitter:domain" value="ffconf.org" />
      <meta name="twitter:title" content="ffconf :: JavaScript Conference" />

      <meta
        name="twitter:description"
        value={`Care about the web? ffconf is curated for you. One day event in Brighton, UK. 8 amazing sessions, limited tickets @ £${ticketPrice}`}
      />
      <meta
        name="twitter:image"
        content={`https://${year}.ffconf.org/static/images/twitter-card.png`}
      />
      <meta name="twitter:url" value={`https://${year}.ffconf.org`} />
      <meta
        name="twitter:label1"
        value="Tickets available - set your alarms!"
      />
      <meta name="twitter:data1" value={twitterOnSaleDate} />
      <meta name="twitter:label2" value="When? Twice!" />
      <meta name="twitter:data2" value={`${twitterDates} @ £${ticketPrice}`} />

      {process.env.NODE_ENV === 'production' && (
        <link rel="stylesheet" href={`/static/css/styles.css?${version}`} />
      )}

      <link
        rel="preload"
        as="script"
        href={`/static/js/ff-fonts.${fontMd5}.json`}
      />

      <link
        rel="all-the-source"
        href={`https://github.com/leftlogic/ffconf${year}`}
      />
      <link rel="author" href="/static/humans.txt" />
      <link rel="manifest" href="/static/site.webmanifest" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/images/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/static/images/favicons/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/static/images/favicons/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="mask-icon"
        href="/static/images/favicons/safari-pinned-tab.svg"
        color="#111111"
      />
      <link rel="shortcut icon" href="/static/images/favicons/favicon.ico" />
      <meta
        name="msapplication-config"
        content="/static/images/favicons/browserconfig.xml"
      />

      {process.env.NODE_ENV === 'production' && (
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
          function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
          e=o.createElement(i);r=o.getElementsByTagName(i)[0];
          e.src='https://www.google-analytics.com/analytics.js';
          r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
          ga('create','${analytics}','auto');ga('send','pageview');`,
          }}
        />
      )}

      <script dangerouslySetInnerHTML={{ __html: `var md5 = '${fontMd5}';` }} />
      <script dangerouslySetInnerHTML={{ __html: `${inlineScript}` }} />
    </Fragment>
  );
};

export default Meta;
