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
    "url": "assets/js/20.21c9c4c3.js",
    "revision": "6b90aef80d4df153686269f837bbaf8c"
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
    "url": "assets/js/26.870559ca.js",
    "revision": "0b9129daff69a0fbfd29d96e2e961223"
  },
  {
    "url": "assets/js/27.cb76e226.js",
    "revision": "c14329edfc5bc6af20b125e29e137fa3"
  },
  {
    "url": "assets/js/28.7575eac8.js",
    "revision": "3f64793e8fcc0659fa066a508a2806e4"
  },
  {
    "url": "assets/js/29.ec161d79.js",
    "revision": "a9d2bad849e4316106c4c97c7721f661"
  },
  {
    "url": "assets/js/30.6634d250.js",
    "revision": "e3c85defba40ecd9f0b133bfebeb762e"
  },
  {
    "url": "assets/js/31.6fadb438.js",
    "revision": "800ce20e8e33b0b7a16c287bf53a98fd"
  },
  {
    "url": "assets/js/32.9f0a95ec.js",
    "revision": "11535fbca9e940b232e3e75d5e73adf4"
  },
  {
    "url": "assets/js/33.1423951f.js",
    "revision": "a904e61df52fb7c09acd98aa744e719d"
  },
  {
    "url": "assets/js/34.97a33532.js",
    "revision": "bda49d9b4f81eec77dc23cd1e1b775bb"
  },
  {
    "url": "assets/js/35.b984b1a4.js",
    "revision": "bd17173bae727d31819262d85a9ca517"
  },
  {
    "url": "assets/js/36.ac9c58d9.js",
    "revision": "eed04f1d113f809d8ba10a005925ccd1"
  },
  {
    "url": "assets/js/37.2a825c28.js",
    "revision": "1bfd59fcd75f0aeaf328dfa23b773979"
  },
  {
    "url": "assets/js/38.abcacfa3.js",
    "revision": "bae65e1c514bff7d42f461e1a0984f77"
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
    "url": "assets/js/app.8e6f2e41.js",
    "revision": "1243c8d25858f888880a87e537d0712b"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "60f32638633e171963c8499d74770034"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "01ca47857b0747063bd25dcffa577981"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "e0774b306dd350aa7376dcfe4ea10202"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "447c87fc6bbf1e0e038c7d41c1031b06"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "4924ed40a912727fd8913958551d1e92"
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
    "url": "img/jcvi/block.png",
    "revision": "57698a29a6adf29d487f413b95dbf067"
  },
  {
    "url": "img/jcvi/dotplot.png",
    "revision": "fa409e18dd7fe1ee7223236b08de6028"
  },
  {
    "url": "img/jcvi/karyotype_color.png",
    "revision": "e0a8e164634ebd09a99df9e88ad0f1ac"
  },
  {
    "url": "img/jcvi/karyotype.png",
    "revision": "894800bd32f6a327e605ce89ecd2d7dc"
  },
  {
    "url": "img/sge/mc_config.png",
    "revision": "b009abfc3730cc05e26c6a6572625621"
  },
  {
    "url": "index.html",
    "revision": "441b56759271f15ad1160041d44de380"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "8f8cddf0dffe7858f89382d1bbbb8d1f"
  },
  {
    "url": "other/project.html",
    "revision": "628ff71a1c666f971a48d946593716d8"
  },
  {
    "url": "tag/index.html",
    "revision": "c27d130f97a7088b0702db4b0bef827c"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "f870b88fc7c011e10a146090c654c87a"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "935896107dc6949311d415121b62cc0b"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "365d0b12b94d7d8a6b35b4197309d8da"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "0c3baf4a79ff60e6909fb93123d777b1"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "b820f9d8a6261592fa0d0de57e067596"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "ee227b635c86fe3b4fe64cae3cd23a41"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "cc5ae81b7c230908cc92d7b916b37d93"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "df44622224c531ef504d1686208ffc1c"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "77df85c80628ab13ca9fca118771bba0"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "62b6266ee0a624bf9f127d7a245f8aae"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "737bc50597706bab081fff8aa78c73f8"
  },
  {
    "url": "tags/python/index.html",
    "revision": "ae934d71438c1e26a8e395e9e79b4f39"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "00044cb1d5514efb0400aa27d9aecd89"
  },
  {
    "url": "timeline/index.html",
    "revision": "58b7672ef67ebb6dfb918a89ef8f5c7f"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "13ef0dd54056b031acf3277aa2466e01"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "ffb4d501fd5da3b08105497a79000688"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "3f08a22ee13ed58039e9196807daee1d"
  },
  {
    "url": "views/index.html",
    "revision": "519cc8b0715879a2d4aa053682261802"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "51f1593c9351690ffad83bc31cfad088"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "d6024fa61c051f5857e0d511e84ae980"
  },
  {
    "url": "views/SGE/introdution.html",
    "revision": "c6aac0bc90c7de5a9cf7b8039cafd4b8"
  },
  {
    "url": "views/SGE/use.html",
    "revision": "10699b42963217f6d2d95209400110f6"
  },
  {
    "url": "views/software/busco.html",
    "revision": "0376a75478f57866259ce722286d4c75"
  },
  {
    "url": "views/software/hic.html",
    "revision": "44b779a07af00b1fca050de6765024b1"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "326320b3a04a7555e2520bddae7ecf74"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "1da326a90d00ece899ea5f2c82b0e12b"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "5e483c97953bb76f823efea4837e33b9"
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
