'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-192.png": "cc43e7c72df7fc9060721b36fe349187",
"icons/Icon-512.png": "d1411ac75e99d343584a52a7ad3638e0",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"assets/AssetManifest.bin": "333b56fdd3293f3ab9b145942e8c4363",
"assets/fonts/MaterialIcons-Regular.otf": "0a79d3fbc6ac524a870f5100361e733e",
"assets/AssetManifest.json": "ea2357b7bf132d9c2587e2de9b91b083",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/assets/i18n/en.json": "2815eecc148c5434f0ac69187bb8fae7",
"assets/assets/images/feature_graphics/daoism_laozi_ai-feature_graphic.png": "5cf58193c49789c5096ecffb8f8e009b",
"assets/assets/images/feature_graphics/mala_knyzhka-feature_graphic.png": "7c61d024f93edab3dde29932cd526138",
"assets/assets/images/feature_graphics/weather_fit-feature_graphic.png": "d7890d48bdc71960d89d12884482c7f0",
"assets/assets/images/feature_graphics/life-coaching_ai-feature_graphic.png": "1b6f6fce16d0447aec6ed56117c43658",
"assets/assets/images/feature_graphics/ethical_scanner-feature_graphic.png": "4c122a67c2c15421a107c8e26ee838ef",
"assets/assets/images/nextjs_icon.png": "fefed8e676af18ae7abadf9dc7f566cd",
"assets/assets/images/logo.png": "d1411ac75e99d343584a52a7ad3638e0",
"assets/assets/images/pic_app_store_grey.png": "6f56dd288ef77b0d9f4cc7aec158880f",
"assets/assets/images/unity_2d_logo.png": "c1ed1252bfce835416e2bf991a08b1ae",
"assets/assets/images/bg_home.png": "9a87b47aa1c6396ff1c0b8d476290fe9",
"assets/assets/images/gemini.svg": "1db19e50d10dd9bd188049ce53687904",
"assets/assets/images/unity_logo.svg": "ab0ec1a64761952d11cc20a81dfa767a",
"assets/assets/images/good_reads_logo.png": "1d900be837379a826a6215e02e98a695",
"assets/assets/images/pic_google_play_grey.png": "6462fa627c6f6de493933c98e9d9c243",
"assets/assets/images/mywishboard_logo.png": "ac1676c72bd975b8a86bcd0dc730eaf7",
"assets/assets/images/gpt.png": "5e4c68a7c624cb9f8ef3d6255d370720",
"assets/assets/images/pic_facebook.png": "96a4ef8453afcb0b512556903f39184d",
"assets/assets/images/pic_facebook.svg": "130e2b627028075b6e3e094121470994",
"assets/NOTICES": "916400bd3251cfadd3bdcd507a5f7e1d",
"assets/AssetManifest.bin.json": "9550b29ad1883de683e2fd000b68a400",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"manifest.json": "57c348d4f04c665c2062c5cfb0e4a463",
"index.html": "c92235076075450cce3c849059b8ed02",
"/": "c92235076075450cce3c849059b8ed02",
"version.json": "e5d9dd997ca78de58898be03520e96db",
"flutter_bootstrap.js": "03e33f751abf254f1dd77006ac7e290e",
"main.dart.js": "b2802c242721e831cf0380f2b92ee0b5",
"favicon.png": "3fe98ad723d4dc6a1793e09e32bb3ed9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
