'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "60a1375e75e9c51f6bd0b7edf9e87fef",
"version.json": "c9b1d1f6232fdf55ecc417c8a35e03df",
"index.html": "86b4c2cf494bebae2d271d789471abbd",
"/": "86b4c2cf494bebae2d271d789471abbd",
"main.dart.js": "8eb656d594aac35c616da2051d62dfe0",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3b982646a6c12cd2de82306dd068cfc4",
"assets/NOTICES": "33babc3afb43c7f4016238e140cdc06c",
"assets/FontManifest.json": "46a21e79e6628bf036ea3a043b91e581",
"assets/AssetManifest.bin.json": "2a399608ea623a99ecb4fdb74a0d2937",
"assets/packages/esc_pos_utils_plus/resources/capabilities.json": "cfcc98d389d1ee4358f773efe8a9cdac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/ic_processing_payment.svg": "7acdd127ce428d384285bf01fc9be6ab",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/mtn_card_logo.png": "1a26b2fab2d3bbb7a4b0154d929e98d7",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/ic_success.svg": "a6a832816c1de126255a3ce3d5698428",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/telecelmomo.png": "6b0cb4de7e54eacbde449b71b18c02dd",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/vodafone_cash.png": "9cc983415972c7c315a244108e242035",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/gmoney.png": "c5b5a717072b4cad7c9fd878d020a270",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/zeepay.png": "6ab7102ee819e05031f6be7f203f1ec5",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/icon_close_circle.svg": "47bcff183f22741f69300d30ff4da327",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/mtn_momo.png": "b3e12325f0dde8b3ebc2bebd4c5c2ff7",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/otp_icon1.svg": "3f8db5e556086eb9d6f6eb8b6c44a691",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/mtn-momo-rounded.png": "ac5f4a294c406dd385583bf612475027",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/vodafone_cash_logo.png": "3ee138db01da503597c44a9522456f76",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/otp_icon.png": "81f1e53dbb84567909d05cdbbe34d1f1",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/otp_icon_png.png": "569747cf40c075b7a738a5862fdf3141",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/ghana_flag.png": "dd97f0cd85350b652cb36e3678db3d3b",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/ghana_coat_of_arms.svg": "a8483d8639b5f9072cd950fb2e17f82d",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/verify.svg": "872fb5c78415611b4fffdefde00111e9",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/ic_payment_pending.svg": "6ae50ddea45464547fa6a36cab0cdbe7",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/master-card-logo.png": "a7ff449ff0efe6f0b2aea1607774c513",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/hubtel_icon.svg": "9ad5b3f545d68cecf39941edecccdbd7",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/verification_success.png": "103c7457937bdc0fbe88cf98815e1fa9",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/no-user.png": "616fcc9ddf4239162b015afc00c52364",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/airtel_tigo.png": "dbe4976a5893fb02e2ff1f1b765f96ce",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/tigo-cash.png": "e640be93f2dc23faabb07e36aba58821",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/success.svg": "934aeff37f9b20ebf56d072e3577e12c",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/ic_payment_error.svg": "03a7d4c5b834671b94df552cd7fded17",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/voda-cash.png": "3f07c983a2517443d1a1b7e7a616c7bb",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/verification_success.svg": "1eda1985c6d061652fd4407c312d2aad",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/enterprise_insurance.svg": "9a96b49a14654e45ea0dc3336e2d8348",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/bank_pay.png": "d25f3e6b137875f17f2635b92bf9834a",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/visa-logo.png": "c3d0a305ebe812b2cc948e92b8dcdda4",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/mtn-momo.png": "71768d82a58653075f67a3aeb8d11e9f",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/telecel.png": "f65ce5a423adb863d7d399b8899e7e5f",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/hubtel_icon.png": "24f55f8bf42a8fcb5c60b50a2001b1a5",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/arrow_forward.svg": "f2326b136642529fdac0d130c6a926ee",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/verify.png": "ec0f5bd3d6d4a242c41712132f55c387",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/set_pin.png": "a54d232d07cc96a6c5b1855aebd76e7a",
"assets/packages/hubtel_merchant_checkout_sdk/assets/drawable/ghana_coat_of_arms.png": "2b1a91de8aca91b599eb94c59b96fcf8",
"assets/packages/hubtel_merchant_checkout_sdk/assets/fonts/nunitosans_extrabold.ttf": "505a059580cfbeaccdcb7a489bb67ec9",
"assets/packages/hubtel_merchant_checkout_sdk/assets/fonts/nunitosans_regular.ttf": "4c8f447011eef80831b45edb1e5971e0",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/flutter_remix/lib/fonts/FlutterRemix.ttf": "7a8463dd48e4ee9c6e5bb57651b77ae4",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/usb_device_web/assets/webusb.js": "9f25775d2712a26981f326f3321b929e",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "c258d3dac804131f210d74497400b677",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w500.ttf": "16af72c48fb317c0394443a596894470",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w100.ttf": "03a41ff71a9b9c997d1a895f8f9e4e6c",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w300.ttf": "16a7b5400b7f48aba16c6ad6df7d9d45",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w400.ttf": "0980d0622617f6ea65dcc772a24f5b47",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w600.ttf": "e0073a565248366ae0515dcf40431aa4",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w200.ttf": "068470b5a67b5028188b49cfc54cb2bd",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/win_ble/assets/BLEServer.exe": "28aa0e2566083c860f029ff4bc32c4ce",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "45e33262eecad3a34e077be3ffa526be",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/prints1.jpg": "63875ec78b210a2808c41acea06ac121",
"assets/assets/images/prints.jpg": "e8db9c3de09f5d6db12835bd872195d3",
"assets/assets/images/printer.jpg": "b64c91eedb28f86084413eb6310e6748",
"assets/assets/audio/beep.mp3": "e43e76d7d97456ff8a8ecac5f30a5d28",
"assets/assets/logo/zprints.png": "00091c43ef4a3b55db5f081945cb936a",
"assets/assets/icons/supply-chain-management.png": "5b4dce67fb80340a130df025a0bc3e52",
"assets/assets/icons/warehouses.png": "a6e417be05191b0c3a769eebd36dfb17",
"assets/assets/icons/cooperation.png": "f13cce26749e90b2eef1ec378cde8351",
"assets/assets/icons/sales.png": "811efac4aa14947c970c9f5af5cf2c4d",
"assets/assets/icons/settings.png": "92c25f37d91bbc70ba1a197b38c0b57c",
"assets/assets/icons/group.png": "aeb3e7205fcb1b0b8d55b1f15a3c8a18",
"assets/assets/icons/store.png": "0d0911ac60f7198cf0ff87b3b5cb54ef",
"assets/assets/icons/clipboard.png": "7ea49eec9c617ab5c301d610e07308d5",
"assets/assets/icons/boxop.png": "d4f92fe6c0cb73ecaed37ff4a8efc7de",
"assets/assets/icons/stock.png": "e18bb67fe33a9ce7278f13516febf49f",
"assets/assets/icons/logout.png": "9b3063a8887d802d74766c605ff321e9",
"assets/assets/icons/monitor.png": "9bd8e8e73f80c7216ad7c50ad80eb18b",
"assets/assets/icons/success.png": "16114d69125de88c822f1c1d1c1186f0",
"assets/assets/icons/credit-card.png": "a346b55d12f4867e97f4c0e5ddbf7763",
"assets/assets/icons/warehouse.png": "60d1a7064bab4e95a881191979b31ba5",
"assets/assets/icons/analysis.png": "1376fa781ba7aacf11a496d4b1e33a98",
"assets/assets/icons/whatsapp.png": "a139de62be2e8f274b855cc0f64ef60c",
"assets/assets/icons/box.png": "15c587f4802355f86a08a82d678db8cf",
"assets/assets/icons/report.png": "1781948d8a3f0c852d16278c0a630b89",
"assets/assets/icons/demand.png": "3a5505d3bee4666a81eaf8f222e9c465",
"assets/assets/lottie/scanner_animation.json": "a76002a1200fce6bc8ff294fd71eaeb1",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
