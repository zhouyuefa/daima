import{_ as e,x as a,f as l,o as s,L as t,w as i,a as r,d as n,c as o,J as u,K as d,e as p,t as c,l as _,i as m,j as v,ab as y,ac as f,H as g,ad as h,ae as b,D as w,a3 as k,af as U,a4 as I,a5 as x,ag as z}from"./index-BdR_P0jW.js";/* empty css                */import{d as C}from"./dateFormater-BlBTgtQf.js";import{E as j}from"./index-C5ggMqbd.js";const T={class:"mb20"},V={key:0},Y={key:1,width:"135",height:"240",controls:""},D=["src"],E=["onClick"],H=["onClick"],S=e(Object.assign({name:"Chat/history/index"},{__name:"index",setup(e){const{CHAT_TYPE:S}=z,A=a(),L=l([]),$=l([]),q=l({from_im_user_id:"",to_im_user_id:""}),G=l({page:1,page_size:20,total:0}),M=()=>{G.value.page=1,P()},N=async()=>{const e=await v("/admin/load/user",{page_size:1e3});$.value=(null==e?void 0:e.list.map((e=>({label:2===e.type?e.full_name:e.nickname,value:e.im_user_id}))))||[],$.value.unshift({value:"admin_user_2",label:"1号客服"},{value:"admin_user_8",label:"2号客服"})},P=async()=>{const e=await v("/admin/im/chat_history_list/index/lists",{...q.value,...G.value});L.value=e.lists.list||[],G.value=e.lists.page||{}},F=e=>{G.value.page_size=e,P()},J=e=>{G.value.page=e,P()},K=async(e,a)=>{if("send"!==a||e.from_im_user_id.includes("admin_user"))if("recipient"!==a||e.to_im_user_id.includes("admin_user"))g({message:"不能和客服发起聊天",type:"error"});else{const{to_im_user_id:a,recipientUserInfo:l}=e;A.push({path:"/chat/conversation/message",query:{id:a,chatType:S.SINGLE,nickname:2===l.type?l.sur+"师傅":l.nickname,userType:2===l.type?"1":"0",toAvatarUrl:2===l.type?y:f}})}else{const{from_im_user_id:a,sendUserInfo:l}=e;A.push({path:"/chat/conversation/message",query:{id:a,chatType:S.SINGLE,nickname:2===l.type?l.sur+"师傅":l.nickname,userType:2===l.type?"1":"0",toAvatarUrl:2===l.type?y:f}})}};return(async()=>{P(),N()})(),(e,a)=>{const l=h,v=b,y=w,f=k,g=U,z=I,S=x,A=j;return s(),t(A,{header:"聊天记录"},{default:i((()=>[r("div",T,[n(v,{modelValue:q.value.from_im_user_id,"onUpdate:modelValue":a[0]||(a[0]=e=>q.value.from_im_user_id=e),placeholder:"发送方昵称",style:{width:"280px"},filterable:"",clearable:""},{default:i((()=>[(s(!0),o(u,null,d($.value,(e=>(s(),t(l,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),n(v,{class:"ml30",modelValue:q.value.to_im_user_id,"onUpdate:modelValue":a[1]||(a[1]=e=>q.value.to_im_user_id=e),placeholder:"接收方昵称",style:{width:"280px"},filterable:"",clearable:""},{default:i((()=>[(s(!0),o(u,null,d($.value,(e=>(s(),t(l,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),n(y,{class:"ml30",type:"primary",onClick:M},{default:i((()=>a[4]||(a[4]=[p("查询")]))),_:1})]),n(z,{data:L.value},{default:i((()=>[n(f,{prop:"id",label:"ID",width:"90"}),n(f,{prop:"create_time",label:"发送时间",width:"240"},{default:i((({row:e})=>[r("span",null,c(_(C)("YYYY-MM-DD HH:mm:ss",e.create_time)),1)])),_:1}),n(f,{prop:"type",label:"消息类型",width:"120"}),n(f,{prop:"content",label:"消息内容","min-width":"300"},{default:i((({row:{type:l,content:i}})=>["txt"===l?(s(),o("span",V,c(i),1)):"video"===l?(s(),o("video",Y,a[5]||(a[5]=[r("source",{type:"video/mp4"},null,-1),r("source",{type:"video/ogg"},null,-1),p(" 您的浏览器不支持 video 标签。 ")]))):"audio"===l?(s(),o("audio",{key:2,controls:"",src:e.row.file_url},a[6]||(a[6]=[r("source",{type:"audio/ogg"},null,-1),r("source",{type:"audio/mpeg"},null,-1),p(" 您的浏览器不支持 audio 元素。 ")]),8,D)):"img"===l?(s(),t(g,{key:3,style:{width:"100px",height:"100px"},src:i,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"preview-src-list":[i],"preview-teleported":!0,"initial-index":4,fit:"cover"},null,8,["src","preview-src-list"])):m("",!0)])),_:1}),n(f,{label:"发送方昵称",width:"240"},{default:i((({row:e})=>[e.sendUserInfo?(s(),o("span",{key:0,style:{cursor:"pointer"},onClick:a=>K(e,"send")},c(e.sendUserInfo.type?2===e.sendUserInfo.type?`${e.sendUserInfo.full_name}`:e.sendUserInfo.nickname:e.sendUserInfo.real_name),9,E)):m("",!0)])),_:1}),n(f,{prop:"to_im_user_id",label:"接收方昵称",width:"240"},{default:i((({row:e})=>{var a;return[(null==e?void 0:e.recipientUserInfo)?(s(),o("span",{key:0,style:{cursor:"pointer"},onClick:a=>K(e,"recipient")},c((null==(a=null==e?void 0:e.recipientUserInfo)?void 0:a.type)?2===e.recipientUserInfo.type?`${e.recipientUserInfo.full_name}`:e.recipientUserInfo.nickname:e.recipientUserInfo.real_name),9,H)):m("",!0)]})),_:1}),n(f,{prop:"is_read",label:"是否已读",width:"130"},{default:i((({row:e})=>[r("span",null,c(e.is_read?"是":"否"),1)])),_:1})])),_:1},8,["data"]),n(S,{background:"",layout:"total, sizes, prev, pager, next, ->,jumper","current-page":G.value.page,"onUpdate:currentPage":a[2]||(a[2]=e=>G.value.page=e),"page-size":G.value.page_size,"onUpdate:pageSize":a[3]||(a[3]=e=>G.value.page_size=e),total:G.value.total,class:"ml10 mt10",onSizeChange:F,onCurrentChange:J},null,8,["current-page","page-size","total"])])),_:1})}}}),[["__scopeId","data-v-e3274e7e"]]);export{S as default};
