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
    "url": "assets/css/0.styles.95724f65.css",
    "revision": "6e88c4ee570eb9bbffc2458f03fbd632"
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
    "url": "assets/js/13.88cee168.js",
    "revision": "8cd770778314c18c14a087cd36be53d9"
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
    "url": "assets/js/20.8d343b2e.js",
    "revision": "9cf5712d0b9221ab4f86b433f0f9049a"
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
    "url": "assets/js/25.a5b870a0.js",
    "revision": "948e567a998f7abfbd925f76655803a5"
  },
  {
    "url": "assets/js/26.275ed4e1.js",
    "revision": "d702b626c3cbdbb39756414f38eb67c3"
  },
  {
    "url": "assets/js/27.09cec7bb.js",
    "revision": "991c145898eed3796eebf53fa7c9e1d5"
  },
  {
    "url": "assets/js/28.a3844476.js",
    "revision": "6eaee2785279635afd939866331eb65a"
  },
  {
    "url": "assets/js/29.b14b1c03.js",
    "revision": "2fa24265d4ef789d6869a0fa6d7dc1b0"
  },
  {
    "url": "assets/js/30.4457ec18.js",
    "revision": "e918feb79dd308a9f76ca358f49bb1ef"
  },
  {
    "url": "assets/js/31.8970ae73.js",
    "revision": "c09f6477a65e375c504340dac4717bfb"
  },
  {
    "url": "assets/js/32.4376f41e.js",
    "revision": "dbfb016cd286af02097c244b6a52d3c5"
  },
  {
    "url": "assets/js/33.69bb2804.js",
    "revision": "f37b8396503705f21ba1728ca24b326f"
  },
  {
    "url": "assets/js/34.66359d78.js",
    "revision": "74ba1a7b7647b4e9e53a20fad1b91129"
  },
  {
    "url": "assets/js/35.736c25f4.js",
    "revision": "3f999c521846e89d9fe1271b49aabf2a"
  },
  {
    "url": "assets/js/36.dc4b2a00.js",
    "revision": "c346f8354637fcc8f295064f417c8173"
  },
  {
    "url": "assets/js/37.b9cb6613.js",
    "revision": "23e2feba842a9914919618ec448cc379"
  },
  {
    "url": "assets/js/38.2c0408b0.js",
    "revision": "78498500736a4fd3b9555a8e47ec4e37"
  },
  {
    "url": "assets/js/39.11fcd5c6.js",
    "revision": "7477da696d4fc9f2bc5131c32afe9264"
  },
  {
    "url": "assets/js/40.575cb0dd.js",
    "revision": "e498f9ab9fef48be4a01ab049f98d1fa"
  },
  {
    "url": "assets/js/41.7dc22cfb.js",
    "revision": "0c89b75c677410ff01bb3e800a1e57b5"
  },
  {
    "url": "assets/js/42.56493973.js",
    "revision": "e00ba7b46d3b2438d34133f6368e8581"
  },
  {
    "url": "assets/js/43.ad4255b6.js",
    "revision": "69fc9cc706923b6a118c714fe2a14766"
  },
  {
    "url": "assets/js/44.d7fe42a0.js",
    "revision": "675580766093ab79e7b9833c29846506"
  },
  {
    "url": "assets/js/45.a7b59826.js",
    "revision": "845d631c4e47c58c6336bf8320439145"
  },
  {
    "url": "assets/js/46.d328ee2e.js",
    "revision": "f1fcdd2ce32ec939e1cf05110a8f91c5"
  },
  {
    "url": "assets/js/47.5b198886.js",
    "revision": "10c960b7d83415b3ed4bbdcdbc4736ea"
  },
  {
    "url": "assets/js/48.c6230f2c.js",
    "revision": "946fff7c40447cb8beabfe314af3602e"
  },
  {
    "url": "assets/js/49.eb9f06fd.js",
    "revision": "a990b5cceea18113050651ef881e4f15"
  },
  {
    "url": "assets/js/5.f650fde1.js",
    "revision": "afb090cba0a14f42f570ea9e528d124e"
  },
  {
    "url": "assets/js/50.e55c4411.js",
    "revision": "3e39e25f8a8e1125e0f2c405c1f35aaf"
  },
  {
    "url": "assets/js/51.928cb70f.js",
    "revision": "5ce902ae5d6ad31b1c116db3e023ecd3"
  },
  {
    "url": "assets/js/52.45e71eca.js",
    "revision": "84a64857be094273fa79645f572ca5b9"
  },
  {
    "url": "assets/js/53.0f23893d.js",
    "revision": "bc9d4383f6cbc53352d45d4d13750db5"
  },
  {
    "url": "assets/js/54.5adefc7b.js",
    "revision": "60ca46559deca56c7687ea014df91da9"
  },
  {
    "url": "assets/js/55.e5586d20.js",
    "revision": "0184c32b18bd2def8a969f2dee435fee"
  },
  {
    "url": "assets/js/56.d815d89f.js",
    "revision": "4e321d938f52d71a44d375da9f218453"
  },
  {
    "url": "assets/js/57.ff37b5c2.js",
    "revision": "c3fd94205de5678623ac4ecfb361c93b"
  },
  {
    "url": "assets/js/58.14342354.js",
    "revision": "8ab9dbb642c7535a63015863be368dfc"
  },
  {
    "url": "assets/js/59.770a5d5e.js",
    "revision": "7ef7a2c0ed50bac31d157770f5f4446d"
  },
  {
    "url": "assets/js/6.36b09dfb.js",
    "revision": "d219de4e9b4d059c111f7a5f71fb7aef"
  },
  {
    "url": "assets/js/60.36270379.js",
    "revision": "f5bead01ee700cb411458dab1a7f9c54"
  },
  {
    "url": "assets/js/61.bc1a2326.js",
    "revision": "dd3edb0a0baa085ce4eaa2fe4a21b919"
  },
  {
    "url": "assets/js/62.6c3a1555.js",
    "revision": "212b3156357572096041ffe49d66ab7d"
  },
  {
    "url": "assets/js/63.e4c21a79.js",
    "revision": "ddeb35108569fcc7aca9d141e326d69a"
  },
  {
    "url": "assets/js/64.38c25f5a.js",
    "revision": "07ef115fa1c115e2303db8a397155508"
  },
  {
    "url": "assets/js/65.79793dad.js",
    "revision": "fae0207ff001662eb645924798647cc5"
  },
  {
    "url": "assets/js/66.ab8aaef5.js",
    "revision": "5d6421ac3a4a46279570bfb63c9230b8"
  },
  {
    "url": "assets/js/67.0363c346.js",
    "revision": "a423d703b83ee09c11bee8c8d4dc416e"
  },
  {
    "url": "assets/js/68.f89183df.js",
    "revision": "6e749dbed87af87d9b91bd8650fc7b68"
  },
  {
    "url": "assets/js/69.e83ec790.js",
    "revision": "aede3647ccf2ad054c5b472caee019f6"
  },
  {
    "url": "assets/js/7.9fee92e4.js",
    "revision": "e73b4dcf776faa19e5de83e618a7e3ee"
  },
  {
    "url": "assets/js/70.de905789.js",
    "revision": "04d28804e414ed5262b149019537be2f"
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
    "url": "assets/js/app.9f913e41.js",
    "revision": "2789f504393ea1291f20c6a2f98acade"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "827325b8dc6f7c69d41eb4bea012f171"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "2c06d69a10ab828ae258420afdbff4e8"
  },
  {
    "url": "categories/web编程/index.html",
    "revision": "70a65414f9da46b87cab6c5f1ff0a48f"
  },
  {
    "url": "categories/容器技术/index.html",
    "revision": "06b1a2272504a9daf173e9e0ef8b5f62"
  },
  {
    "url": "categories/服务器运维/index.html",
    "revision": "325602a7e7eb62a9fe809e376a2472c5"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "04dc6a00aac736551ace8f0701c7c2dd"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "fc622494be0a51a3a7e1cb9ab1697ece"
  },
  {
    "url": "categories/编程语言/page/2/index.html",
    "revision": "132c19031a320bbb5db599c986c9762c"
  },
  {
    "url": "categories/编程语言/page/3/index.html",
    "revision": "9401268c77e3646cff7c768bea22ee0f"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "6792ef36523f90d8945ac0425e26ed99"
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
    "revision": "a7b2b283cdfbc5a0136f71a274341a59"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "abe99dd458736b77319a3b835fbe474e"
  },
  {
    "url": "other/project.html",
    "revision": "825eb385ad3a60a4f7ed08ef91afa2cc"
  },
  {
    "url": "tag/index.html",
    "revision": "4b48a1bc12f9e6ffcb9143964c8729de"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "9ad93983a87aa1bf54e180baff763e16"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "cd631e9508eef9c817866b88fdfb7261"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "2d735edb2a8a1d4637ebf72223674def"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "0a29979ef8853a920768b694f46adf0c"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "4ed44ec2afb492030a5c29dc98b4b04c"
  },
  {
    "url": "tags/docker container/index.html",
    "revision": "0385fef236e21b66f87d8d517fd73c6c"
  },
  {
    "url": "tags/docker image/index.html",
    "revision": "9848dd6338ca62378ff986e7f2671472"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "685c768ea8363ac5a205ba9f75064122"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "10ab1b8c95ce8c2f2e7225d534e60fd2"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "b61aa6f029f9fa42f2ae71a1686ee3d7"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "9a15d7fb5676cea45c7a516de13b95b5"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "a70f29843a381146260aae827213313f"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "3393b4e479d1a57333734593c37d05d8"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "338b3391f48d4df6505fcc6ba71e8abf"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "91b5394ff5e608712e5fa3e31be61c28"
  },
  {
    "url": "tags/NCBI Download/index.html",
    "revision": "7b68ded14f50521df8da873b7e9ef12f"
  },
  {
    "url": "tags/NCBI/index.html",
    "revision": "656c7fb9b6edeed27f4e7ea7725436be"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "60056cb84b80601a64bfeab3c5e5e338"
  },
  {
    "url": "tags/ops/index.html",
    "revision": "28ad9f6b92478a9bd68fbb3f51ba19c9"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "6f6dd827e280c6206ff878b3a7ab3c83"
  },
  {
    "url": "tags/python/index.html",
    "revision": "01a4a12f090915f0176784f0513d735a"
  },
  {
    "url": "tags/R/index.html",
    "revision": "e03d770b383987a5c26a2e49d51dd115"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "70b6c02aa97abbaa9c6a5efd7e7bbc60"
  },
  {
    "url": "tags/singularity/index.html",
    "revision": "76743aca4319fa7ba906911a4ccea69a"
  },
  {
    "url": "tags/SQL/index.html",
    "revision": "dd5e7878d92f9bb326fc5c80b5a1e03c"
  },
  {
    "url": "tags/web programming/index.html",
    "revision": "9d83d3d189c2cb0b71f98624f549fe3f"
  },
  {
    "url": "timeline/index.html",
    "revision": "dd69db58b6d85336a6b1e39b2b0266ac"
  },
  {
    "url": "views/codeLanguage/java/maven.html",
    "revision": "3b6cc1fa826d215635d205533ef275fb"
  },
  {
    "url": "views/codeLanguage/java/reference.html",
    "revision": "c1ff5b154424f17ed0e47ca9a1d6246b"
  },
  {
    "url": "views/codeLanguage/java/scirpts_format.html",
    "revision": "1f00867a17515a76cfee2c6ddbc8ec67"
  },
  {
    "url": "views/codeLanguage/java/variant.html",
    "revision": "aa2f88f8d014924fe04a98e6e66f9d90"
  },
  {
    "url": "views/codeLanguage/JS/basicConcept.html",
    "revision": "0dacdbcfc96ba865eb40533742a163a1"
  },
  {
    "url": "views/codeLanguage/JS/dom.html",
    "revision": "d99591548394a8b8b524139719b06b0f"
  },
  {
    "url": "views/codeLanguage/JS/function.html",
    "revision": "4eca9527bb7b2f133218cfc285aa7b2e"
  },
  {
    "url": "views/codeLanguage/JS/reference.html",
    "revision": "1ec3e77684a0859d5ea1af9c363da2e3"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "13f882c556551eb27d5381cedc1728a2"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "016b8ab98c755228276d8e3965e7556e"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "0b3ca9fbc2dd5a40fdbb5f13dbd37f6b"
  },
  {
    "url": "views/codeLanguage/python/reference.html",
    "revision": "743493dc842b331b00eb44a26784e524"
  },
  {
    "url": "views/codeLanguage/R/programControl.html",
    "revision": "991a372d9884f1879e99fd64b26a0e1f"
  },
  {
    "url": "views/codeLanguage/R/reference.html",
    "revision": "fcb70a85810f894ad5b9f2db8f5d73ae"
  },
  {
    "url": "views/codeLanguage/R/variant.html",
    "revision": "2f816b5634b4f5a78402e4f796c11e89"
  },
  {
    "url": "views/codeLanguage/sql/install.html",
    "revision": "b7920efb9b1b172a05871969a1cfc8d8"
  },
  {
    "url": "views/codeLanguage/sql/modified.html",
    "revision": "f182972313313abc4ca989ba1ecb8006"
  },
  {
    "url": "views/codeLanguage/sql/python_sql.html",
    "revision": "9d2493a8249f9facfd04ba01a5b444cd"
  },
  {
    "url": "views/codeLanguage/sql/reference.html",
    "revision": "ec992883edf9079c760ffa5dba60e299"
  },
  {
    "url": "views/codeLanguage/sql/relation_model.html",
    "revision": "e94defeddbcac333311d61abbfc0bcf4"
  },
  {
    "url": "views/codeLanguage/sql/select.html",
    "revision": "0bc20920920e8d57eff2c778f21c7a1e"
  },
  {
    "url": "views/docker/buildImage.html",
    "revision": "a395069d60a277e75e8d34ed2df68a04"
  },
  {
    "url": "views/docker/container.html",
    "revision": "8f193864aad9543179bb92b404eb879b"
  },
  {
    "url": "views/docker/dataMount.html",
    "revision": "80c8d986bc8ebf67555956c8db817453"
  },
  {
    "url": "views/docker/docker_compose.html",
    "revision": "9bae86e328c6807b54a759b5c9b4b97d"
  },
  {
    "url": "views/docker/image.html",
    "revision": "fbd8d7702ff50c84d7766ef89e0a7c67"
  },
  {
    "url": "views/docker/introduction.html",
    "revision": "ce86ff01eda671b50f3fc479fc1114f4"
  },
  {
    "url": "views/docker/reference.html",
    "revision": "fb307abd2baf639b53677440a043be55"
  },
  {
    "url": "views/index.html",
    "revision": "8917685edfee4f8c7b9fa86494320079"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "b040c2ccfa895feb08e973378caa5208"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "62230c2eab754fb4fcce4bf5904785bd"
  },
  {
    "url": "views/ops/frp/use.html",
    "revision": "71d3ceffd1312df681a55990b7c09d0d"
  },
  {
    "url": "views/ops/SGE/introdution.html",
    "revision": "15d8ff2ec4fc04747f1369e7a3c3364c"
  },
  {
    "url": "views/ops/SGE/use.html",
    "revision": "6a2dc22eb6231d9afe01c7e5bd8bce16"
  },
  {
    "url": "views/ops/someproblem/installDisk.html",
    "revision": "7313b450496cb38d6ed6819353edd8e6"
  },
  {
    "url": "views/ops/someproblem/network.html",
    "revision": "e1854da21fb57889c09d20c6a9fc2769"
  },
  {
    "url": "views/singularity/simpleUse.html",
    "revision": "2dc72cf493aa52a92ef3cdf7185d686c"
  },
  {
    "url": "views/software/busco.html",
    "revision": "97efc699b44df5413e10d0caa6d09135"
  },
  {
    "url": "views/software/download_ncbi.html",
    "revision": "cc74f15f8dab5bde8180417c166ade0a"
  },
  {
    "url": "views/software/hic.html",
    "revision": "dfb4cec35a61a2a324e95f2c8dbaa69d"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "c8f83b693ba7c3c1bbf5b7cc36586550"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "aec07f8bf25c573eba9980760603396e"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "06a3c662823c2114fac60051d5e26963"
  },
  {
    "url": "views/webProgram/practise/example1.html",
    "revision": "1e2faa68375cf7e138fa09410da80428"
  },
  {
    "url": "views/webProgram/practise/ncbi_taxon.html",
    "revision": "b3c0c0b6521ef3917ae8366621d0f583"
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
