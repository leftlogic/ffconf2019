/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "Hack" }]*/
import { Fragment } from 'react';

import Hack from '../hack';
import Header from '../header';
import NavMain from '../nav-main';
import Footer from '../footer';
import Sponsors from '../sponsors';
import Quote from '../quote';

import './layout.scss';

const Layout = ({ children }) => (
  <Fragment>
    <div className="wrapper">
      <Header />

      <div className="wrapper-content">
        <NavMain />

        <main className="main">
          {children}

          <Quote />

          <Sponsors />
        </main>
      </div>

      <Footer />
    </div>
  </Fragment>
);

export default Layout;
