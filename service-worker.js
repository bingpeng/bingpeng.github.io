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
    "url": "assets/js/20.e4159da2.js",
    "revision": "db2018505f26dd9f54c985b7f80b3af0"
  },
  {
    "url": "assets/js/21.40424f68.js",
    "revision": "45704aa4c73763471bb62ab27d1cd18b"
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
    "url": "assets/js/25.2eb76e79.js",
    "revision": "125e07c7b5213ebaf555c7d50cf5a5d8"
  },
  {
    "url": "assets/js/26.870559ca.js",
    "revision": "0b9129daff69a0fbfd29d96e2e961223"
  },
  {
    "url": "assets/js/27.13ffdd09.js",
    "revision": "21ea85fb1c091d44ee93d6697c7e5cea"
  },
  {
    "url": "assets/js/28.9c0e0d16.js",
    "revision": "af91c48ba52ab71b2828cf08d9659c4a"
  },
  {
    "url": "assets/js/29.abb262f5.js",
    "revision": "581d70d18406fdffc51b26caf978f073"
  },
  {
    "url": "assets/js/30.5dd3e6e9.js",
    "revision": "3bf1189660436cc313eab009ae71d8de"
  },
  {
    "url": "assets/js/31.9b2a6d42.js",
    "revision": "9d89a12f83e4892e1a4d4f3b46be214e"
  },
  {
    "url": "assets/js/32.91eac37d.js",
    "revision": "996ce8baa3f146b2363a9a7b399a1afd"
  },
  {
    "url": "assets/js/33.52d89f3a.js",
    "revision": "6373e0a7e6fad7fedbad32086b879314"
  },
  {
    "url": "assets/js/34.95f8692a.js",
    "revision": "0c8495755e320cfcfd1b403cac5082f0"
  },
  {
    "url": "assets/js/35.1f5aa348.js",
    "revision": "657c47b83a2ad3d6640bc2b544195483"
  },
  {
    "url": "assets/js/36.2210f247.js",
    "revision": "a694e19ac100b68d7640195d37eaef72"
  },
  {
    "url": "assets/js/37.f2b43230.js",
    "revision": "9e672f133a581a8c49db983bb1753dfa"
  },
  {
    "url": "assets/js/38.827dac8f.js",
    "revision": "d33c9ce8b9c9bd1dc3affac724b5cad4"
  },
  {
    "url": "assets/js/39.9ed80069.js",
    "revision": "bfb3c8afefcda456d567d3b4936678dc"
  },
  {
    "url": "assets/js/40.03476190.js",
    "revision": "13c8df97e34733c1ce3f1ff907209f73"
  },
  {
    "url": "assets/js/41.3d623284.js",
    "revision": "c0a9837b5fd19155413050a0caa360e8"
  },
  {
    "url": "assets/js/42.d529c229.js",
    "revision": "41a85125083466016f76652bdbf43f0f"
  },
  {
    "url": "assets/js/43.0ee2a76c.js",
    "revision": "1b4e4d1de03843c482482c7e149ccccc"
  },
  {
    "url": "assets/js/44.bb39cadf.js",
    "revision": "6710d771a0063158a7a757b31c9627be"
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
    "url": "assets/js/app.79860111.js",
    "revision": "3ddca54bbff7ded40eeb0c1d2529c899"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "ced65f9e078a96b9da8094afba2dd948"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "90d8863a1df54dbceb610ba5f4de220e"
  },
  {
    "url": "categories/容器技术/index.html",
    "revision": "dd8ff815af69c096a3ec31c6b5d3b8ed"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "9bbc0047e57f9df61cfccf0b9824587a"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "d815a77331bf778a3ed7b14b1b47f48d"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "c55c76910725f51fc786635cd4a53a3c"
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
    "revision": "1fbd9d84771887e257d296bc62ec458d"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "7ff31b953da78d893df75f17d48bee30"
  },
  {
    "url": "other/project.html",
    "revision": "accb5e5eaeb4440147b5cd2cd0027326"
  },
  {
    "url": "tag/index.html",
    "revision": "d61d5cee66ef6bbae7ca2d7af14d42e5"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "a8620fb38bb540c271bed201b14174c2"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "38f9528c8895f2e6077e234e2452ff47"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "c5f276a8f029ead61c8a401175c1099f"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "09932dbb6d0e9b7dffd76f449edac4c3"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "7420832b211db5ac9c5ed83a2d17a47b"
  },
  {
    "url": "tags/docker container/index.html",
    "revision": "3cfab1b4a4a027173ba311226fe64b5b"
  },
  {
    "url": "tags/docker image/index.html",
    "revision": "c9c3043fb5cae1dd403849ae1f5061d5"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "1bb981d971c3c2e1b6222f869fb318ca"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "4d56552492d2b3ffa61f4a72445c9ba7"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "8dbf445cf5a3d1c97758f4b31044e882"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "0d3dc630752813ba9570c099a303417a"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "9e647f378e421b594d452ee45a41fd15"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "5f3b08c5f97347a771322e7d84a2a879"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "d7f32fd1ac9f293fdbfa855263688d20"
  },
  {
    "url": "tags/python/index.html",
    "revision": "72c011abff177ad1c41b20ddd4a3fb30"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "513220bb4a3ef28994dbb06e6ff9fbdf"
  },
  {
    "url": "tags/singularity/index.html",
    "revision": "166b712e8d2847e1fc6662d6be715273"
  },
  {
    "url": "timeline/index.html",
    "revision": "0c283cf6b36d90094cf6361282e19504"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "9a9f8ab1256aba331d7fbc6de81c0ffd"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "2508ce92951049e5b92d06ac1577c983"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "af9098db339816ffe4fd7d25cc02596d"
  },
  {
    "url": "views/docker/buildImage.html",
    "revision": "4fbe0bf051e2f967654385900ede4f00"
  },
  {
    "url": "views/docker/container.html",
    "revision": "1f9e1dfdd839372fc676f92fa425ebac"
  },
  {
    "url": "views/docker/dataMount.html",
    "revision": "757ca6c3f4ee1517caca622bdc2983be"
  },
  {
    "url": "views/docker/image.html",
    "revision": "c371fb829d05ef54466121ed25fbf2be"
  },
  {
    "url": "views/docker/introduction.html",
    "revision": "6be58f7c1d9cc73a7b571fa8edecc07d"
  },
  {
    "url": "views/index.html",
    "revision": "3ecbe2ae487a6c950b7e1ec0ca6a3bfe"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "b937299358eee6bf3c4d5b6ad1851001"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "88feeb05dc558dbe20088c2baa026b39"
  },
  {
    "url": "views/SGE/introdution.html",
    "revision": "f1f648b1db86b06cca23badf0bcc24ed"
  },
  {
    "url": "views/SGE/use.html",
    "revision": "f0a33b7bd0f5be8e4585c28869920751"
  },
  {
    "url": "views/singularity/simpleUse.html",
    "revision": "c202851d65ad17af86d4623e431525ed"
  },
  {
    "url": "views/software/busco.html",
    "revision": "19c88f2fa0cec94c0391c45f43822c46"
  },
  {
    "url": "views/software/hic.html",
    "revision": "e0ad01d61f405159f7aae3ce889f62b4"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "ab1551f6bb3f610acf9d69954433e9fe"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "f17fd6178798f49da2114d2c62bacfd1"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "4371366024de2d70f21e95365208f3d6"
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
