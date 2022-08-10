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
    "url": "assets/css/0.styles.de3421a4.css",
    "revision": "77a8247cd589a36cad68040f4517d83f"
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
    "url": "assets/js/13.920ec004.js",
    "revision": "58e67d5b077c18d002c9c66fb2cef2b1"
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
    "url": "assets/js/20.f99f4640.js",
    "revision": "cf3da8417f5a0c2f014f9e318f6a28ca"
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
    "url": "assets/js/26.6a2e6e8e.js",
    "revision": "f966b0032892045a4eb9e5955a8d717f"
  },
  {
    "url": "assets/js/27.a07e1e56.js",
    "revision": "7e5924441429d6aa36d2561fb897a5b3"
  },
  {
    "url": "assets/js/28.80e88933.js",
    "revision": "a2d72eda6e7ae00577eaa7e9ef2a7507"
  },
  {
    "url": "assets/js/29.f9090ee2.js",
    "revision": "ca44736c62b203fbc121b7a658a1d579"
  },
  {
    "url": "assets/js/30.9fae9779.js",
    "revision": "bdbc2b5742b7d4e6b6816e8ea69b0698"
  },
  {
    "url": "assets/js/31.b95909fe.js",
    "revision": "626e242fe2f12420fd9adeb3532c6e44"
  },
  {
    "url": "assets/js/32.7ec7bd54.js",
    "revision": "d5aede58711a50ad3bc4a59bae8c2ddc"
  },
  {
    "url": "assets/js/33.e024f8b3.js",
    "revision": "f9b9eb84c15474fb61b4777f6a2cd1c1"
  },
  {
    "url": "assets/js/34.dea1ef1c.js",
    "revision": "f5a9f9e55c8486bd970a891e922e83db"
  },
  {
    "url": "assets/js/35.d1ec31d0.js",
    "revision": "2761ffceaa6ee2dcba729666b426159c"
  },
  {
    "url": "assets/js/36.6a4fedb3.js",
    "revision": "1dc24c8501f6e36a1666e1044a81c344"
  },
  {
    "url": "assets/js/37.fb24761f.js",
    "revision": "6f1f1a2fb4f04e0a50d9f78fa71dd337"
  },
  {
    "url": "assets/js/38.a4374708.js",
    "revision": "f8e1ab6c7b340b33b01b1bf7d283bce7"
  },
  {
    "url": "assets/js/39.26edc71c.js",
    "revision": "1095068291ee2eadc0e6ba042d563fa2"
  },
  {
    "url": "assets/js/40.7048b645.js",
    "revision": "c4c0e43f6452006298a98c5da083aacb"
  },
  {
    "url": "assets/js/41.90ade7eb.js",
    "revision": "665c2f1e393cf857a368757f54ac2633"
  },
  {
    "url": "assets/js/42.a3f17273.js",
    "revision": "9b0eddab3c8728682032a447a5944b68"
  },
  {
    "url": "assets/js/43.fdac8989.js",
    "revision": "b98087fca7f6f4a4ff6c910b3b42a9af"
  },
  {
    "url": "assets/js/44.e28cd770.js",
    "revision": "b7e1d4565b53b4dc46212acf12c5ff6c"
  },
  {
    "url": "assets/js/45.4dc5c5a9.js",
    "revision": "db193c571cd3a9eac4a3ce8fc8c57447"
  },
  {
    "url": "assets/js/46.e597d39a.js",
    "revision": "70b0d50959ff68c9c38d8096d21848d0"
  },
  {
    "url": "assets/js/47.85982b09.js",
    "revision": "c7c00ec24b0baec66443ca64f7f5f3ec"
  },
  {
    "url": "assets/js/48.bdb53b60.js",
    "revision": "8b64110cf159d8788564c9ec58c63414"
  },
  {
    "url": "assets/js/49.e39d5b7f.js",
    "revision": "f8a3dafe4d6b67875b05814c1b0f93e4"
  },
  {
    "url": "assets/js/5.f650fde1.js",
    "revision": "afb090cba0a14f42f570ea9e528d124e"
  },
  {
    "url": "assets/js/50.5ff88916.js",
    "revision": "761ca7993708db11b57fb0627ef4743d"
  },
  {
    "url": "assets/js/51.5f525d3d.js",
    "revision": "682f81f3b152ae1d9ec0e68d56f7f66d"
  },
  {
    "url": "assets/js/52.b3fa7bfd.js",
    "revision": "c02eb57da201fc540db8830d3b1c6c47"
  },
  {
    "url": "assets/js/53.59bbbdfc.js",
    "revision": "eed6080a1ff8c643169d85316159e87b"
  },
  {
    "url": "assets/js/54.27489f64.js",
    "revision": "eac0f5e10914f867413591a9f58b087d"
  },
  {
    "url": "assets/js/55.d1a51984.js",
    "revision": "f1a21d5d1318280e7e7e3cf34b8b12f3"
  },
  {
    "url": "assets/js/56.bfc72c0c.js",
    "revision": "b9ef7b0aa7e6402b09238b38a5952169"
  },
  {
    "url": "assets/js/57.ab0dcceb.js",
    "revision": "345b19bf2a313bb50bb3879fc650bc82"
  },
  {
    "url": "assets/js/58.2ad8e2f7.js",
    "revision": "71a33565efb9412fbc318d3bd0926922"
  },
  {
    "url": "assets/js/59.21f91d91.js",
    "revision": "049d5a118655fcd75679bfb80adfb253"
  },
  {
    "url": "assets/js/6.36b09dfb.js",
    "revision": "d219de4e9b4d059c111f7a5f71fb7aef"
  },
  {
    "url": "assets/js/60.cfc321ac.js",
    "revision": "39b6639dce4c8a258ddfb0d9bae31c33"
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
    "url": "assets/js/app.5153adac.js",
    "revision": "af91f5e25a9a7d15ed0b0ed39a62b1cd"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "c3837c5f27912be1aee20ef70c679b19"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "513c05e78bd4eec43e25e69eca13681c"
  },
  {
    "url": "categories/web编程/index.html",
    "revision": "8ce6cf06ceafdf477dd5c2f6b4a8814e"
  },
  {
    "url": "categories/容器技术/index.html",
    "revision": "3da7cc962592a7811c7c3ef41509fd6d"
  },
  {
    "url": "categories/服务器运维/index.html",
    "revision": "8ae03591004a100c96e1d6f903989f3e"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "a73ee75cf34f834380d659bac9f10f30"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "17d417137e36648e12d95b7f9df97651"
  },
  {
    "url": "categories/编程语言/page/2/index.html",
    "revision": "731da4853ed1d8fa57205ab49da4d303"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "ebcebea7b0def327166c5783f11ecf4a"
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
    "revision": "c0bb316ca10e8d49dc3c22f6d02716c9"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "7dae195bb47be1d7d55329dc74e7a3e9"
  },
  {
    "url": "other/project.html",
    "revision": "541679311b8fc3a4130b57ce403e9385"
  },
  {
    "url": "tag/index.html",
    "revision": "1fefb5748a420db25c3c5484b4bbb564"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "69670e353556218fea31b88c03eea3c9"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "674ae504515839286a940c4259883057"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "53b8941b8633e0df88614ad21519eb3f"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "4da5999ff0dcc31f11c0acb98765a90b"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "b925f676f01a67e358adb692b1cd7645"
  },
  {
    "url": "tags/docker container/index.html",
    "revision": "6250586e6942b1b3a99883a0c94c00ea"
  },
  {
    "url": "tags/docker image/index.html",
    "revision": "73eb5461ad3a611facfecfe62b846c09"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "d8aff73277c9f11a012702f5a60ecb63"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "832fbff9b03a47c955a61fc3f4c0076c"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "08f640833a6f423e8ea3d34860de0eef"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "1c21a445ff16e5820aebb5785f065976"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "fcea1516ca4ed073555b7d3527769a78"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "8a08abe827295cc4f468a31791fef1af"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "ea10cddccc96d2401d69d38517f9541c"
  },
  {
    "url": "tags/ops/index.html",
    "revision": "9519059848df90f90b2bbfab1c254139"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "ec3ac0b18b5d0bf18f0a2cf234bbc815"
  },
  {
    "url": "tags/python/index.html",
    "revision": "fd37c756fc669e556a53936c2c098f50"
  },
  {
    "url": "tags/R/index.html",
    "revision": "2d55a5f75888a110853d9faac16f8b3a"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "c12458eb24a70023411f6a97560a9abf"
  },
  {
    "url": "tags/singularity/index.html",
    "revision": "a2a4de550b5d722fbd77260f8e1ffce0"
  },
  {
    "url": "tags/SQL/index.html",
    "revision": "38f7d0c7228efd28915a80451682731a"
  },
  {
    "url": "tags/web programming/index.html",
    "revision": "00244b7199d3407a1f28ca6f5b2b9c43"
  },
  {
    "url": "timeline/index.html",
    "revision": "aa964394c91ebd31ccdfd10029eff71e"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "83611787cf068e64701ee0b5e373ee6c"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "ec3fbd101779b2b7cec1328df1fe7175"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "312db6830f4508f0740c7a9e9c4923cc"
  },
  {
    "url": "views/codeLanguage/python/reference.html",
    "revision": "d88a14ac2917b4a66b733a28b30e5638"
  },
  {
    "url": "views/codeLanguage/R/programControl.html",
    "revision": "0f7956b7a84d5b7fefcc7d4d2fa4e3d3"
  },
  {
    "url": "views/codeLanguage/R/reference.html",
    "revision": "f162c623c37a6d52c694ee61cee45b02"
  },
  {
    "url": "views/codeLanguage/R/variant.html",
    "revision": "d217ab07b1ec35455dfd0485e380aa64"
  },
  {
    "url": "views/codeLanguage/sql/install.html",
    "revision": "d19dc6d0206ff8b87db4590c57a4fa0a"
  },
  {
    "url": "views/codeLanguage/sql/modified.html",
    "revision": "afcf157cb410aea9c566a0f4cbc37686"
  },
  {
    "url": "views/codeLanguage/sql/python_sql.html",
    "revision": "9cca4d9ef8ec9ccd8543ee8b598a9af8"
  },
  {
    "url": "views/codeLanguage/sql/reference.html",
    "revision": "94c478d34679a555ab2bdf98833abf5b"
  },
  {
    "url": "views/codeLanguage/sql/relation_model.html",
    "revision": "9a414a2081fcc0c2f306e45a33768e21"
  },
  {
    "url": "views/codeLanguage/sql/select.html",
    "revision": "963b6a3549ad83da0f53b1de8f56f893"
  },
  {
    "url": "views/docker/buildImage.html",
    "revision": "be403f47ba2d0d53c518b206c036f251"
  },
  {
    "url": "views/docker/container.html",
    "revision": "2dcf4e2c33e3bec3294312d4bc442841"
  },
  {
    "url": "views/docker/dataMount.html",
    "revision": "52bb91ae2295b9b030b1595d1473f039"
  },
  {
    "url": "views/docker/docker_compose.html",
    "revision": "2e7d48a339a876e0bd2ef9adf6340fde"
  },
  {
    "url": "views/docker/image.html",
    "revision": "8ff0babcba6b9ecfad3e9031a2f368dd"
  },
  {
    "url": "views/docker/introduction.html",
    "revision": "bd31a857f34df2247c46012648434305"
  },
  {
    "url": "views/docker/reference.html",
    "revision": "4cc36d797efe94674131fc78e28beac3"
  },
  {
    "url": "views/index.html",
    "revision": "f2ece008005ef9f9a80080ef6ce46d86"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "2fd16f41df91b316acc7a99b991e556c"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "8ada9c44adce17a4d13861e9968aeba6"
  },
  {
    "url": "views/ops/frp/use.html",
    "revision": "18f7c51155c23ef40531f993b4b6304d"
  },
  {
    "url": "views/ops/SGE/introdution.html",
    "revision": "e890ccf8071124aee77f40d62a4b41dd"
  },
  {
    "url": "views/ops/SGE/use.html",
    "revision": "2b2fed30029474e023c924c9d8661f92"
  },
  {
    "url": "views/ops/someproblem/installDisk.html",
    "revision": "c95d2043a4e86ec3f11240cb8292354a"
  },
  {
    "url": "views/ops/someproblem/network.html",
    "revision": "091f6fe461f1d02883e586b0172b5b76"
  },
  {
    "url": "views/singularity/simpleUse.html",
    "revision": "447ee291783c49dca0c883ae5de5d88f"
  },
  {
    "url": "views/software/busco.html",
    "revision": "860b67941ad529b15470435f1bbe5236"
  },
  {
    "url": "views/software/hic.html",
    "revision": "8bc84c0af0a0963e953221e5b52a9caa"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "5a1ff4629170d0ac7218d730418df666"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "24697dea6b04b6d2daeb03b4d867e355"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "168fbb7176a904226075b3f6ffd3a99d"
  },
  {
    "url": "views/webProgram/practise/example1.html",
    "revision": "77352d79473568e9ee516246d9b5d360"
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
