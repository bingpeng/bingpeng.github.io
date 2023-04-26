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
    "url": "assets/css/0.styles.fe13aade.css",
    "revision": "42e70df6ed8d4f00078c155cee0bd1c6"
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
    "url": "assets/js/10.c8852319.js",
    "revision": "78e693c686cbc614ce93247621e3ca4d"
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
    "url": "assets/js/19.b6d26b9d.js",
    "revision": "9c7f0cec7038240f3fc81f6631d344e8"
  },
  {
    "url": "assets/js/2.c3effee7.js",
    "revision": "4458dcee800b08743aa9900456abce4e"
  },
  {
    "url": "assets/js/20.50c4beb4.js",
    "revision": "a7d3d0240a38bfc08c096861b606a7ec"
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
    "url": "assets/js/26.120789cf.js",
    "revision": "28fdd9bec54511edec233e95fbc56594"
  },
  {
    "url": "assets/js/27.85c7146e.js",
    "revision": "61e57367fadc056851a91cd182158648"
  },
  {
    "url": "assets/js/28.c3f65ab8.js",
    "revision": "5a19e1e9cb4c27db11ae62328ecdc150"
  },
  {
    "url": "assets/js/29.f12ed8c3.js",
    "revision": "7fd70b4bc55b01f6a557e94eaa021da0"
  },
  {
    "url": "assets/js/30.c29212f0.js",
    "revision": "91cefafedfd8f2299a510817607a57f7"
  },
  {
    "url": "assets/js/31.e5ced5fe.js",
    "revision": "9d4a01782a499fc5b021e3f0ce224193"
  },
  {
    "url": "assets/js/32.5f6fe5c2.js",
    "revision": "e8691556d0bf57315b32a874e90a8688"
  },
  {
    "url": "assets/js/33.7e9ed80a.js",
    "revision": "0e607070f4f563c04b2b9f9fd47578b0"
  },
  {
    "url": "assets/js/34.1bf64a0e.js",
    "revision": "226aa9ad0f387694d76a9f1ce9c5da84"
  },
  {
    "url": "assets/js/35.5ee75023.js",
    "revision": "4e12119c57ae3c138329a1da734d7fed"
  },
  {
    "url": "assets/js/36.2f87c2b6.js",
    "revision": "e7edcb1570ce4901e7bc607cf49d1bc6"
  },
  {
    "url": "assets/js/37.c0d4a770.js",
    "revision": "f51838c9735d5027d05330de912c4c42"
  },
  {
    "url": "assets/js/38.4df76422.js",
    "revision": "91e4ab500b647fff3e471432f9689ddb"
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
    "url": "assets/js/41.831fc944.js",
    "revision": "110c33d28140ca3c16d8b14e9ded89d7"
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
    "url": "assets/js/46.a935c42d.js",
    "revision": "aff013ceae069ef16966ac849513bdb0"
  },
  {
    "url": "assets/js/47.7c2e9b75.js",
    "revision": "f4b611347dc6a335fa5f0d3bdb91bd39"
  },
  {
    "url": "assets/js/48.4995649d.js",
    "revision": "1aff6e33047c64805c98ca221a0abb92"
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
    "url": "assets/js/50.c727fa61.js",
    "revision": "02a9572d692706ba98872c95028227cd"
  },
  {
    "url": "assets/js/51.d1e99418.js",
    "revision": "8ea1f4e0603f3b2229e52fedd7c43188"
  },
  {
    "url": "assets/js/52.73118478.js",
    "revision": "92aa46072b9d62d04b36a70f4f356694"
  },
  {
    "url": "assets/js/53.c624e7d0.js",
    "revision": "c4582540687c301542d5064633b9cc82"
  },
  {
    "url": "assets/js/54.5adefc7b.js",
    "revision": "60ca46559deca56c7687ea014df91da9"
  },
  {
    "url": "assets/js/55.33a3c466.js",
    "revision": "ace3eb303b26a09ae95a7e2463ff8a7a"
  },
  {
    "url": "assets/js/56.ef7f5754.js",
    "revision": "bd97aa9739af5bb9c16282186392e01a"
  },
  {
    "url": "assets/js/57.6a351f14.js",
    "revision": "a14d7cfae4e43edb395e625b235c2c76"
  },
  {
    "url": "assets/js/58.9018be40.js",
    "revision": "a9bbe6158344fe33892b4751bc73a0a6"
  },
  {
    "url": "assets/js/59.d9ee92f6.js",
    "revision": "11c5b2cec91138322d3265463cb81d5a"
  },
  {
    "url": "assets/js/6.36b09dfb.js",
    "revision": "d219de4e9b4d059c111f7a5f71fb7aef"
  },
  {
    "url": "assets/js/60.9beea2ea.js",
    "revision": "3be83408e6b3f876f8b62d4ea91636e7"
  },
  {
    "url": "assets/js/61.9a43aec0.js",
    "revision": "b386c9b840705b25ea6098b591ded116"
  },
  {
    "url": "assets/js/62.44bffa5d.js",
    "revision": "b0af82cb37510cb15a53e158ec7603e1"
  },
  {
    "url": "assets/js/63.d621cd12.js",
    "revision": "5f0e711003127860f19919bca9f4dc8d"
  },
  {
    "url": "assets/js/64.f6d2c417.js",
    "revision": "101fe5a79d07367d10a474e961e390f2"
  },
  {
    "url": "assets/js/65.ebb6dcaf.js",
    "revision": "8f5337022dac1412869f1e84b4349ef0"
  },
  {
    "url": "assets/js/66.9d7e4e8a.js",
    "revision": "104c81602eee86b34d4c6397e6c4f48a"
  },
  {
    "url": "assets/js/67.a63b89c2.js",
    "revision": "1d0d5aa6b7fa236298c8fe8becf5f3a9"
  },
  {
    "url": "assets/js/68.a5c8957f.js",
    "revision": "d0ddabd30cb16a5821c9d0b816c3e13e"
  },
  {
    "url": "assets/js/69.21c67ec8.js",
    "revision": "b7b955a4aad1604c8a860e0b1a820283"
  },
  {
    "url": "assets/js/7.d9cfcde7.js",
    "revision": "fca9c5bb8183f8d08aefff74f08793ff"
  },
  {
    "url": "assets/js/70.cfe84dcd.js",
    "revision": "356512e2c9182a97cfd5954e06bfb07e"
  },
  {
    "url": "assets/js/71.388b2eb9.js",
    "revision": "6b9a641f641ef1025bc7c38577378f15"
  },
  {
    "url": "assets/js/72.c4a7629c.js",
    "revision": "19d21176bb4231b700cd698e0011a6b4"
  },
  {
    "url": "assets/js/73.a1d2f01c.js",
    "revision": "cefce156f8dcdfe4eadd0974c3eddb11"
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
    "url": "assets/js/app.6cc9a299.js",
    "revision": "a7dc48b6f9a2f8a19e1e09952b22dd0f"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "0f1191204a6104bac6f920384ef6ee78"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "e646e2d47f80e789e7c35aebcffe6b19"
  },
  {
    "url": "categories/web编程/index.html",
    "revision": "5b58faa057f84bc7bbbe95ffc89e2e0c"
  },
  {
    "url": "categories/容器技术/index.html",
    "revision": "633c9ddd08b718d45c97fc2f8bbaf762"
  },
  {
    "url": "categories/服务器运维/index.html",
    "revision": "5265c3f051733f4bb2eb8817881fbf7e"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "48e98852b4f221f2d959131b4562d4f5"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "46dc05455aa7b8c1192aed10af840fbf"
  },
  {
    "url": "categories/编程语言/page/2/index.html",
    "revision": "8204857cbd196c442da569c7c8053c23"
  },
  {
    "url": "categories/编程语言/page/3/index.html",
    "revision": "1cbde389d8eb902368607af5bfc39492"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "c691979859b688039cd7e2176e3d5fad"
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
    "revision": "1e049c8cb4e0660ecae3206e1f5d76a9"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "99087572dfc89437390b472b6e577b5f"
  },
  {
    "url": "other/project.html",
    "revision": "bd6a68663d96333afc40635cb28178aa"
  },
  {
    "url": "tag/index.html",
    "revision": "36e8c808fd424cbc239e08b6a37f4e0c"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "7f360f77a7fe42f4fa58ac825df495da"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "5a8ecac7bad144dd28e4ee9768f1be3c"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "db2729cc02ce8802fd5134ac0441030e"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "57026c41762035e0ac7022546111d32c"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "2c81638c22909de3f8685a5f95336476"
  },
  {
    "url": "tags/docker container/index.html",
    "revision": "e4cfc61082826930aa16682e675055a9"
  },
  {
    "url": "tags/docker image/index.html",
    "revision": "bc6f8c8af730fab63de896f23ebc1dd3"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "bbf2d20940befbe849a4a419f6cad076"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "1530b5b368dba24f0b3fa86888fd4d14"
  },
  {
    "url": "tags/Gene Anno/index.html",
    "revision": "fea321dd271077475ad6a886e6c73eab"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "84f849dd701b5294c406365160b5e0ba"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "99cda8de2c739f4fb4d97a7bb2bb1518"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "417ab45f896e0fa5c2941d28afdcbc0f"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "b8754712669b70a8263d5ffadebb3871"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "69e6dd6bf2967cf54cd8d8ed41840346"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "bd0a75bb1fc411c3d2606df135f8813c"
  },
  {
    "url": "tags/NCBI Download/index.html",
    "revision": "9041a0fdf89bbb5966c12d484e33da9a"
  },
  {
    "url": "tags/NCBI/index.html",
    "revision": "abb58fbed49bf7b51c785666e16bae3a"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "d93b145b462bbd6dcd52a78e0baf30c0"
  },
  {
    "url": "tags/ops/index.html",
    "revision": "8e51a7e9b53da839446bc8ab7f9c5010"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "2ef63ef5f68017eb98bd230efa2897f6"
  },
  {
    "url": "tags/primer design/index.html",
    "revision": "588d89de11bf669d53f0d7dd414c348d"
  },
  {
    "url": "tags/python/index.html",
    "revision": "36331d82628fb78f0718ae20781b550d"
  },
  {
    "url": "tags/R/index.html",
    "revision": "eb31384e6dd8b9b3dfd7a97d0c7da3cf"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "85741740c418549c6418d58c3cc2f178"
  },
  {
    "url": "tags/singularity/index.html",
    "revision": "9abf36051e7c487fa60037a57fd815e7"
  },
  {
    "url": "tags/SQL/index.html",
    "revision": "c42b4a305144d4d589a98b15770e99a9"
  },
  {
    "url": "tags/web programming/index.html",
    "revision": "7ffb150f22f078783fc495db9ee76662"
  },
  {
    "url": "timeline/index.html",
    "revision": "921a919301921e73cf95b2c5d1e090ed"
  },
  {
    "url": "views/codeLanguage/java/maven.html",
    "revision": "c003591f40078cf8c73c511e922319f1"
  },
  {
    "url": "views/codeLanguage/java/reference.html",
    "revision": "344aea44321fd6a35298914364562613"
  },
  {
    "url": "views/codeLanguage/java/scirpts_format.html",
    "revision": "6efd86fd0e4d7e24fd4c0a394af3681f"
  },
  {
    "url": "views/codeLanguage/java/variant.html",
    "revision": "3501d99cdc7d751e283a02b51c59153a"
  },
  {
    "url": "views/codeLanguage/JS/basicConcept.html",
    "revision": "45f1e2e78592149051b1bd670538aad9"
  },
  {
    "url": "views/codeLanguage/JS/dom.html",
    "revision": "823f8959932045e99ca57ab580cef808"
  },
  {
    "url": "views/codeLanguage/JS/function.html",
    "revision": "aea00e3a8f693613759f1b755bdd2a34"
  },
  {
    "url": "views/codeLanguage/JS/reference.html",
    "revision": "02366847734011fe75768ac0501a2c1e"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "691be42d5889ea2333f5c5e82cf67b3f"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "3024fc2ef9bef444f480d202fadb47ba"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "2bbd8a31f75b1131cdc821aad8ddf23d"
  },
  {
    "url": "views/codeLanguage/python/reference.html",
    "revision": "f081417ef3f3a00ae3c1bf9fff4fac01"
  },
  {
    "url": "views/codeLanguage/R/programControl.html",
    "revision": "01377d6d57d7e7852ca7f6ab339f4874"
  },
  {
    "url": "views/codeLanguage/R/reference.html",
    "revision": "a0db403e3c241288e1a3546533bad773"
  },
  {
    "url": "views/codeLanguage/R/variant.html",
    "revision": "9c3f79dc7e938db873f845223af66688"
  },
  {
    "url": "views/codeLanguage/sql/install.html",
    "revision": "b7667c9b190b520ccaeac32b10f9c5c3"
  },
  {
    "url": "views/codeLanguage/sql/modified.html",
    "revision": "4f1b04336ee6cb28ccdf140a3cfb633a"
  },
  {
    "url": "views/codeLanguage/sql/python_sql.html",
    "revision": "e2c9778ef29c5f50f5da4dcb735942cf"
  },
  {
    "url": "views/codeLanguage/sql/reference.html",
    "revision": "ca3f53f579ba35615c84855d77685dad"
  },
  {
    "url": "views/codeLanguage/sql/relation_model.html",
    "revision": "32015f51af607b6996a66006064349d3"
  },
  {
    "url": "views/codeLanguage/sql/select.html",
    "revision": "5762a6d535ea4d0404c14c1e7938685b"
  },
  {
    "url": "views/docker/buildImage.html",
    "revision": "f27aaacf768fabe9641eb44e5f156f78"
  },
  {
    "url": "views/docker/container.html",
    "revision": "0af5b8239fbf9f14db266f74aba8b983"
  },
  {
    "url": "views/docker/dataMount.html",
    "revision": "666af9106fc3a70dc13fa3dbd440d2d4"
  },
  {
    "url": "views/docker/docker_compose.html",
    "revision": "42efe0ec76eba9fa2d1913685448c7da"
  },
  {
    "url": "views/docker/image.html",
    "revision": "a1c852cf9b6ac59502012fdd317a7b3d"
  },
  {
    "url": "views/docker/introduction.html",
    "revision": "79d9c53230070a83fb24512050d02bed"
  },
  {
    "url": "views/docker/reference.html",
    "revision": "54f28718c659f95075d9b049dbf17931"
  },
  {
    "url": "views/index.html",
    "revision": "519104c29f1bb0cccd2764392c01dbbc"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "bf3e8e5fca91b77c74deed10ac4d87a9"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "6a5d10a0736d358845feb6a68a4b66d8"
  },
  {
    "url": "views/ops/frp/use.html",
    "revision": "1b5f74f7500af45d9376439212d3f818"
  },
  {
    "url": "views/ops/SGE/introdution.html",
    "revision": "3db6da680696154fa2aaf77d37564c68"
  },
  {
    "url": "views/ops/SGE/use.html",
    "revision": "b8904e63038cc35fceb9a11b3381f989"
  },
  {
    "url": "views/ops/someproblem/installDisk.html",
    "revision": "f307a0e80cc68127ca084077d149ec02"
  },
  {
    "url": "views/ops/someproblem/libg2c.html",
    "revision": "4390464ea708f7fb0f1782d88ccbebbe"
  },
  {
    "url": "views/ops/someproblem/network.html",
    "revision": "53b09c883a2c3a08a20715715ccc5303"
  },
  {
    "url": "views/singularity/simpleUse.html",
    "revision": "53b3bca2d57531d593cb4d591a520a08"
  },
  {
    "url": "views/software/busco.html",
    "revision": "aabf8c0d444d9069f0fc98ee2a5baae8"
  },
  {
    "url": "views/software/download_ncbi.html",
    "revision": "65544e15e28bb53a0887366622f15aec"
  },
  {
    "url": "views/software/hic.html",
    "revision": "d7098a1b7d3efc9106f642672be9abfe"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "26ce381b3a9637ba6e1e80c91629b84a"
  },
  {
    "url": "views/software/interproscan.html",
    "revision": "5dfe36be557f4be7af9f450d5f993185"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "4b288e6eb13c2ce93cc4aec18cf8b531"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "9b34b0f6e73546e3d98511cc8901d784"
  },
  {
    "url": "views/software/primer3web.html",
    "revision": "cd04a28d2d116e06d20230aeaa008125"
  },
  {
    "url": "views/webProgram/practise/example1.html",
    "revision": "fc973f339457f5ac0f2f983c3e54710f"
  },
  {
    "url": "views/webProgram/practise/ncbi_taxon.html",
    "revision": "d6bed076d347b947f7d2d4244b1b9c49"
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
