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
    "url": "assets/js/20.358b513f.js",
    "revision": "3563a0a0cc793e8b3121f834de5cc310"
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
    "url": "assets/js/26.c282f3b4.js",
    "revision": "abb10394980755c9664e5e776c9fa162"
  },
  {
    "url": "assets/js/27.09cec7bb.js",
    "revision": "991c145898eed3796eebf53fa7c9e1d5"
  },
  {
    "url": "assets/js/28.61fa1b18.js",
    "revision": "5af0c8de8ca514ceafb4b494fc110fed"
  },
  {
    "url": "assets/js/29.f12ed8c3.js",
    "revision": "7fd70b4bc55b01f6a557e94eaa021da0"
  },
  {
    "url": "assets/js/30.c9185fd4.js",
    "revision": "6b3c05f740fe404a885029d8bb514e4e"
  },
  {
    "url": "assets/js/31.3d648656.js",
    "revision": "08a2620408a5f741a2fe3d884547dc60"
  },
  {
    "url": "assets/js/32.e9b5c260.js",
    "revision": "78314afae9e103446697329324047b26"
  },
  {
    "url": "assets/js/33.7e9ed80a.js",
    "revision": "0e607070f4f563c04b2b9f9fd47578b0"
  },
  {
    "url": "assets/js/34.82402e29.js",
    "revision": "cd392aabc96af7f481ba7af210d0210f"
  },
  {
    "url": "assets/js/35.adbfb5a0.js",
    "revision": "35f4ccdda8f39aa4e18ea1015e4b38a8"
  },
  {
    "url": "assets/js/36.0baa4cf1.js",
    "revision": "b66c917b6f7838a057751f19d46525f9"
  },
  {
    "url": "assets/js/37.68933f81.js",
    "revision": "b74d4df60e082082bf7decacd170043e"
  },
  {
    "url": "assets/js/38.58eb64b6.js",
    "revision": "28084f1ba9d55329db82effb2be9a478"
  },
  {
    "url": "assets/js/39.8267d89e.js",
    "revision": "e1ce80b18f0beba52661c6367d07ba83"
  },
  {
    "url": "assets/js/40.81d8f650.js",
    "revision": "41915d722caf9e0cfc171dd80fad60c4"
  },
  {
    "url": "assets/js/41.d12a5c2d.js",
    "revision": "44151cbb63f922ca405297d1b135095a"
  },
  {
    "url": "assets/js/42.c76a317a.js",
    "revision": "1b97ba9b3dc6d4aa6df526f314123185"
  },
  {
    "url": "assets/js/43.331a12a6.js",
    "revision": "41fab3bbfae5f5c6fd8a3763baffca2e"
  },
  {
    "url": "assets/js/44.e87c93ba.js",
    "revision": "6724089046b09fc016da0a76cc165c2e"
  },
  {
    "url": "assets/js/45.8fadeda5.js",
    "revision": "61f963ab42512dfa8259cab993b564eb"
  },
  {
    "url": "assets/js/46.55f79b52.js",
    "revision": "e977849a5c9397d795ad76f02882b272"
  },
  {
    "url": "assets/js/47.655ae846.js",
    "revision": "fa5077d3b875642f75ad36ca0d8aa296"
  },
  {
    "url": "assets/js/48.3621b897.js",
    "revision": "8c474cd529697effdec314c695718bf7"
  },
  {
    "url": "assets/js/49.6c85bc09.js",
    "revision": "e1af68b903f098a9fa0c4a0245572d60"
  },
  {
    "url": "assets/js/5.f650fde1.js",
    "revision": "afb090cba0a14f42f570ea9e528d124e"
  },
  {
    "url": "assets/js/50.fc86aaa8.js",
    "revision": "6c485de849a998c0ec2d7de5f70e0d97"
  },
  {
    "url": "assets/js/51.b0bd62aa.js",
    "revision": "491dce95c44d2a3d8248941bf4fbedd7"
  },
  {
    "url": "assets/js/52.2f16213f.js",
    "revision": "5bda6c303d534c87e7d87cdffc5a39da"
  },
  {
    "url": "assets/js/53.ccb166bb.js",
    "revision": "db5d3c4e45715dfea626c591d44c37d4"
  },
  {
    "url": "assets/js/54.3a6d049f.js",
    "revision": "bd9f8619c980f02e9fd4f35e7da16897"
  },
  {
    "url": "assets/js/55.1559a649.js",
    "revision": "274e3bab7ef7e25ad673b9b3bdcbe0a4"
  },
  {
    "url": "assets/js/56.19a3997a.js",
    "revision": "cb7411aed2067e5ffb54e5d8e49a8dac"
  },
  {
    "url": "assets/js/57.efe7152b.js",
    "revision": "1e5eea558bc59eb19f457374c843d8e0"
  },
  {
    "url": "assets/js/58.3497a57e.js",
    "revision": "886a3324cc08f10d1bbe37b0bd81f434"
  },
  {
    "url": "assets/js/59.6c3d8ba5.js",
    "revision": "a27bc8766327e60499735abca90a05f8"
  },
  {
    "url": "assets/js/6.36b09dfb.js",
    "revision": "d219de4e9b4d059c111f7a5f71fb7aef"
  },
  {
    "url": "assets/js/60.c94c70ab.js",
    "revision": "4f95b274eca6dfcb3abccbb506e759b6"
  },
  {
    "url": "assets/js/61.832816a0.js",
    "revision": "e16d9ecd37a9c92f4c518e5cefd65109"
  },
  {
    "url": "assets/js/62.824b0fb8.js",
    "revision": "4b034d0fbc07c450bf280d1c12d29cc0"
  },
  {
    "url": "assets/js/63.35af8d31.js",
    "revision": "2b3c93e355f917cc42089b9f49071535"
  },
  {
    "url": "assets/js/64.58616e19.js",
    "revision": "c8d92521bc589af0b1706be31ef81390"
  },
  {
    "url": "assets/js/65.2a408951.js",
    "revision": "4c2e9bde0117ed8ae904cc0c10072ed0"
  },
  {
    "url": "assets/js/66.5ab2c1d0.js",
    "revision": "789f181c5ecdfd5e4438712bf78c43fc"
  },
  {
    "url": "assets/js/67.9a4b6c99.js",
    "revision": "3c85a06e107306f96c69e036f5522edf"
  },
  {
    "url": "assets/js/68.a58c8b09.js",
    "revision": "2e22c81c23a11fa0875e7ce57fad256a"
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
    "url": "assets/js/app.c63a0fc2.js",
    "revision": "47d0e12d516205be6b615fd225cc004f"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "7336555ba00964e9a28926ac1a455923"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "62b8c18aa89366fad404a9eb6d79880c"
  },
  {
    "url": "categories/web编程/index.html",
    "revision": "9f23e5d69614b27dd8842031bc6681be"
  },
  {
    "url": "categories/容器技术/index.html",
    "revision": "9f336dfe5233e622c25aec6cd53059aa"
  },
  {
    "url": "categories/服务器运维/index.html",
    "revision": "c6eda3a22d359f4b5da8776f9d87970b"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "568d81ab7b4101b55d599077b50ba5d2"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "974f848953134572a122c0965490a0df"
  },
  {
    "url": "categories/编程语言/page/2/index.html",
    "revision": "a6205c3b4d11062253efb5f27a8d3ed8"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "c28be4c233f72710d12dc81a0a9e7605"
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
    "revision": "deb12c54b4ae62ddd57767e8d1a76d60"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "fe131bfbc24abc7c980390a69b7b8463"
  },
  {
    "url": "other/project.html",
    "revision": "579e180d5aee136c9886f34f7c786107"
  },
  {
    "url": "tag/index.html",
    "revision": "c13e88f2d1c9e460ec49de44b1f78f32"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "af310a3515436fa484333ec121dd833f"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "479a70e28ecdb87fb09ffa64d3769a21"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "dfa351a1bce1a46dc27f25d5f1f752ea"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "22cb53a7eb46db852b7eb6a15ab6a4fe"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "2d0ed9bd40b8ee29088b85ff3839bf5a"
  },
  {
    "url": "tags/docker container/index.html",
    "revision": "8799f9a065526eea7988a9068603ea41"
  },
  {
    "url": "tags/docker image/index.html",
    "revision": "cfd40950673954cabf3b1a0245840d8a"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "2f15d007b6830374d49f9b2ebb09385b"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "1c8841e403f0310ccdf9af47cf194f89"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "4e45ed084af575a8a1cd7d888880a776"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "6e7d552024135ee47a4a51e47bce6a0d"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "d05e96003ef09c106c07bef9b0cb257b"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "a805374bf79150b3305a972feb6be269"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "91f42b4242c6b8078812c3f7fe1791e4"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "646631388281225380470b0cb49e9a8c"
  },
  {
    "url": "tags/NCBI Download/index.html",
    "revision": "9a06d625eea364ade486ed95836ca914"
  },
  {
    "url": "tags/NCBI/index.html",
    "revision": "532f2c7b6f0903df42d3fcf836966667"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "53bf05f92e0e69388a922ae8acd91070"
  },
  {
    "url": "tags/ops/index.html",
    "revision": "c7916d4aa0af32f11791bde540bbbaef"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "7e351b47ae6576b8ec5570ea87220b3a"
  },
  {
    "url": "tags/python/index.html",
    "revision": "1436f242eeb6d3fdb26ebf5357aef926"
  },
  {
    "url": "tags/R/index.html",
    "revision": "e267f70294da0f7287f0fc57421cd51d"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "1d26f5ea1fd4284e9003a746ac5717df"
  },
  {
    "url": "tags/singularity/index.html",
    "revision": "61cdf29d75f39975f8143475c4cb42c7"
  },
  {
    "url": "tags/SQL/index.html",
    "revision": "f6e4b066d0e837a31e6ccdc7b6895331"
  },
  {
    "url": "tags/web programming/index.html",
    "revision": "932db24e4f9a17d2cbc48651654fdae2"
  },
  {
    "url": "timeline/index.html",
    "revision": "a3bcf7a1380926043831ca58f77c3363"
  },
  {
    "url": "views/codeLanguage/java/maven.html",
    "revision": "747ee742642ce0128e246815310d7fee"
  },
  {
    "url": "views/codeLanguage/java/reference.html",
    "revision": "e4e08cae95cb7d2a8350df1ee4fc7388"
  },
  {
    "url": "views/codeLanguage/JS/basicConcept.html",
    "revision": "e996616dd00609d393b9023df2f5da78"
  },
  {
    "url": "views/codeLanguage/JS/dom.html",
    "revision": "33bc89b7bedfc5b35c18a0c834d64984"
  },
  {
    "url": "views/codeLanguage/JS/function.html",
    "revision": "df1e79bba38db7350472169541be9034"
  },
  {
    "url": "views/codeLanguage/JS/reference.html",
    "revision": "a08fca38da938e6bb6c0e00ffd7e7410"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "2c35024466fe6044dea5efdf7a157153"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "b65a430d355543dbf265ae7c951dcea7"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "a8524b9b745127f8335df328f2fd6e63"
  },
  {
    "url": "views/codeLanguage/python/reference.html",
    "revision": "bc4bd07e68efff8d410fd11953c9cf13"
  },
  {
    "url": "views/codeLanguage/R/programControl.html",
    "revision": "b858026a1d40cc81770edf776c710490"
  },
  {
    "url": "views/codeLanguage/R/reference.html",
    "revision": "738c0d68112e82c7ce59824e563252da"
  },
  {
    "url": "views/codeLanguage/R/variant.html",
    "revision": "64a1a5d2ff2f8b1dec0c9b1583893cb8"
  },
  {
    "url": "views/codeLanguage/sql/install.html",
    "revision": "144bdb95d8b4f8cd14f5cc3964add5d6"
  },
  {
    "url": "views/codeLanguage/sql/modified.html",
    "revision": "af44757f4a43f30d75ddbde919d86c2c"
  },
  {
    "url": "views/codeLanguage/sql/python_sql.html",
    "revision": "55bd0e802486f01b41e898c4b88e243e"
  },
  {
    "url": "views/codeLanguage/sql/reference.html",
    "revision": "ce56afe27b5608e86ad289d2fb2f3d52"
  },
  {
    "url": "views/codeLanguage/sql/relation_model.html",
    "revision": "fe7070fd5fe3dbecccc9badb52e54ba3"
  },
  {
    "url": "views/codeLanguage/sql/select.html",
    "revision": "34abb905dde26d1b3c6d45f173192ee0"
  },
  {
    "url": "views/docker/buildImage.html",
    "revision": "0e03d5c2ee06f793a7ccca124d7127cf"
  },
  {
    "url": "views/docker/container.html",
    "revision": "6015853ddf6a6f87be2e42bcf75623f6"
  },
  {
    "url": "views/docker/dataMount.html",
    "revision": "7700caf79eb86b55e5c30d58260c8f69"
  },
  {
    "url": "views/docker/docker_compose.html",
    "revision": "3adc763893fbd9cc962bcfe64b22469a"
  },
  {
    "url": "views/docker/image.html",
    "revision": "5b16a33940978beec69033ef2bb35f87"
  },
  {
    "url": "views/docker/introduction.html",
    "revision": "2e558489010282949f7543800f06db02"
  },
  {
    "url": "views/docker/reference.html",
    "revision": "f92d04eed56426dd7cdf030d4941b188"
  },
  {
    "url": "views/index.html",
    "revision": "6ed2a4c867cd910412a946b1f41cb56b"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "bebfd84cc7d084fed07efd9f113b7c75"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "b5f914dadf3bfd568c9fb0498fd7d91a"
  },
  {
    "url": "views/ops/frp/use.html",
    "revision": "1756292a4e5580c783f1b031dfff21c5"
  },
  {
    "url": "views/ops/SGE/introdution.html",
    "revision": "70e923efd0d1508b39f3fe1eb3f588f2"
  },
  {
    "url": "views/ops/SGE/use.html",
    "revision": "3a363f976b4c66cb1251467c78309c9f"
  },
  {
    "url": "views/ops/someproblem/installDisk.html",
    "revision": "d4a8c3e91c92f9ede33f1245bd8fe407"
  },
  {
    "url": "views/ops/someproblem/network.html",
    "revision": "461a6c03b4388da0904b5915094b1c0f"
  },
  {
    "url": "views/singularity/simpleUse.html",
    "revision": "4732f69d3b65720a89a443bf4169c884"
  },
  {
    "url": "views/software/busco.html",
    "revision": "2de7ab7ed21d8c440c8f723cadd8567f"
  },
  {
    "url": "views/software/download_ncbi.html",
    "revision": "63777a6350b97cd9be7207254c15cd49"
  },
  {
    "url": "views/software/hic.html",
    "revision": "1c2c01023ba2801efcdece0d81fc85aa"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "32d4eccef2ce9ab943da6ea07d21bbb6"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "8a83c1cfeb0f5737621454326a439a36"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "0fa2f2c9d38c1e8cb9f447d08cb77fc5"
  },
  {
    "url": "views/webProgram/practise/example1.html",
    "revision": "d37441da5ad96e3a1ffff9927a66723d"
  },
  {
    "url": "views/webProgram/practise/ncbi_taxon.html",
    "revision": "3f13be39cfa8c63c4c612d748989b899"
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
