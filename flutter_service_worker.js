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
".git/index": "f8b93f5522a759af1868c8392334c988",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "863cba8007adf4eebdb9472062092bb6",
".git/logs/refs/heads/main": "863cba8007adf4eebdb9472062092bb6",
".git/logs/refs/remotes/origin/main": "eb6c0b806b9de4ee71b163130d2e3763",
".git/objects/03/a944e17ce6cf5814d26936741d1d930c693550": "cd684676ef8a35ff5e161209c398922d",
".git/objects/05/61fa82f6caa4b2f0bd3f2b15f56f2b0405bb02": "f20c04d3ef62b23825d0990ba21de322",
".git/objects/14/2cfbe27338aa5fa68bb6d8ee734a6bdbfd3487": "d6a5393e24f4f48fcfb04d6a5af057a1",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1c/c81a58ebcc3ee3208261fbd0326f1909be1b81": "20374e1da2b5ed77231ba1517bcc25ce",
".git/objects/1e/0a21560694e5f22a0cba95bee124382e88929d": "68fb099a97bc335150bd79b5bada68ed",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/4912ee129bf0156a542037e75e4d299e841970": "41094ab1cdefa5da3a47dc8fa834d593",
".git/objects/2a/d9a1adbe34539de57704a8759e22781291672d": "9bb7c8902372b658389bad20831fb621",
".git/objects/2a/e6daaf716549c1c255a57fff93ecaacf719490": "c5568b74917328fd5a6e7885c2d62f98",
".git/objects/2b/749ea0c8d80fbca59f3378717b8945428834a3": "f036303e338ddf22d416aeb5f2f59bbb",
".git/objects/30/53c5480881553fd0415a89602374d715b576ab": "80053be088af5a55feea9d55507aca03",
".git/objects/30/d6ca9ed5123322afb9eab19e0c4cdfb7b79a84": "71fe1211bea8aa728b4d43468d84e2cd",
".git/objects/35/56e2267fa7f3d6c75e8aaca2cdca6aab04dabf": "26cce4b0037c1edb3fe99a6bec261d12",
".git/objects/3d/24dc9c1fa1558b293664a17c3d7d5309b5e03c": "1f74446c2eb0d211ab188ea204cc32de",
".git/objects/3f/a00553490814cac0ba31eef7fc568dd5238254": "52526228b15207d5ca8685fc1a972658",
".git/objects/42/85664e246958026e8e2b2d67036dad4dad1e90": "d045e16e27ea2b3607a4367cbabb9bea",
".git/objects/4d/19bc2613e1da4bf31ad538b21a61d6d387b513": "56b49b2ba0c2da87e2d15d783e15d5e7",
".git/objects/4e/b5d7c8cd133c3c629e52829fbe243def317e2e": "77573e796ceb004bc21e6f56c15aeb94",
".git/objects/51/48d26878b5bbc65d51751ed45522e10dd564e1": "863c29a3f1c90ec79b7332c1962deff4",
".git/objects/5c/dbf62a42b3c13d75e6afe0f7d62002663fc121": "d09db1b42dffd0f0624e75faf47fc7f4",
".git/objects/5e/0398eb36f334b39c9e39ad5aea2cd3ad28861f": "e1725e1d66461cc4d10314aebf645ef7",
".git/objects/5f/1313f2120873a9c62439efc768d66d9de11d21": "1f90496d1bc432dfd5147b44977ceb6b",
".git/objects/68/f6b8971f154fbbafd6bde054cfb3417720897f": "f0b54224a32a525a23edfa40ae39c521",
".git/objects/6a/80e375152480326544cbb24be56a662b721c06": "6bf6ba06c76443771cb3057cf7393cef",
".git/objects/6b/0fdf91e22ce561a4e50dc0dd6c565d05263cab": "23815a6109683feccb422fc3f4661023",
".git/objects/6b/10102a4349aff4a21cd6b6e996aa8d4d778656": "a0aa56138f5e89de59d78630e8990cfa",
".git/objects/72/c10625f927ac9fb6a35cd6dc2b6c963862afec": "321b5ecce365e9b373e79ce81d0d114d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/107781439b67719b7ca538766b28d068918a5b": "6588aeefa69286c850813a825a39419a",
".git/objects/87/501853a42b539526bd6214d388713929f7a9ec": "7d822ca827288c410dc0c9cbfc2f48a7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/95/6b1b07605e46120794439464573f2cd2d49748": "49316ca1d590febf2afe7d78d880302c",
".git/objects/99/98423047328fc182ca6543cdcd211c2bf19600": "8e8f443f3108083ea57f6c14f06e4fb5",
".git/objects/9c/040af77d57ee1a0320a46d92430c583cafba23": "605a5a876f6dd2f8449bc2dd905fe97d",
".git/objects/9c/c8ece211a8c12ea8269929c6f5c55c0eb30927": "bc77203d97ce80b7fbdf492ae3d89136",
".git/objects/9f/298effa65bb4fd17ad442e9f03818809fc5505": "d16b02b8b786d76fa2a827a3ed15c0f3",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/773973130aa20cb9698593e803dc82ca94f326": "1744f1ede6510d288f65c702f12ea721",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/5fe1369c3f68b26faba9e6f18b5f73f035757a": "d86b7f6c042262db7d9a9af79dce67ee",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/a93fb32c7188d5fdc7fa444e983575947e519b": "897050d93eb15c2a5de520d2c7adfe12",
".git/objects/be/756ccd8e86ee5ae644051dd1fc61fb10155ff2": "3c6e1db3a3bde51354f0c54509bf2d65",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/c1/3c4046617e4741aa9966cbc8dbdcfafc093900": "816794e475bcbf8a8b58b830ff4bab36",
".git/objects/c4/ea1535382768a003f6e82201ab8ce2f81a1f1c": "641660e80e31542a654568e527580a73",
".git/objects/c8/1a8944865614dabb6cb6cfac548a136acde471": "6d52036d4909e52679568cd5935dbe4e",
".git/objects/c8/7fd14630458879238c58ce7c1ca4c646179e2f": "fc454267b9c6740d254cf01c624c0051",
".git/objects/ce/6f92f189df12c4275efe372431186cf58a48dc": "161b5c68cb0c2d1b6c7f90f1233f95b3",
".git/objects/d2/9c694e9a749928769c557fa09491f1167358b9": "39f8c9c0d621ff54f05e7ab4399ff467",
".git/objects/d7/d8a2458a130320c651dbcad902971ee817c1ba": "648a71c284a2cc7c0d9625e891b85607",
".git/objects/d7/dd70d81e9ade78750a2e2afb27a91617d7d45d": "c83dd82fe8dfde5a9513041bd637acf7",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/cb105ffffc1a41e2f21e833ba2b9a70e89dc38": "a53a415ccc60baf0c5408a923d473130",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/ec/966ffd4a0af637d62a74e5948a8257a323730d": "40c2904964499ee508282238cd56b3eb",
".git/objects/ff/76644e0f4e66cbfbcb5c384dfa2f75fd4041fd": "e68d46ffd32a1065381419e423251ccb",
".git/refs/heads/main": "76ba1c616b33e27d07583f487e078c19",
".git/refs/remotes/origin/main": "76ba1c616b33e27d07583f487e078c19",
".github/workflows/azure-static-web-apps-thankful-river-077f62303.yml": "2b5e0b8a1883dae4c3598b859c375241",
"assets/AssetManifest.json": "e730ae324bd5b88b4ca505b5a12c6d37",
"assets/assets/images/africa.jpg": "27fc2c6667bd5bd7bba8117fafe28d86",
"assets/assets/images/animals.jpg": "2e218a94e7842a946d772082ac8c5590",
"assets/assets/images/antarctica.jpg": "71e86242fca831839833d1caa23f107e",
"assets/assets/images/asia.jpg": "bbcf97c1be29e77360e8407b7e2eaa05",
"assets/assets/images/australia.jpg": "6170e8a703652c6b814dca7020050086",
"assets/assets/images/bg2.jpg": "8f6dba4ae32817f5a0d38427fbdc019f",
"assets/assets/images/bg3.jpg": "d8847937fbc9d2a63190b6f889f4474f",
"assets/assets/images/bg4.jpg": "261a125331a3b7848b201beb4426e8ac",
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
"index.html": "934c57eb1c5f2ab33140c4df9d7de90a",
"/": "934c57eb1c5f2ab33140c4df9d7de90a",
"main.dart.js": "41549206cdfcd88002cf855a5be928e4",
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
