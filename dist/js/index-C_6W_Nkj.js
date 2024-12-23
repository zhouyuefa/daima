import{_ as e,f as a,ai as l,y as t,H as i,j as n,g as s,T as r,S as o,r as p,o as d,c as u,a as c,d as h,w as b,t as m,aw as g}from"./index-BdR_P0jW.js";/* empty css                */import _ from"./detailForm-CshpNBeH.js";import{E as v}from"./index-C5CR2e01.js";const y={class:"boxElMain"},w={class:"box boxFlex"},f={style:{display:"flex"}},x={class:"js-box"},W={class:"js-box"},j={class:"js-box"},C=e({__name:"index",setup(e){const C=a({getList:"/admin/user_bill/check_bill_lists"}),k=a([{type:"Input",label:"商户名称",prop:"name",placeholder:"请输入商户名称",width:"180px"},{type:"DateRange",label:"日期",prop:"created_at",placeholder:"请输入类型名称",width:"280px"}]),H=a({name:"",status:"all",parent_id:"all"}),L=a([{label:"查 询",icon:"Search",auth:"admin/user_bill/check_bill_lists",handle:()=>z()},{label:"重置",auth:"admin/user_bill/check_bill_lists",handle:()=>B()},{label:"排序",popover:!0}]),O=a([]),R=a([]),T=a({page:1,page_size:20,totalPages:0}),N=a([{label:"商户名称",prop:"merchant_info",subProp:"name",align:"center",type:"object",sortable:!1,minWidth:"80",show:!0},{label:"账期",prop:"bill_date",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"订单数",prop:"order_num",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"含税总价格（客户消费总额）",prop:"total_price",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"国内3%增值税",prop:"vat_price",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"平台留存占总价比例",prop:"plate_rate",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"平台最终留存额",prop:"plate_price",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"商户结算额占总价比例",prop:"merchant_rate",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"日本商户结算金额（内含消费税）",prop:"merchant_price",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"订单价格（TN）",prop:"order_price",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"平台利润额（扣除增值税）",prop:"plate_profit",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"平台最终利润率",prop:"plate_profit_rate",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"状态",prop:"status_text",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"备注",prop:"remark",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"打款时间",prop:"audit_date",align:"center",type:"string",sortable:!1,minWidth:"160",show:!0},{label:"领収书",minWidth:"130",type:"button",show:!0,fixed:"right",align:"center",btnList:[{hide:e=>P(e),label:"查看",link:!0,type:"primary",handle:(e,a,l,t,i)=>Y(a)},{hide:e=>P(e),label:"下载",link:!0,type:"primary",handle:(e,a,l,t,i)=>S(a)}]},{label:"操作",minWidth:"110",type:"button",show:!0,fixed:"right",align:"center",btnList:[{label:"明细",type:"primary",auth:"admin/user_bill/detail",handle:(e,a,l,t,i)=>M(a)},{hide:e=>E(e),label:"结算",type:"primary",auth:"admin/user_bill/audit_withdraw",handle:(e,a,l,t,i)=>D(a)}]}]),S=e=>{V(e.file_url)},D=async e=>{l.confirm("是否结算该商户的对账单？").then((async()=>{await t("/admin/user_bill/audit_withdraw",{id:e.id,status:"2"})&&(i({type:"success",message:"操作成功"}),q())})).catch((()=>{}))},E=e=>1!==e.status,P=e=>!e.file_url,U=a([]),F=a(!1),M=async e=>{const a=await n("/admin/user_bill/detail",{id:e.id});a&&(F.value=!0,U.value=a)},V=(e,a=!0)=>{const l=new XMLHttpRequest;l.open("get",e),l.responseType="blob",l.send(),l.onload=function(){if(200===this.status||304===this.status){if("msSaveOrOpenBlob"in navigator)return void navigator.msSaveOrOpenBlob(this.response,name);const l=URL.createObjectURL(this.response);if(a){const a=document.createElement("a");a.style.display="none",a.href=l,a.download=e,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(l)}else window.open(l,e)}}},Y=e=>{V(e.file_url,!1)},z=()=>{T.value.page=1,q()},B=()=>{(e=>{for(const a of Object.keys(e))delete e[a]})(H.value),T.value.page=1,T.value.page_size=20,q()},I=a({}),q=async()=>{const e=await t(C.value.getList,{...T.value,...H.value});if(e&&(R.value=[],T.value.total=e.page.total||0,R.value.splice(0),I.value=e.statistics,e.list.length>0))for(let a=0;a<e.list.length;a++){let l=e.list[a];R.value.push(l)}};return s({}),r.on("getCheckData",(e=>{(e=>{const a=[];e.list.forEach((e=>{a.push(e.label)})),N.value.sort(((e,l)=>"操作"===e.label?1:a.indexOf(e.label)-a.indexOf(l.label))),N.value=N.value.map((a=>e.data.includes(a.label)||"操作"===a.label?{...a,show:!0}:{...a,show:!1}))})(e)})),o((()=>{q()})),(e,a)=>{const l=g,t=p("cusTable"),i=v;return d(),u("div",y,[c("div",w,[h(i,null,{default:b((()=>[h(l,{searchForm:k.value,searchData:H.value,searchHandleRight:O.value,searchHandle:L.value,tableCols:N.value,onHandleEnterSearch:z,onHandleReset:B},null,8,["searchForm","searchData","searchHandleRight","searchHandle","tableCols"]),a[7]||(a[7]=c("p",null,"结算统计：",-1)),c("div",f,[c("div",x,[a[1]||(a[1]=c("p",null,"可结算金额（已出账）",-1)),c("p",null,"TN "+m(I.value.may_price),1),a[2]||(a[2]=c("p",null,"≈",-1)),c("p",null,"CNY "+m(I.value.may_price_r),1)]),c("div",W,[a[3]||(a[3]=c("p",null,"可结算金额（未出账）",-1)),c("p",null,"TN "+m(I.value.await_price),1),a[4]||(a[4]=c("p",null,"≈",-1)),c("p",null,"CNY "+m(I.value.await_price_r),1)]),c("div",j,[a[5]||(a[5]=c("p",null,"累计结算",-1)),c("p",null,"TN "+m(I.value.total_price),1),a[6]||(a[6]=c("p",null,"≈",-1)),c("p",null,"CNY "+m(I.value.total_price_r),1)])]),h(t,{ref:"cusTable",height:"calc(100vh - 320px)","row-key":"id",isPagination:!0,isHandle:!0,tableCols:N.value,tableData:R.value,tablePage:T.value,onHandleCurrentChange:q},null,8,["tableCols","tableData","tablePage"])])),_:1})]),h(_,{modelValue:F.value,"onUpdate:modelValue":a[0]||(a[0]=e=>F.value=e),data:U.value,onSubmit:e.refreshMenu},null,8,["modelValue","data","onSubmit"])])}}},[["__scopeId","data-v-79d3d8d6"]]);export{C as default};