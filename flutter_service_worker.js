'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c610ccf0347a4c405570f968b6844fc5",
"assets/AssetManifest.bin.json": "2e524cc94e775dfc8f3b05d31818a923",
"assets/AssetManifest.json": "657602a7d770c1c3809070db008cf61d",
"assets/assets/API.png": "d97b0fa6930e8ecde7e7a69bfbeec8e0",
"assets/assets/AS.png": "9fe121e566f62298edf1cbc99f6c02da",
"assets/assets/blug1.jpg": "e655ce0f530c2d180d5fe96c681c47d1",
"assets/assets/blug2.jpg": "690ec6a2e2f5095bb7e703b2d0f6bddd",
"assets/assets/dart.png": "857d7343b1acf59bd4002795380a077d",
"assets/assets/Difund1.jpg": "b9e16794976751871c9343c18e30ec6d",
"assets/assets/Difund2.jpg": "e3028c35cace4d0a186e04bc42aaa6ea",
"assets/assets/dot.png": "78b7b7cd6c4f46b54b5ea97710e0670f",
"assets/assets/download.png": "6071d1b35ac8dde8d8126d80722f12e6",
"assets/assets/email.png": "35622b16c7b7ce03e1325952ce6de382",
"assets/assets/figma.png": "2c23a74a05d703fe2f85654760e8236e",
"assets/assets/firebase.png": "ba86ddeca34f649ff235e6a56dd0429f",
"assets/assets/flutter.png": "aa1723381a66f6c7dc884cf75c9bb392",
"assets/assets/github.png": "97e1e5dfde167464d95302488e9730ed",
"assets/assets/lap.png": "1dff0ce0ec96154f9b1c3d84273cf6d9",
"assets/assets/linkedin.png": "98d8b200474a747ae796ffee502b1795",
"assets/assets/MS.png": "854a178d15c981f395b600fcfe339997",
"assets/assets/nowcast0.png": "283d0e703b85c1c521147e8bfb13d53b",
"assets/assets/nowcast1.png": "38cc9be72c9083fa91015c8cea221f4e",
"assets/assets/nowcast2.png": "1e915cb354480a47ecf323a56429cf97",
"assets/assets/OOP.png": "dfa4e49f4291255e0b35ea0fb1330434",
"assets/assets/provider.png": "e73909d6e31b86eddd776fb3030edaee",
"assets/assets/qcheck0.png": "af1949d2e1df7cb578b8a6cb79253e78",
"assets/assets/qcheck1.png": "1354c58c865160bb26fd7c85c950a505",
"assets/assets/VSC.png": "f89248dc5ee01432f0e58d5a513bf8d0",
"assets/assets/xtudify1.jpg": "fc9ff3c6b1de78a0e2a1da611e115b9e",
"assets/assets/xtudify2.jpg": "fec98c6e05e4fbc0c67fee947ce1f68f",
"assets/FontManifest.json": "67756b636ec1cfdcf461a53c0af2ab2f",
"assets/fonts/Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/fonts/Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/fonts/Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/fonts/Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/NOTICES": "91e3058a0dae98c28ac13d19d8bd634c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e3368f0da40517577c6d26073d858c82",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "791c6cf879bdb1f2db25d28c6c909646",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
