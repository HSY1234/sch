if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const c=s=>l(s,n),o={module:{uri:n},exports:u,require:c};e[n]=Promise.all(i.map((s=>o[s]||c(s)))).then((s=>(r(...s),u)))}}define(["./workbox-79ffe3e0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"frontend"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/basic.jpg",revision:"3ebe6784271d117836cbc502491c2587"},{url:"/css/208.a709d699.css",revision:null},{url:"/css/339.f7f07303.css",revision:null},{url:"/css/405.8f12dd9a.css",revision:null},{url:"/css/474.44fdcf34.css",revision:null},{url:"/css/623.76798e4e.css",revision:null},{url:"/css/648.bd912bcf.css",revision:null},{url:"/css/755.be26c0ea.css",revision:null},{url:"/css/973.e830cc18.css",revision:null},{url:"/css/app.6a810a83.css",revision:null},{url:"/img/basic.dbe8ff35.jpg",revision:null},{url:"/index.html",revision:"303e0369aab09689c86cf09bc1c281db"},{url:"/js/151.31a4d4b1.js",revision:null},{url:"/js/208.81e1a7b8.js",revision:null},{url:"/js/339.900cbafa.js",revision:null},{url:"/js/405.3fa4856d.js",revision:null},{url:"/js/474.21f6bf7a.js",revision:null},{url:"/js/623.9b4cb6c8.js",revision:null},{url:"/js/648.4976d1aa.js",revision:null},{url:"/js/755.e2e80f7e.js",revision:null},{url:"/js/973.b54058bc.js",revision:null},{url:"/js/app.18bee666.js",revision:null},{url:"/js/chunk-vendors.25f33990.js",revision:null},{url:"/manifest.json",revision:"4b14c64efaf846819b9a229b4193c8b7"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
