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
    "url": "assets/js/20.27e4cc90.js",
    "revision": "6f281f666f236bdaf77f7466bcbb601c"
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
    "url": "assets/js/24.c4546bd2.js",
    "revision": "c92c4c96e3ea63f873a6857272aff74d"
  },
  {
    "url": "assets/js/25.8d35cafa.js",
    "revision": "4d27e320dd92ad7989c17b9da5eb8c77"
  },
  {
    "url": "assets/js/26.e25bd2f2.js",
    "revision": "fdefe354f92518218168524b177c501b"
  },
  {
    "url": "assets/js/27.7c9a2519.js",
    "revision": "9cd0e657223b995303affc12a146e1f9"
  },
  {
    "url": "assets/js/28.99e492a8.js",
    "revision": "3f721ad3e6457f33ee4be019748469f7"
  },
  {
    "url": "assets/js/29.a93fb7b7.js",
    "revision": "e9d5fffb9d4a5f9a1689d256b1d9642f"
  },
  {
    "url": "assets/js/30.ef259026.js",
    "revision": "aaf0cc8fb605a157e326418c85c0c100"
  },
  {
    "url": "assets/js/31.2acea419.js",
    "revision": "5c4027fd62006d27c6cd977a41a2c778"
  },
  {
    "url": "assets/js/32.cbe22e84.js",
    "revision": "5203b714d0a93503bd66aa5c27f21818"
  },
  {
    "url": "assets/js/33.4b6946e5.js",
    "revision": "83a87ed1eab37fc19469b926571a136a"
  },
  {
    "url": "assets/js/34.dcce287a.js",
    "revision": "f3356c63c51a9419cf6549e505d8aa18"
  },
  {
    "url": "assets/js/35.93487278.js",
    "revision": "3370617d2da8bf23000b54015340c413"
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
    "url": "assets/js/app.f2069287.js",
    "revision": "9bd9b45ac435614aee280c20a4381eb0"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "4593771e036ba88fcec1fc037b57a9e9"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "f2a867b696c731c562214d2051432712"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "37d88ba6677bef1dd57cd2225128262a"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "c72f10296f7732281dbb832285f379dd"
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
    "revision": "1eb8ba072a73c702af77d2685ceb4486"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "5b92a1e9080156ae038b6e5b38fadd4e"
  },
  {
    "url": "other/project.html",
    "revision": "c92add0e44efd8af0d456e36243004c9"
  },
  {
    "url": "tag/index.html",
    "revision": "4326d00f9cd8203afcbb98027ca16395"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "5f02ab2493311ad1054e23690ba5e6dc"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "a8d65b19f318d7191ef8718f8bbf0399"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "31dc872e3a6a46e18241a54055567799"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "35436426dd836948a22f00545c618e3b"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "608b19f56a11e804d69b44514c3cd365"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "72601aa9caf405f16a416f8a61cc5a75"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "19ee0b85b241c1a3a92a6ea53ed0ccaa"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "71f17fad70afca27db7b2f7ccab7bb42"
  },
  {
    "url": "tags/python/index.html",
    "revision": "922a6b4dd517df1e55fcf6fc03658e1a"
  },
  {
    "url": "timeline/index.html",
    "revision": "75f3f5d6bd462d3541b95a6851343317"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "c5dbbbd228a60acb712bdb77e1e82587"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "6fc91b8cae17c88a2f1f760425360b0b"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "dedf83e263fc2b14294dff36d0395d9b"
  },
  {
    "url": "views/index.html",
    "revision": "b6d0d690b097fe7b2b23772ab7474366"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "2d6ecbf97f4eebf42d8203c322f9e4e3"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "2ab8a8bca653ed262a785202721e801e"
  },
  {
    "url": "views/software/busco.html",
    "revision": "9858e1ea06d2aa479c97d9e2be191d19"
  },
  {
    "url": "views/software/hic.html",
    "revision": "5d7029f1611e23bc9150076e35851682"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "f6a30823c260e7b1b6e53bcd6bd993e8"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "d2e3fa4ff6ac8fd7be205dbb4f26a8b0"
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
