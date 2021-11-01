"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8403],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5918:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},u="Daftar Level",p={unversionedId:"otomax/daftar-level",id:"otomax/daftar-level",isDocsHomePage:!1,title:"Daftar Level",description:"Options",source:"@site/docs/otomax/daftar-level.md",sourceDirName:"otomax",slug:"/otomax/daftar-level",permalink:"/OtomaX/docs/otomax/daftar-level",editUrl:"https://github.com/ndiing/OtomaX/edit/main/website/docs/otomax/daftar-level.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Daftar harga",permalink:"/OtomaX/docs/otomax/daftar-harga"},next:{title:"Daftar Mutasi",permalink:"/OtomaX/docs/otomax/daftar-mutasi"}},s=[{value:"Options",id:"options",children:[{value:"Params",id:"params",children:[],level:3}],level:2},{value:"Example",id:"example",children:[{value:"Request",id:"request",children:[],level:3},{value:"Response",id:"response",children:[],level:3}],level:2}],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"daftar-level"},"Daftar Level"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"GET /api/v1/level\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"params"},"Params"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kode_reseller")),(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null},"Isi kode reseller untuk melihat data downline")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"request"},"Request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"GET http://localhost/api/v1/level\n")),(0,l.kt)("h3",{id:"response"},"Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "message": "OK",\n  "data": {\n    "kode": "R",\n    "nama": "Reseller",\n    "selisih_harga": 50,\n    "kode_upline": "A",\n    "bonus": 0,\n    "jumlah_ym": 3,\n    "jumlah_sms": 3,\n    "keterangan": "5",\n    "blok_produk": "",\n    "deposit_minimal": 10000,\n    "sms_end_user": 0,\n    "default_markup": 50,\n    "par_balas": null,\n    "poin_trx": 0,\n    "no_komisi": null,\n    "transfer_lintas": null,\n    "deposit_maksimal": null,\n    "max_pakai": null,\n    "guna_poin_produk": null,\n    "tgl_data": "2021-10-25T12:42:03.503Z",\n    "no_ubah_markup": null\n  }\n}\n')))}m.isMDXComponent=!0}}]);