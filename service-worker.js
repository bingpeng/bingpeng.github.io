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
    "url": "assets/css/0.styles.1c1be374.css",
    "revision": "b2ffb0a96fb26ca8b4df42e93df98357"
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
    "url": "assets/js/24.095abe6c.js",
    "revision": "c9c9f77310dd49bfdb7b03894a0808b1"
  },
  {
    "url": "assets/js/25.e0eab211.js",
    "revision": "21c72d5007b27fd95c11173b4db194e4"
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
    "url": "assets/js/28.7d270d54.js",
    "revision": "4b9d6809d974dd02717fdf810a324f4f"
  },
  {
    "url": "assets/js/29.ea4fb70b.js",
    "revision": "ea02f5cc4c88c151ecebfa19b5a31f21"
  },
  {
    "url": "assets/js/30.55e795ea.js",
    "revision": "ef31677bd3cc936ce7647d30fedca86d"
  },
  {
    "url": "assets/js/31.1b46013e.js",
    "revision": "4d5faa62adbf35ef665ab20bbc1cf2d5"
  },
  {
    "url": "assets/js/32.6437a7d8.js",
    "revision": "1724f97afbf417883cf2557bfbdf9664"
  },
  {
    "url": "assets/js/33.238a0452.js",
    "revision": "e92fd25d925a75f6ff406aefe95129b8"
  },
  {
    "url": "assets/js/34.76ee2c47.js",
    "revision": "53acad0d790d1de977f12f26a833905a"
  },
  {
    "url": "assets/js/35.0aa9c85d.js",
    "revision": "76a7dcb291a6d56d1054740e4037a55d"
  },
  {
    "url": "assets/js/36.6a4fedb3.js",
    "revision": "1dc24c8501f6e36a1666e1044a81c344"
  },
  {
    "url": "assets/js/37.f5c382d8.js",
    "revision": "b6ef2ab75c275ec5fe62c6593acb8598"
  },
  {
    "url": "assets/js/38.97cf4c2c.js",
    "revision": "f0aa8b800c84ef2ea3bcd2d8968eb9a6"
  },
  {
    "url": "assets/js/39.045ac8ce.js",
    "revision": "460a4c6a4d26df49e2e4421a7ddb9377"
  },
  {
    "url": "assets/js/40.2bed91a5.js",
    "revision": "3facb96cf5c4322faea7de02152430c3"
  },
  {
    "url": "assets/js/41.d2f1e833.js",
    "revision": "03e2f3172228e1805a3be7d9064a48b7"
  },
  {
    "url": "assets/js/42.a3f17273.js",
    "revision": "9b0eddab3c8728682032a447a5944b68"
  },
  {
    "url": "assets/js/43.fdac8989.js",
    "revision": "b98087fca7f6f4a4ff6c910b3b42a9af"
  },
  {
    "url": "assets/js/44.f8510a17.js",
    "revision": "40c449a341163b94f695bfb000b10228"
  },
  {
    "url": "assets/js/45.3c0b86a2.js",
    "revision": "1db5d218b03b4107d3991fb8755dd7f7"
  },
  {
    "url": "assets/js/46.91067d44.js",
    "revision": "024acd5c2a9d71c39a01e95292e86558"
  },
  {
    "url": "assets/js/47.85982b09.js",
    "revision": "c7c00ec24b0baec66443ca64f7f5f3ec"
  },
  {
    "url": "assets/js/48.7d54833d.js",
    "revision": "cb6de55ea32145bea479374fb2a79f8c"
  },
  {
    "url": "assets/js/49.768fa959.js",
    "revision": "29960e1987afac17781dcdf0ec862f52"
  },
  {
    "url": "assets/js/5.f650fde1.js",
    "revision": "afb090cba0a14f42f570ea9e528d124e"
  },
  {
    "url": "assets/js/50.5ff88916.js",
    "revision": "761ca7993708db11b57fb0627ef4743d"
  },
  {
    "url": "assets/js/51.5b700d6e.js",
    "revision": "f5c2fc30655bc09a5e18c526551a2c49"
  },
  {
    "url": "assets/js/52.9ae93d0b.js",
    "revision": "0283829e9a4247d25cd360380a8276e4"
  },
  {
    "url": "assets/js/53.59bbbdfc.js",
    "revision": "eed6080a1ff8c643169d85316159e87b"
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
    "url": "assets/js/56.a5c6e136.js",
    "revision": "c6bc03fe2c70c056d438572921b1d8b3"
  },
  {
    "url": "assets/js/57.baba28d4.js",
    "revision": "1da851781e2b3d46d5f900ce0a65a4e6"
  },
  {
    "url": "assets/js/58.4816fd6d.js",
    "revision": "a433527d820c0a5098c8e16926c6960c"
  },
  {
    "url": "assets/js/59.0057045a.js",
    "revision": "7faf10036155c33c8b670a5bd63d01dc"
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
    "url": "assets/js/app.e504ce13.js",
    "revision": "b84100cb2cc893f1bce8f9e042cf4d73"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "18108e6915e393814e057fed9bd00a4c"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "bb53efc9d59191209d2c2d831a34b9b3"
  },
  {
    "url": "categories/web编程/index.html",
    "revision": "723df5c7b0da72a97e3ee01e4a65174e"
  },
  {
    "url": "categories/容器技术/index.html",
    "revision": "a2ee9d26be449f734c88858ea6c7945a"
  },
  {
    "url": "categories/服务器运维/index.html",
    "revision": "233d049bf39e5951071c3ab6d407bf48"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "042e9963b0919dc4c100be5c1c734e0c"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "85ef06a8bc724ab20188cea78f000e76"
  },
  {
    "url": "categories/编程语言/page/2/index.html",
    "revision": "37c1a48a8e8cfa567c3ec6f4735e09f4"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "436ef2a52cf024056f7bd7f1bb7cca92"
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
    "revision": "a4685845bb1ad680d4197c14c8c2c3cc"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "99ef7a59dea6fd82b5e1c602aaa3a04c"
  },
  {
    "url": "other/project.html",
    "revision": "0c898747f8c0e63bcbb7b020af19e179"
  },
  {
    "url": "tag/index.html",
    "revision": "c54f54ce3f510b7de7813dbb2bfc05d3"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "26cded219de0a192de42090adfc52845"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "8be63cb76b6c67d1192c13c37686b18c"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "48489e0c293f5c27af029aa7ebd22f54"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "4a94ca52ef93b5efdc6be9e733d24feb"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "5b979469d284088586ff1beb07b39d79"
  },
  {
    "url": "tags/docker container/index.html",
    "revision": "1933be8a54ab6a3f06c778c6b2ab9904"
  },
  {
    "url": "tags/docker image/index.html",
    "revision": "c34717c173162148f916f39cd6714924"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "96d2cfefab240df38b9ce51958a774ce"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "0b4bb47bc8d13a93ebaaf8f369291bc9"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "24306a8fccc7d13e1c1c9d3a00a4cdfd"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "7e08f6196b9615e8060e97806c6a39c7"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "be3d4fafa9ef6b710dab168a5dbc52ef"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "08d7e338931ec8b21f5f2d599f906ad6"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "1a6ba323b1ecb4c4660ae68ab29003ea"
  },
  {
    "url": "tags/ops/index.html",
    "revision": "f228b604b6723913ca920b10e4a7518c"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "6b99958f27fd1de6970d0e708591ca15"
  },
  {
    "url": "tags/python/index.html",
    "revision": "00d2d918a89cbfea0b38bc6d7ec01b2a"
  },
  {
    "url": "tags/R/index.html",
    "revision": "d49e054c7eada493ad761e3c2b4b9b46"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "182c792af014244ae41a437bc2dcdbc4"
  },
  {
    "url": "tags/singularity/index.html",
    "revision": "346a4f006386211573e55fdea94e60d1"
  },
  {
    "url": "tags/SQL/index.html",
    "revision": "851f7a3513e907ab2d9481ceefb83157"
  },
  {
    "url": "tags/web programming/index.html",
    "revision": "89689fa340e216c9beb9454324ae7124"
  },
  {
    "url": "timeline/index.html",
    "revision": "f75aa78b3797757d8cf6742f827f77c1"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "d5c6325a4d8a5af2f251f18ebe86b332"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "93f4cb8b0670e76d288dd56dc0e65663"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "0178ea481d98389cc91aa877259183e3"
  },
  {
    "url": "views/codeLanguage/python/reference.html",
    "revision": "50d8ddbd0259e09140384536e88b2c83"
  },
  {
    "url": "views/codeLanguage/R/programControl.html",
    "revision": "42c1616af56c7c6b30eca75a8956923b"
  },
  {
    "url": "views/codeLanguage/R/reference.html",
    "revision": "41b8c6aca0c5cbbc66e1b475cc852991"
  },
  {
    "url": "views/codeLanguage/R/variant.html",
    "revision": "3147a866911aa41e3529f035db753bc4"
  },
  {
    "url": "views/codeLanguage/sql/install.html",
    "revision": "d2fd83c0cd96f45b577d4196f126169f"
  },
  {
    "url": "views/codeLanguage/sql/modified.html",
    "revision": "a026f25c47e7318aa8a6a761431140f6"
  },
  {
    "url": "views/codeLanguage/sql/python_sql.html",
    "revision": "0fad2188c349deb823b81cfe1e2f75f8"
  },
  {
    "url": "views/codeLanguage/sql/reference.html",
    "revision": "b8298302d9aae29d9fb8bfd5efa2f79c"
  },
  {
    "url": "views/codeLanguage/sql/relation_model.html",
    "revision": "fd64d211536823308bf2c8a0e9172cf8"
  },
  {
    "url": "views/codeLanguage/sql/select.html",
    "revision": "6e35744310cc6f92a4494765f764871d"
  },
  {
    "url": "views/docker/buildImage.html",
    "revision": "0be606614a4a70678b546da68785bf14"
  },
  {
    "url": "views/docker/container.html",
    "revision": "7d93c95f325101fd91a6699e9cc5e78b"
  },
  {
    "url": "views/docker/dataMount.html",
    "revision": "629afa8f6213dc0e19b2598282467f8b"
  },
  {
    "url": "views/docker/docker_compose.html",
    "revision": "f6b248dbf48759975fa751f1d08e4ac8"
  },
  {
    "url": "views/docker/image.html",
    "revision": "2214f1a373f041aae9a5718c5b0ceaff"
  },
  {
    "url": "views/docker/introduction.html",
    "revision": "a706a5de1aaa0abee4b22c2f618199ac"
  },
  {
    "url": "views/docker/reference.html",
    "revision": "d33a7c052e5802bb250d32e60d84455c"
  },
  {
    "url": "views/index.html",
    "revision": "d52692f9d8e94444b1e5d55b2f6b3e4d"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "d04b5b732d35037e1ce1614175ba8fec"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "313083fb03ca528ccc7c2c9a18a29ad5"
  },
  {
    "url": "views/ops/frp/use.html",
    "revision": "3fdd0b8dbb6f31d721285a2f60000b55"
  },
  {
    "url": "views/ops/SGE/introdution.html",
    "revision": "be77a9ac60dba537d56ed2c3389676b5"
  },
  {
    "url": "views/ops/SGE/use.html",
    "revision": "512f0b5415cd92083667bd0a2a980108"
  },
  {
    "url": "views/ops/someproblem/installDisk.html",
    "revision": "e48ea6870fdac9eed4cf5908e84da15a"
  },
  {
    "url": "views/ops/someproblem/network.html",
    "revision": "ced65304dddbae3e93eff5785d9a86b5"
  },
  {
    "url": "views/singularity/simpleUse.html",
    "revision": "305963d54cf72283c9f3b098b1b80668"
  },
  {
    "url": "views/software/busco.html",
    "revision": "62b7384da3b3c9a52d34de2f5b71f8fe"
  },
  {
    "url": "views/software/hic.html",
    "revision": "d70985f39d1dd0da370ab8657cf055bc"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "84913914bb37948e453edb16c75148d4"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "4f63f296aba01b88d0929f363c4599ed"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "a3cbcd5c1060f9d0dc9a3a158a213b86"
  },
  {
    "url": "views/webProgram/practise/example1.html",
    "revision": "1ee6232f7b71f8d85c3de8c9db6ab630"
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
