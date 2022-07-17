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
    "url": "assets/js/25.5d4904b4.js",
    "revision": "49ce4d27bae6495445b879f1b21bf985"
  },
  {
    "url": "assets/js/26.3314d746.js",
    "revision": "9a3dce3119e1258e697ad98bd8ed256a"
  },
  {
    "url": "assets/js/27.53c00638.js",
    "revision": "46f9d255303b9113c0f5ece499ceafdf"
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
    "url": "assets/js/30.89d8d9a2.js",
    "revision": "3b70430b548054b8828bc365171d60eb"
  },
  {
    "url": "assets/js/31.6ee07649.js",
    "revision": "07da24df37071d4c7c837404cfdb643e"
  },
  {
    "url": "assets/js/32.6157bef3.js",
    "revision": "04f821a77b577017fdd5ececd9255296"
  },
  {
    "url": "assets/js/33.f631e3e2.js",
    "revision": "e0474fef6e2f4e19fbaae18126e13b16"
  },
  {
    "url": "assets/js/34.a37e5975.js",
    "revision": "2d74797175df20989852e2f73c46a280"
  },
  {
    "url": "assets/js/35.689eeed2.js",
    "revision": "e72803d366fb4dc450125fe3e4fa4477"
  },
  {
    "url": "assets/js/36.fcd67fa8.js",
    "revision": "cf8c567598c62086c987ab9d2ad50247"
  },
  {
    "url": "assets/js/37.455af280.js",
    "revision": "2f76b52407f6ff2649f9550da4d71803"
  },
  {
    "url": "assets/js/38.6375c069.js",
    "revision": "9a67e8a9f9d6aba44d5bfea3260e30f9"
  },
  {
    "url": "assets/js/39.d56062ad.js",
    "revision": "3498fd381f3f1dd9ace0d0d1e58c210e"
  },
  {
    "url": "assets/js/40.006a5cfd.js",
    "revision": "3c4818bd91275bf9b4b7aff1bf0e1733"
  },
  {
    "url": "assets/js/41.3d623284.js",
    "revision": "c0a9837b5fd19155413050a0caa360e8"
  },
  {
    "url": "assets/js/42.02bada43.js",
    "revision": "fadc3247b145a30a58bb6f2c3c170dcc"
  },
  {
    "url": "assets/js/43.d6109c84.js",
    "revision": "328bc16f0a42ac3db7e92552b4c54088"
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
    "url": "assets/js/app.aafd1972.js",
    "revision": "8f8954b463e96e13c4bfd2a3bcb27b0d"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "18a2d352425f95ff5764a143628abc88"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "1239cbe2a590609c13c8853ce8e40ed0"
  },
  {
    "url": "categories/容器技术/index.html",
    "revision": "e8b1482fa4ed5969c643949491177fa2"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "8ca7b068db530a4d0d2d4684aba58324"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "48c3d954a8b88ef043e2d2052b12c950"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "4777d74f6e14aac1dfdd24e6a96d02b7"
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
    "revision": "66f447ae97cba44aa4119ed560d70e63"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "d8818cf2539341482f48c690df4cf441"
  },
  {
    "url": "other/project.html",
    "revision": "b5c4e0a4918582c222315727f122e59f"
  },
  {
    "url": "tag/index.html",
    "revision": "5df86e94977956e94a78ebdab76fb86c"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "fced3edccc9eb8f327091247abdd54e0"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "7ebfeb755ca9351ccc5b9e2848ad5404"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "39902e4dbaf9e565e1e3ac69f917ddbd"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "8f24c9ce8486dce73247e8ae0a5b0d74"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "1dd967e9ff5a7bb59dc4f520fa96441b"
  },
  {
    "url": "tags/docker container/index.html",
    "revision": "6eea825662910d9a5882db261fe9cdd9"
  },
  {
    "url": "tags/docker image/index.html",
    "revision": "e0d92b0fd9db2fa8163c40b993431b71"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "89476b45ec88e23e9a4855ce698d16cc"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "1df5ad4dfc83f2a42f957a2d493966ce"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "4ce2ee78c832e4abc5843055aabe991f"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "71b3aa0e9e044ae0de54521a5ee7a5f1"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "4e4fba841cbb93e4a9d0cd9127636649"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "d074883bdae7c78d724a169fecb219ca"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "1a303b0e659e18e03be0b4f3c7c84550"
  },
  {
    "url": "tags/python/index.html",
    "revision": "4f6cc8900244a482fb3f24e0271b0288"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "5140e195e6028ba39a90248b578a6203"
  },
  {
    "url": "tags/singularity/index.html",
    "revision": "74cc35a77b88fa79d62c45ed2cef8028"
  },
  {
    "url": "timeline/index.html",
    "revision": "f5e7b4af71ae9b1811cb4aa7a0fa8528"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "65cf298a2b84cfaae642f638824c995b"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "f88dfa71feeace987b3bd63ce9fd4952"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "0a45f7f4cfb084a39b18c3164e535870"
  },
  {
    "url": "views/docker/buildImage.html",
    "revision": "53e7229a356a8f8fecf9e7f56fcdc1f3"
  },
  {
    "url": "views/docker/container.html",
    "revision": "7d0e4b0b81270544220ef4373a01a722"
  },
  {
    "url": "views/docker/dataMount.html",
    "revision": "501f4476790af49e6096c712deeaa18e"
  },
  {
    "url": "views/docker/image.html",
    "revision": "0b72d15f963efe8259402dbee04ea316"
  },
  {
    "url": "views/docker/introduction.html",
    "revision": "6328c2653b791eac9b69cff6f5f7d33d"
  },
  {
    "url": "views/index.html",
    "revision": "197f5c3401a2dc12dd6bb7d50a334013"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "16a337a759df87a1d95b089be71c4dc9"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "e9c4c02924f0afd8200d70657800190c"
  },
  {
    "url": "views/SGE/introdution.html",
    "revision": "cfddc78d578da8529f724addc950f28a"
  },
  {
    "url": "views/SGE/use.html",
    "revision": "b0c5a25c3923948812009f85461f34f5"
  },
  {
    "url": "views/singularity/simpleUse.html",
    "revision": "fab131e82929c349212c9c75a53502b7"
  },
  {
    "url": "views/software/busco.html",
    "revision": "3111f8cf9ae57f66b8f7f11df94324b6"
  },
  {
    "url": "views/software/hic.html",
    "revision": "5468ac38dd41a6fb0f051c80aa76592d"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "9931225e379d5944cbfb77bf7bbc43f7"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "88b414da97b8c3247d0b1a8edf032d00"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "1aece571fdc7b7ef547efb22a8bdb1cf"
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
