import{_ as e,a6 as l,a7 as a,f as t,R as d,al as u,g as s,h as i,j as r,o,L as m,w as p,d as v,c as n,J as _,K as c,a as f,e as y,t as g,H as V,y as b,A as h,B as x,ad as k,ae as w,D as U,af as j,am as q,E as D,aa as Y}from"./index-BdR_P0jW.js";/* empty css                    */import{E as H}from"./index-TSZus3Mb.js";const M={class:"upload-ads flex"},C={key:0,style:{color:"red","margin-left":"10px"}},E={key:1,style:{color:"red","margin-left":"10px"}},R={key:1,class:"image-load"},z=e({__name:"adsForm",props:l({data:{type:Object,default:()=>({})}},{modelValue:{},modelModifiers:{}}),emits:l(["submit"],["update:modelValue"]),setup(e,{emit:l}){const z=a(e,"modelValue"),A=l,B=e,F=t([]),I=d((()=>(B.data.id?"编辑":"新增")+"广告")),J=d((()=>B.data.id)),K=t(u+"/upload/file"),L=t(null),O=t({}),G=s({title:[{required:!0,message:"请输入名称",trigger:"blur"}],file_id:[{required:!0,message:"请选择广告图片",trigger:"blur"}],type:[{required:!0,message:"请选择广告类型",trigger:"select"}],sort:[{required:!0,message:"请输入排序",trigger:"blur"}]});i(J,(async e=>{const l=e??0,a=await r("/admin/ads/edit/"+l)||{},{info:t,type_list:d}=a||{};O.value={...t},F.value=d,t.valid_from&&t.valid_to&&(O.value.valid_until=[t.valid_from,t.valid_to])}));const N=(e,l,a)=>{200==e.code?(O.value.file_id=e.data.id,O.value.file_url=e.data.file_url,V({type:"success",message:"上传成功"})):500==e.code&&V({type:"error",message:e.msg})},P=async()=>{O.value.valid_until&&(O.value.valid_from=O.value.valid_until[0],O.value.valid_to=O.value.valid_until[1]);await b("/admin/ads/edit",{...O.value})&&(V.success((B.data.id?"修改":"添加")+"成功"),A("submit"),z.value=!1)};return(e,l)=>{const a=h,t=x,d=k,u=w,s=U,i=H,r=j,V=q,b=D,A=Y;return o(),m(A,{modelValue:z.value,"onUpdate:modelValue":l[7]||(l[7]=e=>z.value=e),title:I.value,width:"600",top:"20vh",class:"form-dialog","close-on-click-modal":!1},{default:p((()=>[v(b,{ref_key:"formDataRef",ref:L,model:O.value,"label-width":"auto",rules:G},{default:p((()=>[v(t,{label:"标题",prop:"title"},{default:p((()=>[v(a,{modelValue:O.value.title,"onUpdate:modelValue":l[0]||(l[0]=e=>O.value.title=e)},null,8,["modelValue"])])),_:1}),v(t,{label:"类型",prop:"type"},{default:p((()=>[v(u,{modelValue:O.value.type,"onUpdate:modelValue":l[1]||(l[1]=e=>O.value.type=e),placeholder:"请选择广告类型",style:{width:"100%"}},{default:p((()=>[(o(!0),n(_,null,c(F.value,(e=>(o(),m(d,{key:e.type,label:e.type_name,value:e.type},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(t,{label:"图片",prop:"file_id",class:"mt10"},{default:p((()=>[f("div",M,[v(i,{class:"upload-demo",action:K.value,"on-success":N},{trigger:p((()=>[v(s,{type:"primary"},{default:p((()=>l[8]||(l[8]=[y("上传广告")]))),_:1}),"popup_ads"==O.value.type?(o(),n("div",C,"请上传9:16的比例弹窗图片")):(o(),n("div",E,"请上传16:9的比例banner图片"))])),_:1},8,["action"]),O.value.file_url?(o(),m(r,{key:0,style:{width:"100px",height:"100px","margin-top":"20px"},src:O.value.file_url,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"preview-src-list":[O.value.file_url]},null,8,["src","preview-src-list"])):(o(),n("div",R))])])),_:1}),v(t,{label:"有效期",prop:"valid_until"},{default:p((()=>[v(V,{modelValue:O.value.valid_until,"onUpdate:modelValue":l[2]||(l[2]=e=>O.value.valid_until=e),type:"datetimerange","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])])),_:1}),v(t,{label:"链接",prop:"url"},{default:p((()=>[v(a,{modelValue:O.value.url,"onUpdate:modelValue":l[3]||(l[3]=e=>O.value.url=e)},null,8,["modelValue"])])),_:1}),v(t,{label:"排序",prop:"sort",class:"mt10"},{default:p((()=>[v(a,{modelValue:O.value.sort,"onUpdate:modelValue":l[4]||(l[4]=e=>O.value.sort=e),type:"number"},null,8,["modelValue"])])),_:1}),v(t,{class:"text-right mt20"},{default:p((()=>[v(s,{type:"primary",onClick:l[5]||(l[5]=e=>(async e=>{e&&e.validate((e=>{e&&P()}))})(L.value))},{default:p((()=>[y(" 立即"+g(B.data.id?"修改":"添加"),1)])),_:1}),v(s,{onClick:l[6]||(l[6]=e=>{return L.value,(l=O).title="",l.file_id="",l.file_url="",l.url="",l.sort="",l.valid_until="",l.valid_from="",void(l.valid_to="");var l})},{default:p((()=>l[9]||(l[9]=[y(" 重置 ")]))),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])}}},[["__scopeId","data-v-ed654540"]]);export{z as default};