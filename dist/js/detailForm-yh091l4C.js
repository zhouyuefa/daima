import{a6 as e,f as a,y as t,a7 as l,r,o as i,L as n,w as o,d as s,e as p,D as d,aa as m}from"./index-BdR_P0jW.js";/* empty css                */import{E as c}from"./index-C5CR2e01.js";const g={__name:"detailForm",props:e({data:{type:Array,default:()=>[]}},{modelValue:{},modelModifiers:{}}),emits:e(["submit"],["update:modelValue"]),setup(e,{emit:g}){const h=a({status:"all",bill_day:[],driver_user_id:""});a({order_type:"all",use_time:""}),a([{label:"查 询",icon:"Search",handle:()=>u()}]),a([]);const b=a([]),y=a({pageCurrent:1,pageSize:10,totalPages:0,params:{}}),_=a([{label:"订单编号",prop:"order_no",align:"center",type:"string",sortable:!1,minWidth:"200",show:!0},{label:"用车时间",prop:"use_time",align:"center",type:"timestamp",sortable:!1,minWidth:"160",show:!0},{label:"系列",prop:"style_name",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"车辆类型",prop:"type_name",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"用车天数",prop:"days",align:"center",type:"string",sortable:!1,minWidth:"100",show:!0},{label:"汽车公司",prop:"company_name",align:"center",type:"string",sortable:!1,minWidth:"160",show:!0},{label:"司机",prop:"driver_name",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"支付时间",prop:"paid_time",align:"center",type:"timestamp",sortable:!1,minWidth:"160",show:!0},{label:"含税总价格（客户消费总额）",type:"Secondary",align:"center",type:"string",sortable:!1,minWidth:"160",show:!0,propSec:[{label:"日币(円)/WACN(TN)",prop:"total_price",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"人民币(元)",prop:"total_price_r",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0}]},{label:"国内3%增值税",prop:"zengzhishui",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"平台留存占总价比例",prop:"plate_save_rate",align:"center",type:"percentage",sortable:!1,minWidth:"120",show:!0},{label:"平台最终留存额",type:"Secondary",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0,propSec:[{label:"日币(円)",prop:"plate_price",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0}]},{label:"汽车公司结算额占总价比例",prop:"company_rate",align:"center",type:"percentage",sortable:!1,minWidth:"120",show:!0},{label:"日本汽车公司结算金额（内含消费税）",type:"Secondary",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0,propSec:[{label:"日币(円)/WACN(TN)",prop:"company_price",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"人民币(元)",prop:"company_price_r",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0}]},{label:"订单价格TN",type:"Secondary",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0,propSec:[{label:"日币(円)",prop:"order_price",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0}]},{label:"平台的利润额（扣除增值税）",type:"Secondary",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0,propSec:[{label:"日币(円)",prop:"plate_profit",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0}]},{label:"平台最终利润率",prop:"plate_profit_rate",align:"center",type:"percentage",sortable:!1,minWidth:"120",show:!0},{label:"汇率",prop:"exchange_rate",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"下单时间",prop:"created_at",align:"center",type:"timestamp",sortable:!1,minWidth:"160",show:!0}]),u=()=>{y.value.pageCurrent=1,W()},w=a({page:1,page_size:20,total:0}),W=async()=>{const e=await t("/admin/company_withdraw/withdraw_detail",{status:h.value.status,bill_day:h.value.bill_day,driver_user_id:h.value.driver_user_id,page:w.value.page,page_size:w.value.page_size});e&&(b.value=(null==e?void 0:e.list)||[])},v=l(e,"modelValue"),f=e;b.value=JSON.parse(JSON.stringify(f.data));return(e,a)=>{const t=r("cusTable"),l=c,g=d,h=m;return i(),n(h,{modelValue:v.value,"onUpdate:modelValue":a[1]||(a[1]=e=>v.value=e),title:"明细",width:"80%",top:"20vh",class:"form-dialog"},{footer:o((()=>[s(g,{type:"primary",onClick:a[0]||(a[0]=a=>(e.formDataRef,void(v.value=!1)))},{default:o((()=>a[2]||(a[2]=[p(" 关闭 ")]))),_:1})])),default:o((()=>[s(l,null,{default:o((()=>[s(t,{ref:"cusTable",maxHeight:"calc(100vh - 440px)","row-key":"test_admin_user_id",isPagination:!1,isHandle:!0,tableCols:_.value,tableData:f.data,SecondaryHead:"",onHandleCurrentChange:W},null,8,["tableCols","tableData"])])),_:1})])),_:1},8,["modelValue"])}}};export{g as default};
