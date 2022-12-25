'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/config": "7ab695f0c7d2038c0d26e83c45e9c9ca",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "473347af7c628216eac1e67056f4825a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8b6ec2456fa62294fb8918d34c60257c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e8486b3f4207db8e8901d7cfdf5cafc3",
".git/logs/refs/heads/main": "e8486b3f4207db8e8901d7cfdf5cafc3",
".git/logs/refs/remotes/origin/main": "e4e4ea64a92d7e1c2dafd0d5f8fa0110",
".git/objects/03/a944e17ce6cf5814d26936741d1d930c693550": "cd684676ef8a35ff5e161209c398922d",
".git/objects/05/61fa82f6caa4b2f0bd3f2b15f56f2b0405bb02": "f20c04d3ef62b23825d0990ba21de322",
".git/objects/1e/0a21560694e5f22a0cba95bee124382e88929d": "68fb099a97bc335150bd79b5bada68ed",
".git/objects/2b/749ea0c8d80fbca59f3378717b8945428834a3": "f036303e338ddf22d416aeb5f2f59bbb",
".git/objects/30/53c5480881553fd0415a89602374d715b576ab": "80053be088af5a55feea9d55507aca03",
".git/objects/30/d6ca9ed5123322afb9eab19e0c4cdfb7b79a84": "71fe1211bea8aa728b4d43468d84e2cd",
".git/objects/35/56e2267fa7f3d6c75e8aaca2cdca6aab04dabf": "26cce4b0037c1edb3fe99a6bec261d12",
".git/objects/3d/24dc9c1fa1558b293664a17c3d7d5309b5e03c": "1f74446c2eb0d211ab188ea204cc32de",
".git/objects/3f/a00553490814cac0ba31eef7fc568dd5238254": "52526228b15207d5ca8685fc1a972658",
".git/objects/51/48d26878b5bbc65d51751ed45522e10dd564e1": "863c29a3f1c90ec79b7332c1962deff4",
".git/objects/5c/dbf62a42b3c13d75e6afe0f7d62002663fc121": "d09db1b42dffd0f0624e75faf47fc7f4",
".git/objects/5e/0398eb36f334b39c9e39ad5aea2cd3ad28861f": "e1725e1d66461cc4d10314aebf645ef7",
".git/objects/6b/10102a4349aff4a21cd6b6e996aa8d4d778656": "a0aa56138f5e89de59d78630e8990cfa",
".git/objects/72/c10625f927ac9fb6a35cd6dc2b6c963862afec": "321b5ecce365e9b373e79ce81d0d114d",
".git/objects/84/107781439b67719b7ca538766b28d068918a5b": "6588aeefa69286c850813a825a39419a",
".git/objects/99/98423047328fc182ca6543cdcd211c2bf19600": "8e8f443f3108083ea57f6c14f06e4fb5",
".git/objects/9f/298effa65bb4fd17ad442e9f03818809fc5505": "d16b02b8b786d76fa2a827a3ed15c0f3",
".git/objects/be/756ccd8e86ee5ae644051dd1fc61fb10155ff2": "3c6e1db3a3bde51354f0c54509bf2d65",
".git/objects/c4/ea1535382768a003f6e82201ab8ce2f81a1f1c": "641660e80e31542a654568e527580a73",
".git/objects/ce/6f92f189df12c4275efe372431186cf58a48dc": "161b5c68cb0c2d1b6c7f90f1233f95b3",
".git/objects/e5/cb105ffffc1a41e2f21e833ba2b9a70e89dc38": "a53a415ccc60baf0c5408a923d473130",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/refs/heads/main": "e5509d832d675b6a7b6c45cca3bf5005",
".git/refs/remotes/origin/main": "e5509d832d675b6a7b6c45cca3bf5005",
".github/workflows/azure-static-web-apps-thankful-river-077f62303.yml": "2b5e0b8a1883dae4c3598b859c375241",
"assets/AssetManifest.json": "df9243edd8203e606ffb641bd211eb48",
"assets/assets/images/africa.jpg": "27fc2c6667bd5bd7bba8117fafe28d86",
"assets/assets/images/animals.jpg": "2e218a94e7842a946d772082ac8c5590",
"assets/assets/images/antarctica.jpg": "71e86242fca831839833d1caa23f107e",
"assets/assets/images/asia.jpg": "bbcf97c1be29e77360e8407b7e2eaa05",
"assets/assets/images/australia.jpg": "6170e8a703652c6b814dca7020050086",
"assets/assets/images/bg2.jpg": "8f6dba4ae32817f5a0d38427fbdc019f",
"assets/assets/images/bg3.jpg": "d8847937fbc9d2a63190b6f889f4474f",
"assets/assets/images/cover.jpg": "e1e4b2e46b8d6eabb7330afb0c0d30ff",
"assets/assets/images/europe.jpg": "29a721b78efc7f928faf042c88806468",
"assets/assets/images/north_america.jpg": "867d729d34a03bf38136bd45954ec218",
"assets/assets/images/photography.jpeg": "b0d14d6d4a94d33404a7df1344e7533b",
"assets/assets/images/south_america.jpg": "1920c86e11a06921b339f00ff1d0ddea",
"assets/assets/images/trekking.jpg": "283eae13ae9587874b93fed5c9b4a118",
"assets/FontManifest.json": "daf1f817658c2d4328a27ae7e3af9150",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/NOTICES": "dbb4741c0ef72fbe59bf7b88747cce4a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "67487522f452a9f7c2652057e9d11cd1",
"/": "67487522f452a9f7c2652057e9d11cd1",
"main.dart.js": "c91b8cffc6fb02fe14bd3526ef15da8a",
"manifest.json": "b265d13b5878a5989b7486ff87fdc0ed",
"version.json": "704ee28bcb2a08f4c4cbb09cb2fccb47"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
