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
    "url": "assets/js/20.e4159da2.js",
    "revision": "db2018505f26dd9f54c985b7f80b3af0"
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
    "url": "assets/js/26.3314d746.js",
    "revision": "9a3dce3119e1258e697ad98bd8ed256a"
  },
  {
    "url": "assets/js/27.53c00638.js",
    "revision": "46f9d255303b9113c0f5ece499ceafdf"
  },
  {
    "url": "assets/js/28.9c0e0d16.js",
    "revision": "af91c48ba52ab71b2828cf08d9659c4a"
  },
  {
    "url": "assets/js/29.abb262f5.js",
    "revision": "581d70d18406fdffc51b26caf978f073"
  },
  {
    "url": "assets/js/30.5dd3e6e9.js",
    "revision": "3bf1189660436cc313eab009ae71d8de"
  },
  {
    "url": "assets/js/31.b50c5682.js",
    "revision": "262b021825bf3a48e06aaa9579e9e265"
  },
  {
    "url": "assets/js/32.6157bef3.js",
    "revision": "04f821a77b577017fdd5ececd9255296"
  },
  {
    "url": "assets/js/33.52d89f3a.js",
    "revision": "6373e0a7e6fad7fedbad32086b879314"
  },
  {
    "url": "assets/js/34.c54a4d1d.js",
    "revision": "59a30f9d9037334c999e15c5c382ae38"
  },
  {
    "url": "assets/js/35.f0b290d0.js",
    "revision": "582b5cdfafd926c91c9bbb38f1e09162"
  },
  {
    "url": "assets/js/36.ed6149ce.js",
    "revision": "4310a6f7a96f77095f449bf4ac6407c6"
  },
  {
    "url": "assets/js/37.455af280.js",
    "revision": "2f76b52407f6ff2649f9550da4d71803"
  },
  {
    "url": "assets/js/38.827dac8f.js",
    "revision": "d33c9ce8b9c9bd1dc3affac724b5cad4"
  },
  {
    "url": "assets/js/39.d56062ad.js",
    "revision": "3498fd381f3f1dd9ace0d0d1e58c210e"
  },
  {
    "url": "assets/js/40.006a5cfd.js",
    "revision": "3c4818bd91275bf9b4b7aff1bf0e1733"
  },
  {
    "url": "assets/js/41.d8013a4a.js",
    "revision": "6361e6d744c6fa3333a4e85cc6f95830"
  },
  {
    "url": "assets/js/42.331b921d.js",
    "revision": "874572471841ab74cf9877478823477a"
  },
  {
    "url": "assets/js/43.d6109c84.js",
    "revision": "328bc16f0a42ac3db7e92552b4c54088"
  },
  {
    "url": "assets/js/44.bb39cadf.js",
    "revision": "6710d771a0063158a7a757b31c9627be"
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
    "url": "assets/js/app.d0758186.js",
    "revision": "78e75f5c6be2e503472927bd87d69b24"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "51796d092b95d58e883c0741df0ce91f"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "c673fe564854c1deeacef55194572dcd"
  },
  {
    "url": "categories/容器技术/index.html",
    "revision": "505b36aade3ef474290db44b3f9b8145"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "abe0d729e3e0fc091c42bb6b2ae85e2e"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "37570bb4e5c481748d4f8bcc2911fd86"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "90c18b0d65ee97e55955388f33aadcf7"
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
    "revision": "b1eb73a748c42d0cf802904d00f7005a"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "175ccafc80a6c6c043b591e2d49af507"
  },
  {
    "url": "other/project.html",
    "revision": "8fc5538e5e7dc3eab99fd30238ae3930"
  },
  {
    "url": "tag/index.html",
    "revision": "3f25afc92f7c91ed20aca076ef9caf2f"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "40eb266e664815355188c952133151d8"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "6563cdb6b6903e9302eee91efe468b00"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "5de15b5244621b7c3ebe2122ee77c851"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "254c3fb8d919e9fdb9d183d0bc1d82d8"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "0b604ac8145a5512f70494759ce0ec0b"
  },
  {
    "url": "tags/docker container/index.html",
    "revision": "96d445f834459b6260140a79e8dfcfa4"
  },
  {
    "url": "tags/docker image/index.html",
    "revision": "09e4847086c3f8100492ff0b37eb35a3"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "4383378302996a5393b5c10dbee79820"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "0ee04291a48c831e2065621a976fbf1b"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "3729d72688ca97d98e0a6929c56fa551"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "a0ee4457949084cdcbcbb9dac44c7bee"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "d5e29f8bafb64bb701289bda88b19f3c"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "52d65492e309f674545c58e78c8f684f"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "c0e83246cab68368324c8d2ee44a6f2d"
  },
  {
    "url": "tags/python/index.html",
    "revision": "a18d8f2bfb4dee9896aca21f93bbaa8f"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "0cc4e67f03156c4f4307df9576f1154e"
  },
  {
    "url": "tags/singularity/index.html",
    "revision": "7468ab21b0ef7fb674d4f61929fa380a"
  },
  {
    "url": "timeline/index.html",
    "revision": "ea51331ff88ea85df1e2919d191b4198"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "70aaaf311036e16933841aa38603fca2"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "c89b862c4220de580d93b54db70f071f"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "a4ee0f07f0228bada28f4c8bebe525ff"
  },
  {
    "url": "views/docker/buildImage.html",
    "revision": "349908a744aca6e7af991a0e8914e8e3"
  },
  {
    "url": "views/docker/container.html",
    "revision": "7ea57890b661537aa2dd1ea8ec9f5879"
  },
  {
    "url": "views/docker/dataMount.html",
    "revision": "4a020d53846486bdc389df452fda7b26"
  },
  {
    "url": "views/docker/image.html",
    "revision": "4411b61c8dfa1ea5a4261f610cc8105a"
  },
  {
    "url": "views/docker/introduction.html",
    "revision": "2f92732577d9cf06ab9e35b399da3866"
  },
  {
    "url": "views/index.html",
    "revision": "5b2674d7510a677ec75a88c355ca6614"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "ae0fb572d0219fb4ff68b3fb964a7549"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "75d45487dcfb2bc34373459ae3790d33"
  },
  {
    "url": "views/SGE/introdution.html",
    "revision": "03644f7f3e2714dd869146ffb0fdfa5b"
  },
  {
    "url": "views/SGE/use.html",
    "revision": "75f31cd2fcc9be9ec01298665b84df63"
  },
  {
    "url": "views/singularity/simpleUse.html",
    "revision": "b1ed1205add0dda0f01aaf76528f1b2b"
  },
  {
    "url": "views/software/busco.html",
    "revision": "c30f46d702a8b08487358cca52a2ad7d"
  },
  {
    "url": "views/software/hic.html",
    "revision": "4a2700ea4ea6e6bd6fe3eb4710fa9127"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "8555dcd6149e38eca6b0ff94e586be98"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "62995482fab754f5720654546ebb65cd"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "c9dcecd695a85069f287c689f1e77d18"
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
