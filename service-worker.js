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
    "url": "assets/css/0.styles.d64e235b.css",
    "revision": "55f0fe62c6afea1ced0f5e33da76871e"
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
    "url": "assets/js/13.005d50db.js",
    "revision": "fbc81fd24025b18094a954f3669533a6"
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
    "url": "assets/js/20.71181f3f.js",
    "revision": "fbecb695af7fbfba401ce3b01e9f29b0"
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
    "url": "assets/js/26.21f77d9b.js",
    "revision": "93ef82bca35e3d784e3a0361f5cb88c7"
  },
  {
    "url": "assets/js/27.53c00638.js",
    "revision": "46f9d255303b9113c0f5ece499ceafdf"
  },
  {
    "url": "assets/js/28.d56f2f10.js",
    "revision": "a9de145c1ce49181d0e389690a571e24"
  },
  {
    "url": "assets/js/29.7ede3d7b.js",
    "revision": "ec730f10c3726fd59ba3c9e8d4c0acf4"
  },
  {
    "url": "assets/js/30.1e7042ee.js",
    "revision": "b3af2decf4fb55f4128dca9fcf096605"
  },
  {
    "url": "assets/js/31.ca069062.js",
    "revision": "3df79623da3cab282547f95acd033525"
  },
  {
    "url": "assets/js/32.9764c14c.js",
    "revision": "fd339df14a826921752056e03c74b71d"
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
    "url": "assets/js/35.9036c80b.js",
    "revision": "781b4320f741cb0a13abab875f3b8fd4"
  },
  {
    "url": "assets/js/36.b3233ea2.js",
    "revision": "0cb6379d22cec40b17e54801027ff08f"
  },
  {
    "url": "assets/js/37.4b335bda.js",
    "revision": "6b8e8bd0a4826c9f40a9d64672bb783b"
  },
  {
    "url": "assets/js/38.54d1ed6c.js",
    "revision": "660456c4f7b7484122b1e4c362f03935"
  },
  {
    "url": "assets/js/39.75017a9c.js",
    "revision": "b1152dd7cc6995bda3e9abbdcdbc6943"
  },
  {
    "url": "assets/js/40.8e4ce5db.js",
    "revision": "e8a912d0bb036b88a1d47a32da56fc11"
  },
  {
    "url": "assets/js/41.f0733aec.js",
    "revision": "c8f59554d45992009c528b984765a7b9"
  },
  {
    "url": "assets/js/42.33c69309.js",
    "revision": "d44150f3ee53ff9e8cb923592db6f84c"
  },
  {
    "url": "assets/js/43.633b2d8c.js",
    "revision": "dd1d9c88e75e32c4f84be1d4737f8719"
  },
  {
    "url": "assets/js/44.665c4d05.js",
    "revision": "0cd016ddd5fcd30fa5c2d051cc838d6a"
  },
  {
    "url": "assets/js/45.cf0570d3.js",
    "revision": "318d8c8061ab00f5ef363e4644d5e06f"
  },
  {
    "url": "assets/js/46.2d966181.js",
    "revision": "2859913e64ad37dac4e88b5f7a0a4f82"
  },
  {
    "url": "assets/js/47.2bab7e66.js",
    "revision": "e88dc7ecc494a64ff0b53f05eaf1aae3"
  },
  {
    "url": "assets/js/48.bdb99c02.js",
    "revision": "aa20637ccf390928c46e00fa317be7b1"
  },
  {
    "url": "assets/js/49.8764bcf9.js",
    "revision": "0e2ae461a0499e5527e136c751e6478b"
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
    "url": "assets/js/app.3a66bf8a.js",
    "revision": "15ac088837add8728e16d1289b0a64b6"
  },
  {
    "url": "assets/js/vendors~flowchart.eb66b07b.js",
    "revision": "fcfccd3077f424e5db261c1bd602fd16"
  },
  {
    "url": "categories/index.html",
    "revision": "ada8c8bf708cc4c23e68af6a6f58a670"
  },
  {
    "url": "categories/nextflow/index.html",
    "revision": "77fe7e3e501bd5dacdde4842501f789a"
  },
  {
    "url": "categories/容器技术/index.html",
    "revision": "0f88864769218f82c739e550f21ae645"
  },
  {
    "url": "categories/生信软件/index.html",
    "revision": "cc922a732b337fb8d6b1894ecb895112"
  },
  {
    "url": "categories/编程语言/index.html",
    "revision": "9f0ddd8f93489d701da9f0a29e525761"
  },
  {
    "url": "categories/集群调度工具/index.html",
    "revision": "f140f5f0a0b2b80dbf25f3f4d4b543f1"
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
    "revision": "73560eb8ff0a56152d326c3d772ce884"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "05a1076a98d65233ffc231efbfef3989"
  },
  {
    "url": "other/project.html",
    "revision": "6c64d494710df0b3058d9c6ecd3f5ceb"
  },
  {
    "url": "tag/index.html",
    "revision": "d55e3b330978190e5c16525a77cf0054"
  },
  {
    "url": "tags/assembly/index.html",
    "revision": "7d9df8c52a938aca4cd84b893812e12c"
  },
  {
    "url": "tags/busco v5/index.html",
    "revision": "9f47f5dc7b9842b1ed14f68964dab5b5"
  },
  {
    "url": "tags/Collinearity/index.html",
    "revision": "2e06ef7f652b2e6c94f87dee8f7ef5bb"
  },
  {
    "url": "tags/Comparative genomics/index.html",
    "revision": "d9e7146be4017fd306d1c55bbfb63ffc"
  },
  {
    "url": "tags/Computing Cluster/index.html",
    "revision": "7cc570c2bc69da3a87e39b447ccbafa8"
  },
  {
    "url": "tags/docker container/index.html",
    "revision": "8d73f6d04ba68269f9eec9bab3a78ba8"
  },
  {
    "url": "tags/docker image/index.html",
    "revision": "298912d60d0a735443401d86480e10a0"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "0d62233f103c13b5223795cc2f1a41fb"
  },
  {
    "url": "tags/genome assessment/index.html",
    "revision": "c9ae0c825aa3b5c0acb93eecc93ace5c"
  },
  {
    "url": "tags/HiC/index.html",
    "revision": "f797ed5eda4e20dcf15aafce02179ffc"
  },
  {
    "url": "tags/hifiasm/index.html",
    "revision": "9f76e9572822b6ee2abec15046e3dcfe"
  },
  {
    "url": "tags/juicebox/index.html",
    "revision": "fa8c6fe5cb0f2b9397b28250c144de7b"
  },
  {
    "url": "tags/nf入门/index.html",
    "revision": "9871ea2c5fd1c59800a32a51967f6bf6"
  },
  {
    "url": "tags/Peregrine/index.html",
    "revision": "27408e0dc1293d947368d693f1d2417d"
  },
  {
    "url": "tags/python/index.html",
    "revision": "81ccf15be1574246c18d81717f699f19"
  },
  {
    "url": "tags/R/index.html",
    "revision": "42677a0d6008258028fd88ea7fb44f56"
  },
  {
    "url": "tags/SGE/index.html",
    "revision": "7275963dd236c44477f894d9cb9f784d"
  },
  {
    "url": "tags/singularity/index.html",
    "revision": "2f1eeb4c5169a67525e86599af7ef3fa"
  },
  {
    "url": "timeline/index.html",
    "revision": "f52a020fa632730c1981b551a7309bac"
  },
  {
    "url": "views/codeLanguage/python/lambda.html",
    "revision": "21ab06177c9b0860338258db34e27f82"
  },
  {
    "url": "views/codeLanguage/python/mapReduce.html",
    "revision": "a6e557a806c784a9f5997e37bc4a26a4"
  },
  {
    "url": "views/codeLanguage/python/recursiveFunction.html",
    "revision": "eebfb47c1122c2011bc912f0de03b6e8"
  },
  {
    "url": "views/codeLanguage/python/reference.html",
    "revision": "8d577f7c4b204f83f67756e175b45e4f"
  },
  {
    "url": "views/codeLanguage/R/programControl.html",
    "revision": "9ce74e7ba5a37639b713c9f3a51baa0e"
  },
  {
    "url": "views/codeLanguage/R/reference.html",
    "revision": "81519eb2731513f63786f1690e685431"
  },
  {
    "url": "views/codeLanguage/R/variant.html",
    "revision": "0f41bd831447f72c0dc80c9ad49fa765"
  },
  {
    "url": "views/docker/buildImage.html",
    "revision": "2f1d9e7c767c6561b3cfe7c30de82fd5"
  },
  {
    "url": "views/docker/container.html",
    "revision": "fbf46bad6e26b10c4b7a7988cb0b5bde"
  },
  {
    "url": "views/docker/dataMount.html",
    "revision": "d3f3f70dda256da522b5a479a7467692"
  },
  {
    "url": "views/docker/image.html",
    "revision": "bb40545ddc37d83228965b6465208ae9"
  },
  {
    "url": "views/docker/introduction.html",
    "revision": "678648871a32695252a627d1ccd22d48"
  },
  {
    "url": "views/docker/reference.html",
    "revision": "1d7c12b5d9c42a0772171a4d6f3225ce"
  },
  {
    "url": "views/index.html",
    "revision": "bf6234f213f5aaa60a49f92aab57efdc"
  },
  {
    "url": "views/nextflow/gramma1.html",
    "revision": "8365f7f9342c12909790b071c6888980"
  },
  {
    "url": "views/nextflow/install.html",
    "revision": "96fcc0fa55130f22389f8285589bb5bd"
  },
  {
    "url": "views/SGE/introdution.html",
    "revision": "5bd328ec33e9ee1fea783368d2844e67"
  },
  {
    "url": "views/SGE/use.html",
    "revision": "08dabf7b6c9a2cb3301e21ed4433c979"
  },
  {
    "url": "views/singularity/simpleUse.html",
    "revision": "9d19d0177239408a9a1625af1c2ad01d"
  },
  {
    "url": "views/software/busco.html",
    "revision": "3d6cd1bdb1d4ab6e2949b73e4fdaea44"
  },
  {
    "url": "views/software/hic.html",
    "revision": "b4bdb2c3a84a4f6f60f4fa7c47344097"
  },
  {
    "url": "views/software/hifiasm.html",
    "revision": "9e049d00a1bf92abf5ff06e457c0c3a4"
  },
  {
    "url": "views/software/jcvi.html",
    "revision": "5a8990d706d4594d6a228fb388c82543"
  },
  {
    "url": "views/software/peregrine.html",
    "revision": "3676ba8a7de8edfa22bea15529466a48"
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
