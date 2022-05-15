'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8dd7b5aee5ae65957d45e4d46fe2d06e",
"index.html": "657d0cde353700c581d141bb440e662b",
"/": "657d0cde353700c581d141bb440e662b",
"main.dart.js": "75bb4e91c10988c73906b34950092373",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b1525dc2de3a3f8b9b6b906c6990f073",
"assets/AssetManifest.json": "ab40b57a4f35ad5c2a7b6fb0cdc73266",
"assets/NOTICES": "8c4644885fc2c5f54f23757414ad0ae2",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/bulbasaur.png": "7159abb353937b54a8c133bedc7584a7",
"assets/assets/images/ukraine.png": "23cacff3d12259bd35f9c48940d5073e",
"assets/assets/images/boom_sheet.png": "f195c3d0cad00fe4be06c8724d5edb72",
"assets/assets/images/pikachu.png": "6ce0085ec9b26e16406f5c28c8b90af2",
"assets/assets/images/boom.png": "3172e300cf7c040566fb873e001c706b",
"assets/assets/images/mewtwo.png": "635a7db9476f83d33cb299c79b40b1fe",
"assets/assets/images/charmander2.png": "5d1f8258a7afebf1965fa039ed927980",
"assets/assets/images/map.png": "6b2bf49a85e5047abeac4face792cd31",
"assets/assets/images/girl.png": "5494f728937b6f68a1f344570f67395d",
"assets/assets/images/enemy_sheet.png": "089ef7a5d8bef30adb368054d787d201",
"assets/assets/images/enemy_sheet_c23_r12.png": "36ac9e52bab19fd0218f325a48b07425",
"assets/assets/images/base.png": "4c8731a109b98b8d30cac7e660a984b0",
"assets/assets/images/First%2520Asset%2520pack.png": "039d8c1e946c8043d767f7aa63b2264a",
"assets/assets/images/wall.png": "fd44adee50552c90965d8bc8aa846f52",
"assets/assets/images/pikachu2.png": "21135d81926b4e4787e4c146665fb8ad",
"assets/assets/images/pikachu3.png": "70a61c5988685813e672903cb6e8cc35",
"assets/assets/images/woman.png": "4d0d4f67d17a13e02501fbbe23a29b68",
"assets/assets/images/squirtle.png": "bf08ef61e72700042632789ed020eb2a",
"assets/assets/images/mewtwo2.png": "da35b71d4027d34e5137c0abed25ed58",
"assets/assets/images/charmander.png": "6c5966117fd38d6290c9baa329e0f2ca",
"assets/assets/images/map3.png": "a788ecb81a966035cd6b01eb4a0b2c88",
"assets/assets/images/map2.png": "87bbdff0cd1594f8034de524aaff7027",
"assets/assets/images/player.png": "509187d5185a970e883723427890c324",
"assets/assets/images/spritesheet.png": "9e133b5dee9f06d118d73189ff60d586",
"assets/assets/images/stitch.png": "6a0fb6fef16fb3b16ac9908c1852ba02",
"assets/assets/tiles/rpg.tmx": "84c34a417528d8c75ecf756ba11041c0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
