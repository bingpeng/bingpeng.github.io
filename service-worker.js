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
    "url": "assets/js/20.21c9c4c3.js",
    "revision": "6b90aef80d4df153686269f837bbaf8c"
  },
  {
    "url": "assets/js/21.54fdeb3c.js",
    "revision": "c10148533003b5d9eef0d9226a705238"
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
    "url": "assets/js/25.787c0e08.js",
    "revision": "69935ee00e74d48883158b779d40ff88"
  },
  {
    "url": "assets/js/26.21f77d9b.js",
    "revision": "93ef82bca35e3d784e3a0361f5cb88c7"
  },
  {
    "url": "assets/js/27.53c00638.js",
    "revision": "46f9d255303b9113c0f5ece499ceafdf"
  },
  {
    "url": "assets/js/28.ae13a880.js",
    "revision": "b721b9d3e46b47cdaa566258b4120df3"
  },
  {
    "url": "assets/js/29.b7fb33cf.js",
    "revision": "80f77664b67a37202d3c0527ff3d2174"
  },
  {
    "url": "assets/js/30.04a16205.js",
    "revision": "54155bcffdf6aa12473c4ac911f6da3e"
  },
  {
    "url": "assets/js/31.71aeaaa5.js",
    "revision": "38c70c9d96d5cd33d27726c08887bd08"
  },
  {
    "url": "assets/js/32.285f6319.js",
    "revision": "117309b6dff371fd85e5265183daf75c"
  },
  {
    "url": "assets/js/33.1423951f.js",
    "revision": "a904e61df52fb7c09acd98aa744e719d"
  },
  {
    "url": "assets/js/34.93373e6b.js",
    "revision": "0505fe351fa4be34733cd448625c79b0"
  },
  {
    "url": "assets/js/35.b027b36e.js",
    "revision": "851bd5e6365364918f66249df14e4c2b"
  },
  {
    "url": "assets/js/36.696fda1b.js",
    "revision": "56fa0ebdfdeabfef46978b6f9976aeea"
  },
  {
    "url": "assets/js/37.4721b2a4.js",
    "revision": "d7d190ccc5f70880529a36bbb8628b2a"
  },
  {
    "url": "assets/js/38.abcacfa3.js",
    "revision": "bae65e1c514bff7d42f461e1a0984f77"
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
    "url": "assets/js/app.0c8cde8a.js",
    "revision": "abef813f0e3a9de6f774f40a53b0d420"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "eaedd00e8b82ff31c4a8ccc5f03ef4df"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "48e7875d4c1e50a9b6a105154df5eb3b"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "33a54c94cbe630a4b547bd38761ac1ff"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "7aa72568a48bb502c2af0dc0503a81bb"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "320ea6a7951ca70e08c564383a3eae5f"
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
    "revision": "d6735731c24f1769ea13c0e651318717"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "ccf58e074dcadcd5362c3fb7bf6ed52f"
  },
  {
    "url": "other/project.html",
    "revision": "de5beba0ec6d07b30052e8f006736283"
  },
  {
    "url": "tag/index.html",
    "revision": "99bafeca65527654272d0bf9835b5795"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "db0c2f351375a1faaf762d357f6490c5"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "93099d0cb4c6ad34ab9334af3a95d493"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "69b654ca489d58c447a5508870265b02"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "460518bad4f2b51a8d0354cf5c66c08a"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "ccf72c108a1a565faedabe067348776e"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "1316ade2ed8e3bce423ddbe73e4475b4"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "5d7f2d8b2efc4e4db8cf10146cf693fb"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "86a8dba81ac00074fffbda672ec47011"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "798cffe5a90d159992be32314d831289"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "6adc81c26241649a972f644340ad046e"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "855043a256936403723e0731f1b5da89"
  },
  {
    "url": "tags/python/index.html",
    "revision": "a259c47e027771d05adfbf889ef9fe6a"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "5a5601c8263744d512350d41979944e0"
  },
  {
    "url": "timeline/index.html",
    "revision": "0041bced2cb89210bf69096af77f3ac6"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "204a9b43f9cb6b02b6b2b4443d870e28"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "6ca27de6ad52d1e526d707cb835406f3"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "8bb83d1f4cda51c15482db667b8779b3"
  },
  {
    "url": "views/index.html",
    "revision": "2c80497c65393a213d109342d63d21b1"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "e985393ee144b50a95ef28ecb1164b0d"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "290f8529d115d8d48e75ce6df2e6f8dd"
  },
  {
    "url": "views/SGE/introdution.html",
    "revision": "981639350383cbd500600d1eb7b0857a"
  },
  {
    "url": "views/SGE/use.html",
    "revision": "7354296e7c4334cce3cc34acbb546964"
  },
  {
    "url": "views/software/busco.html",
    "revision": "55599d2405c9ff3f90ea952262355455"
  },
  {
    "url": "views/software/hic.html",
    "revision": "aab8366b899a9a963b7fd2ef59859620"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "3cfd4610407adc174ffb5876c6af7bc2"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "783a06fc5c0989c596816b6e1675c4dc"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "4f324914ad2f3f02ec768def424af3c6"
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
