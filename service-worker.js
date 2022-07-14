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
    "url": "assets/js/24.095abe6c.js",
    "revision": "c9c9f77310dd49bfdb7b03894a0808b1"
  },
  {
    "url": "assets/js/25.787c0e08.js",
    "revision": "69935ee00e74d48883158b779d40ff88"
  },
  {
    "url": "assets/js/26.3314d746.js",
    "revision": "9a3dce3119e1258e697ad98bd8ed256a"
  },
  {
    "url": "assets/js/27.95d985fd.js",
    "revision": "4fda4456a35cd716bdba6589ba3feec1"
  },
  {
    "url": "assets/js/28.159bc457.js",
    "revision": "3788a3e791226e9b6c48ef131846920d"
  },
  {
    "url": "assets/js/29.4ed980e4.js",
    "revision": "8ade42dcec48fb786af759387a9005bd"
  },
  {
    "url": "assets/js/30.f8346ade.js",
    "revision": "168be1a21aa9f41d2f5708aeadd1f3c9"
  },
  {
    "url": "assets/js/31.f49fe5fe.js",
    "revision": "6675ad13ca96a4331d5a70e97c4ce4a2"
  },
  {
    "url": "assets/js/32.a604bae1.js",
    "revision": "bac30671795b573e3eb10c9cb12f9813"
  },
  {
    "url": "assets/js/33.b6ea6091.js",
    "revision": "10d2322c0d54e11ce7cfa65ee274cc62"
  },
  {
    "url": "assets/js/34.0dbd4a33.js",
    "revision": "38944f63c3b611019c6e693fd2a908eb"
  },
  {
    "url": "assets/js/35.bb86338e.js",
    "revision": "c6b2150f8dc8338d68ae2695f24a4f51"
  },
  {
    "url": "assets/js/36.ac9c58d9.js",
    "revision": "eed04f1d113f809d8ba10a005925ccd1"
  },
  {
    "url": "assets/js/37.4bf9177a.js",
    "revision": "63ee4158506d4142926c10db5ddcaa7d"
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
    "url": "assets/js/app.1900a1d8.js",
    "revision": "a580c7f2affb057d26e117e135e662de"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "e7ac6e8bd8571cf13efaea839a7735a3"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "565a27d60d13ad5c349d25f67d654a35"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "09c2017da44b83dc3d29735ae0ff08d7"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "37efd095883a3bc9bc74cb243d392803"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "7d1e90f822bbac2a61f6822618fed320"
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
    "revision": "84b32dfae471310b10c217df9d037e81"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "26663c322a40d3e02fc8be4d834c97aa"
  },
  {
    "url": "other/project.html",
    "revision": "c42e1b8c5ebdc00e3f14b97c74b94c2c"
  },
  {
    "url": "tag/index.html",
    "revision": "e2563e1e213eaf1e0cef47b2f2b35c41"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "a70cb418684576278e1979e6f75201f0"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "682c883cb86817e0267b4129df7adfef"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "b7b21a7e6f951b21d5c5a0f39d128bad"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "b8a4a67e6c48b14f0711b8c4cfcb3634"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "7c736b36233e849206df98a8c073a61e"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "79394a99c25adfe2154024da54cec255"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "0f93990a93323ffaeda6033aee2bd682"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "994e05103403fa0cfe7f9b5b7ce756f8"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "4b54c1cee4a901b51dc60bb4f5812f4c"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "e3df2ca48d5b6c8e73499fe808eb7d81"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "6b4be1a06ea8f9711ba2e6655113e963"
  },
  {
    "url": "tags/python/index.html",
    "revision": "806c96c7712985978072ef646947904f"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "5566408caafbc3dcf42aad8f776bc5d0"
  },
  {
    "url": "timeline/index.html",
    "revision": "e213dd4156099e705392650a19a2fa40"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "bf4c14970e384175dfaa6d88d22508c4"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "d4addd9b4eed3ad9ec9c2e1156ea305e"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "9f5dcc30ef53bd6c35b625b57d6045f9"
  },
  {
    "url": "views/index.html",
    "revision": "d674d744ba70de36f7289d6252a9408d"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "640697fc9e0b8911aa4141af1c6d05ba"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "76b9b4dcd9cd25d42a88d753f52862a9"
  },
  {
    "url": "views/SGE/introdution.html",
    "revision": "6afbe87df8481edd34b78fc4bbc64a42"
  },
  {
    "url": "views/SGE/use.html",
    "revision": "72ba90238c382b0c017db40d8fccfb43"
  },
  {
    "url": "views/software/busco.html",
    "revision": "5f113240241cf86bf9699ea057137eee"
  },
  {
    "url": "views/software/hic.html",
    "revision": "ba84e3eb770de436208fbf524dbd137f"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "7315200509826645e8ec5c0e8f14a726"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "4d0c1cb817b204e15e0036c4391ca69f"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "3a09235c3a2f4361d88a4cab8e3bd895"
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
