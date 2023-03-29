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
    "url": "assets/css/0.styles.811b3533.css",
    "revision": "7176fb0437b39ecec90751d62d5e54ff"
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
    "url": "assets/js/13.920ec004.js",
    "revision": "58e67d5b077c18d002c9c66fb2cef2b1"
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
    "url": "assets/js/20.eb984da5.js",
    "revision": "646bd5bb681233ef2139779aa034518a"
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
    "url": "assets/js/26.120789cf.js",
    "revision": "28fdd9bec54511edec233e95fbc56594"
  },
  {
    "url": "assets/js/27.09cec7bb.js",
    "revision": "991c145898eed3796eebf53fa7c9e1d5"
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
    "url": "assets/js/30.c9185fd4.js",
    "revision": "6b3c05f740fe404a885029d8bb514e4e"
  },
  {
    "url": "assets/js/31.8970ae73.js",
    "revision": "c09f6477a65e375c504340dac4717bfb"
  },
  {
    "url": "assets/js/32.4376f41e.js",
    "revision": "dbfb016cd286af02097c244b6a52d3c5"
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
    "url": "assets/js/35.7b814e25.js",
    "revision": "8ea31396c12860a1b8cbab591f5fe287"
  },
  {
    "url": "assets/js/36.18035fc1.js",
    "revision": "ff038b0ce299c39eba5c3ab6a4fe222b"
  },
  {
    "url": "assets/js/37.14bbb676.js",
    "revision": "cfd45c5b7ef95e21d441dcf5fda6239d"
  },
  {
    "url": "assets/js/38.4df76422.js",
    "revision": "91e4ab500b647fff3e471432f9689ddb"
  },
  {
    "url": "assets/js/39.707486c8.js",
    "revision": "8358d0454c0987d3fc1cba92f3162436"
  },
  {
    "url": "assets/js/40.fe01c0d2.js",
    "revision": "1027d8bd47f98ca84231e9889fa26890"
  },
  {
    "url": "assets/js/41.7dc22cfb.js",
    "revision": "0c89b75c677410ff01bb3e800a1e57b5"
  },
  {
    "url": "assets/js/42.8e8e74da.js",
    "revision": "5f4281b1546318fd8ccd0da4cb9fd8f7"
  },
  {
    "url": "assets/js/43.510ca735.js",
    "revision": "bb63b8de2400c8080afe07d0bf69ce39"
  },
  {
    "url": "assets/js/44.2f09e3d9.js",
    "revision": "6155fcb20b2fb5e752d797a45935aaea"
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
    "url": "assets/js/51.d54e0ec8.js",
    "revision": "10a0b3bfa5a38a251b9c1a813fcd6cff"
  },
  {
    "url": "assets/js/52.863a3fe4.js",
    "revision": "91ce6522eb68eb50a5cf1942625cc3ec"
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
    "url": "assets/js/55.3632f8f8.js",
    "revision": "9d4a1dfd2370c2e5fd37fca5cdfe2843"
  },
  {
    "url": "assets/js/56.0cc252f9.js",
    "revision": "39e38cc2e2eb1bc303da6d8431c49ac3"
  },
  {
    "url": "assets/js/57.11bc4610.js",
    "revision": "a2e02798df8eaf5db03d00dd85dcfb56"
  },
  {
    "url": "assets/js/58.4b865cc4.js",
    "revision": "210cc9502f046b551016558dcd2875b0"
  },
  {
    "url": "assets/js/59.4bf87ba1.js",
    "revision": "a96e54688417023fb595a315e1a885b0"
  },
  {
    "url": "assets/js/6.36b09dfb.js",
    "revision": "d219de4e9b4d059c111f7a5f71fb7aef"
  },
  {
    "url": "assets/js/60.2f479604.js",
    "revision": "c29e3889b5a8b7cf00b15d51b2806531"
  },
  {
    "url": "assets/js/61.79b97d7f.js",
    "revision": "4228b4903780a994bfca74de8b1438ee"
  },
  {
    "url": "assets/js/62.44bffa5d.js",
    "revision": "b0af82cb37510cb15a53e158ec7603e1"
  },
  {
    "url": "assets/js/63.a157f1d1.js",
    "revision": "f636317e9f6cace049bc230e794c66d0"
  },
  {
    "url": "assets/js/64.f6d2c417.js",
    "revision": "101fe5a79d07367d10a474e961e390f2"
  },
  {
    "url": "assets/js/65.a6e9d0c0.js",
    "revision": "e926b9d75e519cf8d4a890d45a9eef03"
  },
  {
    "url": "assets/js/66.9acbb7f9.js",
    "revision": "361289c793db9cdc01ccff1f78f6fb62"
  },
  {
    "url": "assets/js/67.f703d2ea.js",
    "revision": "886923e5ca280dccd0d597c2848a1cf8"
  },
  {
    "url": "assets/js/68.373bce68.js",
    "revision": "4db48a2484b01ba54191a3539ae5b90c"
  },
  {
    "url": "assets/js/69.d5915669.js",
    "revision": "8e3e799eba891b5e94d83d31b862fa69"
  },
  {
    "url": "assets/js/7.9fee92e4.js",
    "revision": "e73b4dcf776faa19e5de83e618a7e3ee"
  },
  {
    "url": "assets/js/70.4d5e05ce.js",
    "revision": "b9f0a5802f41696b630919d32cbeac0c"
  },
  {
    "url": "assets/js/71.c622c677.js",
    "revision": "67c151cffe52f0bf422420d32a043fc8"
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
    "url": "assets/js/app.07a01ec7.js",
    "revision": "9abc43ed6f4384526697b13f2d3504c2"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "7554c3c20cad57a8c694e627c694f931"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "4bb60151b56a824d0eac6cbe0188be32"
  },
  {
    "url": "categories/web编程/index.html",
    "revision": "03cbd79c86429151495b4b1225d981ef"
  },
  {
    "url": "categories/容器技术/index.html",
    "revision": "24de6ff19656a0aea98df6922132c829"
  },
  {
    "url": "categories/服务器运维/index.html",
    "revision": "8f646b7fefd05a396393e4f7e24dbf36"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "22ae67f3fcda5a341d754a3465a06f08"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "822ab646098ce2d650ac864fb8edc386"
  },
  {
    "url": "categories/编程语言/page/2/index.html",
    "revision": "48cd057e1f2e2ece3e4791b58917a998"
  },
  {
    "url": "categories/编程语言/page/3/index.html",
    "revision": "fe495e8e43ce1109c8d6c6edd0024f7b"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "da02efe9afc414a475f45aebc0975baa"
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
    "revision": "d72863fdda96f51c7955756fb6eb7817"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "0abc10273f2f05a3730399dcd08d0c0f"
  },
  {
    "url": "other/project.html",
    "revision": "19ffeca485a5ea40224e6af7c037c0d6"
  },
  {
    "url": "tag/index.html",
    "revision": "177762ac7c18a76dd7ece4141bce826c"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "c46608ac1fc55da86a6046b625455195"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "e0e28a027cb7fcfb164ffa8e74739880"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "902bc3567a58e69318535689872cdff6"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "3d4e400b7de53cad1db31119810fcd88"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "bc03a79a5a413962d2bc362e53829713"
  },
  {
    "url": "tags/docker container/index.html",
    "revision": "a73f1c1a02fda5bc1349d65da0cc5d73"
  },
  {
    "url": "tags/docker image/index.html",
    "revision": "4c891e92fa0b4ea9366b45a909f9ebce"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "9ff04aa4935c66d61cd6555b74c977cf"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "7db8ca28a30d27aad0d4b9505fd44d87"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "0ea832f55284dee1778fd022e276238d"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "f81f37f6743450e6f425b5a37feaa8f7"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "5cbf832e088e523a76d8396e88692c0c"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "c1a77276a8371b71d5771d9a4b800bd4"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "22c1f26e4db1ae0d294f41c7aa1f4d26"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "92ec5d030ffbebc0f423fde3b2a1632d"
  },
  {
    "url": "tags/NCBI Download/index.html",
    "revision": "284641e62070968d8b8263dc6d2db333"
  },
  {
    "url": "tags/NCBI/index.html",
    "revision": "e4d9802bb70cacd11ee08a2aa27b4919"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "d1e33dcb8c0bf17282f0064ee5f33c12"
  },
  {
    "url": "tags/ops/index.html",
    "revision": "a791dfadbc4de84b1d5d24a8396b4a34"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "34cfc90c84b229f2f24ea741dabf73ea"
  },
  {
    "url": "tags/python/index.html",
    "revision": "e78e2bd0cbaa9919aab8db11ddd774f9"
  },
  {
    "url": "tags/R/index.html",
    "revision": "631424419912e0dbf0a5610846be945e"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "13cefa1ad5238bf20e1009e9d5dd0026"
  },
  {
    "url": "tags/singularity/index.html",
    "revision": "af016af18991265fe10f35f754321b22"
  },
  {
    "url": "tags/SQL/index.html",
    "revision": "e344ea288f0fade0af1277b8c80a5d7e"
  },
  {
    "url": "tags/web programming/index.html",
    "revision": "f4f01fe36eb50baa47124e9ad843f636"
  },
  {
    "url": "timeline/index.html",
    "revision": "fbc44942af048b278dbd4cf0c0f07651"
  },
  {
    "url": "views/codeLanguage/java/maven.html",
    "revision": "9a82aa27a878bbd3ae97646634b066a8"
  },
  {
    "url": "views/codeLanguage/java/reference.html",
    "revision": "b5656f59aaa4b1971d738a1c793f18c4"
  },
  {
    "url": "views/codeLanguage/java/scirpts_format.html",
    "revision": "a7fb9dc510581e8e74ae75236de8227d"
  },
  {
    "url": "views/codeLanguage/java/variant.html",
    "revision": "4304f5cb8fac4dc02c6cd8fc0cf0d583"
  },
  {
    "url": "views/codeLanguage/JS/basicConcept.html",
    "revision": "6f55672b77d41e344f5307501ef3718b"
  },
  {
    "url": "views/codeLanguage/JS/dom.html",
    "revision": "a064e48e4e53f057696165286b9c8794"
  },
  {
    "url": "views/codeLanguage/JS/function.html",
    "revision": "afb651af50ff3127461ce3fa2ea4c1b6"
  },
  {
    "url": "views/codeLanguage/JS/reference.html",
    "revision": "7eedaf47658e1e713023776c18605d73"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "8156f3753603c990295535c2a37229da"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "ff246ad84ce5a01676f8bd2e84e699cc"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "de4ae5b06c9cfe50316a76de93f1a516"
  },
  {
    "url": "views/codeLanguage/python/reference.html",
    "revision": "c313392b7a1f154ae63c5d84fe6321fe"
  },
  {
    "url": "views/codeLanguage/R/programControl.html",
    "revision": "e5431339d043f736c5e9fd98785db113"
  },
  {
    "url": "views/codeLanguage/R/reference.html",
    "revision": "5b1b6357b94d1f9abbcbdca9d7001caf"
  },
  {
    "url": "views/codeLanguage/R/variant.html",
    "revision": "8aec88d19ca3d0c8da89217e0311a678"
  },
  {
    "url": "views/codeLanguage/sql/install.html",
    "revision": "6693eafc93ce78b9f99dd167850448b8"
  },
  {
    "url": "views/codeLanguage/sql/modified.html",
    "revision": "c5f3db884c49349831df916d466b6769"
  },
  {
    "url": "views/codeLanguage/sql/python_sql.html",
    "revision": "1fac115f391373c655eec92187f972ba"
  },
  {
    "url": "views/codeLanguage/sql/reference.html",
    "revision": "7e18831e3f11679fd3eee9efd8d301f7"
  },
  {
    "url": "views/codeLanguage/sql/relation_model.html",
    "revision": "2c367e04408711ccd9452ab68d0a5726"
  },
  {
    "url": "views/codeLanguage/sql/select.html",
    "revision": "a94ce2e68b782a5c27cb60844d2b3933"
  },
  {
    "url": "views/docker/buildImage.html",
    "revision": "a5d2630a7c69a1c0c01c384d8c37607a"
  },
  {
    "url": "views/docker/container.html",
    "revision": "658c52799e78744d2d8bcdba996a5fcb"
  },
  {
    "url": "views/docker/dataMount.html",
    "revision": "57930bb6a7a3b4be2184cc94e53533ea"
  },
  {
    "url": "views/docker/docker_compose.html",
    "revision": "ed69be204eb00756ed52a6c186547d29"
  },
  {
    "url": "views/docker/image.html",
    "revision": "18957a82878f60bca57d13f772059680"
  },
  {
    "url": "views/docker/introduction.html",
    "revision": "d3581fbd2ac24b6c2749b8d616502d48"
  },
  {
    "url": "views/docker/reference.html",
    "revision": "90f989bea9ee507cf04d598dc1414d47"
  },
  {
    "url": "views/index.html",
    "revision": "b9d1c442089e3f733c86768684f69d7c"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "51576d16545da7055a3b50f5ef5a41a0"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "3f9e862cd54674eaaa16f73af2f27182"
  },
  {
    "url": "views/ops/frp/use.html",
    "revision": "1daeb1160fd160c2cfef0f3e1734e39c"
  },
  {
    "url": "views/ops/SGE/introdution.html",
    "revision": "b8d5df601163117b8c3cfe058fe81010"
  },
  {
    "url": "views/ops/SGE/use.html",
    "revision": "624442fb3d85996331ae69f0c68d46e5"
  },
  {
    "url": "views/ops/someproblem/installDisk.html",
    "revision": "7fa2062fb50a8a513b438c888bd97fed"
  },
  {
    "url": "views/ops/someproblem/libg2c.html",
    "revision": "be7b4e1d5ffa4e6367713226cb08ca79"
  },
  {
    "url": "views/ops/someproblem/network.html",
    "revision": "ce1e8bf2c1180440ef894fef61a737f5"
  },
  {
    "url": "views/singularity/simpleUse.html",
    "revision": "4c0eaa35a86c628a2235a10e8f32f6ef"
  },
  {
    "url": "views/software/busco.html",
    "revision": "870818333f57865cf722ba63e3bf06ae"
  },
  {
    "url": "views/software/download_ncbi.html",
    "revision": "703029ecb20db26c1cef0080b7ba374e"
  },
  {
    "url": "views/software/hic.html",
    "revision": "c607c6cdf8e8b5f1e3a11bc0fd300db3"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "806906bb00d34da4df165920216f1fd3"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "1e9250a3db98cba79c898322dd96af6e"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "72d3123cbfd5d6f31c799c1c77bc621f"
  },
  {
    "url": "views/webProgram/practise/example1.html",
    "revision": "cab624454299e082a9418b951e137495"
  },
  {
    "url": "views/webProgram/practise/ncbi_taxon.html",
    "revision": "08ea64fa702fba008c1fdc6d4002b3cb"
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
