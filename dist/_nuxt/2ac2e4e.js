(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{407:function(t,e,n){var content=n(420);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("0cbb1138",content,!0,{sourceMap:!1})},418:function(t,e,n){"use strict";n.r(e);n(116);var o={props:{data:{type:Array,required:!0},pageName:{type:String,required:!0}},methods:{scrollToPageTop:function(){window.scrollTo({top:0,behavior:"smooth"})},goToNewsContent:function(t){this.$router.push("/maxBeauty/".concat(this.pageName,"/").concat(t)),this.scrollToPageTop()},openNewTab:function(t){var e=this.$router.resolve({path:"/maxBeauty/".concat(this.pageName,"/").concat(t)});window.open(e.href,"_blank")}}},r=(n(419),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"normal-items"},t._l(t.data,(function(e){return n("div",{key:e.id,staticClass:"item"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:e.imgsrc}})]),t._v(" "),n("div",{staticClass:"text"},[n("p",{staticClass:"time"},[t._v(t._s(e.time))]),t._v(" "),n("h3",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"detail"},[t._v(t._s(e.detail))]),t._v(" "),n("button",{staticClass:"btn",on:{click:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"left",37,n.key,["Left","ArrowLeft"])||"button"in n&&0!==n.button?null:t.goToNewsContent(e.id)},mouseup:function(n){return"button"in n&&1!==n.button?null:t.openNewTab(e.id)}}},[t._v("\n                more\n            ")])])])})),0)}),[],!1,null,null,null);e.default=component.exports},419:function(t,e,n){"use strict";n(407)},420:function(t,e,n){var o=n(22),r=n(46),l=n(56),m=n(57),c=o(!1),d=r(l),h=r(m);c.push([t.i,'body,html{margin:0;padding:0;width:100vw;color:#fff;position:relative;overflow-x:hidden;font-family:"Noto Sans TC",Roboto,Arial,sans-serif;font-size:var(--FontSize)}.vdatetime-calendar__month__day--selected:hover>span>span,.vdatetime-calendar__month__day--selected>span>span,.vdatetime-popup__header{background:#832a57!important}.vdatetime-month-picker__item--selected,.vdatetime-popup__actions__button,.vdatetime-year-picker__item--selected{color:#832a57!important}.el-breadcrumb__inner.is-link:hover,.el-breadcrumb__inner a:hover{color:#832a57!important;cursor:pointer}.el-pagination{text-align:center;margin-top:5%}.el-pagination .el-pager li.active{color:#842b57;cursor:default}.el-pagination .el-pager li:hover{color:#842b57}.el-breadcrumb{margin-bottom:5%}@media(max-width:767px){.el-breadcrumb{margin-bottom:10%}}.el-breadcrumb__item{margin-bottom:1.5%}.el-breadcrumb__inner.is-link,.el-breadcrumb__inner a{font-weight:500!important}.el-pagination button:hover{color:#842b57!important}.page-container{width:100%;max-width:1280px;padding:0 5% 5%;margin:150px auto 0;color:#333}.page-container .index-title{margin-bottom:3%}@media(max-width:1024px){.page-container .index-title{margin-bottom:5%}}@media(max-width:1280px){.page-container{padding:0 10% 10%}}@media(max-width:767px){.page-container{margin-top:120px}}.disabled{pointer-events:none;opacity:.7}.btn{border:none;background-color:#832a57;padding:.5rem 2rem;border-radius:2px;color:#fff;font-size:105%;font-weight:200;letter-spacing:1px;cursor:pointer}.btn:hover{background-color:#602d4b}*,:after,:before{box-sizing:border-box;margin:0}#__layout,#__nuxt,.content{width:100%;height:100%}a{color:#602d4b;text-decoration:none}input[type=checkbox]{display:none}input[type=checkbox]+span{display:inline-block;padding-left:30px;line-height:20px;background:url('+d+") no-repeat 0 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;letter-spacing:1px}input[type=checkbox]:checked+span{background:url("+h+") no-repeat 0 0}.service-page.article-container img:first-child{width:100%}.article-container{color:#7d7d7d;margin-bottom:5%}.article-container b{font-weight:500}.article-container iframe{width:100%;height:40vw;margin-bottom:2.5%}.article-container .w-30{width:30%}.article-container .w-50{width:49.5%}.article-container ol{padding-left:3%}.article-container h1{color:#832a57;font-size:150%;font-weight:600;margin:5% 0 3%}.article-container h2{color:#832a57;font-size:140%;font-weight:600;margin:4% 0 2.5%}.article-container h3{color:#333;font-size:130%;font-weight:400;margin:1% 0}.article-container h4{color:#832a57;font-size:120%;font-weight:400;margin:1% 0}.article-container h5{font-size:110%;font-weight:400;margin:1% 0}.article-container li,.article-container p,.article-container span{font-size:90%;letter-spacing:1px;font-weight:300}.article-container li.hasColor,.article-container p.hasColor,.article-container span.hasColor{color:#832a57;font-size:100%;font-weight:400}.article-container p{margin-bottom:2%}.article-container img{display:block;margin:5% auto 2%;width:70%}@media screen and (max-width:992px){.article-container img{width:100%;margin-bottom:5%}}.article-container .img-block{display:flex;margin:5% 0 2%}.article-container .img-block .img-block-item{flex:1;margin-right:1%}.article-container .img-block .img-block-item:last-child{margin-right:0}.article-container .img-block .img-block-item img{width:100%}.normal-items{display:flex;flex-wrap:wrap;margin-top:5%}.normal-items .item{flex:30%;margin-right:2%;margin-bottom:2%;background:#fff;box-shadow:0 0 15px rgba(51,51,51,.3);display:flex;flex-direction:column;max-height:450px;max-width:48%}.normal-items .item:nth-child(3n+3){margin-right:0}@media(max-width:768px){.normal-items .item{flex:48%}.normal-items .item:nth-child(3n+3){margin-right:2%}.normal-items .item:nth-child(2n){margin-right:0}}@media(max-width:767px){.normal-items .item{flex:100%;margin-bottom:5%;margin-right:0;max-width:100%}.normal-items .item:nth-child(2n),.normal-items .item:nth-child(3n+3){margin-right:0}}.normal-items .item .img{flex:1;overflow:hidden;min-height:200px}.normal-items .item .img img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.normal-items .item .text{flex:1;color:#665c60;padding:5% 7.5%;position:relative;letter-spacing:1px;min-height:220px}.normal-items .item .text .time{font-size:70%;margin-bottom:2.5%}.normal-items .item .text .title{font-size:20px;font-weight:500;line-height:100%;margin-bottom:5%;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-height:20px;max-height:40px}@media(max-width:767px){.normal-items .item .text .title{font-size:16px;line-height:16px;max-height:32px}}.normal-items .item .text .detail{font-size:14px;font-weight:300;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:4;-webkit-box-orient:vertical;line-height:14px;max-height:56px}@media(max-width:767px){.normal-items .item .text .detail{font-size:12px;line-height:12px;max-height:48px}}.normal-items .item .text .btn{font-size:15px;line-height:100%;padding:7.5px 25px 9px;position:absolute;right:7.5%;bottom:10%}",""]),t.exports=c}}]);