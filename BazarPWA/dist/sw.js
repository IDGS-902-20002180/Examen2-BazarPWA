if(!self.define){let e,a={};const i=(i,o)=>(i=new URL(i+".js",o).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(o,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let d={};const s=e=>i(e,n),c={module:{uri:n},exports:d,require:s};a[n]=Promise.all(o.map((e=>c[e]||s(e)))).then((e=>(r(...e),d)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-718afae8.css",revision:null},{url:"assets/index-b589d2ff.js",revision:null},{url:"index.html",revision:"295b4ae97abdbb9cf7e165c6bc634664"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"windows11/SmallTile.scale-100.png",revision:"ff0976bba71768153b3b31f86622ae4b"},{url:"windows11/SmallTile.scale-125.png",revision:"5716485e174808fced624196ac16ac3c"},{url:"windows11/SmallTile.scale-150.png",revision:"b754868c9a1dae2f5c673fe14c89601e"},{url:"windows11/SmallTile.scale-200.png",revision:"72df7a77e3475778ba3324849caace56"},{url:"windows11/SmallTile.scale-400.png",revision:"2f0c444402db787162c4b98a550f38cd"},{url:"windows11/Square150x150Logo.scale-100.png",revision:"a08ca07bd3f051a7e0b685dccf804566"},{url:"windows11/Square150x150Logo.scale-125.png",revision:"2ae46689bc38444a3a64ea6bdd0ea595"},{url:"windows11/Square150x150Logo.scale-150.png",revision:"4bc4a2b775a6f588e9f517820cf65134"},{url:"windows11/Square150x150Logo.scale-200.png",revision:"11effc38e031f7156808b84aaed8f1b3"},{url:"windows11/Square150x150Logo.scale-400.png",revision:"20da07d351b7ad95da26b143f8ee1a6c"},{url:"windows11/Wide310x150Logo.scale-100.png",revision:"8bbed4ffb448634473366a7d377d747c"},{url:"windows11/Wide310x150Logo.scale-125.png",revision:"bb3c6267ba5b93bed107a72edfd40332"},{url:"windows11/Wide310x150Logo.scale-150.png",revision:"05585eabac8fce48dc8aa35cb6fe589a"},{url:"windows11/Wide310x150Logo.scale-200.png",revision:"10419b35faf8f75aac97d293a1d01886"},{url:"windows11/Wide310x150Logo.scale-400.png",revision:"81d326c0f30164c78f2981a97a7d30da"},{url:"windows11/LargeTile.scale-100.png",revision:"cd669ad1129b56f9d26ac8cc1cd65bdb"},{url:"windows11/LargeTile.scale-125.png",revision:"c60a825e7fead68bf632cd198d35bdf1"},{url:"windows11/LargeTile.scale-150.png",revision:"3597215ce70f53115bd2124dd05eb25d"},{url:"windows11/LargeTile.scale-200.png",revision:"d606f7c9bb652352b6d7b3e865f856a6"},{url:"windows11/LargeTile.scale-400.png",revision:"eb97cf132047f262a81826ff2a36d1e0"},{url:"windows11/Square44x44Logo.scale-100.png",revision:"866e76f8a1f7f3f03ed4722b73a433c4"},{url:"windows11/Square44x44Logo.scale-125.png",revision:"3734ef3c86b2a55ad2d3f0893b365b5e"},{url:"windows11/Square44x44Logo.scale-150.png",revision:"3930ef1aac25c9ea16dd452c5e9200ee"},{url:"windows11/Square44x44Logo.scale-200.png",revision:"e83c85860a4cabbeb015c4f386c2784e"},{url:"windows11/Square44x44Logo.scale-400.png",revision:"635f66a0858226e03d2e4de082f0ed78"},{url:"windows11/StoreLogo.scale-100.png",revision:"4b91f4a64e490e779dab6dd98e1e5231"},{url:"windows11/StoreLogo.scale-125.png",revision:"6ba34355d4c92c5c65ee065b4859cc41"},{url:"windows11/StoreLogo.scale-150.png",revision:"d93f0ac8c7186a4940218c69f4eda9af"},{url:"windows11/StoreLogo.scale-200.png",revision:"d0a7e20c1997c15131beb43666792a28"},{url:"windows11/StoreLogo.scale-400.png",revision:"ceacd90d79a6c570fe1f331e499750c8"},{url:"windows11/SplashScreen.scale-100.png",revision:"10419b35faf8f75aac97d293a1d01886"},{url:"windows11/SplashScreen.scale-125.png",revision:"c46a0b5a7304f721462c29a3be36640e"},{url:"windows11/SplashScreen.scale-150.png",revision:"fdecbeeebe65120aaffb39114239584e"},{url:"windows11/SplashScreen.scale-200.png",revision:"81d326c0f30164c78f2981a97a7d30da"},{url:"windows11/SplashScreen.scale-400.png",revision:"702f409af90c41659aa383a76a93a730"},{url:"windows11/Square44x44Logo.targetsize-16.png",revision:"34417f68b3c3557b4d70064664ea70bf"},{url:"windows11/Square44x44Logo.targetsize-20.png",revision:"b297f8d59d4e75a985d79c8290d6c99e"},{url:"windows11/Square44x44Logo.targetsize-24.png",revision:"bd968b62ad37cbcc240bc95174188ee3"},{url:"windows11/Square44x44Logo.targetsize-30.png",revision:"456e82ec7e401b634f3d1d3b416bc707"},{url:"windows11/Square44x44Logo.targetsize-32.png",revision:"5d9594f4c73fad682d25bc2119ff42a9"},{url:"windows11/Square44x44Logo.targetsize-36.png",revision:"62a3ef5152de6d55b65605263b094729"},{url:"windows11/Square44x44Logo.targetsize-40.png",revision:"414e2d599ee4117be90364411a9888fa"},{url:"windows11/Square44x44Logo.targetsize-44.png",revision:"866e76f8a1f7f3f03ed4722b73a433c4"},{url:"windows11/Square44x44Logo.targetsize-48.png",revision:"d09997d2ea65672b3a93b947f6265c3c"},{url:"windows11/Square44x44Logo.targetsize-60.png",revision:"a1985dbaea74950c728cfc062b04d4d0"},{url:"windows11/Square44x44Logo.targetsize-64.png",revision:"bd1d37138b00705f407cce90e5639706"},{url:"windows11/Square44x44Logo.targetsize-72.png",revision:"ad8268b0893caef11a34301baac5ca60"},{url:"windows11/Square44x44Logo.targetsize-80.png",revision:"f6719e46bf20d7473a1b9f6b314056ec"},{url:"windows11/Square44x44Logo.targetsize-96.png",revision:"014bd4485f44cc91f8f436d4f9357309"},{url:"windows11/Square44x44Logo.targetsize-256.png",revision:"da9da4d59e77a60dfbfa6899fe3ae8be"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"34417f68b3c3557b4d70064664ea70bf"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"b297f8d59d4e75a985d79c8290d6c99e"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"bd968b62ad37cbcc240bc95174188ee3"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"456e82ec7e401b634f3d1d3b416bc707"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"5d9594f4c73fad682d25bc2119ff42a9"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"62a3ef5152de6d55b65605263b094729"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"414e2d599ee4117be90364411a9888fa"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"866e76f8a1f7f3f03ed4722b73a433c4"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"d09997d2ea65672b3a93b947f6265c3c"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"a1985dbaea74950c728cfc062b04d4d0"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"bd1d37138b00705f407cce90e5639706"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"ad8268b0893caef11a34301baac5ca60"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"f6719e46bf20d7473a1b9f6b314056ec"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"014bd4485f44cc91f8f436d4f9357309"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"da9da4d59e77a60dfbfa6899fe3ae8be"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"34417f68b3c3557b4d70064664ea70bf"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"b297f8d59d4e75a985d79c8290d6c99e"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"bd968b62ad37cbcc240bc95174188ee3"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"456e82ec7e401b634f3d1d3b416bc707"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"5d9594f4c73fad682d25bc2119ff42a9"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"62a3ef5152de6d55b65605263b094729"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"414e2d599ee4117be90364411a9888fa"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"866e76f8a1f7f3f03ed4722b73a433c4"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"d09997d2ea65672b3a93b947f6265c3c"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"a1985dbaea74950c728cfc062b04d4d0"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"bd1d37138b00705f407cce90e5639706"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"ad8268b0893caef11a34301baac5ca60"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"f6719e46bf20d7473a1b9f6b314056ec"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"014bd4485f44cc91f8f436d4f9357309"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"da9da4d59e77a60dfbfa6899fe3ae8be"},{url:"android/android-launchericon-512-512.png",revision:"37174e297fa516ea6238b4f91bcfcf4d"},{url:"android/android-launchericon-192-192.png",revision:"701cd3854616b9f77f7ae886a3847102"},{url:"android/android-launchericon-144-144.png",revision:"5fbd92b5b5fcc43bd62bbc1dfe740d62"},{url:"android/android-launchericon-96-96.png",revision:"014bd4485f44cc91f8f436d4f9357309"},{url:"android/android-launchericon-72-72.png",revision:"ad8268b0893caef11a34301baac5ca60"},{url:"android/android-launchericon-48-48.png",revision:"d09997d2ea65672b3a93b947f6265c3c"},{url:"ios/16.png",revision:"34417f68b3c3557b4d70064664ea70bf"},{url:"ios/20.png",revision:"b297f8d59d4e75a985d79c8290d6c99e"},{url:"ios/29.png",revision:"a8fdabaff89216832b030d43cb90990c"},{url:"ios/32.png",revision:"5d9594f4c73fad682d25bc2119ff42a9"},{url:"ios/40.png",revision:"414e2d599ee4117be90364411a9888fa"},{url:"ios/50.png",revision:"56513f78969f1a280f9db7e62fc72ac7"},{url:"ios/57.png",revision:"066904a6df532484eb1675f4cf863320"},{url:"ios/58.png",revision:"1ca015e1318e29cab0de9763f76f17c6"},{url:"ios/60.png",revision:"a1985dbaea74950c728cfc062b04d4d0"},{url:"ios/64.png",revision:"bd1d37138b00705f407cce90e5639706"},{url:"ios/72.png",revision:"ad8268b0893caef11a34301baac5ca60"},{url:"ios/76.png",revision:"cfa20c7df07a70b952089873922501b3"},{url:"ios/80.png",revision:"f6719e46bf20d7473a1b9f6b314056ec"},{url:"ios/87.png",revision:"3655c168fae5c5b510d237ff41caf02b"},{url:"ios/100.png",revision:"a7bc0cf1451b9c2d66c0646025767e4f"},{url:"ios/114.png",revision:"07af1effe527c535b55557e7ebcf2a46"},{url:"ios/120.png",revision:"7313e2ef69b8a762501406efccc6bb6e"},{url:"ios/128.png",revision:"c39669e85f6a606f0fe3c61ade6a56cc"},{url:"ios/144.png",revision:"5fbd92b5b5fcc43bd62bbc1dfe740d62"},{url:"ios/152.png",revision:"1d69ff888a0d26bbbf0d0066c9355cf5"},{url:"ios/167.png",revision:"adc36f1c9539e4cc4cd2212165ab6c3f"},{url:"ios/180.png",revision:"ea1c3987212621259a8695180eda2046"},{url:"ios/192.png",revision:"701cd3854616b9f77f7ae886a3847102"},{url:"ios/256.png",revision:"da9da4d59e77a60dfbfa6899fe3ae8be"},{url:"ios/512.png",revision:"37174e297fa516ea6238b4f91bcfcf4d"},{url:"ios/1024.png",revision:"272ec45fbb7adb9e0e30f122345ab2e0"},{url:"manifest.webmanifest",revision:"57f9dc773fcb467d4238df1c8c4daed1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
