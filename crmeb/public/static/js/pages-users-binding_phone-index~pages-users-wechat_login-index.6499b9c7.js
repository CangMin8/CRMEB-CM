(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-binding_phone-index~pages-users-wechat_login-index"],{"0637":function(t,a,n){"use strict";(function(t){n("7a82");var i=n("ee27").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=i(n("19b6")),o=(i(n("00e9")),n("d1ea")),s={mixins:[e.default],props:{isShow:{type:Boolean,default:!1}},data:function(){return{defHead:n("0cf0e"),mp_is_new:this.$Cache.get("MP_VERSION_ISNEW")||!1,userInfo:{avatar:"",nickname:""},mpData:uni.getStorageSync("copyRight"),canvasStatus:!1}},mounted:function(){},methods:{uploadpic:function(){var t=this,a=this;this.canvasStatus=!0,a.$util.uploadImageChange("upload/image",(function(n){var i=a.userInfo;void 0!==i&&(a.userInfo.avatar=n.data.url),t.canvasStatus=!1}),(function(a){t.canvasStatus=!1}),(function(a){t.canvasWidth=a.w,t.canvasHeight=a.h}))},onChooseAvatar:function(t){var a=this,n=t.detail.avatarUrl;this.$util.uploadImgs("upload/image",n,(function(t){a.userInfo.avatar=t.data.url}),(function(t){}))},closeAttr:function(){this.$emit("closeEdit")},formSubmit:function(t){var a=this,n=this;return this.userInfo.avatar?t.detail.value.nickname?(this.userInfo.nickname=t.detail.value.nickname,void(0,o.userEdit)(this.userInfo).then((function(t){return a.$emit("editSuccess"),n.$util.Tips({title:t.msg,icon:"success"},{tab:3})})).catch((function(t){return n.$util.Tips({title:t||n.$t("保存失败")},{tab:3,url:1})}))):n.$util.Tips({title:n.$t("请输入昵称")}):n.$util.Tips({title:n.$t("请上传头像")})}}};a.default=s}).call(this,n("5a52")["default"])},"0cf0e":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAYFBMVEUAAAD19fX19fX09PT09PT19fXj4+P09PTz8/P////09PSysrKzs7O9vb3x8fHHx8fr6+ve3t7U1NTh4eHY2Ni6urrm5ubc3NzBwcG3t7e1tbXl5eXJycnt7e3Q0NDMzMzKPmceAAAACnRSTlMAWuH7ruUJkZEJ7qI+3wAAAWZJREFUWMPt2QlOwzAQhWFnbevxln3pdv9bghAkJY6o23kSReQ/wCdns5Sx+CiP0jiRjJI4jXIxFWUSUBx9eXsJaj95UDGSwCIh8gwJZvm0QNgSUyyYihgLxiLBgomQ4DZwA/8vWJ0aIn1tQaDr6TN7RoDHkaaGlgPO3tzouKBp6FvaMMErLSp5oFNLcDQs8EJeNQtsfLDngI78lGGAFa3UMsB6DSwYYLkGdq+0wgJ9D43yvYH1HvY+eGWBhQ86Fuh/KifJA7uFpxwTlNrbvZhgq249LTmgv4OpIwA0g/dEeKA8zWABAe0MVgiwUDNoDRc0pabbhvLMAd1lpGXKVs+CR6totaY8PwF2mn7IFuYxsG7oTkP5CGgpIBsO1hRUHQzqMFAHgxQYHPy9S+7CwC4YlFWv7mmqr17ox2cDN/DPgehhGnzcBx9I4kemB+xQ9wAfO7+3w3k7IaDiDnu4kEVi6oA7/ngDU8P9py9tSZwAAAAASUVORK5CYII="},"1e04":function(t,a,n){"use strict";var i=n("b1d0"),e=n.n(i);e.a},"3d50":function(t,a,n){"use strict";n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return e})),n.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{style:t.colorStyle},[n("v-uni-view",{staticClass:"product-window",class:{on:t.isShow}},[n("v-uni-view",{staticClass:"iconfont icon-guanbi",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.closeAttr.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"mp-data"},[n("v-uni-image",{attrs:{src:t.mpData.siteLogo,mode:""}}),n("v-uni-text",{staticClass:"mp-name"},[t._v(t._s(t.mpData.siteName)+" 申请")])],1),n("v-uni-view",{staticClass:"trip-msg"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$t("获取您的昵称、头像")))]),n("v-uni-view",{staticClass:"trip"},[t._v(t._s(t.$t("提供具有辨识度的用户中心界面")))])],1),n("v-uni-form",{on:{submit:function(a){arguments[0]=a=t.$handleEvent(a),t.formSubmit.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"edit"},[n("v-uni-view",{staticClass:"avatar edit-box"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-view",{staticClass:"head"},[t._v(t._s(t.$t("头像")))]),t.mp_is_new?n("v-uni-button",{staticClass:"avatar-box",attrs:{"open-type":"chooseAvatar"},on:{chooseavatar:function(a){arguments[0]=a=t.$handleEvent(a),t.onChooseAvatar.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:t.userInfo.avatar||t.defHead}})],1):n("v-uni-view",{staticClass:"avatar-box",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.uploadpic.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:t.userInfo.avatar||t.defHead}})],1)],1)],1),n("v-uni-view",{staticClass:"nickname edit-box"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-view",{staticClass:"head"},[t._v(t._s(t.$t("昵称")))]),n("v-uni-view",{staticClass:"input"},[n("v-uni-input",{attrs:{type:"nickname","placeholder-class":"pl-sty",placeholder:t.$t("请输入昵称"),name:"nickname",maxlength:16,value:t.userInfo.nickname}})],1)],1)],1)],1),n("v-uni-view",{staticClass:"bottom"},[n("v-uni-button",{staticClass:"save",class:{open:t.userInfo.avatar},attrs:{formType:"submit"}},[t._v(t._s(t.$t("保存")))])],1)],1)],1),t.canvasStatus?n("v-uni-canvas",{style:{width:t.canvasWidth+"px",height:t.canvasHeight+"px",position:"absolute",left:"-100000px",top:"-100000px"},attrs:{"canvas-id":"canvas"}}):t._e(),t.isShow?n("v-uni-view",{staticClass:"mask",on:{touchmove:function(a){a.preventDefault(),arguments[0]=a=t.$handleEvent(a)},click:function(a){arguments[0]=a=t.$handleEvent(a),t.closeAttr.apply(void 0,arguments)}}}):t._e()],1)},e=[]},"42bf":function(t,a,n){var i=n("24fb");a=i(!1),a.push([t.i,".pl-sty[data-v-c8040d82]{color:#999;font-size:%?30?%}",""]),t.exports=a},"483c":function(t,a,n){"use strict";n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return e})),n.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{style:t.colorStyle},[n("v-uni-view",{staticClass:"mask",attrs:{hidden:!1===t.isShow},on:{touchmove:function(a){a.preventDefault(),arguments[0]=a=t.$handleEvent(a)}}}),n("v-uni-view",{staticClass:"product-window",class:{on:t.isShow}},[n("v-uni-view",{staticClass:"mp-data"},[n("v-uni-text",{staticClass:"mp-name"},[t._v(t._s(t.mpData.siteName)+t._s(t.$t("服务与隐私协议")))])],1),n("v-uni-view",{staticClass:"trip-msg"},[n("v-uni-view",{staticClass:"trip"},[t._v(t._s(t.$t("欢迎您使用"+t.mpData.siteName+"！请仔细阅读以下内容，并作出适当的选择：")))])],1),n("v-uni-view",{staticClass:"trip-title"},[t._v(t._s(t.$t("隐私政策概要")))]),n("v-uni-view",{staticClass:"trip-msg"},[n("v-uni-view",{staticClass:"trip"},[t._v(t._s(t.$t("当您点击同意并开始时用产品服务时，即表示您已理解并同息该条款内容，该条款将对您产生法律约束力。如您拒绝，将无法继续下一步操作。")))])],1),n("v-uni-view",{staticClass:"main-color",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.privacy(3)}}},[t._v(t._s(t.$t("点击阅读"))+t._s(t.agreementName))]),n("v-uni-view",{staticClass:"bottom"},[n("v-uni-button",{staticClass:"save open",attrs:{type:"default",id:"agree-btn","open-type":"agreePrivacyAuthorization"},on:{agreeprivacyauthorization:function(a){arguments[0]=a=t.$handleEvent(a),t.handleAgree.apply(void 0,arguments)}}},[t._v(t._s(t.$t("同意并继续")))]),n("v-uni-button",{staticClass:"reject",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.rejectAgreement.apply(void 0,arguments)}}},[t._v(t._s(t.$t("取消")))])],1)],1)],1)},e=[]},"52fb":function(t,a,n){var i=n("24fb");a=i(!1),a.push([t.i,".pl-sty[data-v-2cb54398]{color:#999;font-size:%?30?%}",""]),t.exports=a},"58e7":function(t,a,n){"use strict";n.r(a);var i=n("3d50"),e=n("6842");for(var o in e)["default"].indexOf(o)<0&&function(t){n.d(a,t,(function(){return e[t]}))}(o);n("d8b4"),n("7e3e");var s=n("f0c5"),c=Object(s["a"])(e["default"],i["b"],i["c"],!1,null,"c8040d82",null,!1,i["a"],void 0);a["default"]=c.exports},6842:function(t,a,n){"use strict";n.r(a);var i=n("0637"),e=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(a,t,(function(){return i[t]}))}(o);a["default"]=e.a},"6a3e":function(t,a,n){var i=n("f521");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=n("4f06").default;e("8ce50bc0",i,!0,{sourceMap:!1,shadowMode:!1})},"6db6":function(t,a,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=i(n("19b6")),o=(n("d1ea"),{mixins:[e.default],data:function(){return{isShow:!1,agreementName:"",mpData:uni.getStorageSync("copyRight")}},mounted:function(){var t=this;wx.getPrivacySetting({success:function(a){a.needAuthorization?(t.isShow=!0,t.agreementName=a.privacyContractName):t.$emit("onAgree")},fail:function(){},complete:function(){}})},methods:{handleAgree:function(){this.isShow=!1,this.$emit("onAgree")},rejectAgreement:function(){this.isShow=!1,uni.switchTab({url:"/pages/index/index"}),this.$emit("onReject")},closeAttr:function(){this.$emit("onCloseAgePop")},privacy:function(t){uni.navigateTo({url:"/pages/users/privacy/index?type="+t})}}});a.default=o},"774b":function(t,a,n){"use strict";n.r(a);var i=n("6db6"),e=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(a,t,(function(){return i[t]}))}(o);a["default"]=e.a},"7e3e":function(t,a,n){"use strict";var i=n("6a3e"),e=n.n(i);e.a},"867f":function(t,a,n){var i=n("42bf");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=n("4f06").default;e("0cee1728",i,!0,{sourceMap:!1,shadowMode:!1})},"9d79":function(t,a,n){var i=n("52fb");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=n("4f06").default;e("d6b5627a",i,!0,{sourceMap:!1,shadowMode:!1})},b1d0:function(t,a,n){var i=n("b2ed");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=n("4f06").default;e("4bb3b73e",i,!0,{sourceMap:!1,shadowMode:!1})},b2ed:function(t,a,n){var i=n("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.product-window.on[data-v-2cb54398]{-webkit-transform:translateZ(0);transform:translateZ(0)}.mask[data-v-2cb54398]{z-index:99}.product-window[data-v-2cb54398]{position:fixed;bottom:0;width:100%;left:0;background-color:#fff;z-index:1000;border-radius:%?40?% %?40?% 0 0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);transition:all .3s cubic-bezier(.25,.5,.5,.9);padding:%?64?% %?40?%;padding-bottom:%?38?%;padding-bottom:calc(38rpx+ constant(safe-area-inset-bottom));padding-bottom:calc(%?38?% + env(safe-area-inset-bottom));box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06)}.product-window .icon-guanbi[data-v-2cb54398]{position:absolute;top:%?40?%;right:%?40?%;font-size:%?24?%;font-weight:700;color:#999}.product-window .mp-data[data-v-2cb54398]{display:flex;align-items:center;justify-content:center;margin-bottom:%?40?%}.product-window .mp-data .mp-name[data-v-2cb54398]{font-size:%?34?%;font-weight:500;color:#333;line-height:%?48?%}.product-window .trip-msg[data-v-2cb54398]{padding-bottom:%?32?%}.product-window .trip-msg .title[data-v-2cb54398]{font-size:%?30?%;font-weight:700;color:#000;margin-bottom:%?6?%}.product-window .trip-msg .trip[data-v-2cb54398]{color:#333;font-size:%?28?%;font-family:PingFang SC-Regular,PingFang SC;font-weight:400}.product-window .trip-title[data-v-2cb54398]{font-size:%?28?%;font-weight:500;color:#333;margin-bottom:%?8?%}.product-window .main-color[data-v-2cb54398]{font-size:%?28?%;font-weight:400;color:var(--view-theme);margin-bottom:%?40?%}.product-window .bottom[data-v-2cb54398]{display:flex;align-items:center;justify-content:center;flex-direction:column}.product-window .bottom .save[data-v-2cb54398],\n.product-window .bottom .reject[data-v-2cb54398]{display:flex;align-items:center;justify-content:center;width:%?670?%;height:%?80?%;border-radius:%?80?%;background-color:#f5f5f5;color:#333;font-size:%?30?%;font-weight:500}.product-window .bottom .save[data-v-2cb54398]{background-color:var(--view-theme);color:#fff;margin-bottom:%?24?%}',""]),t.exports=a},c779:function(t,a,n){"use strict";var i=n("9d79"),e=n.n(i);e.a},d8b4:function(t,a,n){"use strict";var i=n("867f"),e=n.n(i);e.a},f4ac:function(t,a,n){"use strict";n.r(a);var i=n("483c"),e=n("774b");for(var o in e)["default"].indexOf(o)<0&&function(t){n.d(a,t,(function(){return e[t]}))}(o);n("c779"),n("1e04");var s=n("f0c5"),c=Object(s["a"])(e["default"],i["b"],i["c"],!1,null,"2cb54398",null,!1,i["a"],void 0);a["default"]=c.exports},f521:function(t,a,n){var i=n("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.product-window.on[data-v-c8040d82]{-webkit-transform:translateZ(0);transform:translateZ(0)}.mask[data-v-c8040d82]{z-index:99}.product-window[data-v-c8040d82]{position:fixed;bottom:0;width:100%;left:0;background-color:#fff;z-index:1000;border-radius:%?20?% %?20?% 0 0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);transition:all .3s cubic-bezier(.25,.5,.5,.9);padding:%?38?% %?40?%;padding-bottom:%?80?%;padding-bottom:calc(80rpx+ constant(safe-area-inset-bottom));padding-bottom:calc(%?80?% + env(safe-area-inset-bottom))}.product-window .icon-guanbi[data-v-c8040d82]{position:absolute;top:%?40?%;right:%?40?%;font-size:%?24?%;font-weight:700;color:#999}.product-window .mp-data[data-v-c8040d82]{display:flex;align-items:center;margin-bottom:%?30?%}.product-window .mp-data .mp-name[data-v-c8040d82]{font-size:%?28?%;font-weight:700;color:#000}.product-window .mp-data uni-image[data-v-c8040d82]{width:%?48?%;height:%?48?%;border-radius:50%;margin-right:%?16?%}.product-window .trip-msg[data-v-c8040d82]{padding-bottom:%?32?%;border-bottom:1px solid #f5f5f5}.product-window .trip-msg .title[data-v-c8040d82]{font-size:%?30?%;font-weight:700;color:#000;margin-bottom:%?6?%}.product-window .trip-msg .trip[data-v-c8040d82]{font-size:%?26?%;color:#777}.product-window .edit[data-v-c8040d82]{border-bottom:1px solid #f5f5f5}.product-window .edit .avatar[data-v-c8040d82]{border-bottom:1px solid #f5f5f5}.product-window .edit .nickname .input[data-v-c8040d82]{width:100%}.product-window .edit .nickname uni-input[data-v-c8040d82]{height:%?80?%}.product-window .edit .edit-box[data-v-c8040d82]{display:flex;justify-content:space-between;align-items:center;font-size:%?30?%;padding:%?22?% 0}.product-window .edit .edit-box .left[data-v-c8040d82]{display:flex;align-items:center;flex:1}.product-window .edit .edit-box .left .head[data-v-c8040d82]{color:rgba(0,0,0,.9);white-space:nowrap;margin-right:%?60?%}.product-window .edit .edit-box .left uni-button[data-v-c8040d82]{flex:1;display:flex;align-items:center}.product-window .edit .edit-box uni-image[data-v-c8040d82]{width:%?80?%;height:%?80?%;border-radius:%?6?%}.product-window .edit .icon-xiangyou[data-v-c8040d82]{color:#cfcfcf}.product-window .bottom[data-v-c8040d82]{display:flex;align-items:center;justify-content:center}.product-window .bottom .save[data-v-c8040d82]{border:1px solid #f5f5f5;display:flex;align-items:center;justify-content:center;width:%?368?%;height:%?80?%;border-radius:%?12?%;margin-top:%?52?%;background-color:#f5f5f5;color:#ccc;font-size:%?30?%;font-weight:700}.product-window .bottom .save.open[data-v-c8040d82]{border:1px solid #fff;background-color:#07c160;color:#fff}',""]),t.exports=a}}]);