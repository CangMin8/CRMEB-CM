(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-dbfaa6e8"],{"31b4":function(t,e,a){"use strict";var n=a("f3f3"),s=a("9860"),o=(s=a.n(s),a("6b6c")),r=a("2f62");s={name:"edit",components:{formCreate:s.a.$form()},computed:Object(n.a)({},Object(r.e)("userLevel",["taskId","levelId"])),props:{FromData:{type:Object,default:null},update:{type:Boolean,default:!0}},data:function(){return{modals:!1,type:0,config:{global:{upload:{props:{onSuccess:function(t,e){200===t.status?e.url=t.data.src:this.Message.error(t.msg)}}}}}}},methods:{couponsType:function(){this.$parent.addType(this.type)},onSubmit:function(t){var e=this;Object(o.a)({url:this.FromData.action,method:this.FromData.method,data:t}).then((function(t){e.update&&e.$parent.getList(),e.$Message.success(t.msg),e.modals=!1,setTimeout((function(){e.$emit("submitFail")}),1e3)})).catch((function(t){e.$Message.error(t.msg)}))},cancel:function(){this.type=0}}},a("3c71"),n=a("2877"),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return t.FromData?e("div",[e("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:t.FromData.title,"z-index":1,width:"700"},on:{"on-cancel":t.cancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[["/marketing/coupon/save.html"===t.FromData.action?e("div",{staticClass:"radio acea-row row-middle"},[e("div",{staticClass:"name ivu-form-item-content"},[t._v("优惠券类型")]),e("Radio-group",{on:{"on-change":t.couponsType},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[e("Radio",{attrs:{label:0}},[t._v("通用券")]),e("Radio",{attrs:{label:1}},[t._v("品类券")]),e("Radio",{attrs:{label:2}},[t._v("商品券")])],1)],1):t._e()],e("form-create",{ref:"fc",staticClass:"formBox",attrs:{option:t.config,rule:Array.from(t.FromData.rules),handleIcon:"false"},on:{"on-submit":t.onSubmit}})],2)],1):t._e()}),[],!1,null,"671a3e20",null);e.a=r.exports},"3c71":function(t,e,a){"use strict";var n=a("be2f");a.n(n).a},be2f:function(t,e,a){},e7d9:function(t,e,a){"use strict";a.r(e);var n=a("c964"),s=a("f3f3"),o=(a("96cf"),a("a9e3"),a("a434"),a("2f62")),r=(a("99af"),a("6b6c"));s={name:"systemAdmin",components:{adminFrom:a("31b4").a},data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},total:0,loading:!1,roleData:{status1:""},formValidate:{roles:"",status:"",name:"",page:1,limit:20},status:"",list:[],columns1:[{title:"姓名",key:"real_name",minWidth:120},{title:"账号",key:"account",minWidth:150},{title:"身份",slot:"roles",minWidth:250},{title:"最后一次登录时间",key:"_last_time",minWidth:180},{title:"最后一次登录ip",key:"last_ip",minWidth:180},{title:"开启",slot:"status",minWidth:90},{title:"操作",key:"action",slot:"action",fixed:"right",minWidth:120}],FromData:null,modalTitleSs:"",ids:Number}},computed:Object(s.a)(Object(s.a)({},Object(o.e)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:50},labelPosition:function(){return this.isMobile?"top":"left"}}),created:function(){this.getList()},methods:{onchangeIsShow:function(t){var e=this;t={id:t.id,status:t.status};t=t,Object(r.a)({url:"setting/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"}).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$Message.success(a.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},submitFail:function(){this.getList()},getList:function(){var t,e=this;this.loading=!0,this.formValidate.roles=this.formValidate.roles||"",t=this.formValidate,Object(r.a)({url:"/setting/admin",method:"get",params:t}).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.total=a.data.count,e.list=a.data.list,e.loading=!1;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$Message.error(t.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()},add:function(){var t=this;Object(r.a)({url:"/setting/admin/create",method:"get"}).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.FromData=a.data,t.$refs.adminfrom.modals=!0;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},edit:function(t){var e=this;t=t.id,Object(r.a)({url:"/setting/admin/".concat(t,"/edit"),method:"get"}).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1===a.data.status)return t.abrupt("return",e.$authLapse(a.data));t.next=2;break;case 2:e.FromData=a.data,e.$refs.adminfrom.modals=!0;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},del:function(t,e,a){var n=this;e={title:e,num:a,url:"setting/admin/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(e).then((function(t){n.$Message.success(t.msg),n.list.splice(a,1)})).catch((function(t){n.$Message.error(t.msg)}))},userSearchs:function(){this.formValidate.status="all"===this.status?"":this.status,this.formValidate.page=1,this.list=[],this.getList()}}},o=a("2877"),a=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[a("Row",{attrs:{type:"flex",gutter:24}},[a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"状态：","label-for":"status1"}},[a("Select",{attrs:{placeholder:"请选择",clearable:""},on:{"on-change":t.userSearchs},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[a("Option",{attrs:{value:"all"}},[t._v("全部")]),a("Option",{attrs:{value:"1"}},[t._v("开启")]),a("Option",{attrs:{value:"0"}},[t._v("关闭")])],1)],1)],1),a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"搜索：","label-for":"status2"}},[a("Input",{attrs:{search:"","enter-button":"",placeholder:"请输入姓名或者账号"},on:{"on-search":t.userSearchs},model:{value:t.formValidate.name,callback:function(e){t.$set(t.formValidate,"name",e)},expression:"formValidate.name"}})],1)],1)],1),a("Row",{attrs:{type:"flex"}},[a("Col",t._b({},"Col",t.grid,!1),[a("Button",{directives:[{name:"auth",rawName:"v-auth",value:["setting-system_admin-add"],expression:"['setting-system_admin-add']"}],attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加管理员")])],1)],1)],1),a("Table",{staticClass:"mt25",attrs:{columns:t.columns1,data:t.list,"no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果",loading:t.loading,"highlight-row":""},scopedSlots:t._u([{key:"roles",fn:function(e){var n=e.row;return e.index,[0!==n.roles.length?a("div",t._l(n.roles.split(","),(function(e,n){return a("Tag",{key:n,attrs:{color:"blue"},domProps:{textContent:t._s(e)}})})),1):t._e()]}},{key:"status",fn:function(e){var n=e.row;return e.index,[a("i-switch",{attrs:{value:n.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(n)}},model:{value:n.status,callback:function(e){t.$set(n,"status",e)},expression:"row.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])])]}},{key:"action",fn:function(e){var n=e.row,s=e.index;return[a("a",{on:{click:function(e){return t.edit(n)}}},[t._v("编辑")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.del(n,"删除管理员",s)}}},[t._v("删除")])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1),a("admin-from",{ref:"adminfrom",attrs:{FromData:t.FromData},on:{submitFail:t.submitFail}})],1)}),[],!1,null,"56580735",null),e.default=a.exports}}]);