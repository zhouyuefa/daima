import{a6 as e,a7 as a,R as l,f as t,g as d,h as s,j as o,o as u,L as r,w as i,d as n,c as m,J as p,K as c,e as y,t as f,y as b,H as V,A as _,B as k,ad as g,ae as v,D as j,E as h,aa as x}from"./index-BdR_P0jW.js";/* empty css                *//* empty css                       */import{E as w}from"./index-DTPeqqvl.js";import"./index-D1LW7kyL.js";import"./index-SLBSEZ_O.js";const O={__name:"dictForm",props:e({data:{type:Object,default:()=>({})},typeOptions:{type:Array,default:[]}},{modelValue:{},modelModifiers:{}}),emits:e(["submit"],["update:modelValue"]),setup(e,{emit:O}){const U=a(e,"modelValue"),q=O,A=e,C=l((()=>(A.data.id?"编辑":"新增")+"字典")),D=l((()=>A.data.id)),E=t(null),R=d({}),B=d([]),F=d({key:[{required:!0,message:"请输入key",trigger:"blur"}],name:[{required:!0,message:"请输入名称",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"blur"}]});s(D,(async e=>{H();const a=e??0,l=await o("/admin/dict/edit/"+a);if(!l)return;const{info:t}=l||{};J(R),Object.assign(R,t)}));const H=async()=>{const e=await o("/admin/load/tree");Object.assign(B,e)},J=e=>{for(const a of Object.keys(e))delete e[a]},K=async()=>{await b("/admin/dict/edit",R)&&(V.success((A.data.id?"修改":"添加")+"成功"),q("submit"),U.value=!1)};return(a,l)=>{const t=_,d=k,s=w,o=g,b=v,V=j,O=h,q=x;return u(),r(q,{modelValue:U.value,"onUpdate:modelValue":l[7]||(l[7]=e=>U.value=e),title:C.value,width:"420",top:"20vh",class:"form-dialog","close-on-click-modal":!1},{default:i((()=>[n(O,{ref_key:"formDataRef",ref:E,model:R,"label-width":"auto",rules:F},{default:i((()=>[n(d,{label:"key",prop:"key",class:"mt10"},{default:i((()=>[n(t,{modelValue:R.key,"onUpdate:modelValue":l[0]||(l[0]=e=>R.key=e),type:"number"},null,8,["modelValue"])])),_:1}),n(d,{label:"名称",prop:"name"},{default:i((()=>[n(t,{modelValue:R.name,"onUpdate:modelValue":l[1]||(l[1]=e=>R.name=e)},null,8,["modelValue"])])),_:1}),n(d,{label:"所属上级",prop:"parent_id"},{default:i((()=>[n(s,{modelValue:R.parent_id,"onUpdate:modelValue":l[2]||(l[2]=e=>R.parent_id=e),data:B,"render-after-expand":!1,"show-checkbox":"","current-node-key":R.parent_id,"check-strictly":!0},null,8,["modelValue","data","current-node-key"])])),_:1}),n(d,{label:"类型",prop:"type",class:"mt10"},{default:i((()=>[n(b,{modelValue:R.type,"onUpdate:modelValue":l[3]||(l[3]=e=>R.type=e),clearable:"",placeholder:""},{default:i((()=>[(u(!0),m(p,null,c(e.typeOptions,(e=>(u(),r(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),n(d,{label:"排序",prop:"sort",class:"mt10"},{default:i((()=>[n(t,{modelValue:R.sort,"onUpdate:modelValue":l[4]||(l[4]=e=>R.sort=e),type:"number"},null,8,["modelValue"])])),_:1}),n(d,{class:"text-right mt20"},{default:i((()=>[n(V,{type:"primary",onClick:l[5]||(l[5]=e=>(async e=>{e&&e.validate((e=>{e&&K()}))})(E.value))},{default:i((()=>[y(" 立即"+f(A.data.id?"修改":"添加"),1)])),_:1}),n(V,{onClick:l[6]||(l[6]=e=>(E.value,void J(R)))},{default:i((()=>l[8]||(l[8]=[y(" 重置 ")]))),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])}}};export{O as default};
