// remove next.js custom stuff
// https://github.com/zeit/next.js/issues/3155#issuecomment-338708632
import { Main } from 'next/document';

class MyMain extends Main {
  render() {
    const { html, errorHtml } = this.context._documentProps;
    const id = process.env.NODE_ENV !== 'production' ? '__next' : false;

    return (
      <>
        <div id={id} dangerouslySetInnerHTML={{ __html: html }} />
        {process.env.NODE_ENV !== 'production' && (
          <div
            id="__next-error"
            dangerouslySetInnerHTML={{ __html: errorHtml }}
          />
        )}
      </>
    );
  }
}

export default MyMain;
