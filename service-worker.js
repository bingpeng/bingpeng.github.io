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
    "url": "assets/css/0.styles.f9c7425e.css",
    "revision": "a360d72998b6fcc85d5af43211b924ea"
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
    "url": "assets/js/26.91867cab.js",
    "revision": "7bf3300b9a6baf49044f0281bdb9077f"
  },
  {
    "url": "assets/js/27.a25b6538.js",
    "revision": "ed76b35e2da7db54d2e86f0a2595ff02"
  },
  {
    "url": "assets/js/28.41c7f661.js",
    "revision": "2c8992a54bbc0d2c2abb74a1f0368491"
  },
  {
    "url": "assets/js/29.e32d502c.js",
    "revision": "951762e950dde68d6d6ffff86e415774"
  },
  {
    "url": "assets/js/30.44b9648c.js",
    "revision": "ca5ce222325364caa628eaf4316fcbcb"
  },
  {
    "url": "assets/js/31.b95909fe.js",
    "revision": "626e242fe2f12420fd9adeb3532c6e44"
  },
  {
    "url": "assets/js/32.6437a7d8.js",
    "revision": "1724f97afbf417883cf2557bfbdf9664"
  },
  {
    "url": "assets/js/33.9b08b36c.js",
    "revision": "bdb66d077717efbecdc9cc5fdbf1ea6d"
  },
  {
    "url": "assets/js/34.1a52a537.js",
    "revision": "a28d22acbb887aaa0da582451c507dc1"
  },
  {
    "url": "assets/js/35.2a0d6416.js",
    "revision": "136e8dcfa0d42e9212288975e501f7c4"
  },
  {
    "url": "assets/js/36.6a0e6c2b.js",
    "revision": "a9427ecc853467e6584fa475e515418a"
  },
  {
    "url": "assets/js/37.d77b3842.js",
    "revision": "b02b6390b789861fbde4edd4763202cd"
  },
  {
    "url": "assets/js/38.b71f7c2d.js",
    "revision": "1a212ca90a070d74cd26e1a3f0a6c2f5"
  },
  {
    "url": "assets/js/39.045ac8ce.js",
    "revision": "460a4c6a4d26df49e2e4421a7ddb9377"
  },
  {
    "url": "assets/js/40.51249eca.js",
    "revision": "56539c27c9829d4eab9fc18a3185cfaa"
  },
  {
    "url": "assets/js/41.d2f1e833.js",
    "revision": "03e2f3172228e1805a3be7d9064a48b7"
  },
  {
    "url": "assets/js/42.43322864.js",
    "revision": "ad1580b0e0effffc9541afb4861bf783"
  },
  {
    "url": "assets/js/43.fdac8989.js",
    "revision": "b98087fca7f6f4a4ff6c910b3b42a9af"
  },
  {
    "url": "assets/js/44.7586730b.js",
    "revision": "b8f66ea06a820c9a94d06189b77e876b"
  },
  {
    "url": "assets/js/45.5d745b76.js",
    "revision": "1d242fd4be35fe768f5b00a4c88ceac3"
  },
  {
    "url": "assets/js/46.e597d39a.js",
    "revision": "70b0d50959ff68c9c38d8096d21848d0"
  },
  {
    "url": "assets/js/47.db2013e5.js",
    "revision": "1cf998c66a5959a2f638c327682bde9c"
  },
  {
    "url": "assets/js/48.a198bc7d.js",
    "revision": "ec2b9be61e26592c92b45d859118bdf3"
  },
  {
    "url": "assets/js/49.2d50e82c.js",
    "revision": "97c3fa5187bd5728aa05938688536551"
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
    "url": "assets/js/52.679b0acf.js",
    "revision": "f5abc1d093fe7bcbc4e39828df7486de"
  },
  {
    "url": "assets/js/53.92145add.js",
    "revision": "cc08494542b0fc2f04952620c9fb99c9"
  },
  {
    "url": "assets/js/54.a442ab10.js",
    "revision": "34b776b3aa2f4736aecc285386532f20"
  },
  {
    "url": "assets/js/55.fe0c8dc4.js",
    "revision": "dfd55350129fe83c7370c9e95f29c1e0"
  },
  {
    "url": "assets/js/56.bfc72c0c.js",
    "revision": "b9ef7b0aa7e6402b09238b38a5952169"
  },
  {
    "url": "assets/js/57.6adf9146.js",
    "revision": "a43b2ccb2f624bd34a0fd76c38e49807"
  },
  {
    "url": "assets/js/58.2ad8e2f7.js",
    "revision": "71a33565efb9412fbc318d3bd0926922"
  },
  {
    "url": "assets/js/59.1a38f750.js",
    "revision": "e008b7e30aad2383756a6961990f4533"
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
    "url": "assets/js/app.ddb89d08.js",
    "revision": "e680e33cc1a25c433e07e6fe04b56a42"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "fe0b67fcb8706d43290ae0cc5bedfa51"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "a509657e1c3b66c0714e844731c0cb75"
  },
  {
    "url": "categories/web编程/index.html",
    "revision": "6ffc6c53f0d0a0594ca1da9486ac614e"
  },
  {
    "url": "categories/容器技术/index.html",
    "revision": "cc1938c6d6914d10bd9e6fdcf7a0ec64"
  },
  {
    "url": "categories/服务器运维/index.html",
    "revision": "fd5f95f1eeb59339352974136b6abbd3"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "093be958a27fa2ffab3a916f9b58bb2f"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "ea2e92a1cfbd7aabded36707bfd57fb7"
  },
  {
    "url": "categories/编程语言/page/2/index.html",
    "revision": "910493b864034be7a83528f382a155a9"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "e4a1c67795dbff6367859ebb51ad9fbc"
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
    "revision": "7aa655b089361970690dbee6cabeff27"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "6fa3a27ce79a23c193915b6ee7a5002d"
  },
  {
    "url": "other/project.html",
    "revision": "deec09ee018a9fe40d4200df1e1f3e05"
  },
  {
    "url": "tag/index.html",
    "revision": "e9d9f942e08f4d7c0f08290dbf22730e"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "9d224431623d21eb5397a4dc89b4777d"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "72a84dcfa8f4953dcc1f820ddc6bed96"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "d712b5afc5e3263b3e7ade47b3605960"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "090e6e757d54d2e4ae36f6503401c090"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "492b18ce2f33ebcba0f19df60f7b2ee1"
  },
  {
    "url": "tags/docker container/index.html",
    "revision": "7516b8149f9d3d679b3b14db47648427"
  },
  {
    "url": "tags/docker image/index.html",
    "revision": "583f4dd06b53184186f2a6382f2147b3"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "09ad05bb41430c23f7d78e842aff6b77"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "a93f2b8f4efa4c3dbcd899f499f7280a"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "0a345dbc72a26ad9b707438effff0b55"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "b6c33185152ffb575909d03d60c09cd4"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "5c98bf02b2f8003c516b2fc9785535aa"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "a781684a151a4b3558599a0ee0625c2d"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "759441186ad1b8ee3e6f97bfbd7b3f82"
  },
  {
    "url": "tags/ops/index.html",
    "revision": "93430a2ee6bba07e59c0cc11a432f55c"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "4dff208a8bce62728c46fce045419d7c"
  },
  {
    "url": "tags/python/index.html",
    "revision": "d2c780c4db83352e051d72aeb6a95f66"
  },
  {
    "url": "tags/R/index.html",
    "revision": "bb2c6e570003360437ebb0c43b64159c"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "259a51179c82f9b38fc1495b420ba461"
  },
  {
    "url": "tags/singularity/index.html",
    "revision": "3df60518ae27e236faf8728358fba769"
  },
  {
    "url": "tags/SQL/index.html",
    "revision": "25f7a78198d676c499c1f96ae099eecc"
  },
  {
    "url": "tags/web programming/index.html",
    "revision": "5b739b82d4b1e9d79828048b85057edc"
  },
  {
    "url": "timeline/index.html",
    "revision": "d5fe69c5416bf88195f3b44cdba97115"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "76ce57cb09d074a4d2145161ff8b64bc"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "2d9bc600fc6a988031643e4e7c204141"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "87c35097efabeba1bbd60e526d3afbc1"
  },
  {
    "url": "views/codeLanguage/python/reference.html",
    "revision": "3c59deedc949d308fa124db3cd7a8497"
  },
  {
    "url": "views/codeLanguage/R/programControl.html",
    "revision": "9a48b366fc6a1305a5490fe251dd5dac"
  },
  {
    "url": "views/codeLanguage/R/reference.html",
    "revision": "b10f209b33f0f63f28320b516ca71685"
  },
  {
    "url": "views/codeLanguage/R/variant.html",
    "revision": "e31af5fd5e0f91c1a7a734492348d724"
  },
  {
    "url": "views/codeLanguage/sql/install.html",
    "revision": "3d41e5d37601fa192001b48c89f710ef"
  },
  {
    "url": "views/codeLanguage/sql/modified.html",
    "revision": "b4c05dbbdc85a8c855388d981e5671d4"
  },
  {
    "url": "views/codeLanguage/sql/python_sql.html",
    "revision": "501f01134d484f689219120fc9e331bf"
  },
  {
    "url": "views/codeLanguage/sql/reference.html",
    "revision": "2c9a14df9446cc2d66b1c9a131c61d7d"
  },
  {
    "url": "views/codeLanguage/sql/relation_model.html",
    "revision": "d152b9ab4e5abb5722f06318a4cb1aa7"
  },
  {
    "url": "views/codeLanguage/sql/select.html",
    "revision": "2eb3b4078ec55f089ecce76e949c7eb7"
  },
  {
    "url": "views/docker/buildImage.html",
    "revision": "19cb9bde1f9685e78f020900e3c08605"
  },
  {
    "url": "views/docker/container.html",
    "revision": "f03278d67d5e0ffbcc760915915188d5"
  },
  {
    "url": "views/docker/dataMount.html",
    "revision": "5524f143b5a8c84bbacd048937caa2fd"
  },
  {
    "url": "views/docker/docker_compose.html",
    "revision": "ad94c3590f38c7901ec74a41b5f79c86"
  },
  {
    "url": "views/docker/image.html",
    "revision": "1b94905c2e9b965df8a0c93af17c4351"
  },
  {
    "url": "views/docker/introduction.html",
    "revision": "2df6076ed1991abe038393a01eb1332c"
  },
  {
    "url": "views/docker/reference.html",
    "revision": "81bd305255a2b778245857ca79afbe0c"
  },
  {
    "url": "views/index.html",
    "revision": "e6f2b886c96940ddcc241f3c537f9acd"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "d58bf415377bc0296e7713225a8c86de"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "4b9824021a6ca890fcf526591d6a506f"
  },
  {
    "url": "views/ops/frp/use.html",
    "revision": "da4214a11b3e8fe9e35d171ba943ff76"
  },
  {
    "url": "views/ops/SGE/introdution.html",
    "revision": "74229a3ccdcc78fa1fbafc2432aa726f"
  },
  {
    "url": "views/ops/SGE/use.html",
    "revision": "911bcbb550a0f933010c1c4e5e64d593"
  },
  {
    "url": "views/ops/someproblem/installDisk.html",
    "revision": "757dbb632225639f1a6fff9448178587"
  },
  {
    "url": "views/ops/someproblem/network.html",
    "revision": "1769d28dc1987a5efd6424e5e27fa6c8"
  },
  {
    "url": "views/singularity/simpleUse.html",
    "revision": "3833f939f1e9691753aa56ecc02f89c9"
  },
  {
    "url": "views/software/busco.html",
    "revision": "7b3b8d8b20bc68b8e89c0d9350567fb3"
  },
  {
    "url": "views/software/hic.html",
    "revision": "5357667e304a3a7fef1dd23427b62c15"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "1408cc6c93f88a84ecf27567687b636b"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "3cc07282c543b5f4ba695f06c224ca1d"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "36369ff4447cf76e40262c3cd7d1fcca"
  },
  {
    "url": "views/webProgram/practise/example1.html",
    "revision": "ba02791147403cf7bac7759b413e8176"
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
