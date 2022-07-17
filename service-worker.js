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
    "url": "assets/js/20.0ab6f837.js",
    "revision": "6a5b0ccd403d474b2a49eb6d9edbd96a"
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
    "url": "assets/js/24.2c80718a.js",
    "revision": "b51805ffe53840be505868a38a2b4e6d"
  },
  {
    "url": "assets/js/25.787c0e08.js",
    "revision": "69935ee00e74d48883158b779d40ff88"
  },
  {
    "url": "assets/js/26.ba0e3ecc.js",
    "revision": "2c1c3cc76c0c86fe1238fe8cb4d4b8b7"
  },
  {
    "url": "assets/js/27.53c00638.js",
    "revision": "46f9d255303b9113c0f5ece499ceafdf"
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
    "url": "assets/js/30.e602ce82.js",
    "revision": "f9b3d093c465da840ad1ea66faa3adbc"
  },
  {
    "url": "assets/js/31.598efb4d.js",
    "revision": "ecf2beed6c8033ef6e971505179ed4c3"
  },
  {
    "url": "assets/js/32.0697eb41.js",
    "revision": "0793d698a08541c51f9deea278f9ca9b"
  },
  {
    "url": "assets/js/33.149fd3a2.js",
    "revision": "ceda42141be3dc848aa857e25f3467d9"
  },
  {
    "url": "assets/js/34.d2d88b1c.js",
    "revision": "53ec8ea3b2d8df37e1067ed0dc4aa800"
  },
  {
    "url": "assets/js/35.99c4e8ae.js",
    "revision": "e756b58399dbe190ef536c3a5c2a8de8"
  },
  {
    "url": "assets/js/36.b6669c3c.js",
    "revision": "610c5c02772ca1f2c7f4532ae8bec17a"
  },
  {
    "url": "assets/js/37.84239f38.js",
    "revision": "52432f3c88258171b7d438541b00c187"
  },
  {
    "url": "assets/js/38.254de37f.js",
    "revision": "e6abb37ca02231ec5803a4fa42c66749"
  },
  {
    "url": "assets/js/39.0904f599.js",
    "revision": "4a923723f95278041daeadcc713df10b"
  },
  {
    "url": "assets/js/40.48fc1e3d.js",
    "revision": "ec89a31924b8771b5682116bcf889994"
  },
  {
    "url": "assets/js/41.22183a89.js",
    "revision": "a71e9728776c7181779677f82374efa4"
  },
  {
    "url": "assets/js/42.c8181dc6.js",
    "revision": "44f3874f308c36ec41cae360a56d1c9a"
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
    "url": "assets/js/app.4ce86783.js",
    "revision": "4e8c3386645757da0d5e0d7af910d56d"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "b5e9cb2341b743dcbe30f95992229935"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "4ee29153c214a4233a10061b7885fa18"
  },
  {
    "url": "categories/容器技术/index.html",
    "revision": "8e1296269919963a815d349cd71f8585"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "a99f101280b5fa51909704225700f3e2"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "7271850dc4b692680c53bac555d9d0d2"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "b8fd0f86b7632dbaab439679f9445e39"
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
    "revision": "ce9b520e41a03ffaccfb784760ed701f"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "8176b82b25917577f1355015cd207b20"
  },
  {
    "url": "other/project.html",
    "revision": "6aa5265cecf7336e9c4a8760b6b5a167"
  },
  {
    "url": "tag/index.html",
    "revision": "eb9465e725eead1f0d8b70d803b2386b"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "ed223dff07b9c5bf965fe96ae53d9d9c"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "768356b5874569e2cbb66643f4af0fde"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "f96fd6e8000e7e21a10446bfb6ed7a9f"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "06969b48b8e3081a04cbdf565b7e5a85"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "e7d35570eff341742977613e7b5d7d67"
  },
  {
    "url": "tags/docker container/index.html",
    "revision": "14b36581682cbc69df0c15a642df7628"
  },
  {
    "url": "tags/docker image/index.html",
    "revision": "ca04b8bc179210f71e8d60290faa89ff"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "94bf380ccfe676f98bd35379434b291f"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "2641c1a68dcc0fb7723aa496dba25166"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "5203b80b9a5e9e160200ca0adcbc2d18"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "f0f0b0d546ea77acf53b08b406556cfc"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "1886be2adc1263783b743830e1616227"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "a4c4e731475144f8f90be7bcec55c9f7"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "9cabe735553131854a77f17d9a53f147"
  },
  {
    "url": "tags/python/index.html",
    "revision": "e736d0c08bdd6df9b0f6cff820286dbd"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "67244cc1d107cf29835ee3cac3d45693"
  },
  {
    "url": "timeline/index.html",
    "revision": "10362da52433fab9e3d748e9c99653c0"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "c0b90ae1553da05d9dfe70186c6238c7"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "cd7f6709f218dac6d8739116416d596b"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "aa9e7c5c2df9b44cdd99c451922d4276"
  },
  {
    "url": "views/docker/container.html",
    "revision": "400a890a132e01126e5651c85384396c"
  },
  {
    "url": "views/docker/dataMount.html",
    "revision": "c2207261e2adfa6445616eed1a239ae1"
  },
  {
    "url": "views/docker/image.html",
    "revision": "bd74bbaf71132e660e65007537c5e6c7"
  },
  {
    "url": "views/docker/introduction.html",
    "revision": "d78ee48cc364037ad873e2b4956eaca5"
  },
  {
    "url": "views/index.html",
    "revision": "bb6cb020b14413f1441577efc7351120"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "4417d3269cd58942d3806bbb6c1ae3d5"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "b3ba06d7922e7833b85c62705ce8d233"
  },
  {
    "url": "views/SGE/introdution.html",
    "revision": "c283688a306a1b1b2bc682c3c28c2190"
  },
  {
    "url": "views/SGE/use.html",
    "revision": "55fb565bf0f911eb7b525c388c99f94e"
  },
  {
    "url": "views/software/busco.html",
    "revision": "8a29b258bbd5548a1dcf379dd0425af5"
  },
  {
    "url": "views/software/hic.html",
    "revision": "e5ef9aaaa82530357f4363468c37748c"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "79e161d5eb0b9f1405534650ba5dd321"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "fd20da0779f235523d9fa6163d83c85d"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "d05f2bbca75b63caf995bbe888723e03"
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
