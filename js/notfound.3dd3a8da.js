(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["notfound"],{9703:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("v-container",{staticClass:"text-center",staticStyle:{height:"calc(100vh - 58px)"},attrs:{"fill-height":""}},[n("v-row",{attrs:{align:"center"}},[n("v-col",[n("h1",{staticClass:"display-2 primary--text"},[t._v("Whoops, 404")]),n("p",[t._v("The page you were looking for does not exist")]),n("v-btn",{attrs:{to:"/",color:"primary",outlined:""}},[t._v("Get me out of here!")])],1)],1)],1)],1)},r=[],c={name:"NotFound",metaInfo:{title:"Лелеки 2020",titleTemplate:"%s - Page Not Found"}},o=c,l=n("2877"),i=n("6544"),u=n.n(i),s=n("8336"),f=(n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0"),n("ade3")),d=n("5530"),g=(n("4b85"),n("2b0e")),p=n("d9f7"),b=n("80d2"),v=["sm","md","lg","xl"],j=function(){return v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),y=function(){return v.reduce((function(t,e){return t["offset"+Object(b["D"])(e)]={type:[String,Number],default:null},t}),{})}(),h=function(){return v.reduce((function(t,e){return t["order"+Object(b["D"])(e)]={type:[String,Number],default:null},t}),{})}(),O={col:Object.keys(j),offset:Object.keys(y),order:Object.keys(h)};function m(t,e,n){var a=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");a+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(a+="-".concat(n),a.toLowerCase()):a.toLowerCase()}}var S=new Map,w=g["a"].extend({name:"v-col",functional:!0,props:Object(d["a"])(Object(d["a"])(Object(d["a"])(Object(d["a"])({cols:{type:[Boolean,String,Number],default:!1}},j),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,a=e.data,r=e.children,c=(e.parent,"");for(var o in n)c+=String(n[o]);var l=S.get(c);return l||function(){var t,e;for(e in l=[],O)O[e].forEach((function(t){var a=n[t],r=m(e,t,a);r&&l.push(r)}));var a=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!a||!n.cols},Object(f["a"])(t,"col-".concat(n.cols),n.cols),Object(f["a"])(t,"offset-".concat(n.offset),n.offset),Object(f["a"])(t,"order-".concat(n.order),n.order),Object(f["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),S.set(c,l)}(),t(n.tag,Object(p["a"])(a,{class:l}),r)}}),C=n("a523"),x=n("f6c4"),k=n("d9bd"),N=x["a"].extend({name:"v-main",created:function(){Object(k["d"])("v-content","v-main",this)},render:function(t){var e=x["a"].options.render.call(this,t);return e.data.staticClass+=" v-content",e.children[0].data.staticClass+=" v-content__wrap",t(e.tag,e.data,e.children)}}),_=(n("99af"),n("2532"),["sm","md","lg","xl"]),B=["start","end","center"];function V(t,e){return _.reduce((function(n,a){return n[t+Object(b["D"])(a)]=e(),n}),{})}var D=function(t){return[].concat(B,["baseline","stretch"]).includes(t)},E=V("align",(function(){return{type:String,default:null,validator:D}})),G=function(t){return[].concat(B,["space-between","space-around"]).includes(t)},L=V("justify",(function(){return{type:String,default:null,validator:G}})),F=function(t){return[].concat(B,["space-between","space-around","stretch"]).includes(t)},J=V("alignContent",(function(){return{type:String,default:null,validator:F}})),M={align:Object.keys(E),justify:Object.keys(L),alignContent:Object.keys(J)},T={align:"align",justify:"justify",alignContent:"align-content"};function W(t,e,n){var a=T[t];if(null!=n){if(e){var r=e.replace(t,"");a+="-".concat(r)}return a+="-".concat(n),a.toLowerCase()}}var I=new Map,P=g["a"].extend({name:"v-row",functional:!0,props:Object(d["a"])(Object(d["a"])(Object(d["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:D}},E),{},{justify:{type:String,default:null,validator:G}},L),{},{alignContent:{type:String,default:null,validator:F}},J),render:function(t,e){var n=e.props,a=e.data,r=e.children,c="";for(var o in n)c+=String(n[o]);var l=I.get(c);return l||function(){var t,e;for(e in l=[],M)M[e].forEach((function(t){var a=n[t],r=W(e,t,a);r&&l.push(r)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(f["a"])(t,"align-".concat(n.align),n.align),Object(f["a"])(t,"justify-".concat(n.justify),n.justify),Object(f["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),I.set(c,l)}(),t(n.tag,Object(p["a"])(a,{staticClass:"row",class:l}),r)}}),R=Object(l["a"])(o,a,r,!1,null,"662dd32c",null);e["default"]=R.exports;u()(R,{VBtn:s["a"],VCol:w,VContainer:C["a"],VContent:N,VRow:P})}}]);
//# sourceMappingURL=notfound.3dd3a8da.js.map