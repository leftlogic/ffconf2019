/* eslint no-console: off */
const version = '@VERSION@'; // ☠️ DO NOT TOUCH THIS LINE!! - the dev server and the build script automatically replace it with the package version
const staticCacheName = `v${version}::static`;

const urls = `
/
/code-of-conduct/
/privacy/
/scholarship/
/terms/
/workshop/
/workshop/next/
/css/styles.css
/images/favicons/apple-touch-icon.png
/images/favicons/favicon-16x16.png
/images/favicons/favicon-32x32.png
/images/favicons/favicon.ico
/images/speakers/effortless-performance-debugging.png
/images/speakers/empathy.png
/images/speakers/from-milliseconds-to-millions.png
/images/speakers/getting-more-from-git.png
/images/speakers/nerdverse.png
/images/speakers/privacy.png
/images/speakers/taking-the-web-off-the-screen.png
/images/speakers/what-does-it-take.png
/images/sponsors/brandwatch.png
/images/sponsors/jsbin.png
/images/sponsors/l-g.svg
/images/sponsors/mozilla.svg
/images/sponsors/nexmo.png
/images/sponsors/prodpad.png
/images/sponsors/samsung.svg
/images/sponsors/unmade.svg
/images/style/bg-dark.jpg
/images/style/bg-light.jpg
/images/style/diversity-big.png
/images/style/diversity-small.png
/images/style/quote.svg
/images/workshops/2x-remy.png
/images/logo-big.png
/images/logo-small.png
/images/venue.png
/js/ff-fonts.41365f285ed9977656499daaf24381e2.json
/js/script.js
/js/quotes.js
/site.webmanifest

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
      return cache.match(event.request, { ignoreSearch: true }).then(res => {
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
