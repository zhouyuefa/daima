import{_ as a,f as e,g as l,o as s,c as t,d as u,w as i,a as n,j as d,a3 as o,a4 as p}from"./index-BdR_P0jW.js";/* empty css                */import{E as m}from"./index-C5ggMqbd.js";const r=a(Object.assign({name:"system/queue/status"},{__name:"status",setup(a){const r=e([]),v=e({});e([{value:"delayed",label:"延迟"},{value:"reserved",label:"执行中"},{value:"waiting",label:"等待"},{value:"failed",label:"失败"},{value:"timeout",label:"超时"}]),l([{value:"default",label:"Default"},{value:"business",label:"Business"},{value:"long",label:"long"}]);const b=e({status:"delayed",queueKey:"business"}),c=e({page:1,page_size:20,total:0}),_=async()=>{const a=await d("/system/queue/status/lists",{type:b.value.status,queue_key:b.value.queueKey,page:c.value.page,page_size:c.value.page_size});a&&(r.value=(null==a?void 0:a.lists)||[],v.value=(null==a?void 0:a.count_list)||{})};return(async()=>{_()})(),(a,e)=>{const l=o,d=p,v=m;return s(),t("div",null,[u(v,null,{header:i((()=>e[0]||(e[0]=[n("span",null,"队列状态",-1)]))),default:i((()=>[u(d,{data:r.value,"row-key":"id","default-expand-all":"",class:"mt5"},{default:i((()=>[u(l,{prop:"class_name",label:"类名","min-width":"10"}),u(l,{prop:"method",label:"方法","min-width":"10"}),u(l,{prop:"params",label:"参数","min-width":"10"}),u(l,{prop:"time",label:"执行时间","min-width":"10"}),u(l,{prop:"max_attempts",label:"最大执行次数","min-width":"10"})])),_:1},8,["data"])])),_:1})])}}}),[["__scopeId","data-v-9282c36d"]]);export{r as default};
