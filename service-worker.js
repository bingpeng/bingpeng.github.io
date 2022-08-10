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
    "url": "assets/js/26.6872ca11.js",
    "revision": "8dc27be1f96faaa79bdf701ce53c7d20"
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
    "url": "assets/js/29.ea4fb70b.js",
    "revision": "ea02f5cc4c88c151ecebfa19b5a31f21"
  },
  {
    "url": "assets/js/30.08480a70.js",
    "revision": "cbd3139cb704fdece58b8e408aae998f"
  },
  {
    "url": "assets/js/31.75f0ee1c.js",
    "revision": "1666c3dded6a37137810075dc07c7a8a"
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
    "url": "assets/js/34.74501f69.js",
    "revision": "ac8bfaeca152dee63988262ad15ebe3b"
  },
  {
    "url": "assets/js/35.a72ec9c2.js",
    "revision": "605319627bb73c24e56973bc21a09862"
  },
  {
    "url": "assets/js/36.073868c4.js",
    "revision": "215fc1e21e3268c2c13152e8d076f025"
  },
  {
    "url": "assets/js/37.d77b3842.js",
    "revision": "b02b6390b789861fbde4edd4763202cd"
  },
  {
    "url": "assets/js/38.97cf4c2c.js",
    "revision": "f0aa8b800c84ef2ea3bcd2d8968eb9a6"
  },
  {
    "url": "assets/js/39.26edc71c.js",
    "revision": "1095068291ee2eadc0e6ba042d563fa2"
  },
  {
    "url": "assets/js/40.8dc924ae.js",
    "revision": "32710e99bba86fbb0177269178741bb1"
  },
  {
    "url": "assets/js/41.90ade7eb.js",
    "revision": "665c2f1e393cf857a368757f54ac2633"
  },
  {
    "url": "assets/js/42.d81e96d7.js",
    "revision": "095a8e16cdb5cb225c9ae823f3b7304d"
  },
  {
    "url": "assets/js/43.bdaa3bdd.js",
    "revision": "e8755816f10df8d435a1173178d58a1e"
  },
  {
    "url": "assets/js/44.07084c91.js",
    "revision": "3209ec8070d852760aa8479d765bbf40"
  },
  {
    "url": "assets/js/45.3c0b86a2.js",
    "revision": "1db5d218b03b4107d3991fb8755dd7f7"
  },
  {
    "url": "assets/js/46.4640d46b.js",
    "revision": "b04648968944d0107affed314207e24a"
  },
  {
    "url": "assets/js/47.2bd17152.js",
    "revision": "a6a48209bc2bccfbca903b6b7aad7f89"
  },
  {
    "url": "assets/js/48.a198bc7d.js",
    "revision": "ec2b9be61e26592c92b45d859118bdf3"
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
    "url": "assets/js/50.eb448c40.js",
    "revision": "ece9850757ba209e9e3c474c2b60e38f"
  },
  {
    "url": "assets/js/51.bdd61606.js",
    "revision": "eea5f3a03d210448944ebeccfd320d3f"
  },
  {
    "url": "assets/js/52.e4349490.js",
    "revision": "19a9ae63ccfb708349846c8e14e14adb"
  },
  {
    "url": "assets/js/53.4c9bf5da.js",
    "revision": "d37b8ed2ede2c1cfabc5d31382595dca"
  },
  {
    "url": "assets/js/54.72561114.js",
    "revision": "f0e4d593101e8e25f10d653dd6e5f4f9"
  },
  {
    "url": "assets/js/55.d1a51984.js",
    "revision": "f1a21d5d1318280e7e7e3cf34b8b12f3"
  },
  {
    "url": "assets/js/56.cdf2cb93.js",
    "revision": "eb2750dc99032d8ff5558b61883389d1"
  },
  {
    "url": "assets/js/57.0a4b482c.js",
    "revision": "a354361458d7045c2e271ce7e07cdac6"
  },
  {
    "url": "assets/js/58.4816fd6d.js",
    "revision": "a433527d820c0a5098c8e16926c6960c"
  },
  {
    "url": "assets/js/59.4143e294.js",
    "revision": "24e37f3c23e19c19ccd00ba380d825d9"
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
    "url": "assets/js/app.4f6395ff.js",
    "revision": "486af412b3ceaf45db9a6a7f6ab59ee2"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "33b5cf620765b34baa578b525010993e"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "a3c4f3494c501d08da32d0a1b2259bbd"
  },
  {
    "url": "categories/web编程/index.html",
    "revision": "e025c4b4cd1b2ced950525c3599a80c9"
  },
  {
    "url": "categories/容器技术/index.html",
    "revision": "625638426305892f37da260e0966d4a2"
  },
  {
    "url": "categories/服务器运维/index.html",
    "revision": "7b406848764f8ca1cb36d87335b98966"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "ba79e550a5aab7cf62a2ec19da0f5c41"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "449bc238e2f67888c56847934aff1749"
  },
  {
    "url": "categories/编程语言/page/2/index.html",
    "revision": "0036419592d6bd0397fad50e8001c574"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "0efee7c7701f562ea2131d83583aef68"
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
    "revision": "d77d50225a8eab63afa231c73de08694"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "b8ca29867bc0c3dd741aaafa722ad8b2"
  },
  {
    "url": "other/project.html",
    "revision": "b5fcecda08751e7be776bc91e30cf3f4"
  },
  {
    "url": "tag/index.html",
    "revision": "d618c361bdaa3c5f61339e451cef45be"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "db980e701e301a3a51d363829ff82fdd"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "f0fa19ab57eaab2ce49a61e9615a5881"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "6304b9f1cafc1edacc3b40f06d8a614f"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "f02e3d496e96e0aa12952403d765f26e"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "2b1765aede789bf03a13641ea4b60365"
  },
  {
    "url": "tags/docker container/index.html",
    "revision": "568cd12258795ab0f58b542c6768eeca"
  },
  {
    "url": "tags/docker image/index.html",
    "revision": "08fc4db15ccffe8ee4f30a46e72539aa"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "c30df4d9f0258c2e618dc35ce769caca"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "066cce5d2a1159b723dcf5f17aa664ae"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "b96634658e3c0af163b573edf98b53ff"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "3604ab49f5b29371e1a2687b195fdc17"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "f45aa3912be3bf25e44812f5768743cd"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "9490c21e657759af19e461ca19881e3d"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "ed6a334942d7a1f35af85faab572754a"
  },
  {
    "url": "tags/ops/index.html",
    "revision": "bd52787d7ec1c49481157bdf6937e8a3"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "229cbce48fb0cdcc98a680ebfdca6182"
  },
  {
    "url": "tags/python/index.html",
    "revision": "ca354d0b712b0268cbac0e40aabc0180"
  },
  {
    "url": "tags/R/index.html",
    "revision": "fabf363cfd505290e9e914589ce69093"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "ff4c80587b984d2cb3ef2c087850396d"
  },
  {
    "url": "tags/singularity/index.html",
    "revision": "2b13a9f2327238fa64a784d63e8f8312"
  },
  {
    "url": "tags/SQL/index.html",
    "revision": "dcda7d12a88492fb660a9657bc95fcd8"
  },
  {
    "url": "tags/web programming/index.html",
    "revision": "4ab6f69217d65b4203977b86c93b7f9a"
  },
  {
    "url": "timeline/index.html",
    "revision": "4d29150fdec149c8a46b05d9f1687044"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "2fb9648416bf37d85fa5e2f8085d4b5f"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "e420265738b4129ac19ca04ad6b8274a"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "e01b82857e6a4ac80f1c2ef56bed01ae"
  },
  {
    "url": "views/codeLanguage/python/reference.html",
    "revision": "f72d1029bdbf00e9cef8f415e3aa0348"
  },
  {
    "url": "views/codeLanguage/R/programControl.html",
    "revision": "5da26580aa8478e41b70d0b84d8397af"
  },
  {
    "url": "views/codeLanguage/R/reference.html",
    "revision": "8174b97ae813b3fe7562f9cdd0271fae"
  },
  {
    "url": "views/codeLanguage/R/variant.html",
    "revision": "d76028872cb9a0e231834110009fc75e"
  },
  {
    "url": "views/codeLanguage/sql/install.html",
    "revision": "8a54644f2875992fe6401d4059462f8a"
  },
  {
    "url": "views/codeLanguage/sql/modified.html",
    "revision": "a4568de71d5993b60516b5fe9cee8e88"
  },
  {
    "url": "views/codeLanguage/sql/python_sql.html",
    "revision": "38d14def741b7d5c2f85db0ebbc81b6d"
  },
  {
    "url": "views/codeLanguage/sql/reference.html",
    "revision": "66016e962febf0aa6493dcb901b2044f"
  },
  {
    "url": "views/codeLanguage/sql/relation_model.html",
    "revision": "47ca0d648c1f3b3b212ae0ec375cbafb"
  },
  {
    "url": "views/codeLanguage/sql/select.html",
    "revision": "d7cabca14344d071c3cbf338c22c2ae7"
  },
  {
    "url": "views/docker/buildImage.html",
    "revision": "edd0d11ea6a55cb5f18547c6bcb2a4e5"
  },
  {
    "url": "views/docker/container.html",
    "revision": "52ff8bdc49b65eb511f8236ba3218a94"
  },
  {
    "url": "views/docker/dataMount.html",
    "revision": "c2ebb562ae63df3b9f5ca310e485734f"
  },
  {
    "url": "views/docker/docker_compose.html",
    "revision": "a9367e3f5f3e9a7247b286af5114fabf"
  },
  {
    "url": "views/docker/image.html",
    "revision": "fecf2cf79d7cd17c7fefbb4550995f80"
  },
  {
    "url": "views/docker/introduction.html",
    "revision": "8affc4b3055e390f5ff3622307f3be3e"
  },
  {
    "url": "views/docker/reference.html",
    "revision": "ddcf924c1a38beaf5889e8e936622e60"
  },
  {
    "url": "views/index.html",
    "revision": "6d697edcea69d0444ae1c999bed548d7"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "8e4052d678132e08e6bc7ee4b8bae03c"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "17c15937edac285f5627a68972cc367f"
  },
  {
    "url": "views/ops/frp/use.html",
    "revision": "3ca966ecec617e84fdb7cf0bc33b3283"
  },
  {
    "url": "views/ops/SGE/introdution.html",
    "revision": "e98801af5a06c589c045f9c84d5e37d2"
  },
  {
    "url": "views/ops/SGE/use.html",
    "revision": "96d2273556409707bd9804f214712b51"
  },
  {
    "url": "views/ops/someproblem/installDisk.html",
    "revision": "86cdbcc095ee3e7449ce8cd77b1d9bb9"
  },
  {
    "url": "views/ops/someproblem/network.html",
    "revision": "7e130e6acc7fbf2fb09a6b880631765a"
  },
  {
    "url": "views/singularity/simpleUse.html",
    "revision": "a8d1b916d6a186a111cfcea767037b63"
  },
  {
    "url": "views/software/busco.html",
    "revision": "fa8ed7582621e5fdf58332b896251405"
  },
  {
    "url": "views/software/hic.html",
    "revision": "142bb36571a8f19d50a3393c42b319d5"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "5928f3c7940e12494a6ef4df4d7a1c93"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "d47f566ad50fcb74fca742a085e85f81"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "0edf6c65af3709fd18063180df2e21b1"
  },
  {
    "url": "views/webProgram/practise/example1.html",
    "revision": "4d2294fa097d283472a3723c6755477a"
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
