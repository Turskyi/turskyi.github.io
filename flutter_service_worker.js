'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "d1411ac75e99d343584a52a7ad3638e0",
"icons/Icon-192.png": "cc43e7c72df7fc9060721b36fe349187",
"manifest.json": "57c348d4f04c665c2062c5cfb0e4a463",
"index.html": "d4f155ad12a1e8245f83d1c180520efb",
"/": "d4f155ad12a1e8245f83d1c180520efb",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "5e000e2b9fc2d30cd08994ad5788aab9",
"assets/assets/images/bg_home.png": "9a87b47aa1c6396ff1c0b8d476290fe9",
"assets/assets/images/pic_facebook.png": "96a4ef8453afcb0b512556903f39184d",
"assets/assets/images/pic_app_store_grey.png": "6f56dd288ef77b0d9f4cc7aec158880f",
"assets/assets/images/gemini.svg": "1db19e50d10dd9bd188049ce53687904",
"assets/assets/images/gpt.png": "5e4c68a7c624cb9f8ef3d6255d370720",
"assets/assets/images/good_reads_logo.png": "1d900be837379a826a6215e02e98a695",
"assets/assets/images/feature_graphics/anartist_store-feature_graphic.png": "198fb239a5d48e0874dfe0eecae48161",
"assets/assets/images/feature_graphics/ethical_scanner-feature_graphic.png": "4c122a67c2c15421a107c8e26ee838ef",
"assets/assets/images/feature_graphics/life-coaching_ai-feature_graphic.png": "1b6f6fce16d0447aec6ed56117c43658",
"assets/assets/images/feature_graphics/mala_knyzhka-feature_graphic.png": "7c61d024f93edab3dde29932cd526138",
"assets/assets/images/feature_graphics/politer_ai-feature_graphic.png": "6df4cadf7014eabb841ff69999518d32",
"assets/assets/images/feature_graphics/vt-feature_graphic.png": "6a4b17217764dfa86950af3c0dcff095",
"assets/assets/images/feature_graphics/invest_track-feature_graphic.png": "bd8c0592ffc9ca0953e9b3dc19f35648",
"assets/assets/images/feature_graphics/daoism_laozi_ai-feature_graphic.png": "5cf58193c49789c5096ecffb8f8e009b",
"assets/assets/images/feature_graphics/weather_fit-feature_graphic.png": "ecd3badeb0d515d42d9892559e9d1085",
"assets/assets/images/feature_graphics/news_glance-feature_graphic.png": "1a01437b32bfa1b987254c2657c5e22f",
"assets/assets/images/feature_graphics/travelling-feature_graphic.png": "29c834135201051f3500d71b0d5c31a8",
"assets/assets/images/feature_graphics/portion_control-feature_graphic.png": "8a6e409d5ea784219f1df4134b6ad7e2",
"assets/assets/images/logo.png": "d1411ac75e99d343584a52a7ad3638e0",
"assets/assets/images/nextjs_icon.png": "fefed8e676af18ae7abadf9dc7f566cd",
"assets/assets/images/unity_logo.svg": "ab0ec1a64761952d11cc20a81dfa767a",
"assets/assets/images/mywishboard_logo.png": "ac1676c72bd975b8a86bcd0dc730eaf7",
"assets/assets/images/pic_facebook.svg": "130e2b627028075b6e3e094121470994",
"assets/assets/images/pic_google_play_grey.png": "6462fa627c6f6de493933c98e9d9c243",
"assets/assets/images/unity_2d_logo.png": "c1ed1252bfce835416e2bf991a08b1ae",
"assets/assets/i18n/en.json": "33e753115ec24776ad0c4959523e2f87",
"assets/assets/i18n/uk.json": "fee7d2822904b24a7e2d670ea0000aa7",
"assets/fonts/MaterialIcons-Regular.otf": "0a79d3fbc6ac524a870f5100361e733e",
"assets/NOTICES": "fb9d75e6c4ce09beb9f4f49530782433",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin": "99350ca88db4b7bbd543d87133c33b9b",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"favicon.png": "3fe98ad723d4dc6a1793e09e32bb3ed9",
"flutter_bootstrap.js": "df1db6fb0e4a7134573e86388b1a278a",
"version.json": "bb01e93e83a43ddf627bf8046be5a081",
"main.dart.js": "e56514bd0ea8c681fbbfc622688b5bce"};
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
