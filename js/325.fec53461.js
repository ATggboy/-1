"use strict";(self["webpackChunkrice"]=self["webpackChunkrice"]||[]).push([[325],{44325:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Nmain"},[e("div",{staticClass:"container"},[e("div",{staticClass:"zongji"},[e("div",{staticClass:"zongji1"},[t._m(0),e("div",{staticClass:"zongji3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"putt",staticStyle:{"padding-left":"20px"},attrs:{type:"text",placeholder:"请输入总机号码进行模糊搜索"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),e("button",{staticClass:"but",on:{click:function(e){return t.sear()}}},[e("i",{staticClass:"el-icon-search"})])]),e("div",{staticClass:"zongji4"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{prop:"date",label:"总机号码"}}),e("el-table-column",{attrs:{prop:"name",label:"号码状态"}}),e("el-table-column",{attrs:{prop:"yn",label:"号码属性"}}),e("el-table-column",{attrs:{prop:"",label:"归属组/坐席"}}),e("el-table-column",{attrs:{prop:"",label:"组名称"}}),e("el-table-column",{attrs:{prop:"",label:"坐席名称"}}),e("el-table-column",{attrs:{prop:"",label:"呼入IVR"}}),e("el-table-column",{attrs:{prop:"",label:"开启状态"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-switch",{attrs:{"active-value":"正常","inactive-value":"异常"},nativeOn:{click:function(e){return t.fun(a.$index,a.row)}},model:{value:a.row.name,callback:function(e){t.$set(a.row,"name",e)},expression:"scope.row.name"}})]}}])}),e("el-table-column",{attrs:{prop:"data",label:"最后编辑时间",width:"180"}}),e("el-table-column",{attrs:{prop:"address",label:"操作"}},[e("i",{staticClass:"el-icon-setting",staticStyle:{"font-size":"18px"}})])],1)],1),e("div",{staticClass:"zongji5"},[e("p",{staticStyle:{float:"left","margin-top":"10px","marhin-left":"30px"}},[e("el-pagination",{attrs:{"current-page":t.currentPage4,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes",total:400},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),e("p",{staticStyle:{float:"right","margin-top":"10px","marhin-right":"30px"}},[e("el-pagination",{attrs:{"current-page":t.currentPage4,"page-sizes":[100,200,300,400],background:"","page-size":100,layout:"prev, pager, next, jumper",total:400},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])])])])])},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"zongji2"},[e("p",[t._v("总机号码管理")])])}],s=[],r={data(){return{currentPage4:4,search:"",date:"",tableData:[{date:"7659893732",name:"正常",yn:"公共",data:"2022-4-1 16:49:42"},{date:"0123675548",name:"正常",yn:"公共",data:"2022-4-1 16:49:12"},{date:"1541234557",name:"正常",yn:"公共",data:"2022-4-1 16:53:10"}]}},methods:{handleSizeChange(t){console.log(`每页 ${t} 条`)},handleCurrentChange(t){console.log(`当前页: ${t}`)},sear(){this.tableData=s.filter((t=>{if(console.log(t),t.date.includes(this.search))return t}))},array(){s=[...this.tableData]},fun(t,e){if(console.log(t,e),0==t){let t=new Date,e=t.getFullYear(),a=t.getMonth()+1,l=t.getDate(),n=t.getHours(),s=t.getMinutes(),r=t.getSeconds();this.tableData[0].data=e+"-"+a+"-"+l+" "+n+":"+s+":"+r}else if(1==t){let t=new Date,e=t.getFullYear(),a=t.getMonth()+1,l=t.getDate(),n=t.getHours(),s=t.getMinutes(),r=t.getSeconds();this.tableData[1].data=e+"-"+a+"-"+l+" "+n+":"+s+":"+r}else if(2==t){let t=new Date,e=t.getFullYear(),a=t.getMonth()+1,l=t.getDate(),n=t.getHours(),s=t.getMinutes(),r=t.getSeconds();this.tableData[2].data=e+"-"+a+"-"+l+" "+n+":"+s+":"+r}}},mounted(){this.array()},components:{}},i=r,o=a(81656),c=(0,o.A)(i,l,n,!1,null,"ca4c8410",null),u=c.exports}}]);
//# sourceMappingURL=325.fec53461.js.map