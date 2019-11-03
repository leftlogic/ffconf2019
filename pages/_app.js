import App from 'next/app';
import Layout from '../src/components/layout';
import Section from '../src/components/section';

const Wrapper = ({ pathname, children }) => {
  const isMdx = pathname !== '/' && pathname !== '/workshop';

  if (!isMdx) {
    return children;
  }

  const id = pathname.replace('/', '');

  return (
    <Section id={id} mdx={isMdx}>
      {children}
    </Section>
  );
};

class FFApp extends App {
  render() {
    const { pathname } = this.props.router;

    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Wrapper pathname={pathname}>
          <Component {...pageProps} />
        </Wrapper>
      </Layout>
    );
  }
}

export default FFApp;
