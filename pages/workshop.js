import Workshop from '../src/components/workshops/workshop';

const PageWorkshop = ({ slug }) => {
  return (
    <>
      <Workshop selectedSlug={slug} />
    </>
  );
};

PageWorkshop.getInitialProps = ({ query }) => {
  const { slug } = query;

  return {
    slug,
  };
};

export default PageWorkshop;
