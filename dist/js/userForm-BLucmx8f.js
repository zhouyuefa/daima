import{a6 as e,a7 as a,R as l,f as s,g as d,h as r,j as t,o,L as u,w as i,d as m,e as n,t as p,y as _,H as c,A as f,B as V,D as g,E as b,aa as v}from"./index-BdR_P0jW.js";/* empty css                *//* empty css                       */import{E as y}from"./index-DTPeqqvl.js";import"./index-D1LW7kyL.js";import"./index-SLBSEZ_O.js";const j={__name:"userForm",props:e({data:{type:Object,default:()=>({})}},{modelValue:{},modelModifiers:{}}),emits:e(["submit"],["update:modelValue"]),setup(e,{emit:j}){const w=a(e,"modelValue"),h=j,k=e,x=l((()=>(k.data.admin_user_id?"编辑":"新增")+"管理员")),U=l((()=>k.data.admin_user_id)),q=s(null),O=d({}),C=s([]),D={checkStrictly:!0,label:"role_name",value:"role_id",children:"children"},E=d({username:[{required:!0,message:"请输入名称",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],real_name:[{required:!0,message:"请输入系统名称",trigger:"blur"}],role_id:[{required:!0,message:"请选择角色",trigger:"blur"}]});r(U,(async e=>{const a=e??0,l=await t("/admin/user/edit/"+a);if(!l)return;const{admin_user:s,role_list:d}=l||{};R(O),Object.assign(O,s),C.value=[{role_name:"无",role_id:0,option_index:0}].concat([...d])}));const R=e=>{for(const a of Object.keys(e))delete e[a]},A=async()=>{await _("/admin/user/edit",O)&&(c.success((k.data.admin_user_id?"修改":"添加")+"成功"),h("submit"),w.value=!1)};return(e,a)=>{const l=f,s=V,d=y,r=g,t=b,_=v;return o(),u(_,{modelValue:w.value,"onUpdate:modelValue":a[6]||(a[6]=e=>w.value=e),title:x.value,width:"420",top:"20vh",class:"form-dialog","close-on-click-modal":!1},{default:i((()=>[m(t,{ref_key:"formDataRef",ref:q,model:O,"label-width":"auto",rules:E},{default:i((()=>[m(s,{label:"用户名",prop:"username"},{default:i((()=>[m(l,{modelValue:O.username,"onUpdate:modelValue":a[0]||(a[0]=e=>O.username=e)},null,8,["modelValue"])])),_:1}),m(s,{label:"密码",prop:k.data.admin_user_id?"":"password"},{default:i((()=>[m(l,{modelValue:O.password,"onUpdate:modelValue":a[1]||(a[1]=e=>O.password=e),type:"password"},null,8,["modelValue"])])),_:1},8,["prop"]),m(s,{label:"系统名称",prop:"real_name"},{default:i((()=>[m(l,{modelValue:O.real_name,"onUpdate:modelValue":a[2]||(a[2]=e=>O.real_name=e)},null,8,["modelValue"])])),_:1}),m(s,{label:"角色",prop:"role_id",class:"mt10"},{default:i((()=>[m(d,{modelValue:O.role_id,"onUpdate:modelValue":a[3]||(a[3]=e=>O.role_id=e),data:C.value,"check-strictly":"",props:D},null,8,["modelValue","data"])])),_:1}),m(s,{class:"text-right mt20"},{default:i((()=>[m(r,{type:"primary",onClick:a[4]||(a[4]=e=>(async e=>{e&&e.validate((e=>{e&&A()}))})(q.value))},{default:i((()=>[n(" 立即"+p(k.data.admin_user_id?"修改":"添加"),1)])),_:1}),m(r,{onClick:a[5]||(a[5]=e=>(q.value,void R(O)))},{default:i((()=>a[7]||(a[7]=[n(" 重置 ")]))),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])}}};export{j as default};
