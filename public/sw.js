if(!self.define){let e,a={};const n=(n,s)=>(n=new URL(n+".js",s).href,a[n]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=a,document.head.appendChild(e)}else e=n,importScripts(n),a()})).then((()=>{let e=a[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let d={};const t=e=>n(e,i),r={module:{uri:i},exports:d,require:t};a[i]=Promise.all(s.map((e=>r[e]||t(e)))).then((e=>(c(...e),d)))}}define(["./workbox-e9849328"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"72085beb2926fd04a0489ef793db2a5c"},{url:"/_next/static/chunks/304-c564ed3290d54cda.js",revision:"nhSmqUXdBMdgnoOLd4cBp"},{url:"/_next/static/chunks/383-e6dc277cd46b0f08.js",revision:"nhSmqUXdBMdgnoOLd4cBp"},{url:"/_next/static/chunks/418-9e6c2feb9abfabbe.js",revision:"nhSmqUXdBMdgnoOLd4cBp"},{url:"/_next/static/chunks/41d6d0e5-80500aaaf63af8c8.js",revision:"nhSmqUXdBMdgnoOLd4cBp"},{url:"/_next/static/chunks/454-cdcd52308bbd80ec.js",revision:"nhSmqUXdBMdgnoOLd4cBp"},{url:"/_next/static/chunks/84fbfe7f-366d04970c6be2b0.js",revision:"nhSmqUXdBMdgnoOLd4cBp"},{url:"/_next/static/chunks/953-237fc137aab9687c.js",revision:"nhSmqUXdBMdgnoOLd4cBp"},{url:"/_next/static/chunks/app/_not-found/page-c31f72d870d65e06.js",revision:"nhSmqUXdBMdgnoOLd4cBp"},{url:"/_next/static/chunks/app/about/page-de2ac9ec3cfd1c0b.js",revision:"nhSmqUXdBMdgnoOLd4cBp"},{url:"/_next/static/chunks/app/blogpost/%5Bslug%5D/page-80699652fdc1b11e.js",revision:"nhSmqUXdBMdgnoOLd4cBp"},{url:"/_next/static/chunks/app/layout-ca54d1b3336ea7dd.js",revision:"nhSmqUXdBMdgnoOLd4cBp"},{url:"/_next/static/chunks/app/page-45156526fe45992c.js",revision:"nhSmqUXdBMdgnoOLd4cBp"},{url:"/_next/static/chunks/app/semester1/page-1a396875632ad854.js",revision:"nhSmqUXdBMdgnoOLd4cBp"},{url:"/_next/static/chunks/app/semester2/page-fe6e51df775a2325.js",revision:"nhSmqUXdBMdgnoOLd4cBp"},{url:"/_next/static/chunks/app/semester3/page-1d7dd7063a89e78c.js",revision:"nhSmqUXdBMdgnoOLd4cBp"},{url:"/_next/static/chunks/framework-6e06c675866dc992.js",revision:"nhSmqUXdBMdgnoOLd4cBp"},{url:"/_next/static/chunks/main-3ab761c47f5eedd3.js",revision:"nhSmqUXdBMdgnoOLd4cBp"},{url:"/_next/static/chunks/main-app-1db1db0aed18890f.js",revision:"nhSmqUXdBMdgnoOLd4cBp"},{url:"/_next/static/chunks/pages/_app-a0c0778090f03611.js",revision:"nhSmqUXdBMdgnoOLd4cBp"},{url:"/_next/static/chunks/pages/_error-40c0c16ec26e3cd5.js",revision:"nhSmqUXdBMdgnoOLd4cBp"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-daab45c3920a1bf5.js",revision:"nhSmqUXdBMdgnoOLd4cBp"},{url:"/_next/static/css/9bdd19822a06fca1.css",revision:"9bdd19822a06fca1"},{url:"/_next/static/media/0acf7bf726cd1ef0-s.p.woff2",revision:"35befbf3e9f252bf26cb5e7ab06a3064"},{url:"/_next/static/media/10c4eb715c61a3e6-s.woff2",revision:"d69b4c1d185f4a1c556a4613fa81309d"},{url:"/_next/static/media/30cd8f99d32fa6e8-s.woff2",revision:"e5c1b944d9e3380a062bf911e26728a3"},{url:"/_next/static/media/46c21389e888bf13-s.woff2",revision:"272930c09ba14c81bb294be1fe18b049"},{url:"/_next/static/media/4c285fdca692ea22-s.p.woff2",revision:"42d3308e3aca8742731f63154187bdd7"},{url:"/_next/static/media/5154c5c28c3353bb-s.woff2",revision:"61b7aa4d5cbaac65b393cc62288b8366"},{url:"/_next/static/media/8d346445d24062b5-s.woff2",revision:"c965abed1310982a4d2148cb81765b56"},{url:"/_next/static/media/b957ea75a84b6ea7-s.p.woff2",revision:"0bd523f6049956faaf43c254a719d06a"},{url:"/_next/static/media/eafabf029ad39a43-s.p.woff2",revision:"43751174b6b810eb169101a20d8c26f8"},{url:"/_next/static/nhSmqUXdBMdgnoOLd4cBp/_buildManifest.js",revision:"4cf6097f7890ec89d6540f819a9e2827"},{url:"/_next/static/nhSmqUXdBMdgnoOLd4cBp/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.png",revision:"e8a418f9256ded500d442444da5418ca"},{url:"/feedback.png",revision:"15d7d492d7a78c6eef70225ac63ecf71"},{url:"/flutter/1flutter01.png",revision:"2314559214f8a9606c2e03b1c8e2817b"},{url:"/flutter/1flutter02.jpg",revision:"0e34bb2de87f33190b87791bade6c228"},{url:"/flutter/1flutter03.png",revision:"2d312e1cd1f1555e7948324a9cb9f4cf"},{url:"/flutter/1flutter04.jpeg",revision:"f62048a689b18d6d9d285aeaa56caea9"},{url:"/flutter/1flutter05.png",revision:"244fb4b42d54323e31609fa557dd73d1"},{url:"/flutter/fluttercover.png",revision:"465c49e85a0c261d38e389fe1a6efdb9"},{url:"/form.png",revision:"35e8945ddc86123f005bd981382e80e4"},{url:"/github.png",revision:"93136f54af61fcc7698488383f06791c"},{url:"/icon512_maskable.png",revision:"1b7b03f4d84abd9e4d0b2fef8a2d090c"},{url:"/icon512_rounded.png",revision:"fd268a1ae121a2cf9daede430d7a0f83"},{url:"/java/02java01.png",revision:"9d433588752c2cab4939ec73e2c72a05"},{url:"/java/02java02.png",revision:"1a265e5b31fa8b0cfb7fbd22d458e58e"},{url:"/java/02java03.png",revision:"86eb94add4457864152444aef07d27aa"},{url:"/java/02java04.png",revision:"07583b4597e86ef4624e07a19d334163"},{url:"/java/02java05.png",revision:"d874829512e5810024ec7759ad8dc6f9"},{url:"/java/02java06.png",revision:"84906f890209bd62438b6fab3943eb09"},{url:"/java/02java07.png",revision:"e0578400a62eea7c240d0bdf82d53edd"},{url:"/java/1java01.png",revision:"1a7413a39b2667eeeec3978c56f113df"},{url:"/java/1java02.png",revision:"dc03fe96562bbb3016c2389a96387881"},{url:"/java/1java03.png",revision:"4c8ed1a3839ccb8411dad2cd6b49d9de"},{url:"/java/1java04.png",revision:"7b0143e033fc829b8044c8842d601eca"},{url:"/java/1java05.png",revision:"0cc580e1630cd9bbf15794fa074c24cc"},{url:"/java/20240929_123237.png",revision:"6cfe38ff33144d567f2e1dad03e085fa"},{url:"/java/javacover.png",revision:"2a06217b4e9421fd2f9a0ac5ad31ac91"},{url:"/manifest.json",revision:"783399114968f48ecf6696fc580b5fad"},{url:"/number-1.png",revision:"3433e05c240a9427d8992f412524ea11"},{url:"/number-2.png",revision:"ec38aa8f05a9ec5680c3fa425fec82fb"},{url:"/number-3.png",revision:"0c09230269c264fbcfd5d9c329e92961"},{url:"/pdf.png",revision:"24245c7eab5d4fad04953d6fb521e39b"},{url:"/py/1py01.png",revision:"6347be915d77ed0eb57d2405d64707e7"},{url:"/py/1py02.png",revision:"170bc0f0ab6c834f57a75c05da5834f8"},{url:"/py/pycover.png",revision:"203edfb43c495660788daa26f0dcd510"},{url:"/st/stcover.png",revision:"def05dcdf29e3bb769ccf9c608795929"},{url:"/telegram.png",revision:"69cd77ea8e0112204dafeae731f47cd4"},{url:"/tmp/20240929_123315.png",revision:"29963127750aeae298625816e73eb4cf"},{url:"/tmp/tmpcover.png",revision:"5ccfb11f48760e3df9b6f5ff72b1d71e"},{url:"/uiuxcover.png",revision:"44f97af0ebe6c6c3e18ab5001a44e93b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:n,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
