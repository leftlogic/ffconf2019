import App, { Container } from 'next/app';

import '../src/css/index.scss';

class FFApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default FFApp;
