import{_ as e,f as a,g as l,ah as t,o as s,c as n,d as i,w as o,a as u,J as d,K as p,L as r,e as g,F as m,j as v,A as c,ad as _,ae as w,D as y,a3 as b,a4 as h,a5 as f}from"./index-BdR_P0jW.js";/* empty css                */import k from"./settingForm-B2eCJS9O.js";import{E as z}from"./index-C5ggMqbd.js";const x={class:"mb20"},j=e(Object.assign({name:"admin/setting/index"},{__name:"index",setup(e){const j=a([]),V=a(!1),C=l({}),O=a({keyword:"",setting_group:""}),U=a([]),S=a([]),D=a({page:1,page_size:20,total:0}),F=async()=>{let e={keyword:O.value.keyword,page:D.value.page,page_size:D.value.page_size};"不限"!==O.value.setting_group&&(e.setting_group=O.value.setting_group);const a=await v("/admin/setting/index/lists",e);a&&(j.value=(null==a?void 0:a.lists.list)||[],U.value=(null==a?void 0:a.setting_group)||[],S.value=["不限"].concat(U.value),D.value=(null==a?void 0:a.lists.page)||{})},I=e=>{D.value.page_size=e,F()},P=e=>{D.value.page=e,F()},A=e=>{(e=>{for(const a of Object.keys(e))delete e[a]})(C),Object.assign(C,e),V.value=!0},E=async()=>{F()};return(async()=>{F()})(),(e,a)=>{const l=c,v=_,J=w,K=y,L=b,Z=h,q=f,B=z,G=t("hasPermi");return s(),n("div",null,[i(B,null,{header:o((()=>a[6]||(a[6]=[u("span",null,"配置列表",-1)]))),default:o((()=>[u("div",x,[i(l,{modelValue:O.value.keyword,"onUpdate:modelValue":a[0]||(a[0]=e=>O.value.keyword=e),style:{width:"280px"},placeholder:"关键词",clearable:""},null,8,["modelValue"]),i(J,{class:"ml30",modelValue:O.value.setting_group,"onUpdate:modelValue":a[1]||(a[1]=e=>O.value.setting_group=e),clearable:"",placeholder:"分组",style:{width:"280px"},"value-on-clear":""},{default:o((()=>[(s(!0),n(d,null,p(S.value,(e=>(s(),r(v,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),i(K,{class:"ml30",type:"primary",onClick:a[2]||(a[2]=e=>(D.value.page=1,void F()))},{default:o((()=>a[7]||(a[7]=[g("查询")]))),_:1})]),i(Z,{data:j.value,"row-key":"setting_id","default-expand-all":"",class:"mt5"},{default:o((()=>[i(L,{prop:"setting_id",label:"ID","min-width":"10",sortable:""}),i(L,{prop:"setting_key",label:"key","min-width":"10"}),i(L,{prop:"setting_value",label:"值","min-width":"10"}),i(L,{prop:"setting_description",label:"描述","min-width":"10"}),i(L,{prop:"setting_group",label:"分组","min-width":"10"}),i(L,{prop:"type",label:"类型","min-width":"10"}),i(L,{prop:"updated_at",label:"更新时间","min-width":"10"}),i(L,{label:"操作",align:"center",width:"220","min-width":"220"},{default:o((({row:e})=>[m((s(),r(K,{type:"primary",onClick:a=>A(e)},{default:o((()=>a[8]||(a[8]=[g("编辑")]))),_:2},1032,["onClick"])),[[G,["admin/setting/edit"]]])])),_:1})])),_:1},8,["data"]),i(q,{background:"",layout:"total, sizes, prev, pager, next, ->,jumper","current-page":D.value.page,"onUpdate:currentPage":a[3]||(a[3]=e=>D.value.page=e),"page-size":D.value.page_size,"onUpdate:pageSize":a[4]||(a[4]=e=>D.value.page_size=e),total:D.value.total,class:"ml10 mt10",onSizeChange:I,onCurrentChange:P},null,8,["current-page","page-size","total"])])),_:1}),i(k,{modelValue:V.value,"onUpdate:modelValue":a[5]||(a[5]=e=>V.value=e),data:C,rolenameOptions:U.value,onSubmit:E},null,8,["modelValue","data","rolenameOptions"])])}}}),[["__scopeId","data-v-664224f8"]]);export{j as default};
