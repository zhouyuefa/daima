import{_ as e,a6 as a,a7 as l,R as t,h as s,f as r,g as u,al as o,r as d,o as i,L as m}from"./index-BdR_P0jW.js";const p=e({__name:"versionForm",props:a({data:{type:Object,default:()=>({})}},{modelValue:{},modelModifiers:{}}),emits:a(["submit"],["update:modelValue"]),setup(e,{emit:a}){const p=l(e,"modelValue"),g=e;t((()=>(g.data.id?"审核":"新增")+"版本"));const n=t((()=>g.data.id));s(n,(async e=>{Object.assign(b.value,g.data),b.value.status=1})),r(null);const b=r({});return u({app_type:[{required:!0,message:"请选择应用所属",trigger:["blur","change"]}],system_type:[{required:!0,message:"请选择应用类型",trigger:["blur","change"]}],version:[{required:!0,message:"请输入版本号",trigger:"blur"}],build:[{required:!0,message:"请输入build",trigger:"blur"}],context:[{required:!0,message:"请输入版本描述",trigger:"blur"}],status:[{required:!0,message:"请选择",trigger:["blur","change"]}]}),r([{label:"应用所属:",type:"select",msg:"app_type",options:[{label:"都可道",value:"1"},{label:"U+",value:"2"}]},{label:"应用类型:",type:"select",msg:"system_type",options:[{label:"IOS",value:"1"},{label:"安卓",value:"2"}]},{label:"版本号:",type:"text",msg:"version"},{label:"build:",type:"text",msg:"build"},{label:"安装包:",type:"upload",msg:"path"},{label:"版本描述:",type:"textarea",msg:"context"},{label:"状态:",type:"radio",msg:"status",options:[{label:"启用",value:1},{label:"禁用",value:2}]}]),r(o+"/admin/version/upload_apk"),r(null),(e,a)=>{const l=d("version-form",!0);return i(),m(l,{modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=e=>p.value=e),data:e.selectedRowData,onSubmit:a[1]||(a[1]=a=>e.refreshList())},null,8,["modelValue","data"])}}},[["__scopeId","data-v-ccc7a8c5"]]);export{p as default};