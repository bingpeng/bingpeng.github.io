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
    "url": "assets/css/0.styles.df6b0f41.css",
    "revision": "285d521dbad7c86f23bead68c6cd5270"
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
    "url": "assets/js/13.aa57d4d5.js",
    "revision": "d352a2eb9912ea9c2c22fcfe1500fab1"
  },
  {
    "url": "assets/js/14.e5e7e85f.js",
    "revision": "d8fc9c66fc70ba8e3792257b57117d7b"
  },
  {
    "url": "assets/js/15.9c3c0775.js",
    "revision": "ad228f8311b5446810d3db5c9a34190b"
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
    "url": "assets/js/19.4d39ec9c.js",
    "revision": "c9820c2a1b13fafb29a7df72a013c2cb"
  },
  {
    "url": "assets/js/2.c3effee7.js",
    "revision": "4458dcee800b08743aa9900456abce4e"
  },
  {
    "url": "assets/js/20.71181f3f.js",
    "revision": "fbecb695af7fbfba401ce3b01e9f29b0"
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
    "url": "assets/js/24.095abe6c.js",
    "revision": "c9c9f77310dd49bfdb7b03894a0808b1"
  },
  {
    "url": "assets/js/25.e0eab211.js",
    "revision": "21c72d5007b27fd95c11173b4db194e4"
  },
  {
    "url": "assets/js/26.21f77d9b.js",
    "revision": "93ef82bca35e3d784e3a0361f5cb88c7"
  },
  {
    "url": "assets/js/27.13ffdd09.js",
    "revision": "21ea85fb1c091d44ee93d6697c7e5cea"
  },
  {
    "url": "assets/js/28.d56f2f10.js",
    "revision": "a9de145c1ce49181d0e389690a571e24"
  },
  {
    "url": "assets/js/29.167a5109.js",
    "revision": "22ffcb25205aa94cb385b5b832c959a5"
  },
  {
    "url": "assets/js/30.1e7042ee.js",
    "revision": "b3af2decf4fb55f4128dca9fcf096605"
  },
  {
    "url": "assets/js/31.ca069062.js",
    "revision": "3df79623da3cab282547f95acd033525"
  },
  {
    "url": "assets/js/32.9764c14c.js",
    "revision": "fd339df14a826921752056e03c74b71d"
  },
  {
    "url": "assets/js/33.1d0104d1.js",
    "revision": "b14f8b0062bc275db9c05a893fc04567"
  },
  {
    "url": "assets/js/34.fafc10d4.js",
    "revision": "43773347da9bdf5b74ac31ee343c1d54"
  },
  {
    "url": "assets/js/35.c03afbd8.js",
    "revision": "77f4825c6f1b9f36b5b3b838a838c966"
  },
  {
    "url": "assets/js/36.8fe26ed4.js",
    "revision": "d31fde6d4fa3b0ed268c8748cff1da9c"
  },
  {
    "url": "assets/js/37.a892ed62.js",
    "revision": "798f89f1f5e5442206cc283a2a2f3c87"
  },
  {
    "url": "assets/js/38.9990447c.js",
    "revision": "20d8bb04993e2634d07df6396a5a8b8f"
  },
  {
    "url": "assets/js/39.23760aaf.js",
    "revision": "dd516e9596ed9a276b0d0d747b39aa3b"
  },
  {
    "url": "assets/js/40.204b2b9d.js",
    "revision": "005d7cad7ab3e7d2fb8812d1dec2ab24"
  },
  {
    "url": "assets/js/41.e520247b.js",
    "revision": "ad9d78cb95209e7afd6361c9099bbbcc"
  },
  {
    "url": "assets/js/42.6226b6e3.js",
    "revision": "03eb14a17f4899e2df2c97553fc43e96"
  },
  {
    "url": "assets/js/43.ac9fcf92.js",
    "revision": "71492312a87dd00c52f38a10737d69bf"
  },
  {
    "url": "assets/js/44.f1addb78.js",
    "revision": "8893db33ffb41c3f82b73faf6e8a9d5e"
  },
  {
    "url": "assets/js/45.af6fa3b1.js",
    "revision": "b3a5b5a848b86754ab8c9c8483748a8e"
  },
  {
    "url": "assets/js/46.2d966181.js",
    "revision": "2859913e64ad37dac4e88b5f7a0a4f82"
  },
  {
    "url": "assets/js/47.2bab7e66.js",
    "revision": "e88dc7ecc494a64ff0b53f05eaf1aae3"
  },
  {
    "url": "assets/js/48.bdb99c02.js",
    "revision": "aa20637ccf390928c46e00fa317be7b1"
  },
  {
    "url": "assets/js/49.8764bcf9.js",
    "revision": "0e2ae461a0499e5527e136c751e6478b"
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
    "url": "assets/js/app.50c714b0.js",
    "revision": "934b3c556c14e4acc0a44b5999fd8a86"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "9ebb161f3d35b23438488b49b4ab741f"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "d7b200e33c92558ba2effa81bbb46226"
  },
  {
    "url": "categories/容器技术/index.html",
    "revision": "5dbe005002e21a394322c9196200a294"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "866136547c30a0e743eefe25f7eb28c0"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "25eae22e6babfd2e4c7d43b623d66cfe"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "00af48d46fa7c1a53f6708e0acf78eb4"
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
    "revision": "d7b193c6fa5835a870c55f9b7ca89dac"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "1bbaa2d1b1bc750983f49eb7741d6d04"
  },
  {
    "url": "other/project.html",
    "revision": "14b1c13f550fd60686c8c3efd5af2843"
  },
  {
    "url": "tag/index.html",
    "revision": "cdb807f981bd30fc8630c581f7b9f209"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "397da8c1867cfb57dd426545f8560f71"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "66a80bc4171a104e2af58d867ce42ff9"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "4386c8519360a9a0d374e806d27b050f"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "8b533f8619ec70886ec121b468a20fe2"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "1b831cf4aaccb3c0a19a9027c9c9c13c"
  },
  {
    "url": "tags/docker container/index.html",
    "revision": "c197e3b711da77bf46509049ce3a8ee1"
  },
  {
    "url": "tags/docker image/index.html",
    "revision": "e33fc41f8bdf4404fed6776c552f8e44"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "55a970e6554b0158d1959f2daafb94cb"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "ac352ef0e3fa48be084ef7158fcc86a5"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "e5d5512b10e4079f9cd3d1fc31df36f7"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "9c5cc0e15589a5289c1a5da657b4336e"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "1bd7e2ccb51b2ea5d2871eb4fb7f638f"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "51d5912cf6b51155f237708c97c0085e"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "f6b4448534ee5e8b06687cdf31fd0e92"
  },
  {
    "url": "tags/python/index.html",
    "revision": "809f6de17e50b8400866dbb1d89911fc"
  },
  {
    "url": "tags/R/index.html",
    "revision": "e5fdaf9b9964473552ef15415ff9dba1"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "093717b3efec05ab0630332daa088658"
  },
  {
    "url": "tags/singularity/index.html",
    "revision": "0255d85b5b67a6a7caf37c6b341c22d7"
  },
  {
    "url": "timeline/index.html",
    "revision": "e77b5b6edb4ec1c99a0813cc47d44841"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "5c0d4a6261e397a41181f62887b49488"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "d09bfb17a08706874494c07750917102"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "1370f1ef26b2cc60636df0f243a6b857"
  },
  {
    "url": "views/codeLanguage/python/reference.html",
    "revision": "071cff2489f278ad4810e10c11a8cfba"
  },
  {
    "url": "views/codeLanguage/R/programControl.html",
    "revision": "66b03aa7063d70ad14bb95cbc8a86696"
  },
  {
    "url": "views/codeLanguage/R/reference.html",
    "revision": "e45d6760841e5f9cc1b643069ee3084d"
  },
  {
    "url": "views/codeLanguage/R/variant.html",
    "revision": "81c847643a4d9d66350535e14e12599d"
  },
  {
    "url": "views/docker/buildImage.html",
    "revision": "3117b8fca02dce32342fba012c991a8c"
  },
  {
    "url": "views/docker/container.html",
    "revision": "ab7f1fe414211d03298a0ea5f283ffd1"
  },
  {
    "url": "views/docker/dataMount.html",
    "revision": "58daab28577ad7d6cbe8375f70f8eade"
  },
  {
    "url": "views/docker/image.html",
    "revision": "cd7be99475a18403bc54346f5f9542ca"
  },
  {
    "url": "views/docker/introduction.html",
    "revision": "d0d42c51391765eea0f1f7d3d9a6cb71"
  },
  {
    "url": "views/docker/reference.html",
    "revision": "837ef769cacbd0bf96c1eade0116d80a"
  },
  {
    "url": "views/index.html",
    "revision": "e16b9204809a9c2607cc82b1abd8fbe0"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "93960fc07e8bf47989a03d5b96ca26e3"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "e56f2952dea62797f76e8c15f60df063"
  },
  {
    "url": "views/SGE/introdution.html",
    "revision": "7aa8cf620ad47ce46b700cbea9cb3e54"
  },
  {
    "url": "views/SGE/use.html",
    "revision": "25d8f041d972ba56080c2ed8baccb963"
  },
  {
    "url": "views/singularity/simpleUse.html",
    "revision": "f55e37764310ac60ff9f369006af47e5"
  },
  {
    "url": "views/software/busco.html",
    "revision": "ec0073fa122c612d8b4945fa9e68122d"
  },
  {
    "url": "views/software/hic.html",
    "revision": "4ed10ef954ce5858b23272ba8899b06c"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "03fb6a3afbd863ff991e31d2334bb147"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "1c9cf81960cf04cdd5e26b1d52d1ce9f"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "30a0e15fd8ad03406b8df24f7199abc7"
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
