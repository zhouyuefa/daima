import{_ as a,f as e,g as l,ah as s,o as i,c as t,d as n,w as d,a as o,e as r,F as u,L as m,j as p,A as c,D as _,a3 as v,a4 as g,a5 as f}from"./index-BdR_P0jW.js";/* empty css                */import b from"./companiesForm-Dtzvhz90.js";import y from"./resetPwd-tYZYIoKT.js";import{E as h}from"./index-C5ggMqbd.js";/* empty css                    */import"./index-TSZus3Mb.js";const w={class:"mb20"},j=a(Object.assign({name:"company/companies/index"},{__name:"index",setup(a){const j=e([]),z=e(!1),x=e(!1),k=l({}),C=e({real_name:"",admin_user_id:""}),V=e({page:1,page_size:20,total:0}),U=async()=>{const a=await p("/admin/companies/index/lists",{real_name:C.value.real_name,admin_user_id:C.value.admin_user_id,page:V.value.page,page_size:V.value.page_size});a&&(j.value=(null==a?void 0:a.lists.list)||[],V.value=(null==a?void 0:a.lists.page)||{})},O=a=>{V.value.page_size=a,U()},S=a=>{V.value.page=a,U()},I=a=>{for(const e of Object.keys(a))delete a[e]},P=a=>{I(k),Object.assign(k,a),z.value=!0},D=async()=>{U()};return(async()=>{U()})(),(a,e)=>{const l=c,p=_,F=v,A=g,E=f,G=h,L=s("hasPermi");return i(),t("div",null,[n(G,null,{header:d((()=>e[7]||(e[7]=[o("span",null,"公司列表",-1)]))),default:d((()=>[o("div",w,[n(l,{modelValue:C.value.real_name,"onUpdate:modelValue":e[0]||(e[0]=a=>C.value.real_name=a),style:{width:"280px"},placeholder:"公司名称",clearable:""},null,8,["modelValue"]),n(p,{class:"ml30",type:"primary",onClick:e[1]||(e[1]=a=>(V.value.page=1,void U()))},{default:d((()=>e[8]||(e[8]=[r("查询")]))),_:1}),u((i(),m(p,{class:"ml30",type:"primary",onClick:e[2]||(e[2]=a=>P({admin_user_id:0}))},{default:d((()=>e[9]||(e[9]=[r("新增")]))),_:1})),[[L,["admin/companies/edit"]]])]),n(A,{data:j.value,"row-key":"admin_user_id","default-expand-all":"",class:"mt5"},{default:d((()=>[n(F,{prop:"admin_user_id",label:"ID","min-width":"10",sortable:""}),n(F,{prop:"real_name",label:"公司名称","min-width":"10"}),n(F,{prop:"username",label:"登录账号","min-width":"10"}),n(F,{prop:"email",label:"邮箱","min-width":"10"}),n(F,{prop:"created_at",label:"创建时间","min-width":"10"}),n(F,{label:"操作",align:"center",width:"220","min-width":"220"},{default:d((({row:a})=>[u((i(),m(p,{type:"primary",onClick:e=>P(a)},{default:d((()=>e[10]||(e[10]=[r("编辑")]))),_:2},1032,["onClick"])),[[L,["admin/companies/edit"]]]),u((i(),m(p,{type:"primary",onClick:e=>{return l=a,I(k),Object.assign(k,l),void(x.value=!0);var l}},{default:d((()=>e[11]||(e[11]=[r("重置密码")]))),_:2},1032,["onClick"])),[[L,["admin/companies/reset_password"]]])])),_:1})])),_:1},8,["data"]),n(E,{background:"",layout:"total, sizes, prev, pager, next, ->,jumper","current-page":V.value.page,"onUpdate:currentPage":e[3]||(e[3]=a=>V.value.page=a),"page-size":V.value.page_size,"onUpdate:pageSize":e[4]||(e[4]=a=>V.value.page_size=a),total:V.value.total,class:"ml10 mt10",onSizeChange:O,onCurrentChange:S},null,8,["current-page","page-size","total"])])),_:1}),n(b,{modelValue:z.value,"onUpdate:modelValue":e[5]||(e[5]=a=>z.value=a),data:k,onSubmit:D},null,8,["modelValue","data"]),n(y,{modelValue:x.value,"onUpdate:modelValue":e[6]||(e[6]=a=>x.value=a),data:k,onSubmit:D},null,8,["modelValue","data"])])}}}),[["__scopeId","data-v-7dae06f0"]]);export{j as default};
