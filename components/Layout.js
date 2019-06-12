import Head from 'next/head';

const Layout = ({ children }) => <>
<Head>
  <title>ffconf 2019</title>
  <link rel="preload" as="font" href="/static/fonts/Arber-Vintage-Extended.woff" />
  <link rel="stylesheet" href="/static/css/style.css" />
</Head><main>
<h2>This is the layout</h2>
  { children }
</main></>

export default Layout;
