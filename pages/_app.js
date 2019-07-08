import { Fragment } from 'react';
import App, { Container } from 'next/app';
import Layout from '../src/components/layout';
import Section from '../src/components/section';

// import '../src/css/index.scss';

class FFApp extends App {
  render() {
    const { pathname } = this.props.router;
    const isMdx = pathname !== '/' && pathname !== '/workshop';
    const Wrapper = isMdx ? Section : Fragment;
    const id = pathname.replace('/', '');

    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Wrapper id={id} mdx={isMdx}>
            <Component {...pageProps} />
          </Wrapper>
        </Layout>
      </Container>
    );
  }
}

export default FFApp;
