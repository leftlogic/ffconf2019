/* eslint no-console: off */
const version = '@VERSION@'; // ☠️ DO NOT TOUCH THIS LINE!! - the dev server and the build script automatically replace it with the package version
const staticCacheName = `v${version}::static`;

/*
via the console:

$$('a, link, img, script') // get all linkable items
  .map(({ src, href = src }) => href) // map to a single property
  .filter(_ => _.includes(location.hostname)) // keep those urls on our origin
  .map(_ => _.replace(location.origin, '')) // remove the origin from the string
  .sort((a, b) => a < b ? -1 : 1) // sort so we can dedupe with reduce
  .reduce((acc, curr) => { if (!acc.includes(curr)) acc.push(curr); return acc }, [])
  .join('\n')
*/

const urls = `
/
/code-of-conduct/
/privacy/
/scholarship/
/terms/
/workshop/
/workshop/next/
/static/css/styles.css
/static/images/favicons/apple-touch-icon.png
/static/images/favicons/favicon-16x16.png
/static/images/favicons/favicon-32x32.png
/static/images/favicons/favicon.ico
/static/images/speakers/effortless-performance-debugging.png
/static/images/speakers/empathy.png
/static/images/speakers/from-milliseconds-to-millions.png
/static/images/speakers/getting-more-from-git.png
/static/images/speakers/nerdverse.png
/static/images/speakers/privacy.png
/static/images/speakers/taking-the-web-off-the-screen.png
/static/images/speakers/what-does-it-take.png
/static/images/sponsors/brandwatch.png
/static/images/sponsors/jsbin.png
/static/images/sponsors/l-g.svg
/static/images/sponsors/mozilla.svg
/static/images/sponsors/nexmo.png
/static/images/sponsors/prodpad.png
/static/images/sponsors/samsung.svg
/static/images/sponsors/unmade.svg
/static/images/style/bg-dark.jpg
/static/images/style/bg-light.jpg
/static/images/style/diversity-big.png
/static/images/style/diversity-small.png
/static/images/style/quote.svg
/static/images/workshops/2x-remy.png
/static/images/logo-big.png
/static/images/logo-small.png
/static/images/venue.png
/static/js/script.js
/static/site.webmanifest

`
  .trim()
  .split('\n')
  .filter(Boolean);

self.addEventListener('install', e => {
  // once the SW is installed, go ahead and fetch the resources to make this
  // work offline
  e.waitUntil(
    caches
      .open(staticCacheName)
      .then(cache => {
        return cache.addAll(urls).then(() => self.skipWaiting());
      })
      .then(() => {
        console.log(`Offline ${version} ready 🎉`);
      })
  );
});

function clearOldCaches() {
  return caches.keys().then(keys => {
    return Promise.all(
      keys.filter(key => key !== staticCacheName).map(key => caches.delete(key))
    );
  });
}

self.addEventListener('activate', event => {
  event.waitUntil(clearOldCaches().then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  // when the browser fetches a url, either response with the cached object
  // or go ahead and fetch the actual url and add it to the cache at the same time
  event.respondWith(
    caches.open(staticCacheName).then(cache => {
      let url = event.request.url;
      if (event.request.url.includes('?')) {
        url = event.request.url.replace(/\?.*$/, '');
        // console.log('need to strip query', event.request.url, url);
      }
      return cache.match(url).then(res => {
        return (
          res ||
          fetch(event.request).then(response => {
            cache.put(event.request, response.clone());
            return response;
          })
        );
      });
    })
  );
});
