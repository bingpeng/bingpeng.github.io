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
    "url": "assets/css/0.styles.de3421a4.css",
    "revision": "77a8247cd589a36cad68040f4517d83f"
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
    "url": "assets/js/20.f99f4640.js",
    "revision": "cf3da8417f5a0c2f014f9e318f6a28ca"
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
    "url": "assets/js/26.d8b74adf.js",
    "revision": "caa71dc10bcf3cc4e9181d549f78ea97"
  },
  {
    "url": "assets/js/27.39b6e0e3.js",
    "revision": "1f213c14a432d6bdb16f5417d08d9744"
  },
  {
    "url": "assets/js/28.8d1e34b1.js",
    "revision": "6524009611c6cb0f13bdf26a0ea40652"
  },
  {
    "url": "assets/js/29.f9090ee2.js",
    "revision": "ca44736c62b203fbc121b7a658a1d579"
  },
  {
    "url": "assets/js/30.f88c20a1.js",
    "revision": "fb0a152575d9189cbaa1278c0b28cc31"
  },
  {
    "url": "assets/js/31.1c49e654.js",
    "revision": "c4450303a7b112bb6be014a15a31f3b7"
  },
  {
    "url": "assets/js/32.a34252ad.js",
    "revision": "e9085ec76ad5a9759244d00241253b7c"
  },
  {
    "url": "assets/js/33.43c5a6d9.js",
    "revision": "4e6d48931fc923b0582f75fefd385dcf"
  },
  {
    "url": "assets/js/34.19524aa0.js",
    "revision": "d07c348e1ec9b61377415448e8d7dd88"
  },
  {
    "url": "assets/js/35.11012eb5.js",
    "revision": "98ec7c94f4205c4b488fc4f4c6dd50e3"
  },
  {
    "url": "assets/js/36.7abfb0d5.js",
    "revision": "4dd4f0dc5de544deea2a6d9775a2ee69"
  },
  {
    "url": "assets/js/37.68312f63.js",
    "revision": "4d35ea71da43abcef0084d92bb3acfe6"
  },
  {
    "url": "assets/js/38.a4374708.js",
    "revision": "f8e1ab6c7b340b33b01b1bf7d283bce7"
  },
  {
    "url": "assets/js/39.045ac8ce.js",
    "revision": "460a4c6a4d26df49e2e4421a7ddb9377"
  },
  {
    "url": "assets/js/40.83655186.js",
    "revision": "859b0ff0db2ea93057a837dfc9696bd6"
  },
  {
    "url": "assets/js/41.d2f1e833.js",
    "revision": "03e2f3172228e1805a3be7d9064a48b7"
  },
  {
    "url": "assets/js/42.cd3337ae.js",
    "revision": "4360569478cc9aceeaf838151465dd30"
  },
  {
    "url": "assets/js/43.6f86a5ab.js",
    "revision": "6744a6eb7ba0b27135280f402edf4729"
  },
  {
    "url": "assets/js/44.7586730b.js",
    "revision": "b8f66ea06a820c9a94d06189b77e876b"
  },
  {
    "url": "assets/js/45.483ff8ce.js",
    "revision": "35a27bb35b5dc3dd4ca0260ec17372d8"
  },
  {
    "url": "assets/js/46.e597d39a.js",
    "revision": "70b0d50959ff68c9c38d8096d21848d0"
  },
  {
    "url": "assets/js/47.d27fab5d.js",
    "revision": "93c211a0a5a22cdb7e922f32974544b9"
  },
  {
    "url": "assets/js/48.9e96b8d7.js",
    "revision": "ccc4ce8e9ff407da47d553c5f5211906"
  },
  {
    "url": "assets/js/49.1aefc663.js",
    "revision": "881f58296db112282bb769201f1e129b"
  },
  {
    "url": "assets/js/5.f650fde1.js",
    "revision": "afb090cba0a14f42f570ea9e528d124e"
  },
  {
    "url": "assets/js/50.eb448c40.js",
    "revision": "ece9850757ba209e9e3c474c2b60e38f"
  },
  {
    "url": "assets/js/51.b5895eb2.js",
    "revision": "9eba64e0ac4bad0c2d4bb3497a7446bc"
  },
  {
    "url": "assets/js/52.b3fa7bfd.js",
    "revision": "c02eb57da201fc540db8830d3b1c6c47"
  },
  {
    "url": "assets/js/53.6ac985da.js",
    "revision": "8a93aa9ef8397ca09b6de03bd718fe0d"
  },
  {
    "url": "assets/js/54.342f3487.js",
    "revision": "7ab445f0648805f2a7111171c41c57f4"
  },
  {
    "url": "assets/js/55.4f9dbbb6.js",
    "revision": "14b7ff2c3d17134429c17ff3e41bdd3d"
  },
  {
    "url": "assets/js/56.bfc72c0c.js",
    "revision": "b9ef7b0aa7e6402b09238b38a5952169"
  },
  {
    "url": "assets/js/57.ab0dcceb.js",
    "revision": "345b19bf2a313bb50bb3879fc650bc82"
  },
  {
    "url": "assets/js/58.2ad8e2f7.js",
    "revision": "71a33565efb9412fbc318d3bd0926922"
  },
  {
    "url": "assets/js/59.21f91d91.js",
    "revision": "049d5a118655fcd75679bfb80adfb253"
  },
  {
    "url": "assets/js/6.36b09dfb.js",
    "revision": "d219de4e9b4d059c111f7a5f71fb7aef"
  },
  {
    "url": "assets/js/60.cfc321ac.js",
    "revision": "39b6639dce4c8a258ddfb0d9bae31c33"
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
    "url": "assets/js/app.f6325559.js",
    "revision": "93c0684859adffa245a91648579b5e6d"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "932a87cc6a771395772770fc30e42768"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "a8fe982e53fc07ce0a76ff0cebc7ec95"
  },
  {
    "url": "categories/web编程/index.html",
    "revision": "2b097542bc1b4030b58e0c266a4eb7e9"
  },
  {
    "url": "categories/容器技术/index.html",
    "revision": "6765c159bc711430dd2c3d1a0e831dba"
  },
  {
    "url": "categories/服务器运维/index.html",
    "revision": "922ac32115faed37fecb5d6fea177966"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "95aa16fd575e5232abc70390302ecd8d"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "4508b051cee3369c6a67edeb50dd69bf"
  },
  {
    "url": "categories/编程语言/page/2/index.html",
    "revision": "75bc71c06b6b9bb87c949337f6784cfe"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "3caf1b9ce38556564d8d69864cf20961"
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
    "revision": "027df0ea0a859fa92667a1f14704aaf1"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "064d6cb123e8748f4c6880ad42bf82b4"
  },
  {
    "url": "other/project.html",
    "revision": "679ed07dab2da7dae621c7d20123b7d0"
  },
  {
    "url": "tag/index.html",
    "revision": "d6e68cadf2e1b28baed45241c154a411"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "05ab28fba12bd4180e968fbe4d68ae34"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "ffb77ddf60269d5b5802569072c3bc1e"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "fa2ab6fa60b26b9c30c685c11e7a63c5"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "94fe0a1de7f418cce61ebdf1c5a4e45a"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "cabaafb30752d2073080594bc8cfdc79"
  },
  {
    "url": "tags/docker container/index.html",
    "revision": "3f144dd6fbf9ed6e2fee45a5be6a4005"
  },
  {
    "url": "tags/docker image/index.html",
    "revision": "f717c10fd29bed7e2b523e59bf90592c"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "92b3e7b6abd1a1d10dd20b63263fc29d"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "0b051f32dee2c2329348241674245dd6"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "1506ac4b43aa5005a07618da46fe7d73"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "476305b7897acb5adca20caf88f9f4a4"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "c10ac21a1cb44370e72a885fe026fb66"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "c3257b9de17da4bffb9609faa408c1a5"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "25cf028999cc2bf5d2f556166f533e1e"
  },
  {
    "url": "tags/ops/index.html",
    "revision": "57cdf4440c884e61ecc19b3d063e82dd"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "90e3966498b10d3eb7e49f6947bf3d5b"
  },
  {
    "url": "tags/python/index.html",
    "revision": "cbd557f77c517a9144996ce9ad4f196d"
  },
  {
    "url": "tags/R/index.html",
    "revision": "2797aaad2df1db4bab2d4e859fa10b94"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "dd8ebe19c4cdd21932cfbb56748eff6e"
  },
  {
    "url": "tags/singularity/index.html",
    "revision": "802e7a6fae4ddcd92c940103628bcd4b"
  },
  {
    "url": "tags/SQL/index.html",
    "revision": "e03a9ce9ec8893430aafd1b60484d848"
  },
  {
    "url": "tags/web programming/index.html",
    "revision": "503cb59253152ef5bb00d53b65813fb9"
  },
  {
    "url": "timeline/index.html",
    "revision": "be6244dca4ae8edcfafc820bc197c4f7"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "88d74fd79a94c12601413a8fc42a9430"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "86e198a794245fd652adb3d851de6b4e"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "a1225458b3f1bce5f1b861730f81d2a2"
  },
  {
    "url": "views/codeLanguage/python/reference.html",
    "revision": "bd5eb870436b4147aa9ef8c5c8415794"
  },
  {
    "url": "views/codeLanguage/R/programControl.html",
    "revision": "c08829c9b571240a1cce93ab5607cff8"
  },
  {
    "url": "views/codeLanguage/R/reference.html",
    "revision": "72af731ccf15a980be135728ca614db8"
  },
  {
    "url": "views/codeLanguage/R/variant.html",
    "revision": "ce4d2f94e1bdc0626e50e323480ad253"
  },
  {
    "url": "views/codeLanguage/sql/install.html",
    "revision": "e7553c861110623f4c94630ae3ca9ac6"
  },
  {
    "url": "views/codeLanguage/sql/modified.html",
    "revision": "9bec7cd3416c3c1da45c90a1210e5d08"
  },
  {
    "url": "views/codeLanguage/sql/python_sql.html",
    "revision": "538f699e5a855f0b47b112add5788094"
  },
  {
    "url": "views/codeLanguage/sql/reference.html",
    "revision": "bedfb5dcf5166e5d60566923219652e5"
  },
  {
    "url": "views/codeLanguage/sql/relation_model.html",
    "revision": "86f8a8466803ce2ca52c54a600c234cb"
  },
  {
    "url": "views/codeLanguage/sql/select.html",
    "revision": "b6c851561633eb14d951a6e86aa34a5f"
  },
  {
    "url": "views/docker/buildImage.html",
    "revision": "0a7aae32ba0f691317d05d5fc36d4f6e"
  },
  {
    "url": "views/docker/container.html",
    "revision": "d0250e0b745e6c173094b81f1ea6cec5"
  },
  {
    "url": "views/docker/dataMount.html",
    "revision": "8f6fdc55643ab4a1a13e16918d889e15"
  },
  {
    "url": "views/docker/docker_compose.html",
    "revision": "6120f0cf2b93f5a331f784e60712a6eb"
  },
  {
    "url": "views/docker/image.html",
    "revision": "8cce4192e39b74a9bd5bff3ae01741fe"
  },
  {
    "url": "views/docker/introduction.html",
    "revision": "09893cc3bae6b524c1acd7dbc8ebb993"
  },
  {
    "url": "views/docker/reference.html",
    "revision": "666568f99478d1586e819c881f30a980"
  },
  {
    "url": "views/index.html",
    "revision": "155ee9d4add8556097aee08c4559dd4e"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "a1613e3e00cb66b237af6d43374c9964"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "c12a26e5bcec1bdccc20060f34769091"
  },
  {
    "url": "views/ops/frp/use.html",
    "revision": "0a68c90a506ebc37b53771d14fc95222"
  },
  {
    "url": "views/ops/SGE/introdution.html",
    "revision": "20b794ca13ffb3296e3007a877c53c4b"
  },
  {
    "url": "views/ops/SGE/use.html",
    "revision": "b99ed4c4b0a42d80ac8081bd6ba63e0d"
  },
  {
    "url": "views/ops/someproblem/installDisk.html",
    "revision": "f1a2b88638d89208aa9bdff00d74adef"
  },
  {
    "url": "views/ops/someproblem/network.html",
    "revision": "776524785c26880c5056fba6e5f194a2"
  },
  {
    "url": "views/singularity/simpleUse.html",
    "revision": "074ad92536be760189d01d02cf0173c7"
  },
  {
    "url": "views/software/busco.html",
    "revision": "0862e5dbbf80596af2d1fbe22200fc4e"
  },
  {
    "url": "views/software/hic.html",
    "revision": "5b346697b9e62fa13a0fc19a5431ae69"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "430cbc74a85db749b90f59b72fbe9bd9"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "a621bffd0066671bf9240bc7e2d20bb1"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "5f26d762fd5a154a9aa2e82eb2da66dd"
  },
  {
    "url": "views/webProgram/practise/example1.html",
    "revision": "ea7a5179e4d892e2a6eaa029df1f6afe"
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
