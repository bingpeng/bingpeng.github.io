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
    "url": "assets/css/0.styles.371df408.css",
    "revision": "bdc280a5f417eb8b525eed3582b44342"
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
    "url": "assets/js/13.40d5c869.js",
    "revision": "bd36b18c22e5ec0960cf7616df9dca25"
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
    "url": "assets/js/24.095abe6c.js",
    "revision": "c9c9f77310dd49bfdb7b03894a0808b1"
  },
  {
    "url": "assets/js/25.e0eab211.js",
    "revision": "21c72d5007b27fd95c11173b4db194e4"
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
    "url": "assets/js/28.98dcaa69.js",
    "revision": "f958ea782c825ced7746b0b4a475ee7b"
  },
  {
    "url": "assets/js/29.3639052d.js",
    "revision": "9307a243cfa615974c7060be49903569"
  },
  {
    "url": "assets/js/30.eb2c4403.js",
    "revision": "81076129927f9e388318c1f52cabb708"
  },
  {
    "url": "assets/js/31.ca069062.js",
    "revision": "3df79623da3cab282547f95acd033525"
  },
  {
    "url": "assets/js/32.7bb6eb09.js",
    "revision": "f21b353bf8271771e94526975acd8583"
  },
  {
    "url": "assets/js/33.1d0104d1.js",
    "revision": "b14f8b0062bc275db9c05a893fc04567"
  },
  {
    "url": "assets/js/34.2b276a5f.js",
    "revision": "09c8532509a386910198eb5a22ec59e8"
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
    "url": "assets/js/38.e1d1e304.js",
    "revision": "5a0dc29962c0a6037ba11e3b8c1b34c1"
  },
  {
    "url": "assets/js/39.23760aaf.js",
    "revision": "dd516e9596ed9a276b0d0d747b39aa3b"
  },
  {
    "url": "assets/js/40.4ec3529e.js",
    "revision": "3bf899a0efd5ee3f7610d3437342ca62"
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
    "url": "assets/js/43.831def33.js",
    "revision": "d58fdd3d8aec4fa4730e584adb81e66e"
  },
  {
    "url": "assets/js/44.874f96a2.js",
    "revision": "3f2a5f8f318d3c326f87f2a5f2194c69"
  },
  {
    "url": "assets/js/45.1a91a79a.js",
    "revision": "97d80514c8760cfe4fb83e462109c316"
  },
  {
    "url": "assets/js/46.2d966181.js",
    "revision": "2859913e64ad37dac4e88b5f7a0a4f82"
  },
  {
    "url": "assets/js/47.7b7f867a.js",
    "revision": "d4c3759bdd2a900588ba81bb62639114"
  },
  {
    "url": "assets/js/48.25efe6e5.js",
    "revision": "2e41ef5af4623cb43268ba446d6d2a2d"
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
    "url": "assets/js/app.6033ebc2.js",
    "revision": "15cdf2735b5436d34c403436e7ec4e77"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "4b29cddb153e38a28c18d4762674dc67"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "fa4779b1941b3f8599b32fd9d904bec7"
  },
  {
    "url": "categories/容器技术/index.html",
    "revision": "177a8eca633e52046831d08e9d6cf338"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "68835bfae2b3c4dd66fb7e5726e00747"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "12d36d557717111aaa10770825c013cc"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "84fb08a37ca9486cbdcd06bec54fa8be"
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
    "revision": "e07f1cd29cf75a9adae23017d296bbfc"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "d6fd8c7ecccc0926624433813d481e9c"
  },
  {
    "url": "other/project.html",
    "revision": "053ea63cf6a1bc8239823bd89303f8e1"
  },
  {
    "url": "tag/index.html",
    "revision": "0063133817dc39798cb9724eae17026f"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "714a53221737b8fb30e62afba0b9aa91"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "4b18dd090b50d5fe227761417cb136ee"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "7be7054c9f65ff98aa5fa67c43d59013"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "5b27c4da704536b833179590475dcff1"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "1301e1903f1cd0eeed87c91f2ab1d0e8"
  },
  {
    "url": "tags/docker container/index.html",
    "revision": "79a2ba41aa26f6012d99daa05d1ad43b"
  },
  {
    "url": "tags/docker image/index.html",
    "revision": "ffae09b332eae4991c07b18649396f0c"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "007104e24080d7d11c0543587803aa99"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "f46a400d4ee2a621f5eacad6ad5fba98"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "42e420ccf2022074e41634bde90936d6"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "c4a626f6b394491c5701efdfffd5e63e"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "5ebc76756c216e922170442cb743f89c"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "8d985fb6187ba9f30db5a7e912eae42a"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "1feb136ac0434381cf61789ff642c823"
  },
  {
    "url": "tags/python/index.html",
    "revision": "098a4805f8ee1bf6b98f12659fb8af7e"
  },
  {
    "url": "tags/R/index.html",
    "revision": "678b83d52d3339b842eb5e254470ffa5"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "bafb3240b50500ce6b7d660820fb6027"
  },
  {
    "url": "tags/singularity/index.html",
    "revision": "0b8e58c4e5d3532cbe01dfa8a8e8a26b"
  },
  {
    "url": "timeline/index.html",
    "revision": "1d76a073bd9eb02e0d5f5f7815c9553d"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "fff7f613cbb8c09e00c74803522d5a9f"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "a68d4ddc715a382fecaa48039a621faf"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "1ac40732a4029f51d12709f59e7b2387"
  },
  {
    "url": "views/codeLanguage/python/reference.html",
    "revision": "58c30a093b3cd0c6431d85ef360d6970"
  },
  {
    "url": "views/codeLanguage/R/programControl.html",
    "revision": "fd2195725f3859d79009d969254ff632"
  },
  {
    "url": "views/codeLanguage/R/reference.html",
    "revision": "6ec3e4f8d6d9f5a55d784322b6bfdec8"
  },
  {
    "url": "views/codeLanguage/R/variant.html",
    "revision": "43c26b22500a10467d3392d5fd5b37cf"
  },
  {
    "url": "views/docker/buildImage.html",
    "revision": "e1a7daf001aee247231fc2128123bda2"
  },
  {
    "url": "views/docker/container.html",
    "revision": "30a43c19b73a9e6898c3083db13a0e36"
  },
  {
    "url": "views/docker/dataMount.html",
    "revision": "314a6bb68fb8ad092305d16769386a0b"
  },
  {
    "url": "views/docker/image.html",
    "revision": "b53d3b380c9ce829ed6ea3aadf0153f8"
  },
  {
    "url": "views/docker/introduction.html",
    "revision": "6aa5620cfc26dd0d2b071f54da890a19"
  },
  {
    "url": "views/docker/reference.html",
    "revision": "e7e689de9b6ea5b995ef5287fe94143a"
  },
  {
    "url": "views/index.html",
    "revision": "e3092cf43a435fc8c29db0ce16109405"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "1fed1975d8c19bd4ffeaa07ec2b33064"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "f5622139d4f3962159eb7cf0bbb25335"
  },
  {
    "url": "views/SGE/introdution.html",
    "revision": "7afb03f7f856b731b15c4d5a3fde6abf"
  },
  {
    "url": "views/SGE/use.html",
    "revision": "64ebc6780ceb91879a90455ea55157ad"
  },
  {
    "url": "views/singularity/simpleUse.html",
    "revision": "0da51fa28d003e6ab6cff8a5773994e1"
  },
  {
    "url": "views/software/busco.html",
    "revision": "30401caf0487956a4e989719edf1bf7e"
  },
  {
    "url": "views/software/hic.html",
    "revision": "6351ab0c9084f5cbcb97a24e06e50e66"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "76d5423576e5a6bbe8689a6f395bf210"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "b36a0098329e000c1533fe3ef079bc65"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "e8e9694506fd744cd4beaf8d472d64d8"
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
