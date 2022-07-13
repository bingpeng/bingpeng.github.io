/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.ba4b63d4.css",
    "revision": "682088b33d86213dc0a8b69d81ce1877"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.40e49907.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "assets/img/loading.c38bb4c9.svg",
    "revision": "c38bb4c91362836bff4e41485000be83"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.745f6ae1.js",
    "revision": "7067321432b1272395180fc247b4590d"
  },
  {
    "url": "assets/js/10.f2f8fbd3.js",
    "revision": "75c2b158fcc45be9a445c49a4c8de324"
  },
  {
    "url": "assets/js/11.f3a38902.js",
    "revision": "e9f16a767daf897389e0c78b189bc62c"
  },
  {
    "url": "assets/js/12.a9ead665.js",
    "revision": "6a3d7b1f0c7a22cde003a09d937d40bc"
  },
  {
    "url": "assets/js/13.e7e128b8.js",
    "revision": "c6d6d3a6fae543682c3fc2c252d32441"
  },
  {
    "url": "assets/js/14.e5e7e85f.js",
    "revision": "d8fc9c66fc70ba8e3792257b57117d7b"
  },
  {
    "url": "assets/js/15.54e6a707.js",
    "revision": "34f19976876cc9d24a1176b9b6aa95cc"
  },
  {
    "url": "assets/js/16.07154d97.js",
    "revision": "aa9376766bc02f2288bd136194629064"
  },
  {
    "url": "assets/js/17.bc7519f9.js",
    "revision": "1e208664510e722a4a024b100044469a"
  },
  {
    "url": "assets/js/18.024d3938.js",
    "revision": "bdf985dd1e88d48d85aacd454f18fdd4"
  },
  {
    "url": "assets/js/19.5def275b.js",
    "revision": "987b58e9784c55789d52388225a407af"
  },
  {
    "url": "assets/js/2.c3effee7.js",
    "revision": "4458dcee800b08743aa9900456abce4e"
  },
  {
    "url": "assets/js/20.aa1e6b00.js",
    "revision": "f430e095b82e72365c2c5e711b47dcfb"
  },
  {
    "url": "assets/js/21.54fdeb3c.js",
    "revision": "c10148533003b5d9eef0d9226a705238"
  },
  {
    "url": "assets/js/22.0806ebbf.js",
    "revision": "f795b23f7602363259f2da4b2a9bbf2d"
  },
  {
    "url": "assets/js/23.bc56d167.js",
    "revision": "0f499627a8d387a11b8db5075f15401c"
  },
  {
    "url": "assets/js/24.510614f1.js",
    "revision": "2803f051592abdef3a48ea7d5d745d4e"
  },
  {
    "url": "assets/js/25.5d4904b4.js",
    "revision": "49ce4d27bae6495445b879f1b21bf985"
  },
  {
    "url": "assets/js/26.29c87520.js",
    "revision": "3e2edcc0b0325a3a760b6c0d8b655369"
  },
  {
    "url": "assets/js/27.cc27a956.js",
    "revision": "084505e261a0f0020a2ba4ea82dab137"
  },
  {
    "url": "assets/js/28.a0e1256f.js",
    "revision": "729029298d33cd0200528dd757692e14"
  },
  {
    "url": "assets/js/29.c8f0598d.js",
    "revision": "05cbb7976bdd179ca8670adf7fc326a7"
  },
  {
    "url": "assets/js/30.b3bf32c5.js",
    "revision": "5107892e6def343b905bbceb3a0a58f6"
  },
  {
    "url": "assets/js/31.ad6861ae.js",
    "revision": "dfeaf243d16e101bf48838f11455ba91"
  },
  {
    "url": "assets/js/32.10240787.js",
    "revision": "d257070929a62c9ba58b54cb7a8e7048"
  },
  {
    "url": "assets/js/33.2a988fce.js",
    "revision": "2d692bec7c257a206c95c2172d09f93b"
  },
  {
    "url": "assets/js/5.f650fde1.js",
    "revision": "afb090cba0a14f42f570ea9e528d124e"
  },
  {
    "url": "assets/js/6.36b09dfb.js",
    "revision": "d219de4e9b4d059c111f7a5f71fb7aef"
  },
  {
    "url": "assets/js/7.9fee92e4.js",
    "revision": "e73b4dcf776faa19e5de83e618a7e3ee"
  },
  {
    "url": "assets/js/8.8d3bea13.js",
    "revision": "909f5f573f862f5e76c00e57462bb889"
  },
  {
    "url": "assets/js/9.40264b9e.js",
    "revision": "7b1328180b36c48bdaade9bcc2eb7fc0"
  },
  {
    "url": "assets/js/app.8238b158.js",
    "revision": "5e1cfee2a2652917925fecf4ad496fed"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "2182f9f2b1182fb067c8666ab895ebb1"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "3f0052305db1c9e87bd8e2413c6ad5ae"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "e5d7e126b855aabac500d24a2bf1fa7f"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "40d09ee82d7b4d97b2a9d878138ecad8"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "c8b00d812608bf98f806b55fa4140795"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "0fe2ea06e44b4c5586cd81edfb62fa67"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "b2bb6a1eda818d2a9d922d41de55eeb1"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "3779cf87ccaf621f668c84335713d7dc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "66dad00c26f513668475f73f4baa29aa"
  },
  {
    "url": "img/assembly/stat.png",
    "revision": "2681c8e4c5f5eaf67bb351dacd1ee9e0"
  },
  {
    "url": "img/hic/haplog.png",
    "revision": "8d90a4adef29a32753deabf4dedea711"
  },
  {
    "url": "img/hic/jiequ1.png",
    "revision": "8aef7b09edbce2224f74c0fee61ce27e"
  },
  {
    "url": "img/hic/jiequ2.png",
    "revision": "136e03bba7e5889e135d9c0d4dfa0735"
  },
  {
    "url": "img/hic/jiequ3.png",
    "revision": "8f4398e6d465e9f76ae0fcb276b411c8"
  },
  {
    "url": "img/hic/jiequ4.png",
    "revision": "c20eed70f929971686ecee054d3f35c4"
  },
  {
    "url": "img/hic/jiequ5.png",
    "revision": "f1eb0a57667dfc181a7dbe33b28b6931"
  },
  {
    "url": "img/hic/move1.png",
    "revision": "cc3f4fe3ea91a04112766625d0b02d47"
  },
  {
    "url": "img/hic/move2.png",
    "revision": "5a41a615efb78dd671b24394991f903f"
  },
  {
    "url": "img/hic/move3.png",
    "revision": "6136e67cac4605c0c1d4f1d5c96a0c12"
  },
  {
    "url": "img/hic/rotate.png",
    "revision": "075e754659a3e4b24e4b395d4ac65402"
  },
  {
    "url": "img/hic/rotate2.png",
    "revision": "0273cb5f9795726e088a3d9f60c0931f"
  },
  {
    "url": "img/hic/zhanshi1.png",
    "revision": "48908f8a6867b5d859c644981ff56b8a"
  },
  {
    "url": "img/hic/zhanshi2.png",
    "revision": "31e3c4765858f73b5ac129b2c744ae5c"
  },
  {
    "url": "index.html",
    "revision": "7e30b36a38c4c1a5d81a191cb542780e"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "b657281ef43ef0e7f0dd53763a2713e2"
  },
  {
    "url": "other/project.html",
    "revision": "a84c66f859760d9db9946134762ae9bc"
  },
  {
    "url": "tag/index.html",
    "revision": "83a76595e258cb0d36485820a92f71d3"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "8587d0c2e47c8620000ba3954727fe31"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "2ddce06efecbfccf865a7c637fd8b6c2"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "480809685ee586b0d4dc75637ab27432"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "ff0c3b1e1141cdfa6d20707da494d2f3"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "d00c7b4e888ef083efd8a3a066118096"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "0f11eb70e802f884874ad06f9843fe10"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "e4700ef22fcb1e02d2f4477279a7b305"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "75609e6e3f361c6a1c78e8998b986aff"
  },
  {
    "url": "tags/python/index.html",
    "revision": "865091c60dc89cc12cc204e925244e70"
  },
  {
    "url": "timeline/index.html",
    "revision": "8c6836032969a34096569a563c9c1940"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "512865dc70618aad1574c30ae6ede2a7"
  },
  {
    "url": "views/index.html",
    "revision": "6f2e039da967922305ae27bea991681f"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "2864d26a4847b0e31afc36128d66f455"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "e2d6981b47e1bdaf931c17f0c0fe0618"
  },
  {
    "url": "views/software/busco.html",
    "revision": "568a53121f94c18716b55860c5bce80a"
  },
  {
    "url": "views/software/hic.html",
    "revision": "93971e66bf68d2c9b3ed867b5c98855d"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "597f151f99b7feb3fa8efb451feb1706"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "ed8cd0daa896f3af3f6592c748e83bda"
  },
  {
    "url": "vuepress/logo.png",
    "revision": "35e81721e283f6cc1ded9db0b3e1dce0"
  },
  {
    "url": "vuepress/topic.png",
    "revision": "dee941ec054a08e95201852f59983bd1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
