import{_ as e,f as a,g as l,a1 as i,r as s,ah as t,o as d,c as u,d as r,w as n,a as o,J as v,K as m,L as p,e as _,t as c,i as b,l as g,F as y,a2 as f,j as w,ai as h,y as k,H as x,ad as V,ae as z,A as j,D as C,af as U,z as S,a3 as T,a4 as F,a5 as L}from"./index-BdR_P0jW.js";/* empty css                */import O from"./driversForm-r_rYT7MT.js";import{E as A}from"./index-C5ggMqbd.js";/* empty css                   */import"./index-CHd10VUt.js";const B={class:"mb20 search-pane"},I={class:"flex items-center"},P={key:1,class:"image-load"},D={class:"ml10"},E=e(Object.assign({name:"company/drivers/index"},{__name:"index",setup(e){const E=a([]),H=a(!1),J=l({}),K=a({name:"",status:"",mobile:"",admin_user_id:"",driver_user_id:"",driver_status:""}),M=i({0:"未知",1:"男",2:"女"}),Q=i({1:"正常",2:"注销",3:"黑名单"});i({0:"未实名",1:"已实名"});const Z=a([]),$=l([{value:0,label:"全部"},{value:1,label:"正常"},{value:2,label:"注销"},{value:3,label:"黑名单"}]),q=a({page:1,page_size:20,total:0}),G=a([]),N=a(["未提交","审核中","审核失败","审核通过"]),R=async()=>{const e=await w("/admin/drivers/index/lists",{name:K.value.name,status:K.value.status,page:q.value.page,page_size:q.value.page_size,mobile:K.value.mobile,driver_user_id:K.value.driver_user_id,driver_status:K.value.driver_status,admin_user_id:K.value.admin_user_id});e&&(E.value=(null==e?void 0:e.lists.list)||[],q.value=(null==e?void 0:e.lists.page)||{})},W=async()=>{const e=await w("/admin/drivers/audit_success");G.value=e||[]},X=e=>{q.value.page_size=e,R()},Y=e=>{q.value.page=e,R()},ee=(e,a)=>{(e=>{for(const a of Object.keys(e))delete e[a]})(J),Object.assign(J,e,{isAuditStatus:"audit"===a}),H.value=!0},ae=async({id:e},a)=>{h.confirm(`是否确认${a}？`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await k("/admin/drivers/ban",{id:e})&&(x({type:"success",message:a+"成功"}),le())})).catch((()=>{}))},le=async()=>{R()};return(async()=>{R(),W(),(async()=>{var e;const a=await w("/admin/companies/index/lists",{page:1,page_size:1e3});Z.value=(null==(e=null==a?void 0:a.lists)?void 0:e.list)||[]})()})(),(e,a)=>{const l=V,i=z,w=j,h=C,k=U,x=s("Female"),W=S,ie=s("Male"),se=T,te=F,de=L,ue=A,re=t("hasPermi");return d(),u("div",null,[r(ue,null,{header:n((()=>a[9]||(a[9]=[o("span",null,"司机列表",-1)]))),default:n((()=>[o("div",B,[r(i,{modelValue:K.value.admin_user_id,"onUpdate:modelValue":a[0]||(a[0]=e=>K.value.admin_user_id=e),placeholder:"汽车公司",style:{width:"210px"},clearable:""},{default:n((()=>[(d(!0),u(v,null,m(Z.value,(e=>(d(),p(l,{key:e.admin_user_id,label:e.real_name,value:e.admin_user_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),r(i,{modelValue:K.value.status,"onUpdate:modelValue":a[1]||(a[1]=e=>K.value.status=e),placeholder:"状态",style:{width:"200px"}},{default:n((()=>[(d(!0),u(v,null,m($,(e=>(d(),p(l,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),r(w,{modelValue:K.value.mobile,"onUpdate:modelValue":a[2]||(a[2]=e=>K.value.mobile=e),placeholder:"手机号码",style:{width:"240px"},clearable:""},null,8,["modelValue"]),r(i,{modelValue:K.value.driver_user_id,"onUpdate:modelValue":a[3]||(a[3]=e=>K.value.driver_user_id=e),placeholder:"真实姓名",style:{width:"240px"},clearable:"",filterable:""},{default:n((()=>[(d(!0),u(v,null,m(G.value,(e=>(d(),p(l,{key:e.id,label:e.full_name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),r(i,{modelValue:K.value.driver_status,"onUpdate:modelValue":a[4]||(a[4]=e=>K.value.driver_status=e),placeholder:"审核状态",style:{width:"210px"},clearable:"",filterable:""},{default:n((()=>[(d(!0),u(v,null,m(N.value.filter((e=>"未提交"!==e)),((e,a)=>(d(),p(l,{key:a,label:e,value:(a+1).toString()},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),r(h,{type:"primary",onClick:a[5]||(a[5]=e=>(q.value.page=1,void R()))},{default:n((()=>a[10]||(a[10]=[_("查询")]))),_:1})]),r(te,{data:E.value,"row-key":"id","default-expand-all":"",class:"mt5"},{default:n((()=>[r(se,{prop:"avatar_url",label:"司机信息","min-width":"10",width:"240px"},{default:n((({row:e})=>[o("div",I,[o("div",null,[e.avatar_url?(d(),p(k,{key:0,style:{width:"100px",height:"100px"},src:e.avatar_url,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"preview-src-list":[e.avatar_url]},null,8,["src","preview-src-list"])):(d(),u("div",P))]),o("div",D,[o("div",null,[_(c(e.nickname)+" ",1),2==e.gender?(d(),p(W,{key:0},{default:n((()=>[r(x)])),_:1})):1==e.gender?(d(),p(W,{key:1},{default:n((()=>[r(ie)])),_:1})):b("",!0)]),o("div",null,c(e.car_number),1)])])])),_:1}),r(se,{prop:"admin_real_name",label:"所属公司","min-width":"10"}),r(se,{prop:"country_code",label:"国际区号","min-width":"10"}),r(se,{prop:"mobile",label:"手机号码","min-width":"10"}),r(se,{prop:"level_id",label:"等级","min-width":"10"}),r(se,{prop:"status",label:"状态","min-width":"10"},{default:n((({row:e})=>[o("span",null,c(g(Q)[e.status]),1)])),_:1}),r(se,{prop:"sur",label:"真实姓名","min-width":"10"},{default:n((({row:e})=>[o("span",null,c(e.sur||"-")+c(e.name||"-"),1)])),_:1}),r(se,{prop:"valid_wacn",label:"可用余额","min-width":"10"}),r(se,{prop:"freeze_wacn",label:"冻结余额","min-width":"10"}),r(se,{prop:"updated_at",label:"最后登录时间","min-width":"10"}),r(se,{label:"审核状态","min-width":"10"},{default:n((({row:e})=>[o("span",null,c(N.value[e.driver_status??0]||"--"),1)])),_:1}),r(se,{label:"操作",align:"center",width:"230","min-width":"220"},{default:n((({row:e})=>[1===e.driver_status?y((d(),p(h,{key:0,type:"warning",onClick:a=>ee(e,"audit")},{default:n((()=>a[11]||(a[11]=[_(" 审核 ")]))),_:2},1032,["onClick"])),[[re,["admin/drivers/audit_driver_info"]]]):y((d(),p(h,{key:1,type:"primary",onClick:a=>ee(e,"detail")},{default:n((()=>a[12]||(a[12]=[_("详情")]))),_:2},1032,["onClick"])),[[re,["admin/drivers/driverInfo"]]]),y((d(),p(h,{onClick:a=>ae(e,"禁用")},{default:n((()=>a[13]||(a[13]=[_("禁用")]))),_:2},1032,["onClick"])),[[re,["admin/drivers/ban"]],[f,1==e.status]]),y((d(),p(h,{onClick:a=>ae(e,"启用"),disabled:2==e.status},{default:n((()=>a[14]||(a[14]=[_("启用")]))),_:2},1032,["onClick","disabled"])),[[re,["admin/drivers/ban"]],[f,3==e.status||2==e.status]])])),_:1})])),_:1},8,["data"]),r(de,{background:"",layout:"total, sizes, prev, pager, next, ->,jumper","current-page":q.value.page,"onUpdate:currentPage":a[6]||(a[6]=e=>q.value.page=e),"page-size":q.value.page_size,"onUpdate:pageSize":a[7]||(a[7]=e=>q.value.page_size=e),total:q.value.total,class:"ml10 mt10",onSizeChange:X,onCurrentChange:Y},null,8,["current-page","page-size","total"])])),_:1}),r(O,{modelValue:H.value,"onUpdate:modelValue":a[8]||(a[8]=e=>H.value=e),data:J,objType:{statusList:g(Q),genderList:g(M)},onSubmit:le},null,8,["modelValue","data","objType"])])}}}),[["__scopeId","data-v-9a4d39c1"]]);export{E as default};