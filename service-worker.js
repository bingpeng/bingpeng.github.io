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
    "url": "assets/css/0.styles.7babf124.css",
    "revision": "45d6535ceff7135c2ec990caddeb9eb6"
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
    "url": "assets/js/26.b9d4f057.js",
    "revision": "466540168d362c223ec95bb22f65a574"
  },
  {
    "url": "assets/js/27.a07e1e56.js",
    "revision": "7e5924441429d6aa36d2561fb897a5b3"
  },
  {
    "url": "assets/js/28.7d270d54.js",
    "revision": "4b9d6809d974dd02717fdf810a324f4f"
  },
  {
    "url": "assets/js/29.3c473b9c.js",
    "revision": "166f34045b2d8fd68303cb1fd02feb9e"
  },
  {
    "url": "assets/js/30.55e795ea.js",
    "revision": "ef31677bd3cc936ce7647d30fedca86d"
  },
  {
    "url": "assets/js/31.70ef1600.js",
    "revision": "ef6df532ff82116675be9553c777f2d6"
  },
  {
    "url": "assets/js/32.6437a7d8.js",
    "revision": "1724f97afbf417883cf2557bfbdf9664"
  },
  {
    "url": "assets/js/33.e024f8b3.js",
    "revision": "f9b9eb84c15474fb61b4777f6a2cd1c1"
  },
  {
    "url": "assets/js/34.1a52a537.js",
    "revision": "a28d22acbb887aaa0da582451c507dc1"
  },
  {
    "url": "assets/js/35.48a747b7.js",
    "revision": "8779d2e110df2aaec5120b768a3cb5c4"
  },
  {
    "url": "assets/js/36.6a4fedb3.js",
    "revision": "1dc24c8501f6e36a1666e1044a81c344"
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
    "url": "assets/js/39.378c7b6d.js",
    "revision": "a2c36ccad35251b51c7330a5fba038d4"
  },
  {
    "url": "assets/js/40.8dc924ae.js",
    "revision": "32710e99bba86fbb0177269178741bb1"
  },
  {
    "url": "assets/js/41.6922b9a3.js",
    "revision": "53b4016ea87b3418043e95882f61bb7d"
  },
  {
    "url": "assets/js/42.cd3337ae.js",
    "revision": "4360569478cc9aceeaf838151465dd30"
  },
  {
    "url": "assets/js/43.fdac8989.js",
    "revision": "b98087fca7f6f4a4ff6c910b3b42a9af"
  },
  {
    "url": "assets/js/44.e28cd770.js",
    "revision": "b7e1d4565b53b4dc46212acf12c5ff6c"
  },
  {
    "url": "assets/js/45.5314f436.js",
    "revision": "f371c860dfbffa4f85c48baa3d3e81e0"
  },
  {
    "url": "assets/js/46.5d775261.js",
    "revision": "1422291597207656cbc516cf72085218"
  },
  {
    "url": "assets/js/47.323ff57e.js",
    "revision": "e1326a4235daf2e5bfb60932cbcacb74"
  },
  {
    "url": "assets/js/48.a198bc7d.js",
    "revision": "ec2b9be61e26592c92b45d859118bdf3"
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
    "url": "assets/js/54.27489f64.js",
    "revision": "eac0f5e10914f867413591a9f58b087d"
  },
  {
    "url": "assets/js/55.fe0c8dc4.js",
    "revision": "dfd55350129fe83c7370c9e95f29c1e0"
  },
  {
    "url": "assets/js/56.6c8ad8e0.js",
    "revision": "8876edf2474b63914b2a9e7b67a5889c"
  },
  {
    "url": "assets/js/57.2bfd5373.js",
    "revision": "22d43e9ddf359b58b417c1314e033006"
  },
  {
    "url": "assets/js/58.1fac07ec.js",
    "revision": "fd9a49c4cea3be5c82a81a644395b7af"
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
    "url": "assets/js/app.02e1ac85.js",
    "revision": "4455cd29c4c56d7895bcea15838ca2e4"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "015ba6c358a2683ea42e10bad47db25a"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "b9940748ac65f5847fd628a02c58b9b9"
  },
  {
    "url": "categories/web编程/index.html",
    "revision": "65e0267f5d2248f67683579a558d27bf"
  },
  {
    "url": "categories/容器技术/index.html",
    "revision": "3b9934f0b2143165db29f0fe843db140"
  },
  {
    "url": "categories/服务器运维/index.html",
    "revision": "9c47f3e34eafe460d48d681ee55c0e16"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "16db0e415bd7a7fd9a0266e1751608c0"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "c3ab295a53f968d53a1b8bac403e7997"
  },
  {
    "url": "categories/编程语言/page/2/index.html",
    "revision": "c6ef652dedd65a577d57466314dcad96"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "8b2a3a92f5e2804624168ab8e773728a"
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
    "revision": "b8d17e31cbe3b8f56ee86d65410710d3"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "db7a60678ee818401411b3a1436b392d"
  },
  {
    "url": "other/project.html",
    "revision": "ec8ee33e671fe2ca0704139aca58c5f9"
  },
  {
    "url": "tag/index.html",
    "revision": "ae602a9ea99b7775281c4e08091d6f72"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "eedc89745e3302b4d102cb4e958ca69b"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "595f87bb437aa77b54921956fab35b3c"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "7e36fa770cc8b005bc59153907c15492"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "3186a2634169ba15274731a6aa9ed329"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "4aabee7143347b3cdfb87b5e4c8750f4"
  },
  {
    "url": "tags/docker container/index.html",
    "revision": "027c9a86cd5085d8d9cef753d3e28b60"
  },
  {
    "url": "tags/docker image/index.html",
    "revision": "b4166a99a02eef2de108c209b66c118b"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "1821ee59f28037a56fe240680ba83320"
  },
  {
    "url": "tags/frp/index.html",
    "revision": "ec5163f5e9f5011b29c4c6a5d12e2c60"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "1fd6de3a7fc3f6b505d05c814199bc4d"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "617c096bab743fe64cd344eb985f12a4"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "bebe49ff0d910f20d0a1545975401aa2"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "6833d68d003a3357b360f01b11293e7b"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "997027b7bbb32fccdd1ecca80ba65488"
  },
  {
    "url": "tags/ops/index.html",
    "revision": "6a23e6be57734b15c9f3d6e259c85f26"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "cb72b84a052324307606f65a33d1748a"
  },
  {
    "url": "tags/python/index.html",
    "revision": "5219e146c7c283ba2ad9fa80c18f1170"
  },
  {
    "url": "tags/R/index.html",
    "revision": "2a1fed6b34c27a58752f24fd722b60e9"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "5b348d113533e9f5039c4c6e1b175ca9"
  },
  {
    "url": "tags/singularity/index.html",
    "revision": "88ff2c511a6de39310ef5266509b7663"
  },
  {
    "url": "tags/SQL/index.html",
    "revision": "5d43a8f9d5f9611f2be3a405c7512eef"
  },
  {
    "url": "tags/web programming/index.html",
    "revision": "3959517aab82003239d85df5a65a258a"
  },
  {
    "url": "timeline/index.html",
    "revision": "347175e078f4c4e0eab296719ee2c158"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "caa13e5dcfc2387249eec8f8940ae063"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "b4b4307dbe3b3a82f54b7395163f9952"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "e5e5d436edb66de7edbcbfe1f53f4d6e"
  },
  {
    "url": "views/codeLanguage/python/reference.html",
    "revision": "4176634529930146b0358af3a3d5de68"
  },
  {
    "url": "views/codeLanguage/R/programControl.html",
    "revision": "f99f894b40c98d259ce6f0f33ef8a3f5"
  },
  {
    "url": "views/codeLanguage/R/reference.html",
    "revision": "7e05709f23b3ddf9b16b8922914b63f0"
  },
  {
    "url": "views/codeLanguage/R/variant.html",
    "revision": "e55a451bb7cce816a78de2867d30b68a"
  },
  {
    "url": "views/codeLanguage/sql/install.html",
    "revision": "6c950fb53763dbb2e9f38efbd89ae808"
  },
  {
    "url": "views/codeLanguage/sql/modified.html",
    "revision": "78e63c2e9a00eae0072dd4a3d436584c"
  },
  {
    "url": "views/codeLanguage/sql/python_sql.html",
    "revision": "0645c81e1f8820857b7260e19c94c957"
  },
  {
    "url": "views/codeLanguage/sql/reference.html",
    "revision": "6c81cf074644e858509e689a90a63f80"
  },
  {
    "url": "views/codeLanguage/sql/relation_model.html",
    "revision": "681776ea17c240688bf208ca1d27fa33"
  },
  {
    "url": "views/codeLanguage/sql/select.html",
    "revision": "489a045900d88305666644b591e3615e"
  },
  {
    "url": "views/docker/buildImage.html",
    "revision": "af72bd596110bd8e635b784832e990c3"
  },
  {
    "url": "views/docker/container.html",
    "revision": "ab1ab94a57f76d5d83549225d21ec91b"
  },
  {
    "url": "views/docker/dataMount.html",
    "revision": "23c090ddb040e22fd43dc6c42c2a2dfb"
  },
  {
    "url": "views/docker/docker_compose.html",
    "revision": "01c6029a2741d16565df8770c9298936"
  },
  {
    "url": "views/docker/image.html",
    "revision": "6b9004cea456697380a15183da6a3cf8"
  },
  {
    "url": "views/docker/introduction.html",
    "revision": "c8d999496d458b6c4f0b23421c8dc144"
  },
  {
    "url": "views/docker/reference.html",
    "revision": "ddc47e191f70681b50688f72cc0e7d07"
  },
  {
    "url": "views/index.html",
    "revision": "627f0230115185f85c3b50fcc9c61b6b"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "360288e0f09d5a8ed47725b078941c51"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "b31a1a55d96ca4027d0656d056137eb2"
  },
  {
    "url": "views/ops/frp/use.html",
    "revision": "02d1e68b971b81025269a75476f32972"
  },
  {
    "url": "views/ops/SGE/introdution.html",
    "revision": "814600bedef0e018248d5cd2f2e292b1"
  },
  {
    "url": "views/ops/SGE/use.html",
    "revision": "9dbf54f1674914751f4c31289d6931c9"
  },
  {
    "url": "views/ops/someproblem/installDisk.html",
    "revision": "53af0e4490a8621be7ff8fda5685fd26"
  },
  {
    "url": "views/ops/someproblem/network.html",
    "revision": "8bd9800c81d8233951f07f0e3e987b21"
  },
  {
    "url": "views/singularity/simpleUse.html",
    "revision": "b3222495d6cc2dc7742815860125c5fc"
  },
  {
    "url": "views/software/busco.html",
    "revision": "3c65572e7902855c16b84512b6bd6065"
  },
  {
    "url": "views/software/hic.html",
    "revision": "23d2f942f9412e5e718cc634b1f69230"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "e9a46e07fea3daf30e0282bddfbcc5b7"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "f8c9d6dbcb029d58f2d079382103a724"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "8f373417f19a2689ecd3466ef477b452"
  },
  {
    "url": "views/webProgram/practise/example1.html",
    "revision": "61edc3b6034e5bf1d59162673b479df3"
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
