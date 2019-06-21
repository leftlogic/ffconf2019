import marked from 'marked';

marked.setOptions({ headerIds: false });

const Markdown = ({ children, className }) => {
  const formatted = marked(children);

  return (
    <div
      className={className ? className : undefined}
      dangerouslySetInnerHTML={{ __html: formatted }}
    />
  );
};

export default Markdown;
