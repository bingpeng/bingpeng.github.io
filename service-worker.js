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
    "url": "assets/css/0.styles.c5bd5d60.css",
    "revision": "4ae54e5a8e28f674d3cdc9d3d2b231b2"
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
    "url": "assets/js/13.2a2a7d58.js",
    "revision": "d26b7d61e1a2cc373ab0459bcd40c252"
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
    "url": "assets/js/24.510614f1.js",
    "revision": "2803f051592abdef3a48ea7d5d745d4e"
  },
  {
    "url": "assets/js/25.2eb76e79.js",
    "revision": "125e07c7b5213ebaf555c7d50cf5a5d8"
  },
  {
    "url": "assets/js/26.1fedce69.js",
    "revision": "5cd812fe4134faaec90409d833133484"
  },
  {
    "url": "assets/js/27.13ffdd09.js",
    "revision": "21ea85fb1c091d44ee93d6697c7e5cea"
  },
  {
    "url": "assets/js/28.e187199b.js",
    "revision": "dba69d6cb670dff85450b0ca98502184"
  },
  {
    "url": "assets/js/29.707c0fd9.js",
    "revision": "cb555b554d0dc32366909e236f5fd527"
  },
  {
    "url": "assets/js/30.eb2c4403.js",
    "revision": "81076129927f9e388318c1f52cabb708"
  },
  {
    "url": "assets/js/31.10609177.js",
    "revision": "b154d1659fc3f839ed3a9cfbeb4fbc8b"
  },
  {
    "url": "assets/js/32.9764c14c.js",
    "revision": "fd339df14a826921752056e03c74b71d"
  },
  {
    "url": "assets/js/33.fdfde56e.js",
    "revision": "8a57b5d52cede7b0e3af86d9a0ec5fbc"
  },
  {
    "url": "assets/js/34.a2cd99c2.js",
    "revision": "3e0b2ca0186e2d521d694afbbf95e936"
  },
  {
    "url": "assets/js/35.b229cff5.js",
    "revision": "2337159e4590c5c55b60c5c35116644a"
  },
  {
    "url": "assets/js/36.c7b0944f.js",
    "revision": "100cd6f88f0acea328ac70170093c520"
  },
  {
    "url": "assets/js/37.5fb44a37.js",
    "revision": "7c0bd481e8c05f09a6e26eddfa3b8913"
  },
  {
    "url": "assets/js/38.acd20190.js",
    "revision": "1fcefe3dc6cf84bc82dc7a8f6b7443fd"
  },
  {
    "url": "assets/js/39.23760aaf.js",
    "revision": "dd516e9596ed9a276b0d0d747b39aa3b"
  },
  {
    "url": "assets/js/40.99f3996d.js",
    "revision": "aa49e81ea9408e0c334df39ae50bbcfc"
  },
  {
    "url": "assets/js/41.e520247b.js",
    "revision": "ad9d78cb95209e7afd6361c9099bbbcc"
  },
  {
    "url": "assets/js/42.1ffbd08f.js",
    "revision": "d3f9e926478a6ca51dd1744f910b9bc4"
  },
  {
    "url": "assets/js/43.ac9fcf92.js",
    "revision": "71492312a87dd00c52f38a10737d69bf"
  },
  {
    "url": "assets/js/44.8af08870.js",
    "revision": "c734d6e7726e62ff11555f0123b44084"
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
    "url": "assets/js/47.10cfdc7e.js",
    "revision": "c601e23fbe8110138759b9d55d4c676e"
  },
  {
    "url": "assets/js/48.1f5045f0.js",
    "revision": "733706ad10ebf9a8db3b2d56fd96ed64"
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
    "url": "assets/js/app.ad85ceb0.js",
    "revision": "ba502d893984ebc480af4acfb1bbc1d9"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "963d4fc758d1da3ecb65530cc78f1b0b"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "88a68ccde94e2a25d1329c190a917397"
  },
  {
    "url": "categories/容器技术/index.html",
    "revision": "8cc52620c76c14da12e5afa59f6c1751"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "cfc5bf0bf19ca87a01def2cffbca729c"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "99b9278ec771735bd499bbc7ea5097b0"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "f1438eacc00aceb810cd81f86ebb3f38"
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
    "revision": "3893b34855ec222482e05607ceda1ff5"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "e507b7fa82aabf8057ea99768b45463e"
  },
  {
    "url": "other/project.html",
    "revision": "b65737222099a97e3af31bbc56e4a596"
  },
  {
    "url": "tag/index.html",
    "revision": "8ba2423b92637cc8eb9b11871bbe8281"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "4946fe6b7815d5a8ab49efa328878e91"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "85908a512e40b69561ef002b8dc62cd0"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "b42978ceaa3430c7ea10826a91099b6a"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "51724a6dd53c895c60b93436d9648dd2"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "4dc4127a5386596b363054d274af5206"
  },
  {
    "url": "tags/docker container/index.html",
    "revision": "b3279f61e5d98a14fcfe520f00e38c67"
  },
  {
    "url": "tags/docker image/index.html",
    "revision": "9f9bef6cefbc9c559a435a32788bc151"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "47e2e565640682d30981ddc6a256cf21"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "a5f847a04880d566509cf9c86e36e718"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "4b10cfb037d774784b2169432d865552"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "a99700d2e81fd377487613a10c176125"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "3fb6de8bdddb7012bd9b3cf5ffaec687"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "d956e075a9df82b1eb8c4d6fbccaf5b8"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "822317cdc0c6cde4215080fed52b8a29"
  },
  {
    "url": "tags/python/index.html",
    "revision": "fb5af0ebaad2070c1f8455c13c2c5d80"
  },
  {
    "url": "tags/R/index.html",
    "revision": "7839808d4fcd0b03701a303045c54b93"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "1cc60de78865bb02f808e94c50194a62"
  },
  {
    "url": "tags/singularity/index.html",
    "revision": "66a6e28b78e7539c802cbfb42f2491e7"
  },
  {
    "url": "timeline/index.html",
    "revision": "acab377520de641fea5f56a2ec8f25aa"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "3c527b737f9e3ec58966b135f5188121"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "6931f26d7a5ece13fa32f061be3e8c4f"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "2aa1670ab872096e662fe98019bb56db"
  },
  {
    "url": "views/codeLanguage/python/reference.html",
    "revision": "50a50b7a0f9b06bfc7accdc7e8331bab"
  },
  {
    "url": "views/codeLanguage/R/programControl.html",
    "revision": "1279eb43cccf7c814c1fe027c228d7fa"
  },
  {
    "url": "views/codeLanguage/R/reference.html",
    "revision": "81a69bd36ad47fe3b77c64bb7dff4fa6"
  },
  {
    "url": "views/codeLanguage/R/variant.html",
    "revision": "902a765616ba9c59393f60bdef205772"
  },
  {
    "url": "views/docker/buildImage.html",
    "revision": "2067c484dc9aaea35ced973c3c03c6b2"
  },
  {
    "url": "views/docker/container.html",
    "revision": "879b1d8c4f51eb5e2abf6cb2c4740ab5"
  },
  {
    "url": "views/docker/dataMount.html",
    "revision": "a916aadef7c17e8627625accb3791f53"
  },
  {
    "url": "views/docker/image.html",
    "revision": "efe623ca696cd1080df9a50b02632513"
  },
  {
    "url": "views/docker/introduction.html",
    "revision": "95fc87ee2de7addee44451696a6d6447"
  },
  {
    "url": "views/docker/reference.html",
    "revision": "ae6575a06f6fa0b6699a71f2549c8b5e"
  },
  {
    "url": "views/index.html",
    "revision": "b963e892b100a11334adaf2b312b39fe"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "993e81ef5507e66aab8ac87ffd96c243"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "d88af2e4b2983d585d90bbefd6ea9f3d"
  },
  {
    "url": "views/SGE/introdution.html",
    "revision": "238b61cc0efb814fef62efc6eb6b5ebc"
  },
  {
    "url": "views/SGE/use.html",
    "revision": "962d2467ac3a5d2f35f27626320405c1"
  },
  {
    "url": "views/singularity/simpleUse.html",
    "revision": "578184247f88c740193f9d6c326c4387"
  },
  {
    "url": "views/software/busco.html",
    "revision": "72da2e2b466311f087f87d9cdcb2d55f"
  },
  {
    "url": "views/software/hic.html",
    "revision": "a32e442eed53443e23803b59b5da9c29"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "6c993a4d1b6688359d275415f785491a"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "b0424f905cfd04eb1952e48570cb1419"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "5f8cda90c89b433e0376f3b9c57c9533"
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
