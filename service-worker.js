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
    "url": "assets/js/20.5c193572.js",
    "revision": "7f259c774be445f36deb9f9b6c99d185"
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
    "url": "assets/js/26.1d1f7f6c.js",
    "revision": "1108f9ce71f56274260bd6c8ab3791fd"
  },
  {
    "url": "assets/js/27.e0826949.js",
    "revision": "fa9be9d28a28cad2e82910caf9ca50ec"
  },
  {
    "url": "assets/js/28.1c048e3d.js",
    "revision": "70d8eb6ccafdcd25097eaa38c30145ee"
  },
  {
    "url": "assets/js/29.5fe4991d.js",
    "revision": "142a3bbdeee8c8a8beb38d81823719f9"
  },
  {
    "url": "assets/js/30.4d8f246b.js",
    "revision": "388885f7b2a17c1d3eb867eb131fefe2"
  },
  {
    "url": "assets/js/31.8970ae73.js",
    "revision": "c09f6477a65e375c504340dac4717bfb"
  },
  {
    "url": "assets/js/32.e91ac767.js",
    "revision": "077f3bfc0d6cb6e7f85faa54d96c7eed"
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
    "url": "assets/js/36.929b69d4.js",
    "revision": "1b4a1d387dc8aca366d8b14475f3731e"
  },
  {
    "url": "assets/js/37.01e739fe.js",
    "revision": "3623442d207ff4d2de769a30579a3e07"
  },
  {
    "url": "assets/js/38.58eb64b6.js",
    "revision": "28084f1ba9d55329db82effb2be9a478"
  },
  {
    "url": "assets/js/39.d7243ccf.js",
    "revision": "d807863d2eef13ed375d7372c06842d2"
  },
  {
    "url": "assets/js/40.94fceb73.js",
    "revision": "8c430fb5c12f2543dc71a6bd568a9701"
  },
  {
    "url": "assets/js/41.ae1e8260.js",
    "revision": "63f42c529525df641dbe05cbbc76b4f4"
  },
  {
    "url": "assets/js/42.9ce779c7.js",
    "revision": "a5a2558edba9e5e9a702ed55936adc39"
  },
  {
    "url": "assets/js/43.cb0fb5d8.js",
    "revision": "c10a7d40a037b3e3f471c182290bbc4a"
  },
  {
    "url": "assets/js/44.9e25ebf5.js",
    "revision": "1a1085aacf02f5abf72255e7ebc096f5"
  },
  {
    "url": "assets/js/45.8fadeda5.js",
    "revision": "61f963ab42512dfa8259cab993b564eb"
  },
  {
    "url": "assets/js/46.e57269d2.js",
    "revision": "f69cb6319252dd7e513f99324e7c918d"
  },
  {
    "url": "assets/js/47.54ffa086.js",
    "revision": "84367b18173e221f5f8ff539ca3393c4"
  },
  {
    "url": "assets/js/48.de470d1f.js",
    "revision": "815ce9b1437ee1ddf19a9b8d8b58a881"
  },
  {
    "url": "assets/js/49.a58b8d84.js",
    "revision": "1188fd6912e63bfaae0a89d8558cce95"
  },
  {
    "url": "assets/js/5.f650fde1.js",
    "revision": "afb090cba0a14f42f570ea9e528d124e"
  },
  {
    "url": "assets/js/50.5a009b07.js",
    "revision": "8a4e6a24fe37f095716ed5074610363a"
  },
  {
    "url": "assets/js/51.63a09b34.js",
    "revision": "0f7ab8f9fe7d81c183d8c57bc7ddbfeb"
  },
  {
    "url": "assets/js/52.71781b11.js",
    "revision": "18051e5905a18f407df87fa221b7661c"
  },
  {
    "url": "assets/js/53.3e9e2431.js",
    "revision": "2650e4b2d87c7145f8bd3b761901c195"
  },
  {
    "url": "assets/js/54.a41207a3.js",
    "revision": "f4f98b7c740a04097a62312eff7824e8"
  },
  {
    "url": "assets/js/55.bb75368a.js",
    "revision": "508c1908c9fcdd66f951b44fdf9e6f32"
  },
  {
    "url": "assets/js/56.53203f42.js",
    "revision": "53a8ddf1c05a46269e2e52c0f6264dec"
  },
  {
    "url": "assets/js/57.da25cb8a.js",
    "revision": "39b80d2b0b1ee6dbdfae47de55c4c639"
  },
  {
    "url": "assets/js/58.3497a57e.js",
    "revision": "886a3324cc08f10d1bbe37b0bd81f434"
  },
  {
    "url": "assets/js/59.2cdc50e7.js",
    "revision": "24a46ea62ef9d5dcd1d617233fd63cb9"
  },
  {
    "url": "assets/js/6.36b09dfb.js",
    "revision": "d219de4e9b4d059c111f7a5f71fb7aef"
  },
  {
    "url": "assets/js/60.03652520.js",
    "revision": "6e91e22cd73acaa4fbd8e077c9297adc"
  },
  {
    "url": "assets/js/61.cb1a4dfb.js",
    "revision": "dc0f23639e01bb0d45d895d1d0849d8d"
  },
  {
    "url": "assets/js/62.8f905f93.js",
    "revision": "777dd8a66dfc1f6777332aaa40debb19"
  },
  {
    "url": "assets/js/63.7b860d0f.js",
    "revision": "a3c1877cb8c45506d874af2feeae8bbb"
  },
  {
    "url": "assets/js/64.98468723.js",
    "revision": "3743cd637005a1073fec7225a299a495"
  },
  {
    "url": "assets/js/65.9e066b7b.js",
    "revision": "0fa464f04a0881275fdcc4cb548b3e26"
  },
  {
    "url": "assets/js/66.1196a0e5.js",
    "revision": "6a0276bd02a77b9181b427a962331330"
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
    "url": "assets/js/app.6192cd06.js",
    "revision": "d9b65522b6dad160e4689e7eb791fc1d"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "af39f013aaddb7c908e661323b6fff60"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "cc8ac3d4594a6db8a9646928b7ec365b"
  },
  {
    "url": "categories/web编程/index.html",
    "revision": "90dc25984a6daa5873a5c423ef33a7ac"
  },
  {
    "url": "categories/容器技术/index.html",
    "revision": "ac6faa11d8ef09002e4a4e2cb242361c"
  },
  {
    "url": "categories/服务器运维/index.html",
    "revision": "ab199cdcf0c296ca65a42f147c9a4f45"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "4ba6184e90a3c323ad6fc303dba658b2"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "6d2e49052206d5dac021d9f69ad9ba34"
  },
  {
    "url": "categories/编程语言/page/2/index.html",
    "revision": "dc21809810cee6d31d64665f46ec7118"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "5cf1f71a7d942daaccb48e5b75150b95"
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
    "revision": "fc84402832be45c910bc68aea1d8dc1a"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "8aaf804bf41512ac4c2940fc440f8275"
  },
  {
    "url": "other/project.html",
    "revision": "3b55df2a6312fe9c02668d78784d496e"
  },
  {
    "url": "tag/index.html",
    "revision": "e827a0146da5ce4a0f830605f4487b5f"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "24a627442aa231e8d423232e1c2af260"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "ab03ccac4a775003900512e614fdbf7a"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "2f96b207fa1f4b21f3f16444d7ac9081"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "2107d83d81c252b9ebec467b459ceab4"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "fb09f73f6dc50db69e4b90785bf9ea5f"
  },
  {
    "url": "tags/docker container/index.html",
    "revision": "31d43379a7654a63d41fa7288f960816"
  },
  {
    "url": "tags/docker image/index.html",
    "revision": "bea36144eadd67bc8b07e466af66057b"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "a17ef5ba6d0a37316a0d2187dad606e1"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "dd71437a7fdb5e09e32617cf99c018fe"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "ad9bce906b666ef0293eba93127db609"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "f743dfb9a0566b0cd466f91ff76b7734"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "ed30ccd1b2331701aebd9b43ec6e158b"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "c64114641197ca55413c6435c95e5133"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "25e13e01de6de1721ba462c295546eea"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "c180224bfb828ef7b8d2b8f61772d083"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "2aea262082eb51efa74e8879d7c1bd01"
  },
  {
    "url": "tags/ops/index.html",
    "revision": "3bea11f227f8b84a0a25a5d5aa56ce3e"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "1de912533353aeaf4dfcc0ef45b58c99"
  },
  {
    "url": "tags/python/index.html",
    "revision": "a283b8cc73206dd9ce104269b6946bcb"
  },
  {
    "url": "tags/R/index.html",
    "revision": "91ad73512ac34b64a636b30eb7e47716"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "e5ded2c4565422045841693fcb78edef"
  },
  {
    "url": "tags/singularity/index.html",
    "revision": "e374773c8676fff94cc11a01f3488dc0"
  },
  {
    "url": "tags/SQL/index.html",
    "revision": "218c48a6da4003640f877b9dfbaa1947"
  },
  {
    "url": "tags/web programming/index.html",
    "revision": "3c2001722b4172163788e8d0257292ba"
  },
  {
    "url": "timeline/index.html",
    "revision": "54fcb8bbd6c230580a349db5e7baf4ef"
  },
  {
    "url": "views/codeLanguage/java/maven.html",
    "revision": "7857270bc06aa02354fe26ed8387c058"
  },
  {
    "url": "views/codeLanguage/java/reference.html",
    "revision": "ffee30607a33a18d17e6204460e89b73"
  },
  {
    "url": "views/codeLanguage/JS/basicConcept.html",
    "revision": "343d6a7d4def25a662bf4aa87fc2577d"
  },
  {
    "url": "views/codeLanguage/JS/dom.html",
    "revision": "3c34cd6761e2b501804bff703c7ac44b"
  },
  {
    "url": "views/codeLanguage/JS/function.html",
    "revision": "14832e2e9cc513bae3f039687cf24ebc"
  },
  {
    "url": "views/codeLanguage/JS/reference.html",
    "revision": "d6a49d9da8aed99569fd64cbae0c6e3f"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "fe6439781b39c9b7686d9871749c888f"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "ea00a95693aa0f04bd985a54c6fac866"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "d882e124b976fc42b4f2d6306a630073"
  },
  {
    "url": "views/codeLanguage/python/reference.html",
    "revision": "63133c1a25de775ce627eeacc23118e9"
  },
  {
    "url": "views/codeLanguage/R/programControl.html",
    "revision": "b6bb528bbe9f036ff434281765fea401"
  },
  {
    "url": "views/codeLanguage/R/reference.html",
    "revision": "d63c2a19a4952ebe654bc02ab7f06a6b"
  },
  {
    "url": "views/codeLanguage/R/variant.html",
    "revision": "7c50c725d62a27f69ce909915cc8e47e"
  },
  {
    "url": "views/codeLanguage/sql/install.html",
    "revision": "aa47cfaf09e5bb531633026f0f405596"
  },
  {
    "url": "views/codeLanguage/sql/modified.html",
    "revision": "2e55313ff953974e795065abce2583bb"
  },
  {
    "url": "views/codeLanguage/sql/python_sql.html",
    "revision": "457cd3d5037bfb44e5574011a2861c19"
  },
  {
    "url": "views/codeLanguage/sql/reference.html",
    "revision": "3f002f6d540e5c2833b0ee68ca654e6f"
  },
  {
    "url": "views/codeLanguage/sql/relation_model.html",
    "revision": "5f6f6764d83475dc2c50de3d565e5adf"
  },
  {
    "url": "views/codeLanguage/sql/select.html",
    "revision": "a2ef16959feca96e0686e396a609c14b"
  },
  {
    "url": "views/docker/buildImage.html",
    "revision": "cfb411f12b37be73f7370079bb01442d"
  },
  {
    "url": "views/docker/container.html",
    "revision": "417ef046cf4067a54164efd2ac6eb957"
  },
  {
    "url": "views/docker/dataMount.html",
    "revision": "85361772c042c877efd2a08ccb4cf2c8"
  },
  {
    "url": "views/docker/docker_compose.html",
    "revision": "aa5f1717758f78ee61db2db5c8a787b9"
  },
  {
    "url": "views/docker/image.html",
    "revision": "22d45809027cbfbabc846ab2aa1fb912"
  },
  {
    "url": "views/docker/introduction.html",
    "revision": "88843a1ff4898b96f294091c095bdd97"
  },
  {
    "url": "views/docker/reference.html",
    "revision": "155c5c03b27e286b5dfc8478e05aad68"
  },
  {
    "url": "views/index.html",
    "revision": "d78a00de2942de8d86ecbc980f028699"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "1f77a591c4b44d9e891bf2fc4b4bee37"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "cf34335c4c499610e6fc15ace2c4df75"
  },
  {
    "url": "views/ops/frp/use.html",
    "revision": "bede4a755fc6f7bbf0211473771f4d30"
  },
  {
    "url": "views/ops/SGE/introdution.html",
    "revision": "8c0e7fb7999c669aff5f3f30f31e1ed1"
  },
  {
    "url": "views/ops/SGE/use.html",
    "revision": "57ce45d4337df10f94501c0008158413"
  },
  {
    "url": "views/ops/someproblem/installDisk.html",
    "revision": "96ce2084d8e42b5dcab24666a13bdea1"
  },
  {
    "url": "views/ops/someproblem/network.html",
    "revision": "dffa5d6ac8e44120912a0ec1f9e65a79"
  },
  {
    "url": "views/singularity/simpleUse.html",
    "revision": "2ecd8fec760c52990482d2c2c6c8e030"
  },
  {
    "url": "views/software/busco.html",
    "revision": "55b9ceacc827bfbff3471be2f20e3942"
  },
  {
    "url": "views/software/hic.html",
    "revision": "64fd5dd5b5bd1dca86097e6714fc3b05"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "05538bc678f53ec4a045853eb64099f4"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "cc7543a531105acc249e7a823653702a"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "9800d79b3ad486b3df3c2048ed746efe"
  },
  {
    "url": "views/webProgram/practise/example1.html",
    "revision": "d7badb08082cb551962a551815bb56fe"
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
