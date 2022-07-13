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
    "url": "assets/css/0.styles.54506061.css",
    "revision": "e27484738c1669dbef8bc3ad83119a81"
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
    "url": "assets/js/12.8a27a88c.js",
    "revision": "d3ccb4af68ac2e8fff9dca62609cc680"
  },
  {
    "url": "assets/js/13.8deb829a.js",
    "revision": "36e1d5e1e57c4aec57c393911c5ce9ab"
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
    "url": "assets/js/20.1c023b27.js",
    "revision": "991ea4855b0dcf7850bdbd533c35ae7a"
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
    "url": "assets/js/24.095abe6c.js",
    "revision": "c9c9f77310dd49bfdb7b03894a0808b1"
  },
  {
    "url": "assets/js/25.42a1bc89.js",
    "revision": "4906d6abebb97f79cf984ccb69ec23a8"
  },
  {
    "url": "assets/js/26.d693ec0e.js",
    "revision": "726a5ed09d3d1be4823c6fb46c4a72da"
  },
  {
    "url": "assets/js/27.50ef3973.js",
    "revision": "9462cf33bbd5e2d15b50ca2c4d482ad5"
  },
  {
    "url": "assets/js/28.3190620a.js",
    "revision": "7c206f2cd989d53f69487f303d840f86"
  },
  {
    "url": "assets/js/29.ba456e12.js",
    "revision": "35ff6b0302c1ab15c9323dbf4a6d986d"
  },
  {
    "url": "assets/js/30.6388a1ab.js",
    "revision": "7726e58d6c98f0af073c3be84adea10e"
  },
  {
    "url": "assets/js/31.75497101.js",
    "revision": "0ce3199b5f2ab4af3b0040dcefc21371"
  },
  {
    "url": "assets/js/32.ba0c9242.js",
    "revision": "a7e11336e9a6766a5edc8ae6bdca6e3d"
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
    "url": "assets/js/app.4a77804f.js",
    "revision": "5272fd81b0309808da21cc4712bef6c5"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "8414f48cca5d03dac3026c285e01645e"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "49fb78e6a4544c0bce0f141e416e3598"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "6248f29188dfc4a092de7bf68cace50d"
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
    "revision": "1062e04d6ac6a65ceb79722292520f4f"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "f91e53069823905e2884be711bfaa9b8"
  },
  {
    "url": "other/project.html",
    "revision": "38cb3f107011cfb550ceaefe1179832f"
  },
  {
    "url": "tag/index.html",
    "revision": "6b873215e92b25b2df27cb026e212da1"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "8ca66ef2ab67b78d180e50858d6893eb"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "ebd14675d198adddde1886d2a1312851"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "84134bdf41c540231d4b88193159e74a"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "07be0226c1bfe2afbe030c132c95c644"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "b83eb57077fe64e08292d81a49c6da9e"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "7bbe6dd9b0295f7de7d0cff99c95aa48"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "16bc9bae43c8307a44cd8adaea063ae0"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "0b6a24eb0be476ff5e9875f96f3d237f"
  },
  {
    "url": "timeline/index.html",
    "revision": "33f48bbb7c96d11f26e179d6af6b2403"
  },
  {
    "url": "views/index.html",
    "revision": "1bbfde54d5991eaf734995a87df9a081"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "d254011870de142eb1d6fb20f1cf743a"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "da5b5800ca36692b29fe6c1ee8f5fc9c"
  },
  {
    "url": "views/software/busco.html",
    "revision": "5f975d8af9be443b5abf4a49aa6a9449"
  },
  {
    "url": "views/software/hic.html",
    "revision": "05b6691f4c3c113187d429e68dc72d32"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "727fdeb69354bec431372f39ebf99ece"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "07e5fd620dc185f624e69e58511d200f"
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
