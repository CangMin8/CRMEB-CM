(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-33a0fffa"],{"1c2f":function(t,e,n){"use strict";n.r(e);var r=n("c7eb"),u=n("1da1"),o=n("8593"),c={name:"systemFile",data:function(){return{loading:!1,tabList:[]}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.loading=!0,Object(o.x)().then(function(){var e=Object(u.a)(Object(r.a)().mark((function e(n){var u;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=n.data,t.tabList=u.list,t.loading=!1;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$message.error(e.msg)}))}}};n=n("2877"),n=Object(n.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"i-layout-page-header header-title"},[e("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])]),e("el-card",{staticClass:"ivu-mt",attrs:{bordered:!1,shadow:"never"}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"selection",attrs:{data:t.tabList,"empty-text":"暂无数据","highlight-current-row":""}},[e("el-table-column",{attrs:{label:"类型",width:"100"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",[t._v(t._s(n.row.type))])]}}])}),e("el-table-column",{attrs:{label:"文件地址","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",[t._v(t._s(n.row.filename))])]}}])}),e("el-table-column",{attrs:{label:"校验码","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",[t._v(t._s(n.row.cthash))])]}}])}),e("el-table-column",{attrs:{label:"上次访问时间","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",[t._v(t._s(n.row.atime))])]}}])}),e("el-table-column",{attrs:{label:"上次修改时间","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",[t._v(t._s(n.row.mtime))])]}}])}),e("el-table-column",{attrs:{label:"上次改变时间","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",[t._v(t._s(n.row.ctime))])]}}])})],1)],1)],1)}),[],!1,null,"3e61e520",null);e.default=n.exports},8593:function(t,e,n){"use strict";n.d(e,"i",(function(){return u})),n.d(e,"g",(function(){return o})),n.d(e,"h",(function(){return c})),n.d(e,"ib",(function(){return a})),n.d(e,"m",(function(){return i})),n.d(e,"k",(function(){return s})),n.d(e,"l",(function(){return d})),n.d(e,"j",(function(){return f})),n.d(e,"Q",(function(){return l})),n.d(e,"I",(function(){return m})),n.d(e,"P",(function(){return b})),n.d(e,"N",(function(){return g})),n.d(e,"K",(function(){return p})),n.d(e,"L",(function(){return h})),n.d(e,"M",(function(){return O})),n.d(e,"O",(function(){return j})),n.d(e,"eb",(function(){return _})),n.d(e,"kb",(function(){return y})),n.d(e,"x",(function(){return v})),n.d(e,"c",(function(){return k})),n.d(e,"e",(function(){return w})),n.d(e,"b",(function(){return T})),n.d(e,"d",(function(){return E})),n.d(e,"f",(function(){return G})),n.d(e,"B",(function(){return S})),n.d(e,"z",(function(){return P})),n.d(e,"A",(function(){return x})),n.d(e,"V",(function(){return L})),n.d(e,"U",(function(){return F})),n.d(e,"W",(function(){return C})),n.d(e,"db",(function(){return U})),n.d(e,"o",(function(){return J})),n.d(e,"n",(function(){return q})),n.d(e,"Z",(function(){return z})),n.d(e,"q",(function(){return N})),n.d(e,"y",(function(){return $})),n.d(e,"ab",(function(){return A})),n.d(e,"a",(function(){return B})),n.d(e,"F",(function(){return D})),n.d(e,"hb",(function(){return H})),n.d(e,"J",(function(){return I})),n.d(e,"wb",(function(){return K})),n.d(e,"vb",(function(){return M})),n.d(e,"R",(function(){return Q})),n.d(e,"T",(function(){return R})),n.d(e,"G",(function(){return V})),n.d(e,"X",(function(){return W})),n.d(e,"Y",(function(){return X})),n.d(e,"C",(function(){return Y})),n.d(e,"fb",(function(){return Z})),n.d(e,"D",(function(){return tt})),n.d(e,"gb",(function(){return et})),n.d(e,"p",(function(){return nt})),n.d(e,"H",(function(){return rt})),n.d(e,"E",(function(){return ut})),n.d(e,"bb",(function(){return ot})),n.d(e,"qb",(function(){return ct})),n.d(e,"sb",(function(){return at})),n.d(e,"pb",(function(){return it})),n.d(e,"tb",(function(){return st})),n.d(e,"rb",(function(){return dt})),n.d(e,"r",(function(){return ft})),n.d(e,"ub",(function(){return lt})),n.d(e,"lb",(function(){return mt})),n.d(e,"jb",(function(){return bt})),n.d(e,"mb",(function(){return gt})),n.d(e,"cb",(function(){return pt})),n.d(e,"ob",(function(){return ht})),n.d(e,"S",(function(){return Ot})),n.d(e,"nb",(function(){return jt})),n.d(e,"s",(function(){return _t})),n.d(e,"v",(function(){return yt})),n.d(e,"t",(function(){return vt})),n.d(e,"u",(function(){return kt})),n.d(e,"w",(function(){return wt})),n("99af");var r=n("6b6c");function u(t){return Object(r.a)({url:"setting/config_class",method:"get",params:t})}function o(t){return Object(r.a)({url:"setting/config_class/create",method:"get"})}function c(t){return Object(r.a)({url:"setting/config_class/".concat(t,"/edit"),method:"get"})}function a(t){return Object(r.a)({url:"setting/config_class/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function i(t){return Object(r.a)({url:"setting/config",method:"get",params:t})}function s(t){return Object(r.a)({url:"setting/config/create",method:"get",params:t})}function d(t){return Object(r.a)({url:"/setting/config/".concat(t,"/edit"),method:"get"})}function f(t,e){return Object(r.a)({url:"setting/config/set_status/".concat(t,"/").concat(e),method:"PUT"})}function l(t){return Object(r.a)({url:"setting/group",method:"get",params:t})}function m(t){return Object(r.a)({url:t.url,method:t.method,data:t.datas})}function b(t){return Object(r.a)({url:"setting/group/".concat(t),method:"get"})}function g(t,e){return Object(r.a)({url:e,method:"get",params:t})}function p(t,e){return Object(r.a)({url:e,method:"get",params:t})}function h(t,e){return Object(r.a)({url:e,method:"get",params:t})}function O(t,e){return Object(r.a)({url:e,method:"get",params:t})}function j(t){return Object(r.a)({url:t,method:"PUT"})}function _(t){return Object(r.a)({url:"system/log/search_admin",method:"GET"})}function y(t){return Object(r.a)({url:"system/log",method:"GET",params:t})}function v(){return Object(r.a)({url:"system/file",method:"GET"})}function k(){return Object(r.a)({url:"system/backup",method:"GET"})}function w(t){return Object(r.a)({url:"system/backup/read",method:"GET",params:t})}function T(t){return Object(r.a)({url:"system/backup/backup",method:"put",data:t})}function E(t){return Object(r.a)({url:"system/backup/optimize",method:"put",data:t})}function G(t){return Object(r.a)({url:"system/backup/repair",method:"put",data:t})}function S(t){return Object(r.a)({url:"system/backup/file_list",method:"GET"})}function P(t){return Object(r.a)({url:"backup/download",method:"get",params:t})}function x(t){return Object(r.a)({url:"system/backup/import",method:"POST",data:t})}function L(t){return Object(r.a)({url:"system/file/login",method:"POST",data:t})}function F(t){return Object(r.a)({url:"system/file/opendir",method:"GET",params:t,file_edit:!0})}function C(t){return Object(r.a)({url:"system/file/openfile",method:"GET",params:t,file_edit:!0})}function U(t){return Object(r.a)({url:"system/file/savefile?fileToken=".concat(t.fileToken),method:"post",data:t,file_edit:!0})}function J(t){return Object(r.a)({url:"system/file/createFolder",method:"GET",params:t,file_edit:!0})}function q(t){return Object(r.a)({url:"system/file/createFile",method:"GET",params:t,file_edit:!0})}function z(t){return Object(r.a)({url:"system/file/rename",method:"GET",params:t,file_edit:!0})}function N(t){return Object(r.a)({url:"system/file/delFolder",method:"GET",params:t,file_edit:!0})}function $(t){return Object(r.a)({url:"system/file/mark",method:"get",params:t,file_edit:!0})}function A(t){return Object(r.a)({url:"system/replace_site_url",method:"post",data:t})}function B(){return Object(r.a)({url:"auth",method:"get"})}function D(){return Object(r.a)({url:"setting/get_kf_adv",method:"get"})}function H(t){return Object(r.a)({url:"setting/set_kf_adv",method:"post",data:t})}function I(){return Object(r.a)({url:"setting/group_all",method:"get"})}function K(t){return Object(r.a)({url:"system/version_list",method:"get",params:t})}function M(t){return Object(r.a)({url:"system/version_crate/".concat(t),method:"get"})}function Q(t){return Object(r.a)({url:"setting/group_data/save_all",method:"POST",data:t})}function R(t){return Object(r.a)({url:"diy/open_adv/add",method:"POST",data:t})}function V(){return Object(r.a)({url:"diy/open_adv/info",method:"get"})}function W(t){return Object(r.a)({url:"setting/config/get_system/".concat(t),method:"get"})}function X(t){return Object(r.a)({url:"setting/config/save_basics",method:"POST",data:t})}function Y(){return Object(r.a)({url:"setting/get_user_agreement",method:"get"})}function Z(t){return Object(r.a)({url:"setting/set_user_agreement",method:"post",data:t})}function tt(t){return Object(r.a)({url:"setting/get_agreement/".concat(t),method:"get"})}function et(t,e){return Object(r.a)({url:"setting/save_agreement",method:"post",data:t})}function nt(t){return Object(r.a)({url:"crmeb_product",method:"get",params:t})}function rt(){return Object(r.a)({url:"setting/get_version",method:"get"})}function ut(){return Object(r.a)({url:"copyright",method:"get"})}function ot(t){return Object(r.a)({url:"copyright",method:"post",data:t})}function ct(t){return Object(r.a)({url:"/system/upgrade/list",method:"get",params:t})}function at(){return Object(r.a)({url:"/system/upgrade_progress",method:"get"})}function it(){return Object(r.a)({url:"/system/upgrade/agreement",method:"get"})}function st(){return Object(r.a)({url:"/system/upgrade_status",method:"get"})}function dt(t){return Object(r.a)({url:"/system/upgrade_log/list",method:"get",params:t})}function ft(t){return Object(r.a)({url:"/system/upgrade_download/"+t,method:"POST"})}function lt(t){return Object(r.a)({url:"/system/upgradeable/list",method:"get",params:t})}function mt(t){return Object(r.a)({url:"system/crontab/list",params:t})}function bt(t,e){return Object(r.a)({url:"system/crontab/set_open/".concat(t,"/").concat(e)})}function gt(t){return Object(r.a)({url:"system/crontab/info/".concat(t)})}function pt(t){return Object(r.a)({url:"system/crontab/save",method:"post",data:t})}function ht(t){return Object(r.a)({url:"system/database/update_mark",method:"post",data:t})}function Ot(t,e){return Object(r.a)({url:"system/file/mark/save?fileToken=".concat(t),method:"post",data:e})}function jt(){return Object(r.a)({url:"system/crontab/mark"})}function _t(t){return Object(r.a)({url:"system/event/list",params:t})}function yt(t,e){return Object(r.a)({url:"system/event/set_open/".concat(t,"/").concat(e)})}function vt(t){return Object(r.a)({url:"system/event/info/".concat(t)})}function kt(t){return Object(r.a)({url:"system/event/save",method:"post",data:t})}function wt(){return Object(r.a)({url:"system/event/mark"})}}}]);