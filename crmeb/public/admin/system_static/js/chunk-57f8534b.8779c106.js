(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-57f8534b"],{"33b8":function(t,e,r){"use strict";r.r(e),r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("3410"),r("d9e2"),r("159b"),r("b0c0"),r("131a"),r("fb6a");var n=r("0122"),o=r("c964"),a=r("f3f3"),i=(r("a434"),r("2f62")),u=(r("a9e3"),r("8593"));function c(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(e){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a,i,u,c;e=e&&e.prototype instanceof m?e:m,e=Object.create(e.prototype),n=new j(n||[]);return o(e,"_invoke",{value:(a=t,i=r,u=n,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return L()}for(u.method=t,u.arg=e;;){var r=u.delegate;if(r&&(r=function t(e,r){var n=r.method,o=e.iterator[n];return void 0===o?(r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h):(n=d(o,e.iterator,r.arg),"throw"===n.type?(r.method="throw",r.arg=n.arg,r.delegate=null,h):(o=n.arg,o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)))}(r,u),r)){if(r===h)continue;return r}if("next"===u.method)u.sent=u._sent=u.arg;else if("throw"===u.method){if("suspendedStart"===c)throw c="completed",u.arg;u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg);if(c="executing",r=d(a,i,u),"normal"===r.type){if(c=u.done?"completed":"suspendedYield",r.arg===h)continue;return{value:r.arg,done:u.done}}"throw"===r.type&&(c="completed",u.method="throw",u.arg=r.arg)}})}),e}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h={};function m(){}function p(){}function g(){}a={};var v=(l(a,i,(function(){return this})),Object.getPrototypeOf),y=(v=v&&v(v(x([]))),v&&v!==e&&r.call(v,i)&&(a=v),g.prototype=m.prototype=Object.create(a));function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var a;o(this,"_invoke",{value:function(o,i){function u(){return new e((function(a,u){!function o(a,i,u,c){var s;a=d(t[a],t,i);if("throw"!==a.type)return(i=(s=a.arg).value)&&"object"==Object(n.a)(i)&&r.call(i,"__await")?e.resolve(i.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):e.resolve(i).then((function(t){s.value=t,u(s)}),(function(t){return o("throw",t,u,c)}));c(a.arg)}(o,i,a,u)}))}return a=a?a.then(u,u):u()}})}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function x(t){if(t){var e,n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return e=-1,(n=function n(){for(;++e<t.length;)if(r.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n}).next=n}return{next:L}}function L(){return{value:void 0,done:!0}}return o(y,"constructor",{value:p.prototype=g,configurable:!0}),o(g,"constructor",{value:p,configurable:!0}),p.displayName=l(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){return t="function"==typeof t&&t.constructor,!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,s,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(w.prototype),l(w.prototype,u,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),l(y,s,"Generator"),l(y,i,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e,r=Object(t),n=[];for(e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},t.values=x,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;0<=o;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}var i=(a=a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc?null:a)?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,_(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var s={name:"menusFrom",props:{groupId:{type:Number,default:0},titleFrom:{type:String,default:""},addId:{type:String,default:""}},data:function(){return{iconVal:"",grid:{xl:7,lg:7,md:12,sm:24,xs:24},modals:!1,modal12:!1,ruleValidate:{name:[{required:!0,message:"请输入数据组名称",trigger:"blur"}],config_name:[{required:!0,message:"请输入数据字段",trigger:"blur"}],info:[{required:!0,message:"请输入数据简介",trigger:"blur"}],names:[{required:!0,message:"请输入字段名称",trigger:"blur"}]},FromData:[],valids:!1,list2:[],formValidate:{name:"",config_name:"",info:"",typelist:[],cate_id:0}}},watch:{addId:function(t){"addId"===t&&(this.formValidate.typelist=[])}},methods:{addType:function(){this.formValidate.typelist.push({name:{value:""},title:{value:""},type:{value:""},param:{placeholder:"参数方式例如:\n1=白色\n2=红色\n3=黑色",value:""}})},delGroup:function(t){this.formValidate.typelist.splice(t,1)},fromData:function(t){var e=this;Object(u.K)(t).then(function(){var t=Object(o.a)(c().mark((function t(r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.formValidate=r.data.info;case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},handleSubmit:function(t){var e=this,r={url:this.groupId?"/setting/group/".concat(this.groupId):"setting/group",method:this.groupId?"put":"post",datas:this.formValidate};this.$refs[t].validate((function(n){return n?0===e.formValidate.typelist.length?e.$Message.error("请添加字段名称：姓名！"):void Object(u.D)(r).then(function(){var r=Object(o.a)(c().mark((function r(n){return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.$Message.success(n.msg),e.modals=!1,e.$refs[t].resetFields(),e.formValidate.typelist=[],e.$emit("getList");case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)})):e.formValidate.name?e.formValidate.config_name?e.formValidate.info?void 0:e.$Message.error("请添加数据简介！"):e.$Message.error("请添加数据字段！"):e.$Message.error("请添加数据组名称！")}))},handleReset:function(){this.modals=!1,this.$refs.formValidate.resetFields(),this.$emit("clearFrom")}},created:function(){},mounted:function(){}};r("ad9c"),r=r("2877");function l(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(e){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a,i,u,c;e=e&&e.prototype instanceof m?e:m,e=Object.create(e.prototype),n=new j(n||[]);return o(e,"_invoke",{value:(a=t,i=r,u=n,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return L()}for(u.method=t,u.arg=e;;){var r=u.delegate;if(r&&(r=function t(e,r){var n=r.method,o=e.iterator[n];return void 0===o?(r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h):(n=d(o,e.iterator,r.arg),"throw"===n.type?(r.method="throw",r.arg=n.arg,r.delegate=null,h):(o=n.arg,o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)))}(r,u),r)){if(r===h)continue;return r}if("next"===u.method)u.sent=u._sent=u.arg;else if("throw"===u.method){if("suspendedStart"===c)throw c="completed",u.arg;u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg);if(c="executing",r=d(a,i,u),"normal"===r.type){if(c=u.done?"completed":"suspendedYield",r.arg===h)continue;return{value:r.arg,done:u.done}}"throw"===r.type&&(c="completed",u.method="throw",u.arg=r.arg)}})}),e}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h={};function m(){}function p(){}function g(){}a={};var v=(s(a,i,(function(){return this})),Object.getPrototypeOf),y=(v=v&&v(v(x([]))),v&&v!==e&&r.call(v,i)&&(a=v),g.prototype=m.prototype=Object.create(a));function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var a;o(this,"_invoke",{value:function(o,i){function u(){return new e((function(a,u){!function o(a,i,u,c){var s;a=d(t[a],t,i);if("throw"!==a.type)return(i=(s=a.arg).value)&&"object"==Object(n.a)(i)&&r.call(i,"__await")?e.resolve(i.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):e.resolve(i).then((function(t){s.value=t,u(s)}),(function(t){return o("throw",t,u,c)}));c(a.arg)}(o,i,a,u)}))}return a=a?a.then(u,u):u()}})}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function x(t){if(t){var e,n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return e=-1,(n=function n(){for(;++e<t.length;)if(r.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n}).next=n}return{next:L}}function L(){return{value:void 0,done:!0}}return o(y,"constructor",{value:p.prototype=g,configurable:!0}),o(g,"constructor",{value:p,configurable:!0}),p.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){return t="function"==typeof t&&t.constructor,!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(w.prototype),s(w.prototype,u,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),s(y,c,"Generator"),s(y,i,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e,r=Object(t),n=[];for(e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},t.values=x,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;0<=o;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}var i=(a=a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc?null:a)?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,_(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}s={name:"group",components:{groupFrom:Object(r.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Modal",{attrs:{width:"850",scrollable:"","footer-hide":"",closable:"",title:t.titleFrom,"mask-closable":!1},on:{"on-cancel":t.handleReset},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[r("Form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":100,rules:t.ruleValidate},nativeOn:{submit:function(t){t.preventDefault()}}},[r("Row",{attrs:{type:"flex",gutter:24}},[r("Col",{attrs:{span:"24"}},[r("FormItem",{attrs:{label:"数据组名称：",prop:"name"}},[r("Input",{staticStyle:{width:"90%"},attrs:{placeholder:"请输入数据组名称"},model:{value:t.formValidate.name,callback:function(e){t.$set(t.formValidate,"name",e)},expression:"formValidate.name"}})],1)],1),r("Col",{attrs:{span:"24"}},[r("FormItem",{attrs:{label:"数据字段：",prop:"config_name"}},[r("Input",{staticStyle:{width:"90%"},attrs:{placeholder:"请输入数据字段"},model:{value:t.formValidate.config_name,callback:function(e){t.$set(t.formValidate,"config_name",e)},expression:"formValidate.config_name"}})],1)],1),r("Col",{attrs:{span:"24"}},[r("FormItem",{attrs:{label:"数据简介：",prop:"info"}},[r("Input",{staticStyle:{width:"90%"},attrs:{placeholder:"请输入数据简介"},model:{value:t.formValidate.info,callback:function(e){t.$set(t.formValidate,"info",e)},expression:"formValidate.info"}})],1)],1),r("Col",{attrs:{span:"24"}},[r("FormItem",{attrs:{label:"数类型：",prop:"cate_id"}},[r("RadioGroup",{model:{value:t.formValidate.cate_id,callback:function(e){t.$set(t.formValidate,"cate_id",e)},expression:"formValidate.cate_id"}},[r("Radio",{attrs:{label:0}},[t._v("默认")]),r("Radio",{attrs:{label:1}},[t._v("数据")])],1)],1)],1),t._l(t.formValidate.typelist,(function(e,n){return r("Col",{key:n,attrs:{span:"24"}},[r("Col",t._b({},"Col",t.grid,!1),[r("FormItem",{attrs:{label:"字段"+(n+1)+"：",prop:"typelist."+n+".name.value",rules:{required:!0,message:"请输入字段名称：姓名",trigger:"blur"}}},[r("Input",{attrs:{placeholder:"字段名称：姓名"},model:{value:e.name.value,callback:function(r){t.$set(e.name,"value",r)},expression:"item.name.value"}})],1)],1),r("Col",t._b({staticClass:"goupBox"},"Col",t.grid,!1),[r("FormItem",{attrs:{prop:"typelist."+n+".title.value",rules:{required:!0,message:"请输入字段配置名",trigger:"blur"}}},[r("Input",{attrs:{placeholder:"字段配置名：name"},model:{value:e.title.value,callback:function(r){t.$set(e.title,"value",r)},expression:"item.title.value"}})],1)],1),r("Col",t._b({staticClass:"goupBox mr15",attrs:{prop:"type"}},"Col",t.grid,!1),[r("FormItem",{attrs:{prop:"typelist."+n+".type.value",rules:{required:!0,message:"请选择字段类型",trigger:"change"}}},[r("i-select",{attrs:{placeholder:"字段类型"},model:{value:e.type.value,callback:function(r){t.$set(e.type,"value",r)},expression:"item.type.value"}},[r("i-option",{attrs:{value:"input"}},[t._v("文本框")]),r("i-option",{attrs:{value:"textarea"}},[t._v("多行文本框")]),r("i-option",{attrs:{value:"radio"}},[t._v("单选框")]),r("i-option",{attrs:{value:"checkbox"}},[t._v("多选框")]),r("i-option",{attrs:{value:"select"}},[t._v("下拉选择")]),r("i-option",{attrs:{value:"upload"}},[t._v("单图")]),r("i-option",{attrs:{value:"uploads"}},[t._v("多图")])],1)],1)],1),r("Col",{attrs:{span:"1"}},[r("Icon",{staticClass:"cur",attrs:{type:"ios-close-circle-outline"},on:{click:function(e){return t.delGroup(n)}}})],1),"radio"===e.type.value||"checkbox"===e.type.value||"select"===e.type.value?r("Col",{attrs:{span:"24"}},[r("FormItem",{attrs:{prop:"typelist."+n+".param.value",rules:{required:!0,message:"请输入参数方式",trigger:"blur"}}},[r("Input",{staticStyle:{width:"90%"},attrs:{type:"textarea",rows:4,placeholder:e.param.placeholder},model:{value:e.param.value,callback:function(r){t.$set(e.param,"value",r)},expression:"item.param.value"}})],1)],1):t._e()],1)})),r("Col",[r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:t.addType}},[t._v("添加字段")])],1)],1),r("Col",{attrs:{span:"24"}},[r("Button",{attrs:{type:"primary",long:"",disabled:t.valids},on:{click:function(e){return t.handleSubmit("formValidate")}}},[t._v("提交")])],1)],2)],1)],1)],1)}),[],!1,null,"5f76ce77",null).exports},data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},formValidate:{page:1,limit:20,title:""},loading:!1,tabList:[],total:0,columns1:[{title:"ID",key:"id",width:80},{title:"KEY",key:"config_name",minWidth:130},{title:"数据组名称",key:"name",minWidth:130},{title:"简介",key:"info",minWidth:130},{title:"操作",slot:"action",fixed:"right",minWidth:150}],FromData:null,titleFrom:"",groupId:0,addId:""}},computed:Object(a.a)(Object(a.a)({},Object(i.d)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"right"}}),mounted:function(){this.getList()},methods:{goList:function(t){this.$router.push({path:this.$routeProStr+"/system/config/system_group/list/"+t.id})},getList:function(){var t=this;this.loading=!0,Object(u.L)(this.formValidate).then(function(){var e=Object(o.a)(l().mark((function e(r){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=r.data,t.tabList=n.list,t.total=n.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()},userSearchs:function(){this.formValidate.page=1,this.getList()},groupAdd:function(t){this.$refs.groupfroms.modals=!0,this.titleFrom=t,this.addId="addId",this.groupId=0},del:function(t,e,r){var n=this;e={title:e,num:r,url:"setting/group/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(e).then((function(t){n.$Message.success(t.msg),n.tabList.splice(r,1),n.getList()})).catch((function(t){n.$Message.error(t.msg)}))},edit:function(t,e){this.titleFrom=e,this.groupId=t.id,this.$refs.groupfroms.fromData(t.id),this.$refs.groupfroms.modals=!0,this.addId=""}}},a=Object(r.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[r("Form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[r("Row",{attrs:{type:"flex",gutter:24}},[r("Col",t._b({},"Col",t.grid,!1),[r("FormItem",{attrs:{label:"数据搜索：","label-for":"status2"}},[r("Input",{attrs:{search:"","enter-button":"",placeholder:"请输入ID,KEY,数据组名称,简介"},on:{"on-search":t.userSearchs},model:{value:t.formValidate.title,callback:function(e){t.$set(t.formValidate,"title",e)},expression:"formValidate.title"}})],1)],1)],1),r("Row",{attrs:{type:"flex"}},[r("Col",t._b({},"Col",t.grid,!1),[r("Button",{staticClass:"mr20",attrs:{type:"primary",icon:"md-add"},on:{click:function(e){return t.groupAdd("添加数据组")}}},[t._v("添加数据组")])],1)],1)],1),r("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns1,data:t.tabList,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"statuss",fn:function(e){var n=e.row;return e.index,[r("i-switch",{attrs:{value:n.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(n)}},model:{value:n.status,callback:function(e){t.$set(n,"status",e)},expression:"row.status"}},[r("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),r("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"action",fn:function(e){var n=e.row,o=e.index;return[r("a",{on:{click:function(e){return t.goList(n)}}},[t._v("数据列表")]),r("Divider",{attrs:{type:"vertical"}}),r("a",{on:{click:function(e){return t.edit(n,"编辑")}}},[t._v("编辑")]),r("Divider",{attrs:{type:"vertical"}}),r("a",{on:{click:function(e){return t.del(n,"删除数据组",o)}}},[t._v("删除")])]}}])}),r("div",{staticClass:"acea-row row-right page"},[r("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1),r("group-from",{ref:"groupfroms",attrs:{titleFrom:t.titleFrom,groupId:t.groupId,addId:t.addId},on:{getList:t.getList}})],1)}),[],!1,null,"e41db00c",null),e.default=a.exports},8593:function(t,e,r){"use strict";r.d(e,"i",(function(){return o})),r.d(e,"g",(function(){return a})),r.d(e,"h",(function(){return i})),r.d(e,"db",(function(){return u})),r.d(e,"m",(function(){return c})),r.d(e,"k",(function(){return s})),r.d(e,"l",(function(){return l})),r.d(e,"j",(function(){return f})),r.d(e,"L",(function(){return d})),r.d(e,"D",(function(){return h})),r.d(e,"K",(function(){return m})),r.d(e,"I",(function(){return p})),r.d(e,"F",(function(){return g})),r.d(e,"G",(function(){return v})),r.d(e,"H",(function(){return y})),r.d(e,"J",(function(){return b})),r.d(e,"Z",(function(){return w})),r.d(e,"fb",(function(){return O})),r.d(e,"s",(function(){return _})),r.d(e,"c",(function(){return j})),r.d(e,"e",(function(){return x})),r.d(e,"b",(function(){return L})),r.d(e,"d",(function(){return k})),r.d(e,"f",(function(){return E})),r.d(e,"w",(function(){return I})),r.d(e,"u",(function(){return V})),r.d(e,"v",(function(){return F})),r.d(e,"Q",(function(){return T})),r.d(e,"P",(function(){return S})),r.d(e,"R",(function(){return $})),r.d(e,"Y",(function(){return G})),r.d(e,"o",(function(){return C})),r.d(e,"n",(function(){return P})),r.d(e,"U",(function(){return N})),r.d(e,"q",(function(){return M})),r.d(e,"t",(function(){return D})),r.d(e,"V",(function(){return q})),r.d(e,"a",(function(){return R})),r.d(e,"A",(function(){return A})),r.d(e,"cb",(function(){return W})),r.d(e,"E",(function(){return Y})),r.d(e,"rb",(function(){return B})),r.d(e,"qb",(function(){return z})),r.d(e,"M",(function(){return K})),r.d(e,"O",(function(){return U})),r.d(e,"B",(function(){return J})),r.d(e,"S",(function(){return H})),r.d(e,"T",(function(){return Q})),r.d(e,"x",(function(){return X})),r.d(e,"ab",(function(){return Z})),r.d(e,"y",(function(){return tt})),r.d(e,"bb",(function(){return et})),r.d(e,"p",(function(){return rt})),r.d(e,"C",(function(){return nt})),r.d(e,"z",(function(){return ot})),r.d(e,"W",(function(){return at})),r.d(e,"lb",(function(){return it})),r.d(e,"nb",(function(){return ut})),r.d(e,"kb",(function(){return ct})),r.d(e,"ob",(function(){return st})),r.d(e,"mb",(function(){return lt})),r.d(e,"r",(function(){return ft})),r.d(e,"pb",(function(){return dt})),r.d(e,"gb",(function(){return ht})),r.d(e,"eb",(function(){return mt})),r.d(e,"hb",(function(){return pt})),r.d(e,"X",(function(){return gt})),r.d(e,"jb",(function(){return vt})),r.d(e,"N",(function(){return yt})),r.d(e,"ib",(function(){return bt})),r("99af");var n=r("6b6c");function o(t){return Object(n.a)({url:"setting/config_class",method:"get",params:t})}function a(t){return Object(n.a)({url:"setting/config_class/create",method:"get"})}function i(t){return Object(n.a)({url:"setting/config_class/".concat(t,"/edit"),method:"get"})}function u(t){return Object(n.a)({url:"setting/config_class/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function c(t){return Object(n.a)({url:"setting/config",method:"get",params:t})}function s(t){return Object(n.a)({url:"setting/config/create",method:"get",params:t})}function l(t){return Object(n.a)({url:"/setting/config/".concat(t,"/edit"),method:"get"})}function f(t,e){return Object(n.a)({url:"setting/config/set_status/".concat(t,"/").concat(e),method:"PUT"})}function d(t){return Object(n.a)({url:"setting/group",method:"get",params:t})}function h(t){return Object(n.a)({url:t.url,method:t.method,data:t.datas})}function m(t){return Object(n.a)({url:"setting/group/".concat(t),method:"get"})}function p(t,e){return Object(n.a)({url:e,method:"get",params:t})}function g(t,e){return Object(n.a)({url:e,method:"get",params:t})}function v(t,e){return Object(n.a)({url:e,method:"get",params:t})}function y(t,e){return Object(n.a)({url:e,method:"get",params:t})}function b(t){return Object(n.a)({url:t,method:"PUT"})}function w(t){return Object(n.a)({url:"system/log/search_admin",method:"GET"})}function O(t){return Object(n.a)({url:"system/log",method:"GET",params:t})}function _(){return Object(n.a)({url:"system/file",method:"GET"})}function j(){return Object(n.a)({url:"system/backup",method:"GET"})}function x(t){return Object(n.a)({url:"system/backup/read",method:"GET",params:t})}function L(t){return Object(n.a)({url:"system/backup/backup",method:"put",data:t})}function k(t){return Object(n.a)({url:"system/backup/optimize",method:"put",data:t})}function E(t){return Object(n.a)({url:"system/backup/repair",method:"put",data:t})}function I(t){return Object(n.a)({url:"system/backup/file_list",method:"GET"})}function V(t){return Object(n.a)({url:"backup/download",method:"get",params:t})}function F(t){return Object(n.a)({url:"system/backup/import",method:"POST",data:t})}function T(t){return Object(n.a)({url:"system/file/login",method:"POST",data:t})}function S(t){return Object(n.a)({url:"system/file/opendir",method:"GET",params:t,file_edit:!0})}function $(t){return Object(n.a)({url:"system/file/openfile",method:"GET",params:t,file_edit:!0})}function G(t){return Object(n.a)({url:"system/file/savefile?fileToken=".concat(t.fileToken),method:"post",data:t,file_edit:!0})}function C(t){return Object(n.a)({url:"system/file/createFolder",method:"GET",params:t,file_edit:!0})}function P(t){return Object(n.a)({url:"system/file/createFile",method:"GET",params:t,file_edit:!0})}function N(t){return Object(n.a)({url:"system/file/rename",method:"GET",params:t,file_edit:!0})}function M(t){return Object(n.a)({url:"system/file/delFolder",method:"GET",params:t,file_edit:!0})}function D(t){return Object(n.a)({url:"system/file/mark",method:"get",params:t,file_edit:!0})}function q(t){return Object(n.a)({url:"system/replace_site_url",method:"post",data:t})}function R(){return Object(n.a)({url:"auth",method:"get"})}function A(){return Object(n.a)({url:"setting/get_kf_adv",method:"get"})}function W(t){return Object(n.a)({url:"setting/set_kf_adv",method:"post",data:t})}function Y(){return Object(n.a)({url:"setting/group_all",method:"get"})}function B(t){return Object(n.a)({url:"system/version_list",method:"get",params:t})}function z(t){return Object(n.a)({url:"system/version_crate/".concat(t),method:"get"})}function K(t){return Object(n.a)({url:"setting/group_data/save_all",method:"POST",data:t})}function U(t){return Object(n.a)({url:"diy/open_adv/add",method:"POST",data:t})}function J(){return Object(n.a)({url:"diy/open_adv/info",method:"get"})}function H(t){return Object(n.a)({url:"setting/config/get_system/".concat(t),method:"get"})}function Q(t){return Object(n.a)({url:"setting/config/save_basics",method:"POST",data:t})}function X(){return Object(n.a)({url:"setting/get_user_agreement",method:"get"})}function Z(t){return Object(n.a)({url:"setting/set_user_agreement",method:"post",data:t})}function tt(t){return Object(n.a)({url:"setting/get_agreement/".concat(t),method:"get"})}function et(t,e){return Object(n.a)({url:"setting/save_agreement",method:"post",data:t})}function rt(t){return Object(n.a)({url:"crmeb_product",method:"get",params:t})}function nt(){return Object(n.a)({url:"setting/get_version",method:"get"})}function ot(){return Object(n.a)({url:"copyright",method:"get"})}function at(t){return Object(n.a)({url:"copyright",method:"post",data:t})}function it(t){return Object(n.a)({url:"/system/upgrade/list",method:"get",params:t})}function ut(){return Object(n.a)({url:"/system/upgrade_progress",method:"get"})}function ct(){return Object(n.a)({url:"/system/upgrade/agreement",method:"get"})}function st(){return Object(n.a)({url:"/system/upgrade_status",method:"get"})}function lt(t){return Object(n.a)({url:"/system/upgrade_log/list",method:"get",params:t})}function ft(t){return Object(n.a)({url:"/system/upgrade_download/"+t,method:"POST"})}function dt(t){return Object(n.a)({url:"/system/upgradeable/list",method:"get",params:t})}function ht(t){return Object(n.a)({url:"system/crontab/list",params:t})}function mt(t,e){return Object(n.a)({url:"system/crontab/set_open/".concat(t,"/").concat(e)})}function pt(t){return Object(n.a)({url:"system/crontab/info/".concat(t)})}function gt(t){return Object(n.a)({url:"system/crontab/save",method:"post",data:t})}function vt(t){return Object(n.a)({url:"system/database/update_mark",method:"post",data:t})}function yt(t,e){return Object(n.a)({url:"system/file/mark/save?fileToken=".concat(t),method:"post",data:e})}function bt(){return Object(n.a)({url:"system/crontab/mark"})}},ad9c:function(t,e,r){"use strict";var n=r("da39");r.n(n).a},da39:function(t,e,r){}}]);