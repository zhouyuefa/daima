import{_ as e,f as a,g as l,o as s,c as t,d as n,w as i,a as o,t as r,e as u,j as d,a3 as c,D as v,a4 as p,a5 as m}from"./index-BdR_P0jW.js";/* empty css                */import g from"./cacheForm-TON00Cm6.js";import{E as f}from"./index-C5ggMqbd.js";const _={class:"mb20"},y={class:"recordsBg flex mb10"},h={class:"drive"},b={class:"recordsBg flex items-center"},j={class:"drive"},x=e(Object.assign({name:"system/cache/index"},{__name:"index",setup(e){const x=a([]),z=a({}),w=a({}),k=a(!1),C=l({}),O=a({page:1,page_size:20,total:0}),S=async()=>{const e=await d("/system/cache/info");if(!e)return;const a=e.keys.map(((e,a)=>({value:e})));x.value=a||[],z.value=e.config_info||{},w.value=e.config_info&&e.config_info.redis_info},U=e=>{O.value.page_size=e,S()},V=e=>{O.value.page=e,S()},B=e=>{(e=>{for(const a of Object.keys(e))delete e[a]})(C),Object.assign(C,e),k.value=!0},I=async()=>{S()};return(async()=>{S()})(),(e,a)=>{const l=c,d=v,S=p,D=m,E=f;return s(),t("div",null,[n(E,null,{header:i((()=>a[3]||(a[3]=[o("span",null,"缓存",-1)]))),default:i((()=>[o("div",_,[o("div",y,[a[4]||(a[4]=o("div",null,"缓存驱动",-1)),o("div",h,r(z.value.driver),1)]),o("div",b,[a[5]||(a[5]=o("div",null,"redis连接",-1)),o("div",j,"已连接 | v"+r(w.value.version)+r(w.value.host)+":"+r(w.value.port)+" | 内存:"+r(w.value.total_system_memory_human),1)])]),n(S,{data:x.value,"row-key":"id","default-expand-all":"",class:"mt5"},{default:i((()=>[n(l,{prop:"value",label:"文件名称","min-width":"10"}),n(l,{label:"操作",align:"center",width:"220","min-width":"220"},{default:i((({row:e})=>[n(d,{type:"primary",onClick:a=>B(e)},{default:i((()=>a[6]||(a[6]=[u("查看")]))),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),n(D,{background:"",layout:"total, sizes, prev, pager, next, ->,jumper","current-page":O.value.page,"onUpdate:currentPage":a[0]||(a[0]=e=>O.value.page=e),"page-size":O.value.page_size,"onUpdate:pageSize":a[1]||(a[1]=e=>O.value.page_size=e),total:O.value.total,class:"ml10 mt10",onSizeChange:U,onCurrentChange:V},null,8,["current-page","page-size","total"])])),_:1}),n(g,{modelValue:k.value,"onUpdate:modelValue":a[2]||(a[2]=e=>k.value=e),data:C,onSubmit:I},null,8,["modelValue","data"])])}}}),[["__scopeId","data-v-67949fcc"]]);export{x as default};
