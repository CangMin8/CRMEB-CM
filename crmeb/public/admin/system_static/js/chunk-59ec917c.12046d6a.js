(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-59ec917c"],{"0741":function(t,e,a){"use strict";a.r(e);var n=a("0122"),r=a("c964"),o=a("f3f3"),i=(a("498a"),a("d81d"),a("a434"),a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("b636"),a("944a"),a("0c47"),a("23dc"),a("3410"),a("d9e2"),a("159b"),a("b0c0"),a("131a"),a("fb6a"),a("2f62")),l=a("90e7");function s(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */s=function(){return t};var t={},e=Object.prototype,a=e.hasOwnProperty,r=Object.defineProperty||function(t,e,a){t[e]=a.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(e){u=function(t,e,a){return t[e]=a}}function d(t,e,a,n){var o,i,l,s;e=e&&e.prototype instanceof h?e:h,e=Object.create(e.prototype),n=new k(n||[]);return r(e,"_invoke",{value:(o=t,i=a,l=n,s="suspendedStart",function(t,e){if("executing"===s)throw new Error("Generator is already running");if("completed"===s){if("throw"===t)throw e;return F()}for(l.method=t,l.arg=e;;){var a=l.delegate;if(a&&(a=function t(e,a){var n=a.method,r=e.iterator[n];return void 0===r?(a.delegate=null,"throw"===n&&e.iterator.return&&(a.method="return",a.arg=void 0,t(e,a),"throw"===a.method)||"return"!==n&&(a.method="throw",a.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m):(n=f(r,e.iterator,a.arg),"throw"===n.type?(a.method="throw",a.arg=n.arg,a.delegate=null,m):(r=n.arg,r?r.done?(a[e.resultName]=r.value,a.next=e.nextLoc,"return"!==a.method&&(a.method="next",a.arg=void 0),a.delegate=null,m):r:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,m)))}(a,l),a)){if(a===m)continue;return a}if("next"===l.method)l.sent=l._sent=l.arg;else if("throw"===l.method){if("suspendedStart"===s)throw s="completed",l.arg;l.dispatchException(l.arg)}else"return"===l.method&&l.abrupt("return",l.arg);if(s="executing",a=f(o,i,l),"normal"===a.type){if(s=l.done?"completed":"suspendedYield",a.arg===m)continue;return{value:a.arg,done:l.done}}"throw"===a.type&&(s="completed",l.method="throw",l.arg=a.arg)}})}),e}function f(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var m={};function h(){}function p(){}function g(){}o={};var v=(u(o,i,(function(){return this})),Object.getPrototypeOf),b=(v=v&&v(v(L([]))),v&&v!==e&&a.call(v,i)&&(o=v),g.prototype=h.prototype=Object.create(o));function y(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var o;r(this,"_invoke",{value:function(r,i){function l(){return new e((function(o,l){!function r(o,i,l,s){var c;o=f(t[o],t,i);if("throw"!==o.type)return(i=(c=o.arg).value)&&"object"==Object(n.a)(i)&&a.call(i,"__await")?e.resolve(i.__await).then((function(t){r("next",t,l,s)}),(function(t){r("throw",t,l,s)})):e.resolve(i).then((function(t){c.value=t,l(c)}),(function(t){return r("throw",t,l,s)}));s(o.arg)}(r,i,o,l)}))}return o=o?o.then(l,l):l()}})}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function L(t){if(t){var e,n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return e=-1,(n=function n(){for(;++e<t.length;)if(a.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n}).next=n}return{next:F}}function F(){return{value:void 0,done:!0}}return r(b,"constructor",{value:p.prototype=g,configurable:!0}),r(g,"constructor",{value:p,configurable:!0}),p.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){return t="function"==typeof t&&t.constructor,!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},y(w.prototype),u(w.prototype,l,(function(){return this})),t.AsyncIterator=w,t.async=function(e,a,n,r,o){void 0===o&&(o=Promise);var i=new w(d(e,a,n,r),o);return t.isGeneratorFunction(a)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(b),u(b,c,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e,a=Object(t),n=[];for(e in a)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in a)return t.value=e,t.done=!1,t}return t.done=!0,t}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(a,n){return i.type="throw",i.arg=t,e.next=a,n&&(e.method="next",e.arg=void 0),!!n}for(var r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),x(a),m}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var a,n,r=this.tryEntries[e];if(r.tryLoc===t)return"throw"===(a=r.completion).type&&(n=a.arg,x(r)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:L(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},t}o={data:function(){return{addlangModal:!1,traTabLoading:!1,langType:{},formValidate:{is_admin:0,type_id:1,remarks:"",page:1,limit:20},total:0,FormLoading:!0,loading:!1,ruleValidate:{code:[{required:!0,message:"请输入状态码/文字",trigger:"blur"}],remarks:[{required:!0,message:"请输入文字",trigger:"blur"}]},langColumns:[{title:"语言类型",key:"language_name",width:120},{title:"对应语言翻译",slot:"lang_explain",minWidth:250}],langData:[],langFormData:{is_admin:0,code:"",remarks:"",edit:0,list:[]},tabList:[],FromData:null,extractId:0,code:null}},computed:Object(o.a)(Object(o.a)({},Object(i.d)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:"80px"},labelPosition:function(){return this.isMobile?"top":"right"}}),mounted:function(){this.getList()},methods:{translate:function(){var t=this;if(!this.langFormData.remarks.trim())return this.$message.warning("请先输入翻译内容");this.traTabLoading=!0,Object(l.M)({text:this.langFormData.remarks}).then((function(e){t.langFormData.list.map((function(t){t.lang_explain=e.data[t.type_id]})),t.traTabLoading=!1})).catch((function(e){t.traTabLoading=!1,t.$message.error(e.msg)}))},add:function(){this.langFormData.list=this.langType.langType.map((function(t){return{language_name:t.title,lang_explain:"",remarks:"",type_id:t.value}})),this.addlangModal=!0},ok:function(){var t=this;if(!this.langFormData.remarks.trim())return this.FormLoading=!1,this.$nextTick((function(){t.FormLoading=!0})),this.$message.error("请先输入语言说明");Object(l.L)(this.langFormData).then((function(e){t.addlangModal=!1,t.$message.success(e.msg),t.getList()})).catch((function(e){t.FormLoading=!1,t.$nextTick((function(){t.FormLoading=!0})),t.$message.error(e.msg)}))},edit:function(t){var e=this;this.langFormData.is_admin=this.formValidate.is_admin,this.code=t.code,Object(l.J)({code:t.code}).then((function(t){e.langFormData.list=t.data.list,e.langFormData.code=t.data.code,e.langFormData.remarks=t.data.remarks,e.langFormData.edit=1,e.addlangModal=!0})).catch((function(t){e.loading=!1,e.$message.error(t.msg)}))},del:function(t,e,a){var n=this;e={title:e,num:a,url:"setting/lang_code/del/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(e).then((function(t){n.$message.success(t.msg),n.tabList.splice(a,1)})).catch((function(t){n.$message.error(t.msg)}))},modalChange:function(){this.langFormData={is_admin:0,name:"",code:"",list:[]},this.code=null},selChange:function(){this.formValidate.page=1,this.getList()},getList:function(){var t=this;this.loading=!0,Object(l.K)(this.formValidate).then(function(){var e=Object(r.a)(s().mark((function e(a){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!1,t.tabList=a.data.list,t.total=a.data.count,t.langType=a.data.langType;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$message.error(e.msg)}))}}},a("bda8"),i=a("2877"),a=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",{staticClass:"ivu-mb-16",attrs:{bordered:!1,shadow:"never","body-style":{padding:0}}},[a("div",{staticClass:"padding-add"},[a("el-form",{attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":"right",inline:""},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",{attrs:{label:"语言分类："}},[a("el-select",{staticClass:"form_content_width",attrs:{clearable:""},on:{change:t.selChange},model:{value:t.formValidate.is_admin,callback:function(e){t.$set(t.formValidate,"is_admin",e)},expression:"formValidate.is_admin"}},t._l(t.langType.isAdmin,(function(t,e){return a("el-option",{key:e,attrs:{label:t.title,value:t.value}})})),1)],1),a("el-form-item",{attrs:{label:"语言类型："}},[a("el-select",{staticClass:"form_content_width",attrs:{clearable:""},on:{change:t.selChange},model:{value:t.formValidate.type_id,callback:function(e){t.$set(t.formValidate,"type_id",e)},expression:"formValidate.type_id"}},t._l(t.langType.langType,(function(t,e){return a("el-option",{key:e,attrs:{label:t.title,value:t.value}})})),1)],1),a("el-form-item",{attrs:{label:"搜索："}},[a("el-input",{staticClass:"form_content_width",attrs:{clearable:"",placeholder:"请输入语言备注"},model:{value:t.formValidate.remarks,callback:function(e){t.$set(t.formValidate,"remarks",e)},expression:"formValidate.remarks"}})],1),a("el-form-item",[a("el-button",{staticClass:"userSearch",attrs:{type:"primary"},on:{click:t.selChange}},[t._v("搜索")])],1)],1)],1)]),a("el-alert",{staticClass:"mt10",attrs:{closable:!0,title:"使用说明"}},[[t._v("\n      1、前端页面：添加用户端页面语言，添加完成之后状态码为中文文字，前端页面使用 $t(`xxxx`)，js文件中使用\n      this.t(`xxxx`) 或者使用 that.t(`xxxx`)"),a("br"),t._v("\n      2、后端接口：添加后端接口语言，添加完成之后状态码为6位数字，后台抛错或者控制器返回文字的时候直接填写状态码数字\n    ")]],2),a("el-card",{staticClass:"mt14",attrs:{bordered:!1,shadow:"never"}},[a("el-row",{staticClass:"mb14"},[a("el-col",[a("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("添加语句")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",staticClass:"ivu-mt",attrs:{data:t.tabList,"empty-text":"暂无数据"}},[a("el-table-column",{attrs:{label:"编号",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.id))])]}}])}),a("el-table-column",{attrs:{label:"原语句","min-width":"230"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.remarks))])]}}])}),a("el-table-column",{attrs:{label:"对应语言翻译","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.lang_explain))])]}}])}),a("el-table-column",{attrs:{label:"状态码/文字(接口/页面调用参考)","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.code))])]}}])}),a("el-table-column",{attrs:{label:"语言类型","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.language_name))])]}}])}),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{on:{click:function(a){return t.edit(e.row)}}},[t._v("编辑")]),a("el-divider",{attrs:{direction:"vertical"}}),a("a",{on:{click:function(a){return t.del(e.row,"删除语言",e.$index)}}},[t._v("删除")])]}}])})],1),a("div",{staticClass:"acea-row row-right page"},[t.total?a("pagination",{attrs:{total:t.total,page:t.formValidate.page,limit:t.formValidate.limit},on:{"update:page":function(e){return t.$set(t.formValidate,"page",e)},"update:limit":function(e){return t.$set(t.formValidate,"limit",e)},pagination:t.getList}}):t._e()],1)],1),a("el-dialog",{attrs:{visible:t.addlangModal,width:"720px",title:"添加需要翻译的语句"},on:{"update:visible":function(e){t.addlangModal=e},closed:t.modalChange}},[a("el-form",{ref:"langFormData",attrs:{model:t.langFormData,rules:t.ruleValidate}},[a("el-form-item",{staticClass:"mb20",attrs:{label:"应用端：","label-width":"120px"}},[a("el-radio-group",{staticClass:"mr15",attrs:{type:"button"},model:{value:t.langFormData.is_admin,callback:function(e){t.$set(t.langFormData,"is_admin",e)},expression:"langFormData.is_admin"}},t._l(t.langType.isAdmin,(function(e,n){return a("el-radio",{key:n,attrs:{label:e.value}},[t._v(t._s(e.title))])})),1)],1),a("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:t.langFormData.edit,callback:function(e){t.$set(t.langFormData,"edit",e)},expression:"langFormData.edit"}}),a("el-form-item",{staticClass:"mb20",attrs:{label:"需要翻译的语句：",prop:"remarks"}},[a("el-input",{staticStyle:{width:"330px"},attrs:{placeholder:"请输入需要添加翻译的语句",search:""},on:{"on-search":t.translate},model:{value:t.langFormData.remarks,callback:function(e){t.$set(t.langFormData,"remarks",e)},expression:"langFormData.remarks"}},[a("el-button",{attrs:{slot:"append",type:"primary"},on:{click:t.translate},slot:"append"},[t._v("翻译")])],1)],1),a("el-form-item",{staticClass:"mb20",attrs:{prop:"remark"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.traTabLoading,expression:"traTabLoading"}],ref:"langTable",attrs:{data:t.langFormData.list,"empty-text":"暂无数据"}},[a("el-table-column",{attrs:{label:"语言类型",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(" "+t._s(e.row.language_name))])]}}])}),a("el-table-column",{attrs:{label:"对应语言翻译","min-width":"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{staticClass:"priceBox",model:{value:e.row.lang_explain,callback:function(a){t.$set(e.row,"lang_explain",a)},expression:"scope.row.lang_explain"}})]}}])})],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addlangModal=!1}}},[t._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.ok}},[t._v("确定")])],1)],1)],1)}),[],!1,null,"072d8bf3",null),e.default=a.exports},a6ef:function(t,e,a){},bda8:function(t,e,a){"use strict";var n=a("a6ef");a.n(n).a}}]);