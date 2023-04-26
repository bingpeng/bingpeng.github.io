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
    "url": "assets/css/0.styles.173756f4.css",
    "revision": "42e70df6ed8d4f00078c155cee0bd1c6"
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
    "url": "assets/js/16.0e443a1a.js",
    "revision": "69b2392f97bc50718712601a715c8bdf"
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
    "url": "assets/js/20.50c4beb4.js",
    "revision": "a7d3d0240a38bfc08c096861b606a7ec"
  },
  {
    "url": "assets/js/21.40424f68.js",
    "revision": "45704aa4c73763471bb62ab27d1cd18b"
  },
  {
    "url": "assets/js/22.714c47f1.js",
    "revision": "7cafb2335c61680bceec71dd4e188818"
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
    "url": "assets/js/25.e0eab211.js",
    "revision": "21c72d5007b27fd95c11173b4db194e4"
  },
  {
    "url": "assets/js/26.275ed4e1.js",
    "revision": "d702b626c3cbdbb39756414f38eb67c3"
  },
  {
    "url": "assets/js/27.6aa7b8f9.js",
    "revision": "3ea85fe782af10b118614057e52a8a8c"
  },
  {
    "url": "assets/js/28.24bcbfa7.js",
    "revision": "df6b7d2bede139702a017a8a245d32f0"
  },
  {
    "url": "assets/js/29.b14b1c03.js",
    "revision": "2fa24265d4ef789d6869a0fa6d7dc1b0"
  },
  {
    "url": "assets/js/30.820dc18b.js",
    "revision": "6ba7563219fa3425ad6df8a9cfaa8802"
  },
  {
    "url": "assets/js/31.8970ae73.js",
    "revision": "c09f6477a65e375c504340dac4717bfb"
  },
  {
    "url": "assets/js/32.fb62e1d2.js",
    "revision": "c8c6948ac9882ca81ffb177195e93f7f"
  },
  {
    "url": "assets/js/33.07f2ddd9.js",
    "revision": "6c5e12d26faca23f1cc3a6b9d1b983f6"
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
    "url": "assets/js/39.285252ec.js",
    "revision": "7c98d4d1bc19f2e96de256b89ed41242"
  },
  {
    "url": "assets/js/40.af6da7cb.js",
    "revision": "1b1316a2a3f73eba84290738b3ea8051"
  },
  {
    "url": "assets/js/41.a0255984.js",
    "revision": "35491766f749a38fc239f75f66eb9b5f"
  },
  {
    "url": "assets/js/42.56493973.js",
    "revision": "e00ba7b46d3b2438d34133f6368e8581"
  },
  {
    "url": "assets/js/43.5bf8c776.js",
    "revision": "895b7ab9b37c2bfea86b2e910ec281f1"
  },
  {
    "url": "assets/js/44.f2e765a6.js",
    "revision": "f8535a09e2dcd4738e31c685c587702d"
  },
  {
    "url": "assets/js/45.8f251a8b.js",
    "revision": "79c640e017c2ab227b351f28db98ecfe"
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
    "url": "assets/js/49.611ec4ed.js",
    "revision": "08b9ee29fab561a2779df882bee70939"
  },
  {
    "url": "assets/js/5.f650fde1.js",
    "revision": "afb090cba0a14f42f570ea9e528d124e"
  },
  {
    "url": "assets/js/50.81f5ee08.js",
    "revision": "81b4e1b2b05f8a4962eb8a02a5eaad33"
  },
  {
    "url": "assets/js/51.abdda76f.js",
    "revision": "ad45082405e78996db99b5422bfd70a3"
  },
  {
    "url": "assets/js/52.863a3fe4.js",
    "revision": "91ce6522eb68eb50a5cf1942625cc3ec"
  },
  {
    "url": "assets/js/53.ce905ce4.js",
    "revision": "75159f551fcf23c6b11a317f6d28c689"
  },
  {
    "url": "assets/js/54.57ad257e.js",
    "revision": "877fa400e323ba55ff35207f97b3fd67"
  },
  {
    "url": "assets/js/55.e8a6162b.js",
    "revision": "e0d54cfd0dc85b27697934dd0afc2e6c"
  },
  {
    "url": "assets/js/56.0d1bfafb.js",
    "revision": "438029ec7e8065cf679fdedb86764ad6"
  },
  {
    "url": "assets/js/57.11bc4610.js",
    "revision": "a2e02798df8eaf5db03d00dd85dcfb56"
  },
  {
    "url": "assets/js/58.9018be40.js",
    "revision": "a9bbe6158344fe33892b4751bc73a0a6"
  },
  {
    "url": "assets/js/59.8df7dd02.js",
    "revision": "ebb7761c5efa1efdf805d7e605672a15"
  },
  {
    "url": "assets/js/6.36b09dfb.js",
    "revision": "d219de4e9b4d059c111f7a5f71fb7aef"
  },
  {
    "url": "assets/js/60.4d7e0dfc.js",
    "revision": "a4ac2709ea16bd9b35936e595e9081f6"
  },
  {
    "url": "assets/js/61.9a43aec0.js",
    "revision": "b386c9b840705b25ea6098b591ded116"
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
    "url": "assets/js/64.b1afbf3f.js",
    "revision": "9b687f9b490446353bb0db9011a38fe9"
  },
  {
    "url": "assets/js/65.a6e9d0c0.js",
    "revision": "e926b9d75e519cf8d4a890d45a9eef03"
  },
  {
    "url": "assets/js/66.54c2ce28.js",
    "revision": "0b7603eec88a3361623e9c109fc8a7a1"
  },
  {
    "url": "assets/js/67.81c1d4b1.js",
    "revision": "be0c1a2e592594ecbc1ab9e4b3919a00"
  },
  {
    "url": "assets/js/68.a5c8957f.js",
    "revision": "d0ddabd30cb16a5821c9d0b816c3e13e"
  },
  {
    "url": "assets/js/69.d0efc461.js",
    "revision": "33a607c78dc328b92a3f767718529332"
  },
  {
    "url": "assets/js/7.9fee92e4.js",
    "revision": "e73b4dcf776faa19e5de83e618a7e3ee"
  },
  {
    "url": "assets/js/70.978e66c8.js",
    "revision": "0e8c602e8fb62c6bd97813ecc9702747"
  },
  {
    "url": "assets/js/71.388b2eb9.js",
    "revision": "6b9a641f641ef1025bc7c38577378f15"
  },
  {
    "url": "assets/js/72.6fd18065.js",
    "revision": "23344584b9e6e155a0dc62d6659ed8d0"
  },
  {
    "url": "assets/js/73.a1d2f01c.js",
    "revision": "cefce156f8dcdfe4eadd0974c3eddb11"
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
    "url": "assets/js/app.03ad9691.js",
    "revision": "e992d0fa9a261f4b065defa5df5be215"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "155fc5b57b47b2c4104f46148fbf72c9"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "100ce3e66f0b8faee20eaf435b2f5e61"
  },
  {
    "url": "categories/web编程/index.html",
    "revision": "c17a2984cbb635144a67240c6caff2ba"
  },
  {
    "url": "categories/容器技术/index.html",
    "revision": "38fa5b1f7406c051465647ecec927a07"
  },
  {
    "url": "categories/服务器运维/index.html",
    "revision": "1c33fd9115d1278d344ada9eff78944a"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "b9926b70ddc24ff56b072bd12fc8e091"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "54393f98ec1b05b98a78be41d32d7e4a"
  },
  {
    "url": "categories/编程语言/page/2/index.html",
    "revision": "b83182cc70878af6c8158304ecad7940"
  },
  {
    "url": "categories/编程语言/page/3/index.html",
    "revision": "db9330c71a6eaef4d9bd1e064f155f10"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "c56830df246dc8303139e303a6fe0001"
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
    "revision": "663d0026abcfdb901f54e9b60f9b9498"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "e649a9e7fdffab567a73ee17adca9ae2"
  },
  {
    "url": "other/project.html",
    "revision": "7f2b7aa2053d7bab3c845a2c02662a47"
  },
  {
    "url": "tag/index.html",
    "revision": "216a7f159aade0f92837c011cbbba881"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "0818f45e46405d42db950e4d2ad033bf"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "570ffc30134d990573b97d904299b99a"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "916154944ed1c7e0951da9a4b4748a94"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "811b79a9ebd7904c80d38204dd816b35"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "d7257d33f2a119d8ce35e2d764ed6dce"
  },
  {
    "url": "tags/docker container/index.html",
    "revision": "35f3c093807f91ea6c161fd2e9831f86"
  },
  {
    "url": "tags/docker image/index.html",
    "revision": "d7b2f121d28122248977a7a9006d8f72"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "a81f5d31138568e2ca51fe3902b2d8e5"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "1f2d67dba5752382d783a218e3134740"
  },
  {
    "url": "tags/Gene Anno/index.html",
    "revision": "e89060394dae952f21a7abe7ad48dbf7"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "b4360a85ad537c9317d4dbca7353d462"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "09aaaa0767b66494f7bf041c2760db23"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "c3b1c100d316ffea7a33acedd32f6966"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "a5d0b44438ee81bf66458aba536fdf02"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "269929b8a4e6f580922bbe1dfdbd5b13"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "57bc7382609c31079d8432008b46c5d8"
  },
  {
    "url": "tags/NCBI Download/index.html",
    "revision": "b1ef1c7fb0320fb40e1ae16272b3b71e"
  },
  {
    "url": "tags/NCBI/index.html",
    "revision": "17517986faf3ff8cb721f099331ff1df"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "4c9b5e6933df270ff717434768fdcfda"
  },
  {
    "url": "tags/ops/index.html",
    "revision": "f2855da9734808160886022e46bceee5"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "5b19bdea5a857e39e1ad96f5f3ff1b2a"
  },
  {
    "url": "tags/primer design/index.html",
    "revision": "683e824cdfa3c3cad9aeee58badc283f"
  },
  {
    "url": "tags/python/index.html",
    "revision": "8c63b91e8859861ef825931db7094266"
  },
  {
    "url": "tags/R/index.html",
    "revision": "07c3e235b30f1a789d7ff0506882428c"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "6307232b6619bbc47fb55a3b236c6ab4"
  },
  {
    "url": "tags/singularity/index.html",
    "revision": "cfa1b70e31f15e5e1bb88ab2d34a2405"
  },
  {
    "url": "tags/SQL/index.html",
    "revision": "4256b8c031eb7fb3d0e30c75a8b4dd27"
  },
  {
    "url": "tags/web programming/index.html",
    "revision": "3be502782577b615b18b566c2091650d"
  },
  {
    "url": "timeline/index.html",
    "revision": "66406063aecb70a2744185aa2616a4b4"
  },
  {
    "url": "views/codeLanguage/java/maven.html",
    "revision": "3f6113ef771b871f4434e0d5bb68cd64"
  },
  {
    "url": "views/codeLanguage/java/reference.html",
    "revision": "74045560e985d48f0b1f67ffa0587885"
  },
  {
    "url": "views/codeLanguage/java/scirpts_format.html",
    "revision": "27401c7325d6afa04e4c2535a6bf57e4"
  },
  {
    "url": "views/codeLanguage/java/variant.html",
    "revision": "40c5794e41ec0fd8527d57c0c5aa4d22"
  },
  {
    "url": "views/codeLanguage/JS/basicConcept.html",
    "revision": "409c70ff34dcc004a0d470488b90c09a"
  },
  {
    "url": "views/codeLanguage/JS/dom.html",
    "revision": "671308176202e067625fbe8e3d18bb64"
  },
  {
    "url": "views/codeLanguage/JS/function.html",
    "revision": "a966a1a05868fc7863070bc06cf98232"
  },
  {
    "url": "views/codeLanguage/JS/reference.html",
    "revision": "ab412b0bafb351c1f0a9c107e2eb4ef7"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "29937c987c1d756ae285e54d3edb9c12"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "5f2464352cf287e0a1ddc282d9a80a81"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "255c2fc1a943d9ef836e8b6971554d67"
  },
  {
    "url": "views/codeLanguage/python/reference.html",
    "revision": "a6a734964aeb665dd8db5724e35a46df"
  },
  {
    "url": "views/codeLanguage/R/programControl.html",
    "revision": "16eca6a42753095b49eed8f9e86b8c5c"
  },
  {
    "url": "views/codeLanguage/R/reference.html",
    "revision": "842c61b5d0fc6754eff8474de049e736"
  },
  {
    "url": "views/codeLanguage/R/variant.html",
    "revision": "b91aafbdb4d932099e77bbd33fe169bc"
  },
  {
    "url": "views/codeLanguage/sql/install.html",
    "revision": "35b560a066e3c4fddd9d0ba7c820379b"
  },
  {
    "url": "views/codeLanguage/sql/modified.html",
    "revision": "7fe0f6c3d0f41013b42c83500562d4d1"
  },
  {
    "url": "views/codeLanguage/sql/python_sql.html",
    "revision": "52c3579e5c8a7949d3054e54c7efdcbb"
  },
  {
    "url": "views/codeLanguage/sql/reference.html",
    "revision": "077940fe1f8fc95a5ecf5c4d61cbbfb2"
  },
  {
    "url": "views/codeLanguage/sql/relation_model.html",
    "revision": "2c3a0612951bf82534bec7153e429b9b"
  },
  {
    "url": "views/codeLanguage/sql/select.html",
    "revision": "d2eae6c1f50299907ad08e7eb1ed72f8"
  },
  {
    "url": "views/docker/buildImage.html",
    "revision": "cab14a79b632465bcf863edf849751be"
  },
  {
    "url": "views/docker/container.html",
    "revision": "51bc0f27509349e5db2e13b451ec0a7b"
  },
  {
    "url": "views/docker/dataMount.html",
    "revision": "9600e1c8bff3cedd48c017fb6e0b360e"
  },
  {
    "url": "views/docker/docker_compose.html",
    "revision": "600467f0cf6ac24300a4b422f21482e9"
  },
  {
    "url": "views/docker/image.html",
    "revision": "a09c10763f1b2bb7e3c6d86bdec66f97"
  },
  {
    "url": "views/docker/introduction.html",
    "revision": "7b82f8996a31c15570971d0e9a98ea4f"
  },
  {
    "url": "views/docker/reference.html",
    "revision": "08900598ae323df2dfa0ec2b52a4c15b"
  },
  {
    "url": "views/index.html",
    "revision": "9a6b1e4430d3b4af0aa1bf4a7453ff4f"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "52409588b66c8bb2ea4bd52bc342c17c"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "dcc71a220a81722cf5321b7dc38b2df1"
  },
  {
    "url": "views/ops/frp/use.html",
    "revision": "e7176a97676ae67341a3172fc0342b73"
  },
  {
    "url": "views/ops/SGE/introdution.html",
    "revision": "97c9a106d67c7b991fcfbbaf6253f938"
  },
  {
    "url": "views/ops/SGE/use.html",
    "revision": "51bc1e62fc36904614f9fdff0d542555"
  },
  {
    "url": "views/ops/someproblem/installDisk.html",
    "revision": "c5262f79b38abafacdafdfec1c64cad0"
  },
  {
    "url": "views/ops/someproblem/libg2c.html",
    "revision": "cfac25887d41afa8cf3444b3d77b7ce6"
  },
  {
    "url": "views/ops/someproblem/network.html",
    "revision": "662fe5452e1eab48a805ea73af415f1b"
  },
  {
    "url": "views/singularity/simpleUse.html",
    "revision": "de6c137af5ed9558e240c06ca33266e9"
  },
  {
    "url": "views/software/busco.html",
    "revision": "e96657f07ff35fc902b8b6da6c6820cd"
  },
  {
    "url": "views/software/download_ncbi.html",
    "revision": "263bc951291039dc258a7f5178049113"
  },
  {
    "url": "views/software/hic.html",
    "revision": "ee3f24e325568f990964cdd5ce703bed"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "9218120eec24a87d182c53fbdc9e5daa"
  },
  {
    "url": "views/software/interproscan.html",
    "revision": "f1b984738168f431fb01805ed22c0a55"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "5fc2d197526132af71ab3552f8852d56"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "f4d7b666f32df3e92019f091b480ec65"
  },
  {
    "url": "views/software/primer3web.html",
    "revision": "6fc6d8be8d8c553afb2e5d5b13ccab94"
  },
  {
    "url": "views/webProgram/practise/example1.html",
    "revision": "5e5f9a4f69373b86eae49f131daa702f"
  },
  {
    "url": "views/webProgram/practise/ncbi_taxon.html",
    "revision": "5ad61703b6dcb51fcadcf378a21ae73f"
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
