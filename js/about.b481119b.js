"use strict";(self["webpackChunkrice"]=self["webpackChunkrice"]||[]).push([[594],{24107:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cont"},[e("div",[e("div",{staticClass:"mains"},[e("a-button",{attrs:{type:"primary"}},[e("router-link",{attrs:{to:"/about/one"}},[t._v("企业数据")])],1),e("a-button",{attrs:{type:"primary"}},[e("router-link",{attrs:{to:"/about/two"}},[t._v("服务器数据")])],1),e("a-button",{attrs:{type:"primary"}},[e("router-link",{attrs:{to:"/about/three"}},[t._v("省份数据")])],1),e("router-view")],1)])])},i=[],s={data(){return{}},methods:{callback(t){console.log(t)},onShowSizeChange(t,e){this.pageSize=e}}},r=s,l=n(81656),o=(0,l.A)(r,a,i,!1,null,"10972545",null),c=o.exports},48157:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mains"},[e("div",{staticClass:"left"},[e("div",[e("h2",[t._v("超级企业列表("+t._s(t.length)+")")]),e("a-input",{staticStyle:{width:"60%"},attrs:{placeholder:"请输入企业名称","allow-clear":""},on:{change:t.onChange,input:t.Searchs},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),e("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.add}},[e("a-icon",{attrs:{type:"plus"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.Add,expression:"Add"}],staticClass:"addEnter"},[e("h2",[t._v(" 添加企业"),e("a-button",{attrs:{type:"link"},on:{click:t.add}},[e("a-icon",{attrs:{type:"close"}})],1)],1),e("div",[e("ul",[e("li",[e("span",[t._v("企业名称:")]),e("a-input",{attrs:{placeholder:"企业名称"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),e("li",[e("span",[t._v("企业域名:")]),e("a-input",{attrs:{placeholder:"企业域名"},model:{value:t.ip,callback:function(e){t.ip=e},expression:"ip"}})],1),e("li",[e("span",[t._v("超级管理员账号:")]),e("a-input",{attrs:{placeholder:"超级管理员账号"},model:{value:t.admin,callback:function(e){t.admin=e},expression:"admin"}})],1),e("li",[e("span",[t._v("超级管理员邮箱:")]),e("a-input",{attrs:{placeholder:"超级管理员邮箱"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),e("li",[e("span",[t._v("最大坐席数:")]),e("a-input",{attrs:{placeholder:"最大坐席数"},model:{value:t.maxnum,callback:function(e){t.maxnum=e},expression:"maxnum"}})],1),e("li",[e("span",[t._v("最大登录并发数:")]),e("a-input",{attrs:{placeholder:"最大登录并发数"},model:{value:t.maxcon,callback:function(e){t.maxcon=e},expression:"maxcon"}})],1)])]),e("a-button",{attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v(" 添加 ")])],1)],1),e("div",[e("ul",t._l(t.list,(function(n,a){return e("li",{key:a,class:{active:t.selectedItem&&t.selectedItem.id===n.id},on:{click:function(e){return t.selectItem(n)}}},[e("router-link",{attrs:{to:`/list-item-${n.id}`}},[e("i",{class:1==n.status?"i_greey":"i_red"}),t._v(" "+t._s(n.ename))])],1)})),0)])]),e("div",{staticClass:"content"},[e("div",[e("div",[e("div",{staticClass:"cont_main"},[e("router-view",{on:{1:t.iou}})],1)])])])])},i=[],s=n(6010),r={data(){return{list:[],selectedItem:null,Add:!1,currentTime:"",name:"",ip:"",admin:"",email:"",maxnum:"",maxcon:"",search:"",length:""}},created(){this.getlist()},mounted(){this.currentTime=this.getCurrentTime()},methods:{iou(){this.getlist()},Searchs(){(0,s.vj)({ename:this.search}).then((t=>{if(console.log(t),"超级企业不存在"==t.msg)return this.list=[],void(this.length=0);this.list=t.data.data,this.length=t.data.data.length}))},onChange(t){console.log(t)},getCurrentTime(){const t=new Date,e=t.getFullYear();let n=t.getMonth()+1,a=t.getDate(),i=t.getHours(),s=t.getMinutes(),r=t.getSeconds();return n=n<10?"0"+n:n,a=a<10?"0"+a:a,i=i<10?"0"+i:i,s=s<10?"0"+s:s,r=r<10?"0"+r:r,`${e}-${n}-${a} ${i}:${s}:${r}`},getlist(){(0,s.vS)().then((t=>{console.log(t),this.list=t.data.data,this.length=this.list.length}))},selectItem(t){this.selectedItem=t},add(){0==this.Add?this.Add=!0:1==this.Add&&(this.Add=!1)},addList(){(0,s.yY)({ename:this.name,ipstr:this.ip,adminname:this.admin,adminemil:this.email,maxnum:this.maxnum,maxconcurrency:this.maxcon,create_time:this.currentTime}).then((t=>{console.log(t),0==t.code&&(this.Add=!1)}))},handleAdd(){this.getlist(),this.addList()}}},l=r,o=n(81656),c=(0,o.A)(l,a,i,!1,null,"a99920e0",null),u=c.exports},6010:function(t,e,n){n.d(e,{UY:function(){return s},nW:function(){return o},vS:function(){return i},vj:function(){return l},yY:function(){return r}});var a=n(40412);function i(){return new Promise((t=>{(0,a.V)("/index.php/index/call/getsuperes").then((e=>{t(e)}))}))}function s(t){return new Promise((e=>{(0,a.$)(`/index.php/index/call/getsuperbyid?id=${t}`).then((t=>{e(t)}))}))}function r(t){return new Promise((e=>{(0,a.V)("/index.php/index/call/addsuper",t).then((t=>{e(t)}))}))}function l(t){return new Promise((e=>{(0,a.$)("/index.php/index/call/getsearches",t).then((t=>{e(t)}))}))}function o(t,e){return new Promise((n=>{(0,a.$)(`/index.php/index/call/upsuperstatus?id=${t}&status=${e}`).then((t=>{n(t)}))}))}},40412:function(t,e,n){n.d(e,{$:function(){return s},V:function(){return i}});var a=n(98355);function i(t,e){return new Promise(((n,i)=>{a.A.get(t,{params:e,headers:{token:sessionStorage.getItem("token")}}).then((t=>{n(t.data)})).catch((t=>{i(t.data)}))}))}function s(t,e){return new Promise(((n,i)=>{(0,a.A)({method:"post",url:t,data:e}).then((t=>{n(t.data)})).catch((t=>{i(t.data)}))}))}a.A.defaults.baseURL="https://www.zzgoodqc.cn/",console.log("正式"),a.A.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)}))}}]);
//# sourceMappingURL=about.b481119b.js.map