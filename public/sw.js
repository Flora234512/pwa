/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-cb96c7ab'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/index-bdf2cdc9.css",
    "revision": null
  }, {
    "url": "assets/index-c7137605.js",
    "revision": null
  }, {
    "url": "css/all.min.css",
    "revision": "3d5ef2bf867c4054a2f336cdbad9e1dc"
  }, {
    "url": "images/favicon.ico",
    "revision": "b9756ed18f72d0730f6c38c97d86292e"
  }, {
    "url": "images/icons/favicon.ico",
    "revision": "b9756ed18f72d0730f6c38c97d86292e"
  }, {
    "url": "index.html",
    "revision": "c2aa1a160fd97dab29abec14d7b60e6c"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "images/apple-touch-icon.png",
    "revision": "f436c7496927aa21748bec96675b6810"
  }, {
    "url": "images/employees.jpg",
    "revision": "183434f7da5cfd90317e11dbaa2f88c2"
  }, {
    "url": "images/favicon-96x96.png",
    "revision": "6073ab6a82a116fdda794a5b9d7c8014"
  }, {
    "url": "images/favicon.svg",
    "revision": "1921402a4799555876ad53abec8c17c7"
  }, {
    "url": "images/icons/android-chrome-192x192.png",
    "revision": "16a8f21d9d74ef3a0cfdce8dc5690914"
  }, {
    "url": "images/icons/android-chrome-512x512.png",
    "revision": "61ed88ce4027c490d8b9290979156675"
  }, {
    "url": "images/icons/apple-touch-icon.png",
    "revision": "f436c7496927aa21748bec96675b6810"
  }, {
    "url": "images/icons/favicon-96x96.png",
    "revision": "6073ab6a82a116fdda794a5b9d7c8014"
  }, {
    "url": "images/icons/favicon.svg",
    "revision": "1921402a4799555876ad53abec8c17c7"
  }, {
    "url": "images/icons/web-app-manifest-192x192.png",
    "revision": "78c512a91fc3fc387cd4768d7d0dcf13"
  }, {
    "url": "images/icons/web-app-manifest-512x512.png",
    "revision": "9643d773df417078217fb6e38fe278d4"
  }, {
    "url": "images/web-app-manifest-192x192.png",
    "revision": "78c512a91fc3fc387cd4768d7d0dcf13"
  }, {
    "url": "images/web-app-manifest-512x512.png",
    "revision": "9643d773df417078217fb6e38fe278d4"
  }, {
    "url": "fonts/Montserrat/Montserrat-Regular.ttf",
    "revision": "34de1239b12123b85ff1a68b58835a1f"
  }, {
    "url": "webfonts/fa-brands-400.ttf",
    "revision": "f34b6a2a94e1a01e4c21fa84dcbf6667"
  }, {
    "url": "webfonts/fa-brands-400.woff2",
    "revision": "ee91e640b5449fb98d9320c877a9866e"
  }, {
    "url": "webfonts/fa-regular-400.ttf",
    "revision": "65e80529f5cfcf16a4b1161601a1616c"
  }, {
    "url": "webfonts/fa-regular-400.woff2",
    "revision": "82bafee9dcc7b6fb7bca7ed323f9b7ae"
  }, {
    "url": "webfonts/fa-solid-900.ttf",
    "revision": "52afeb7a328694838c6b073ad7af24d8"
  }, {
    "url": "webfonts/fa-solid-900.woff2",
    "revision": "57b380d27f14f16e737bcca7e849cf79"
  }, {
    "url": "webfonts/fa-v4compatibility.ttf",
    "revision": "9d6f359a328ee3df73709c1d8f05b0d4"
  }, {
    "url": "webfonts/fa-v4compatibility.woff2",
    "revision": "43044320c62b2b1397b8a0d535dea6a7"
  }, {
    "url": "images/icons/web-app-manifest-192x192.png",
    "revision": "78c512a91fc3fc387cd4768d7d0dcf13"
  }, {
    "url": "images/icons/web-app-manifest-512x512.png",
    "revision": "9643d773df417078217fb6e38fe278d4"
  }, {
    "url": "manifest.webmanifest",
    "revision": "4af8f82ea1a2c2f1ff35229af9397588"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));
  workbox.registerRoute("/employees", new workbox.NetworkFirst({
    "cacheName": "roberts-employees",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 50,
      maxAgeSeconds: 86400
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');
  workbox.registerRoute(/.*images\/portraits\/*.*.jpg/, new workbox.CacheFirst({
    "cacheName": "roberts-images",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 50,
      maxAgeSeconds: 86400
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');

}));
