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
    "url": "assets/css/0.styles.b70755d9.css",
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
    "url": "assets/js/10.c8852319.js",
    "revision": "78e693c686cbc614ce93247621e3ca4d"
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
    "url": "assets/js/19.b6d26b9d.js",
    "revision": "9c7f0cec7038240f3fc81f6631d344e8"
  },
  {
    "url": "assets/js/2.c3effee7.js",
    "revision": "4458dcee800b08743aa9900456abce4e"
  },
  {
    "url": "assets/js/20.bb1ec0a7.js",
    "revision": "777ef8d985cb1b1020887f2b0087fff6"
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
    "url": "assets/js/25.051a0e5e.js",
    "revision": "69e361886ec15e487a431c0ac46501d2"
  },
  {
    "url": "assets/js/26.1fedce69.js",
    "revision": "5cd812fe4134faaec90409d833133484"
  },
  {
    "url": "assets/js/27.aaad3b68.js",
    "revision": "47bc13d913d8ca59bcb8d5fb994bb652"
  },
  {
    "url": "assets/js/28.e187199b.js",
    "revision": "dba69d6cb670dff85450b0ca98502184"
  },
  {
    "url": "assets/js/29.5f9caa04.js",
    "revision": "e6cdd193696f1d031bba09edae50e68d"
  },
  {
    "url": "assets/js/30.878629db.js",
    "revision": "f251e3078e3218f0ccd9121e901b0c20"
  },
  {
    "url": "assets/js/31.3a3efb3b.js",
    "revision": "46ec5cf26f1ead9c099df539a2ff0d73"
  },
  {
    "url": "assets/js/32.9b4b7451.js",
    "revision": "1a8543eb0e1fe1197b78bbb745c4a5a5"
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
    "url": "assets/js/36.b3233ea2.js",
    "revision": "0cb6379d22cec40b17e54801027ff08f"
  },
  {
    "url": "assets/js/37.a892ed62.js",
    "revision": "798f89f1f5e5442206cc283a2a2f3c87"
  },
  {
    "url": "assets/js/38.e1d1e304.js",
    "revision": "5a0dc29962c0a6037ba11e3b8c1b34c1"
  },
  {
    "url": "assets/js/39.65006800.js",
    "revision": "7d90fe78b7497155120920c931e24d4b"
  },
  {
    "url": "assets/js/40.38c0a118.js",
    "revision": "b1b2ae012925aaa314bf1a972424bcc3"
  },
  {
    "url": "assets/js/41.5e938ad7.js",
    "revision": "da19429ec772c8a12535ac40aab64023"
  },
  {
    "url": "assets/js/42.a80b6499.js",
    "revision": "9c6f8c0b90603b439fe41d7419f97d76"
  },
  {
    "url": "assets/js/43.9f78bfed.js",
    "revision": "ca051b1a3393512874c49f2d8ba89cdf"
  },
  {
    "url": "assets/js/44.cf378725.js",
    "revision": "6727eb6d83271f704cb1d5263e0886aa"
  },
  {
    "url": "assets/js/45.03639a38.js",
    "revision": "e9a01391036fd5f9dbc382fa01239cdc"
  },
  {
    "url": "assets/js/46.74563318.js",
    "revision": "0b6a49cb285c159f2ef05e02434a2a1b"
  },
  {
    "url": "assets/js/47.f7807033.js",
    "revision": "e580330729964733aa6c84ec468e1e9e"
  },
  {
    "url": "assets/js/48.d42cb7e6.js",
    "revision": "8e15bc76f35414863f9e7ef7a2411339"
  },
  {
    "url": "assets/js/49.d5131b6d.js",
    "revision": "8fd785ef948cc6e8fc5e920cfd126f69"
  },
  {
    "url": "assets/js/5.f650fde1.js",
    "revision": "afb090cba0a14f42f570ea9e528d124e"
  },
  {
    "url": "assets/js/50.1f000e1d.js",
    "revision": "818226952c7967dfccc34f123fa9a5cd"
  },
  {
    "url": "assets/js/6.36b09dfb.js",
    "revision": "d219de4e9b4d059c111f7a5f71fb7aef"
  },
  {
    "url": "assets/js/7.d9cfcde7.js",
    "revision": "fca9c5bb8183f8d08aefff74f08793ff"
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
    "url": "assets/js/app.acdc3025.js",
    "revision": "c8ad29faaddcd3d616fa25bc1ea60ace"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "6a98865de5c2893fab67a41323002401"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "5b73a442aeada6c39450d3e1aeb1e053"
  },
  {
    "url": "categories/容器技术/index.html",
    "revision": "96601b4d3eb71194f70f555ccbc54c96"
  },
  {
    "url": "categories/服务器运维/index.html",
    "revision": "8d927f722863f236148bd6137ec84af6"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "ef973cf60ecf26ff3c7eb268766a3166"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "8dfff1e1b680522cc9142be930b9b5f1"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "53abe678c9a0e06653b7829e57d6239f"
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
    "revision": "d688274c741e2b8f9fb1fa2daa74f6d5"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "e8b81c6c352094d342a3befa5c52e95d"
  },
  {
    "url": "other/project.html",
    "revision": "e9b4908e40cd552e789def3c546d6ad7"
  },
  {
    "url": "tag/index.html",
    "revision": "f36dd197f70c3d2534a3f5e6d521f72c"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "35ef164bd6aecb25d12c1ca761f67d52"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "33a85234a1151af49356d7ab3f5abe2a"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "cd38b8c88e16fc8b8232d182c4bc6d4c"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "2e6f2307be970bc0b6fedcc672411bdd"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "181bbeb19afe14f812ce0036b430835b"
  },
  {
    "url": "tags/docker container/index.html",
    "revision": "309b2a15cc22bf418fbb5d1a9bf98560"
  },
  {
    "url": "tags/docker image/index.html",
    "revision": "5f4b4687ef850ace5ec53b93e4d93ef4"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "b14b535661542dd88758ad96d55c3c51"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "ae4031a6538728b5f4e5783c820df39f"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "eeb4a967b07d0c6786e62b2cda8e5297"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "799f3696aadaeafba17cdb8548dd5c1f"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "aba69f27e71401649c9ea9ef3f1af317"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "423fad46f758f856ef311461f34c5f9c"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "34b48874213e50f153ca9fa9d6c218f9"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "60944f43cc3b190a7f8ed51be9307452"
  },
  {
    "url": "tags/python/index.html",
    "revision": "181024db41de516152dce2c0c03a357a"
  },
  {
    "url": "tags/R/index.html",
    "revision": "1d1df47e8ea60280c5c7ce30f4975f1c"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "f5232fc87780e1487a91d715fbb3292f"
  },
  {
    "url": "tags/singularity/index.html",
    "revision": "48a034384430d8cdcaeb9cf78855e139"
  },
  {
    "url": "timeline/index.html",
    "revision": "e9d395814478bba958fd962088f39b86"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "1d3dccad394dd84309a16e3f31513d51"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "0f0a913c45890a8764a7a404ad1bb332"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "b0a60c49a4b3528b7c5476896b8c27f0"
  },
  {
    "url": "views/codeLanguage/python/reference.html",
    "revision": "efd5f826b47684c6cfdb3818a80f679e"
  },
  {
    "url": "views/codeLanguage/R/programControl.html",
    "revision": "05e47588abc873f8785914cc8b6c7e02"
  },
  {
    "url": "views/codeLanguage/R/reference.html",
    "revision": "1245c04a4267f6cfb913baf44ad3b9a5"
  },
  {
    "url": "views/codeLanguage/R/variant.html",
    "revision": "1edd4f1a148de2a3c7d3f80ff30eb4e7"
  },
  {
    "url": "views/docker/buildImage.html",
    "revision": "d53c93545ba71c18c3a7b0bc868d4e25"
  },
  {
    "url": "views/docker/container.html",
    "revision": "8f4bc156dff30a9db99d65dede3ed445"
  },
  {
    "url": "views/docker/dataMount.html",
    "revision": "2c55a86fe1a01707432f21ec122d0689"
  },
  {
    "url": "views/docker/image.html",
    "revision": "53c12d39b60a4bf0855ecc496618012a"
  },
  {
    "url": "views/docker/introduction.html",
    "revision": "0aea4d644af3a9a821850df6ce873f50"
  },
  {
    "url": "views/docker/reference.html",
    "revision": "91de4d12d818767b9460332d291f09dc"
  },
  {
    "url": "views/frp/use.html",
    "revision": "eb8f3f462408ece4e874a8601a7f7706"
  },
  {
    "url": "views/index.html",
    "revision": "e12920fb99c6e98b27a96c293cacac88"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "8e804f125426a86843bd94b1ab26db81"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "446ac4a1a77b008ec1a3ce77dc65e0c5"
  },
  {
    "url": "views/SGE/introdution.html",
    "revision": "107f5f740eda8341afc8dd156b2cd99c"
  },
  {
    "url": "views/SGE/use.html",
    "revision": "6d3f50177ae502ad361cf2f0d140c032"
  },
  {
    "url": "views/singularity/simpleUse.html",
    "revision": "137bc86f2b4230004d415a76f78449a4"
  },
  {
    "url": "views/software/busco.html",
    "revision": "e89489a1efae3f25b27bfafa67409964"
  },
  {
    "url": "views/software/hic.html",
    "revision": "b3310c0fabb9dfff59d87ed4de4ca3f7"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "bb54013c17fae0993c878f1f34d5b99c"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "a770de927c4d87f1ffe8c7ed6fb6e11e"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "3b5ee6a1e239fea3b4d096d21965223c"
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
