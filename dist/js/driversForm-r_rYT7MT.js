import{_ as e,a6 as a,a7 as l,R as t,f as i,g as s,h as r,y as d,o as u,L as _,w as n,d as c,a as o,t as p,i as m,c as f,J as v,K as h,e as b,H as x,B as g,af as y,M as w,N as k,A as V,D as z,E as j,aa as O}from"./index-BdR_P0jW.js";/* empty css                   */import{E as U}from"./index-CHd10VUt.js";const A={class:"order-box flex"},C=e({__name:"driversForm",props:a({data:{type:Object,default:()=>({})},objType:{type:Object,default:()=>({})}},{modelValue:{},modelModifiers:{}}),emits:a(["submit"],["update:modelValue"]),setup(e,{emit:a}){const C=l(e,"modelValue"),D=a,E=e,I=t((()=>"司机"+(E.data.id?"详情":"新增"))),M=t((()=>E.data.id)),R=i(null),S=s({}),B=i(!1),F=s({});r(C,(async e=>{if(!e){for(let e in S)delete S[e];return void(B.value=!1)}const a=M.value??0,l=await d("/admin/drivers/driverInfo",{id:a});if(!l)return;const{driver_info:t,user_info:i}=l||{};if(t)Object.assign(S,t,i,{status:S.status??"2",driver_info_id:t.id}),B.value=E.data.isAuditStatus;else for(let s in S)delete S[s]}));return(e,a)=>{const l=g,t=y,i=U,s=w,r=k,E=V,M=z,H=j,J=O;return u(),_(J,{modelValue:C.value,"onUpdate:modelValue":a[4]||(a[4]=e=>C.value=e),title:I.value,width:"50%",top:"10vh",class:"new-dialog"},{default:n((()=>[c(H,{ref_key:"formDataRef",ref:R,model:S,"label-width":"auto",rules:F},{default:n((()=>[o("div",A,[o("div",null,[c(l,{label:"司机名称："},{default:n((()=>[o("div",null,p(S.realname),1)])),_:1}),c(l,{label:"性别："},{default:n((()=>[o("div",null,p(S.gender_name),1)])),_:1}),c(l,{label:"电话："},{default:n((()=>[o("div",null,p(S.mobile),1)])),_:1}),c(l,{label:"邮箱："},{default:n((()=>[o("div",null,p(S.email),1)])),_:1}),c(l,{label:"车辆品牌："},{default:n((()=>[o("div",null,p(S.car_brand_text),1)])),_:1}),c(l,{label:"车辆品牌系列："},{default:n((()=>[o("div",null,p(S.car_style_text),1)])),_:1}),c(l,{label:"车辆类型："},{default:n((()=>[o("div",null,p(S.car_type_text),1)])),_:1}),c(l,{label:"所属类型："},{default:n((()=>[o("div",null,p(S.source_type_text),1)])),_:1}),c(l,{label:"状态："},{default:n((()=>[o("div",null,p(S.status_text),1)])),_:1}),c(l,{label:"免许证番号："},{default:n((()=>[o("div",null,p(S.license),1)])),_:1}),c(l,{label:"自动车登录番号："},{default:n((()=>[o("div",null,p(S.car_number),1)])),_:1}),c(l,{label:"乘车定员："},{default:n((()=>[o("div",null,p(S.seat_num),1)])),_:1}),c(l,{label:"车台番号："},{default:n((()=>[o("div",null,p(S.frame_number),1)])),_:1}),c(l,{label:"审核失败原因："},{default:n((()=>[o("div",null,p(S.reason),1)])),_:1}),c(l,{label:"注册时间："},{default:n((()=>[o("div",null,p(S.reason),1)])),_:1})]),o("div",null,[c(l,{label:"免许证正面："},{default:n((()=>[S.license_front_path?(u(),_(t,{key:0,style:{width:"100px",height:"100px"},src:S.license_front_path,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"preview-src-list":[S.license_front_path]},null,8,["src","preview-src-list"])):m("",!0)])),_:1}),c(l,{label:"免许证反面："},{default:n((()=>[S.license_back_path?(u(),_(t,{key:0,style:{width:"100px",height:"100px"},src:S.license_back_path,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"preview-src-list":[S.license_back_path]},null,8,["src","preview-src-list"])):m("",!0)])),_:1}),c(l,{label:"自動車检查证："},{default:n((()=>[S.inspect_img_path?(u(),_(t,{key:0,style:{width:"100px",height:"100px"},src:S.inspect_img_path,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"preview-src-list":[S.inspect_img_path]},null,8,["src","preview-src-list"])):m("",!0)])),_:1}),c(l,{label:"车辆保险："},{default:n((()=>[S.insure_img_path?(u(),_(t,{key:0,style:{width:"100px",height:"100px"},src:S.insure_img_path,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"preview-src-list":[S.insure_img_path]},null,8,["src","preview-src-list"])):m("",!0)])),_:1}),c(l,{label:"车头 - 露车牌："},{default:n((()=>[S.car_head_img_path?(u(),_(t,{key:0,style:{width:"100px",height:"100px"},src:S.car_head_img_path,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"preview-src-list":[S.car_head_img_path]},null,8,["src","preview-src-list"])):m("",!0)])),_:1}),c(l,{label:"车尾 - 露车牌："},{default:n((()=>[S.car_tail_img_path?(u(),_(t,{key:0,style:{width:"100px",height:"100px"},src:S.car_tail_img_path,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"preview-src-list":[S.car_tail_img_path]},null,8,["src","preview-src-list"])):m("",!0)])),_:1})]),o("div",null,[c(l,{label:"车头45°全车图："},{default:n((()=>[S.car_side_img_path?(u(),_(t,{key:0,style:{width:"100px",height:"100px"},src:S.car_side_img_path,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"preview-src-list":[S.car_side_img_path]},null,8,["src","preview-src-list"])):m("",!0)])),_:1}),c(l,{label:"开侧门向后拍照："},{default:n((()=>[S.car_front_img_path?(u(),_(t,{key:0,style:{width:"100px",height:"100px"},src:S.car_front_img_path,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"preview-src-list":[S.car_front_img_path]},null,8,["src","preview-src-list"])):m("",!0)])),_:1}),c(l,{label:"体检报告："},{default:n((()=>{var e;return[(null==(e=Object.keys(S.tijian_img_path||{}))?void 0:e.length)?(u(!0),f(v,{key:0},h(S.tijian_img_path,((e,a)=>(u(),_(t,{key:a,style:{width:"100px",height:"100px","margin-top":"12px"},src:e,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"preview-src-list":[e]},null,8,["src","preview-src-list"])))),128)):m("",!0)]})),_:1})])]),B.value?(u(),f(v,{key:0},[c(i),a[7]||(a[7]=o("p",{class:"el-dialog__title"},"审核",-1)),c(l,{label:"审核结果：",prop:"auditStatus"},{default:n((()=>[c(r,{modelValue:S.status,"onUpdate:modelValue":a[0]||(a[0]=e=>S.status=e)},{default:n((()=>[c(s,{value:"2",size:"large"},{default:n((()=>a[5]||(a[5]=[b("审核失败")]))),_:1}),c(s,{value:"3",size:"large"},{default:n((()=>a[6]||(a[6]=[b("审核成功")]))),_:1})])),_:1},8,["modelValue"])])),_:1}),c(l,{label:"备注："},{default:n((()=>[c(E,{modelValue:S.reason,"onUpdate:modelValue":a[1]||(a[1]=e=>S.reason=e),style:{width:"75%"},rows:5,type:"textarea",maxlength:"200"},null,8,["modelValue"])])),_:1})],64)):m("",!0),c(l,{class:"text-right mt20"},{default:n((()=>[B.value?(u(),_(M,{key:0,type:"primary",onClick:a[2]||(a[2]=e=>{R.value.validate((async e=>{if(e){const{status:e,reason:a="",driver_info_id:l}=S;if(!(await d("/admin/drivers/audit_driver_info",{status:e,reason:a||"",id:l})))return;x.success("提交成功"),D("submit"),C.value=!1}}))})},{default:n((()=>a[8]||(a[8]=[b(" 提交 ")]))),_:1})):m("",!0),c(M,{onClick:a[3]||(a[3]=e=>(R.value,void(C.value=!1)))},{default:n((()=>a[9]||(a[9]=[b(" 关闭 ")]))),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])}}},[["__scopeId","data-v-f50fe3d4"]]);export{C as default};