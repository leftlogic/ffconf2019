import Layout from '../src/components/layout';
import Workshop from '../src/components/workshops/workshop';

const PageWorkshop = ({ slug }) => {
  return (
    <Layout>
      <Workshop selectedSlug={slug} />
    </Layout>
  );
};

PageWorkshop.getInitialProps = ({ query }) => {
  const { slug } = query;

  return {
    slug,
  };
};

export default PageWorkshop;
