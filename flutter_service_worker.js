'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"manifest.json": "57c348d4f04c665c2062c5cfb0e4a463",
"icons/Icon-192.png": "cc43e7c72df7fc9060721b36fe349187",
"icons/Icon-512.png": "d1411ac75e99d343584a52a7ad3638e0",
"main.dart.js": "335c8c3bf8eed0341f37d9391e9fc63a",
"version.json": "e5d9dd997ca78de58898be03520e96db",
"assets/NOTICES": "29a073054c80ce1552812c689a6911b9",
"assets/fonts/MaterialIcons-Regular.otf": "0a79d3fbc6ac524a870f5100361e733e",
"assets/AssetManifest.json": "1829233c9d360a8ba328beb7d1d180c8",
"assets/assets/images/pic_facebook.svg": "130e2b627028075b6e3e094121470994",
"assets/assets/images/good_reads_logo.png": "1d900be837379a826a6215e02e98a695",
"assets/assets/images/pic_app_store_grey.png": "6f56dd288ef77b0d9f4cc7aec158880f",
"assets/assets/images/nextjs_icon.png": "fefed8e676af18ae7abadf9dc7f566cd",
"assets/assets/images/bg_home.png": "9a87b47aa1c6396ff1c0b8d476290fe9",
"assets/assets/images/logo.png": "d1411ac75e99d343584a52a7ad3638e0",
"assets/assets/images/feature_graphics/vt-feature_graphic.png": "6a4b17217764dfa86950af3c0dcff095",
"assets/assets/images/feature_graphics/news_glance-feature_graphic.png": "1a01437b32bfa1b987254c2657c5e22f",
"assets/assets/images/feature_graphics/portion_control-feature_graphic.png": "8a6e409d5ea784219f1df4134b6ad7e2",
"assets/assets/images/feature_graphics/ethical_scanner-feature_graphic.png": "4c122a67c2c15421a107c8e26ee838ef",
"assets/assets/images/feature_graphics/politer_ai-feature_graphic.png": "6df4cadf7014eabb841ff69999518d32",
"assets/assets/images/feature_graphics/invest_track-feature_graphic.png": "bd8c0592ffc9ca0953e9b3dc19f35648",
"assets/assets/images/feature_graphics/mala_knyzhka-feature_graphic.png": "7c61d024f93edab3dde29932cd526138",
"assets/assets/images/feature_graphics/travelling-feature_graphic.png": "29c834135201051f3500d71b0d5c31a8",
"assets/assets/images/feature_graphics/life-coaching_ai-feature_graphic.png": "1b6f6fce16d0447aec6ed56117c43658",
"assets/assets/images/feature_graphics/anartist_store-feature_graphic.png": "198fb239a5d48e0874dfe0eecae48161",
"assets/assets/images/feature_graphics/weather_fit-feature_graphic.png": "ecd3badeb0d515d42d9892559e9d1085",
"assets/assets/images/feature_graphics/daoism_laozi_ai-feature_graphic.png": "5cf58193c49789c5096ecffb8f8e009b",
"assets/assets/images/unity_2d_logo.png": "c1ed1252bfce835416e2bf991a08b1ae",
"assets/assets/images/pic_google_play_grey.png": "6462fa627c6f6de493933c98e9d9c243",
"assets/assets/images/gemini.svg": "1db19e50d10dd9bd188049ce53687904",
"assets/assets/images/unity_logo.svg": "ab0ec1a64761952d11cc20a81dfa767a",
"assets/assets/images/gpt.png": "5e4c68a7c624cb9f8ef3d6255d370720",
"assets/assets/images/pic_facebook.png": "96a4ef8453afcb0b512556903f39184d",
"assets/assets/images/mywishboard_logo.png": "ac1676c72bd975b8a86bcd0dc730eaf7",
"assets/assets/i18n/en.json": "2815eecc148c5434f0ac69187bb8fae7",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "4b478bad2f82869749f04a17a7f055ec",
"assets/AssetManifest.bin": "1b684b6e53f6d713b4985307040d2dea",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"flutter_bootstrap.js": "7ba3c5375e3b3fd8f1b1736761ad7b5e",
"favicon.png": "3fe98ad723d4dc6a1793e09e32bb3ed9",
"index.html": "c92235076075450cce3c849059b8ed02",
"/": "c92235076075450cce3c849059b8ed02"};
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
