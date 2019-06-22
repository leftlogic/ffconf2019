import { Fragment } from 'react';

import Header from '../header';
import NavMain from '../nav-main';
import Footer from '../footer';
import Sponsors from '../sponsors';
import Quote from '../quote';
import QuotesTemplates from '../quote/quotes-templates';

// import './layout.scss';

const Layout = ({ children }) => (
  <Fragment>
    <div className="gradient">
      <div className="wrapper">
        <Header />

        <div className="lighrays">
          <NavMain />

          <main className="main">
            {children}

            <Quote />

            <Sponsors />
          </main>
        </div>

        <Footer />

        <QuotesTemplates />
      </div>
    </div>
  </Fragment>
);

export default Layout;
