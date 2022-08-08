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
    "url": "assets/css/0.styles.29b5f5ae.css",
    "revision": "936cde7ef88e6a2f379d37e11dfa08ca"
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
    "url": "assets/js/13.cc1f4a7d.js",
    "revision": "10f4a50033c48aac5f5a0f1434cf0a80"
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
    "url": "assets/js/20.323e3a15.js",
    "revision": "7f8c92fa8495306bd2c17cf446b253fa"
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
    "url": "assets/js/26.91867cab.js",
    "revision": "7bf3300b9a6baf49044f0281bdb9077f"
  },
  {
    "url": "assets/js/27.9b1860e4.js",
    "revision": "4ff30358728be14c33888cabaf365a5d"
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
    "url": "assets/js/30.c76ded35.js",
    "revision": "bbdef7af8f5e9a96d1d40e9fcb43af94"
  },
  {
    "url": "assets/js/31.1b46013e.js",
    "revision": "4d5faa62adbf35ef665ab20bbc1cf2d5"
  },
  {
    "url": "assets/js/32.a34252ad.js",
    "revision": "e9085ec76ad5a9759244d00241253b7c"
  },
  {
    "url": "assets/js/33.06fc1b60.js",
    "revision": "79783240d271b807600303fb4acf635d"
  },
  {
    "url": "assets/js/34.79c3386c.js",
    "revision": "9e4a0e5278c353aa1e89e3dad8d3b56b"
  },
  {
    "url": "assets/js/35.0b985827.js",
    "revision": "40948f46ec2c736252649b345aec8615"
  },
  {
    "url": "assets/js/36.81b39587.js",
    "revision": "b856a680ba093c9460bbe62698c20686"
  },
  {
    "url": "assets/js/37.c16aa286.js",
    "revision": "85ecb4a0de530f95f2e2359be977c52a"
  },
  {
    "url": "assets/js/38.7e3b19f7.js",
    "revision": "2f54c85f8a84a617eaa21e56929dd687"
  },
  {
    "url": "assets/js/39.ba5dfe9e.js",
    "revision": "784b44b0e15612259bf09210526a28dc"
  },
  {
    "url": "assets/js/40.081897e3.js",
    "revision": "2f6f59b43a31493b7c9784b97cb497b9"
  },
  {
    "url": "assets/js/41.e79f4e65.js",
    "revision": "a860f6bbf02d5b95a459a029577c8c51"
  },
  {
    "url": "assets/js/42.c20bba7f.js",
    "revision": "5386b543dcbe695859e98a18a9a86381"
  },
  {
    "url": "assets/js/43.cb1d61af.js",
    "revision": "a3af2ff9631533f8934fd23ebace1713"
  },
  {
    "url": "assets/js/44.94cebefc.js",
    "revision": "a7cb7c3d729a66369b7180917c6f593a"
  },
  {
    "url": "assets/js/45.a9643389.js",
    "revision": "e3b7032b0696ee62c13785a196ec4a06"
  },
  {
    "url": "assets/js/46.826fe623.js",
    "revision": "dde6d0f993ac9ced13591efa2b855bda"
  },
  {
    "url": "assets/js/47.9331cc14.js",
    "revision": "432345c12cf6a02e10e291ea406c3921"
  },
  {
    "url": "assets/js/48.f4b5c520.js",
    "revision": "de5585b9f634c8807622df36343df91b"
  },
  {
    "url": "assets/js/49.f8e70aab.js",
    "revision": "5049b7152cbc001d29e31eda3a90736b"
  },
  {
    "url": "assets/js/5.f650fde1.js",
    "revision": "afb090cba0a14f42f570ea9e528d124e"
  },
  {
    "url": "assets/js/50.5f3487ee.js",
    "revision": "d21b88c1d7cf3c961988486ac0d591f6"
  },
  {
    "url": "assets/js/51.45424d42.js",
    "revision": "7db1fe6d536b403a5c39d2c0e33b6081"
  },
  {
    "url": "assets/js/52.9e67ee08.js",
    "revision": "500915f0a2b48c57b786be52683295f5"
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
    "url": "assets/js/app.fe75c4b7.js",
    "revision": "93a3fbcabd8ed3eec0d206e27edd11cc"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "7b7ac47b451611b86389ab135ac14ab5"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "256eabb7e42a31353588a69aa8d4b73e"
  },
  {
    "url": "categories/容器技术/index.html",
    "revision": "d2d3cfa2e743743d7ede8a7be2511840"
  },
  {
    "url": "categories/服务器运维/index.html",
    "revision": "a0622ac2ff03659ada9467e20aa8714a"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "edb458aa42f8173ba44a42392398faf3"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "b0e838a11765d4e274bcb21bced64c81"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "1025f161c3ba714d0ba88133c1701fe5"
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
    "revision": "7ede450c9b2be65ad9068316fe5a0ca9"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "26036617f29d0fa85b7a7e7a60e0a0f2"
  },
  {
    "url": "other/project.html",
    "revision": "843d2f1781174d3351d26e09864b5b86"
  },
  {
    "url": "tag/index.html",
    "revision": "fd0841c64a57e121406800efbb0dface"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "6f210eb840ef63f3d5811036dc81f4a2"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "6317aa5d4761c3b8654046354f0e4a10"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "5ebbc3ac085c84ac2ff30da5b71fba7a"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "e8ec801cdb5db9c3dc4731850c3674dc"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "4976bb7b4d33b8ac8b8749f1cbd79b6f"
  },
  {
    "url": "tags/docker container/index.html",
    "revision": "611d0f5ba0864d439ef873e77a5fc15a"
  },
  {
    "url": "tags/docker image/index.html",
    "revision": "95baf57275609884fb6f3cedb7af7f2c"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "35f459a24b7d693eeda484a9bcb9f372"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "d61ceef7edfa61097eb6b4c860ab709a"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "bf0916ea2fb9c19ffd8278d5cdcb86b4"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "1c3dbbfeea761e25bb2fcdf6b30ab576"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "e48f98cc024bb14e9af8fe30f159e2a4"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "550e4e079ff2f631b3e2107b91b1c27d"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "5ea4c65e4adf9867bf382cb74be62994"
  },
  {
    "url": "tags/ops/index.html",
    "revision": "3838f0186b57ed6eb96f080f991b15c9"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "3822e7e65151632711d999e4724529bb"
  },
  {
    "url": "tags/python/index.html",
    "revision": "e7b9dd7fe75eeb3ebd24c120ca2e9782"
  },
  {
    "url": "tags/R/index.html",
    "revision": "e93de56171eba0a4694ae9eb14f9712f"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "49e549713f1be6695051fb5a9a31b93d"
  },
  {
    "url": "tags/singularity/index.html",
    "revision": "114def6418d2df51cc7675ff677e9eee"
  },
  {
    "url": "timeline/index.html",
    "revision": "17631791579dc980ec685077b4ab2f1a"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "7d8799c5c52eb9f47d51638746d2ab7e"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "e0c66c432351dfe22aefdef7568e0a80"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "b040ec52295a950c365cd03612cccf5d"
  },
  {
    "url": "views/codeLanguage/python/reference.html",
    "revision": "9b99c36933b09a879a28994d665cdd3f"
  },
  {
    "url": "views/codeLanguage/R/programControl.html",
    "revision": "48ff514c9de4157eba3b5d8c3da5aae3"
  },
  {
    "url": "views/codeLanguage/R/reference.html",
    "revision": "31df579456b3341535d52e51afa4c7fa"
  },
  {
    "url": "views/codeLanguage/R/variant.html",
    "revision": "aa7695f1617c55ab97b514ca4b0d73ba"
  },
  {
    "url": "views/docker/buildImage.html",
    "revision": "e5fe43a79bf8fffc2f6c46728dca2657"
  },
  {
    "url": "views/docker/container.html",
    "revision": "e468722366d689b4078a861c7bd5a9c4"
  },
  {
    "url": "views/docker/dataMount.html",
    "revision": "645ce6a95868396fadcbfef7f010654b"
  },
  {
    "url": "views/docker/image.html",
    "revision": "32de5665987d1bc535a62e8cc1216a5d"
  },
  {
    "url": "views/docker/introduction.html",
    "revision": "df3a5b50aa877b619c2a6051267f96d9"
  },
  {
    "url": "views/docker/reference.html",
    "revision": "fc0a90a9a88c299e4a4369cf5ad79ec8"
  },
  {
    "url": "views/index.html",
    "revision": "32b67054ecc8520613751f339b2a6dd9"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "e33d04af881887382532d9b78d2365e9"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "6131d41c2d53f0d4bea639a3254d0537"
  },
  {
    "url": "views/ops/frp/use.html",
    "revision": "7e6c09be04897393acf0c5fa4c865a60"
  },
  {
    "url": "views/ops/SGE/introdution.html",
    "revision": "2c7ddab4e8fd12bf9754dc9fa6372316"
  },
  {
    "url": "views/ops/SGE/use.html",
    "revision": "2fea01c6ca7535112f8136b684044157"
  },
  {
    "url": "views/ops/someproblem/installDisk.html",
    "revision": "f7da705bbd37b841865856409914a106"
  },
  {
    "url": "views/ops/someproblem/network.html",
    "revision": "34aebac642c0819b24235a68217af1ce"
  },
  {
    "url": "views/singularity/simpleUse.html",
    "revision": "6f610a6af82e6c91626581522a91e575"
  },
  {
    "url": "views/software/busco.html",
    "revision": "2865bb62a896a6ab5c4d3dd1494a585c"
  },
  {
    "url": "views/software/hic.html",
    "revision": "24e27047e9c8c78d0e1352d943d4fd7d"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "d1d06e6aae561273d590dfaa331f06b0"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "ccf6c82af1c2bf1979975963e5af57dd"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "3549928885ce411ca28e4d444300222d"
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
