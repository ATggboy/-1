"use strict";(self["webpackChunkrice"]=self["webpackChunkrice"]||[]).push([[688],{20688:function(e,t,s){s.r(t),s.d(t,{default:function(){return w}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"Cmain"},[t("div",{staticClass:"contents"},[t("div",{staticClass:"head"},[t("a-dropdown",[t("a-menu",{attrs:{slot:"overlay"},on:{click:e.handleMenuClick},slot:"overlay"},[t("a-menu-item",{key:"1"},[t("a-icon",{attrs:{type:"user"}}),e._v("1st menu item ")],1),t("a-menu-item",{key:"2"},[t("a-icon",{attrs:{type:"user"}}),e._v("2nd menu item ")],1),t("a-menu-item",{key:"3"},[t("a-icon",{attrs:{type:"user"}}),e._v("3rd item ")],1)],1),t("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 角色状态 "),t("a-icon",{attrs:{type:"down"}})],1)],1),t("a-input-search",{staticStyle:{width:"500px","margin-left":"10px"},attrs:{placeholder:"请输入想要搜索的名称"},on:{input:function(t){return e.onSearch(e.Searchs)}},model:{value:e.Searchs,callback:function(t){e.Searchs=t},expression:"Searchs"}}),t("a-button",{attrs:{type:"primary"},on:{click:e.addshow}},[t("a-icon",{attrs:{type:"plus"}}),e._v("添加系统角色 ")],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.addshows,expression:"addshows"}],staticClass:"tianjia"},[t("div",[t("h2",[e._v(e._s(e.caozuo)+"系统角色")]),t("a-button",{attrs:{type:"link"},on:{click:e.addshow}},[t("a-icon",{attrs:{type:"close"}})],1)],1),t("div",[e._v(" 角色名称： "),t("a-input",{attrs:{placeholder:"请输入名称"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),t("br"),t("br"),e._v(" 描述: "),t("a-textarea",{attrs:{placeholder:"请输入该描述","auto-size":""},model:{value:e.desc,callback:function(t){e.desc=t},expression:"desc"}}),t("br"),t("br"),e._v(" 状态: "),t("a-radio-group",{attrs:{name:"radioGroup","default-value":1},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}},[t("a-radio",{attrs:{value:1}},[e._v(" 启用 ")]),t("a-radio",{attrs:{value:0}},[e._v(" 停用 ")])],1),t("br"),t("br"),t("div",[t("span",[e._v("管理权限:")]),t("div",{staticClass:"quanxuan"},[t("el-tree",{ref:"tree",attrs:{data:e.data,"show-checkbox":"","default-expand-all":"","node-key":"id","highlight-current":"",props:e.defaultProps}})],1)]),t("br"),t("a-button",{attrs:{type:"primary",block:""},on:{click:e.listadd}},[e._v(" 提交 ")])],1)]),t("div",{staticClass:"center"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[t("el-table-column",{attrs:{label:"姓名",width:"180"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[t("el-tag",{attrs:{size:"medium"}},[e._v(e._s(s.row.rolename))])],1)]}}])}),t("el-table-column",{attrs:{label:"描述",width:"180"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("span",[e._v(e._s(s.row.describe))])]}}])}),t("el-table-column",{attrs:{label:"角色权限配置",width:"220"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("span",{staticStyle:{display:"block",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap",width:"120px"}},[e._v(e._s(e.converquanxian(s.row.powers)))])]}}])}),t("el-table-column",{attrs:{label:"角色启用状态",width:"180"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("span",{staticStyle:{"margin-left":"10px"}},[t("i",{class:1==s.row.status?"i_greey":"i_red"}),e._v(e._s(e.converstatus(s.row.status)))])]}}])}),t("el-table-column",{attrs:{label:"最后编辑时间",width:"180"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("i",{staticClass:"el-icon-time"},[e._v(e._s(e.formatTimestamp(s.row.lasttime)))]),t("span",{staticStyle:{"margin-left":"10px"}})]}}])}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(t){return e.handleEdit(s.row)}}}),t("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(t){return e.handleDelete(s.row)}}}),t("el-button",{ref:"button",attrs:{type:1==s.row.status?"danger":"info",icon:1==s.row.status?"el-icon-switch-button":"el-icon-video-play",circle:""},on:{click:function(t){return e.start(s.row)}}})]}}])})],1)],1),t("div",{staticClass:"footer"},[t("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.total,"current-page":e.pagecount},on:{"update:currentPage":function(t){e.pagecount=t},"update:current-page":function(t){e.pagecount=t},"current-change":e.pagefy}})],1)])])},n=[],o=s(40412);function r(e){return new Promise((t=>{(0,o.V)("/index.php/index/role/getroleslist",{page:e}).then((e=>{t(e)}))}))}function i(e){return new Promise((t=>{(0,o.V)("/index.php/index/role/addroles",e).then((e=>{t(e)}))}))}function l(e){return new Promise((t=>{(0,o.V)("/index.php/index/role/uproles",e).then((e=>{t(e)}))}))}function c(e){return new Promise((t=>{(0,o.V)("/index.php/index/role/delroles?id="+e).then((e=>{t(e)}))}))}function d(e,t){return new Promise((s=>{(0,o.V)(`/index.php/index/role/stoproles?id=${e}&&status=${t}`).then((e=>{s(e)}))}))}function u(e){return new Promise((t=>{(0,o.V)(`/index.php/index/role/getsearchroles?rolename=${e}`).then((e=>{t(e)}))}))}var h={data(){return{id:"",caozuo:"",tableData:[],addshows:!1,name:"",desc:"",status:"",powers:"",arr_data:[],total:0,page:0,pagecount:1,Searchs:"",maxLength:10,data:[{id:0,label:"开放所有权限",children:[{id:1,label:"首页"},{id:2,label:"企业管理"},{id:3,label:"通话统计",children:[{id:4,label:"并发统计"}]},{id:5,label:"权限管理",children:[{id:6,label:"系统角色管理"},{id:7,label:"系统用户管理"}]}]}],defaultProps:{children:"children",label:"label"}}},created(){this.Listshow()},methods:{getCheckedKeys(){console.log(this.$refs.tree.getCheckedKeys());const e=this.$refs.tree.getCheckedKeys(),t=e.join(",");return console.log(t),t},pagefy(){this.Listshow(this.pagecount)},listadd(){null==this.id||""==this.id?i({rolename:this.name,describe:this.desc,powers:this.getCheckedKeys(),status:this.status}).then((e=>{0==e.code?(this.$message.success("添加成功"),this.addshows=!1,this.name="",this.desc="",this.status="",this.$refs.tree.setCheckedKeys([])):this.$message.error(e.msg)})):l({id:this.id,rolename:this.name,describe:this.desc,powers:this.getCheckedKeys(),status:this.status}).then((e=>{0==e.code?(this.$message.success("修改成功"),this.Listshow(this.pagecount),this.addshows=!1,this.name="",this.desc="",this.status="",this.$refs.tree.setCheckedKeys([])):this.$message.error(e.msg)}))},addshow(){this.caozuo="添加",1==this.addshows?(this.addshows=!1,this.name="",this.desc="",this.status="",this.$refs.tree.setCheckedKeys([])):0==this.addshows&&(this.addshows=!0)},formatTimestamp(e){const t=1e3*e,s=new Date(t),a=`${s.getFullYear()}-${s.getMonth()+1}-${s.getDate()} ${s.getHours()}:${s.getMinutes()}:${s.getSeconds()}`;return a},Listshow(e){r(e).then((e=>{this.tableData=e.data.data,this.total=e.data.pagecount}))},handleEdit(e){this.id=e.id,this.caozuo="修改",this.name=e.rolename,this.desc=e.describe,this.status=e.status,this.$refs.tree.setCheckedKeys(e.powers.split(",")),1==this.addshows?(this.addshows=!1,this.name="",this.desc="",this.status="",this.error="",this.$refs.tree.setCheckedKeys([])):0==this.addshows&&(this.addshows=!0)},handleDelete(e){this.$confirm({title:"确定要删除这项任务吗？",content:"这将永久删除该任务。",okText:"确定",okType:"danger",cancelText:"取消",onOk:()=>{c(e.id).then((()=>{this.Listshow()})),console.log("OK")},onCancel(){console.log("Cancel")}})},start(e){1==e.status?this.$confirm({title:"确定要停用这项任务吗？",content:"这将停用该任务。",okText:"确定",okType:"danger",cancelText:"取消",onOk:()=>{d(e.id,0).then((()=>{this.Listshow()})),console.log("OK")},onCancel(){console.log("Cancel")}}):0==e.status&&this.$confirm({title:"确定要启用这项任务吗？",content:"这将启用该任务。",okText:"确定",okType:"danger",cancelText:"取消",onOk:()=>{d(e.id,1).then((()=>{this.Listshow()})),console.log("OK")},onCancel(){console.log("Cancel")}})},converstatus(e){return 0===e?"停用":"启用"},converquanxian(e){const t=e.split(","),s=t.map((e=>{switch(e.trim()){case"1":return"主页";case"2":return"企业管理";case"3":return"通话用户";case"4":return"并发统计";case"5":return"权限管理";case"6":return"系统角色管理";case"7":return"系统用户管理";default:return""}})).filter((e=>e));return s.length?s.join("，"):"无效的权限标识"},handleButtonClick(e){console.log("click left button",e)},handleMenuClick(e){console.log("click",e)},onSearch(e){u(e).then((e=>{this.tableData=e.data.data,this.total=e.data.pagecount}))}}},p=h,m=s(81656),f=(0,m.A)(p,a,n,!1,null,"07456dae",null),w=f.exports},40412:function(e,t,s){s.d(t,{$:function(){return o},V:function(){return n}});var a=s(98355);function n(e,t){return new Promise(((s,n)=>{a.A.get(e,{params:t,headers:{token:sessionStorage.getItem("token")}}).then((e=>{s(e.data)})).catch((e=>{n(e.data)}))}))}function o(e,t){return new Promise(((s,n)=>{(0,a.A)({method:"post",url:e,data:t}).then((e=>{s(e.data)})).catch((e=>{n(e.data)}))}))}a.A.defaults.baseURL="https://www.zzgoodqc.cn/",console.log("正式"),a.A.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))}}]);
//# sourceMappingURL=688.287f01a2.js.map