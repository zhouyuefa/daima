import{f as e,g as a,T as l,y as t,ai as n,H as i,S as o,j as r,r as d,o as s,c as u,a as c,d as m,w as p,e as v,t as _,L as h,i as g,aj as b,aw as f,M as y,N as w,D as x,aa as V,a3 as C,a4 as k,bQ as D,B as j,E as W}from"./index-BdR_P0jW.js";/* empty css                */import A from"./addForm-hmUz5qEa.js";import{E}from"./index-C5CR2e01.js";import"./dialogComp-DpPpTGA3.js";import"./index-DIDL6cCO.js";/* empty css                    */import"./index-TSZus3Mb.js";const H={class:"boxElMain"},T={class:"box boxFlex"},O={class:"dialog-footer"},L={class:"dialog-footer"},N={class:"dialog-footer"},U={__name:"index",setup(U){const F=e({getList:"/admin/merchant/com_config/list",save_submit:"/admin/merchant/com_config/edit_save",getDetail:"/admin/merchant/com_config/detail",deleteApi:"/admin/merchant/com_config/del",levelListApi:"/admin/merchant/com_level/index/lists",levelEditApi:"/admin/merchant/com_level/edit",levelDeleteApi:"/admin/merchant/com_level/delete/"}),I=e(["一级","二级","三级","四级","五级","六级","七级","八级","九级","十级"]),R=e(""),B=a({}),P=e([{type:"Input",label:"商品ID",prop:"goods_id",placeholder:"请输入",width:"180px"}]),z=e({goods_id:""}),S=e([{label:"查 询",icon:"Search",auth:"admin/merchant/com_config/list",handle:()=>Q()},{label:"重置",auth:"admin/merchant/com_config/list",handle:()=>ve()},{label:"排序",popover:!0}]),$=e([{label:"新增",icon:"Plus",auth:"admin/merchant/com_config/edit_save",handle:()=>ue()}]),M=e({page:1,page_size:20}),q=e([{label:"序号",prop:"id",align:"center",type:"string",sortable:!1,minWidth:"80",show:!0},{label:"类目ID",prop:"merchant_type",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"类目名称",prop:"merchant_type_text",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"商品ID",prop:"goods_id",align:"center",type:"string",sortable:!1,minWidth:"80",show:!0},{label:"商品名称",prop:"goods_name",align:"center",type:"string",sortable:!1,minWidth:"120",show:!0},{label:"佣金分佣总比例",prop:"com_total_rate",align:"center",type:"percentage",sortable:!1,minWidth:"120",show:!0},{label:"佣金渠道比例",prop:"com_channel_rate",align:"center",type:"percentage",sortable:!1,minWidth:"120",show:!0},{label:"佣金商务比例",prop:"com_bd_rate",align:"center",type:"percentage",sortable:!1,minWidth:"120",show:!0},{label:"积分分佣总比例",prop:"integral_total_rate",align:"center",type:"percentage",sortable:!1,minWidth:"120",show:!0},{label:"积分渠道比例",prop:"integral_channel_rate",align:"center",type:"percentage",sortable:!1,minWidth:"120",show:!0},{label:"积分商务比例",prop:"integral_bd_rate",align:"center",type:"percentage",sortable:!1,minWidth:"120",show:!0},{label:"操作",minWidth:"220",type:"button",show:!0,fixed:"right",align:"right",btnList:[{label:"编辑",auth:"admin/merchant/com_config/edit_save",type:"primary",handle:(e,a,l,t,n)=>K(e,a)},{label:"删除",auth:"admin/merchant/com_config/del",hide:e=>G(e),type:"danger",handle:(e,a,l,t,n)=>ee(e,a)},{label:"等级设置",type:"dropdown",auth:"admin/merchant/com_level/index/lists",options:[{label:"佣金渠道等级"},{label:"佣金商务等级"},{label:"积分渠道等级"},{label:"积分商务等级"}],handle:(e,a)=>Y(e,a)}]}]),G=e=>"common"===e.merchant_type||"common_car"===e.merchant_type;l.on("getCheckData",(e=>{(e=>{const a=[];e.list.forEach((e=>{a.push(e.label)})),q.value.sort(((e,l)=>"操作"===e.label?1:a.indexOf(e.label)-a.indexOf(l.label))),q.value=q.value.map((a=>e.data.includes(a.label)||"操作"===a.label?{...a,show:!0}:{...a,show:!1}))})(e)}));const Q=()=>{M.pageCurrent=1,pe()},J=e=>{for(const a of Object.keys(e))delete e[a]},K=(e,a,l,t,n)=>{de.value="编辑配置",J(B),X(a.id),R.value="edit"},X=async(e,a)=>{const l=await t(F.value.getDetail,{id:e});l&&(Object.assign(B,l),l.com_total_rate&&(B.com_total_rate=new Number(l.com_total_rate)),l.com_channel_rate&&(B.com_channel_rate=new Number(l.com_channel_rate)),l.com_bd_rate&&(B.com_bd_rate=new Number(l.com_bd_rate)),l.integral_total_rate&&(B.integral_total_rate=new Number(l.integral_total_rate)),l.integral_channel_rate&&(B.integral_channel_rate=new Number(l.integral_channel_rate)),l.integral_bd_rate&&(B.integral_bd_rate=new Number(l.integral_bd_rate)),B.merchant_type?se.value="1":B.goods_id&&(se.value="2"),re.value=!0)},Y=(e,a)=>{"佣金渠道等级"===e.label?le(a):"佣金商务等级"===e.label?te(a):"积分渠道等级"===e.label?ne(a):"积分商务等级"===e.label&&ie(a)},Z=e(!1),ee=(e,a)=>{n.confirm("确定删除该方案吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((()=>{ae(a.id)})).catch((()=>{}))},ae=async e=>{await t(F.value.deleteApi,{id:e})&&(pe(),i.success("删除成功")),Z.value=!1},le=e=>{he.value="佣金渠道等级",ye(e,"1")},te=e=>{he.value="佣金商务等级",ye(e,"2")},ne=e=>{he.value="积分渠道等级",ye(e,"3")},ie=e=>{he.value="积分商务等级",ye(e,"4")},oe=e(!1),re=e(!1),de=e(""),se=e("1"),ue=()=>{J(B),oe.value=!0},ce=()=>{re.value=!0,oe.value=!1,R.value="add"},me=e([]),pe=async()=>{const e=await t(F.value.getList,{...M.value,...z.value});if(e&&(me.value=[],M.value=(null==e?void 0:e.page)||{},me.value.splice(0),e.list.length>0))for(let a=0;a<e.list.length;a++){let l=e.list[a];me.value.push(l)}};e(!1),o((()=>{pe()}));const ve=()=>{J(z.value),M.value.page=1,M.value.page_size=20,pe()},_e=e(!1),he=e(""),ge=e([]),be=e(""),fe=e(""),ye=(e,a)=>{J(B),Object.assign(B,e),be.value=e.id,fe.value=a,Ve()},we=e(!1),xe=e(""),Ve=async()=>{let e={type:fe.value,config_id:be.value,page:1,page_size:100},a=await r(F.value.levelListApi,e);a&&(ge.value=a.list),_e.value=!0},Ce=a({}),ke=()=>{var e;ge.value.length>=10?i.error("最多只能添加10个等级"):(J(Ce),null==(e=De.value)||e.clearValidate(),we.value=!0,xe.value="新增等级")},De=e(null),je=async()=>{De.value.validate((async e=>{if(!e)return i.error("校验失败，请根据页面提示填写"),!1;{let e={...Ce,config_id:be.value,type:fe.value,rate:Ce.rate};await t(F.value.levelEditApi,e)&&(we.value=!1,Ve(),i.success((Ce.id?"编辑":"新增")+"成功"))}}))},We=e=>{"closeDialog"===e?re.value=!1:"closeDialogAndRefresh"===e&&(re.value=!1,pe()),se.value=""};return(e,a)=>{const l=f,t=d("cusTable"),i=E,o=y,r=w,U=x,G=V,K=C,X=k,Y=D,Z=j,ee=W;return s(),u("div",null,[c("div",H,[c("div",T,[m(i,null,{default:p((()=>[m(l,{searchForm:P.value,searchData:z.value,searchHandleRight:$.value,searchHandle:S.value,tableCols:q.value,onHandleEnterSearch:Q,onHandleReset:ve},null,8,["searchForm","searchData","searchHandleRight","searchHandle","tableCols"]),m(t,{ref:"cusTable",height:"calc(100vh - 240px)","row-key":"id",isPagination:!0,isHandle:!0,tableCols:q.value,tableData:me.value,tablePage:M.value,onHandleCurrentChange:pe},null,8,["tableCols","tableData","tablePage"])])),_:1})])]),m(A,{modelValue:re.value,"onUpdate:modelValue":a[0]||(a[0]=e=>re.value=e),data:B,addOrEdit:R.value,addType:se.value,onRefreshList:We},null,8,["modelValue","data","addOrEdit","addType"]),m(G,{modelValue:oe.value,"onUpdate:modelValue":a[3]||(a[3]=e=>oe.value=e),title:"请选择配置方式",width:"500"},{footer:p((()=>[c("div",O,[m(U,{onClick:a[2]||(a[2]=e=>oe.value=!1)},{default:p((()=>a[11]||(a[11]=[v("取消")]))),_:1}),m(U,{type:"primary",onClick:ce},{default:p((()=>a[12]||(a[12]=[v(" 确定 ")]))),_:1})])])),default:p((()=>[m(r,{modelValue:se.value,"onUpdate:modelValue":a[1]||(a[1]=e=>se.value=e)},{default:p((()=>[m(o,{value:"1"},{default:p((()=>a[9]||(a[9]=[v(" 全类目统一配置 ")]))),_:1}),m(o,{value:"2"},{default:p((()=>a[10]||(a[10]=[v(" 商品单独配置 ")]))),_:1})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"]),m(G,{modelValue:_e.value,"onUpdate:modelValue":a[5]||(a[5]=e=>_e.value=e),title:he.value,width:"700"},{footer:p((()=>[c("div",L,[m(U,{onClick:a[4]||(a[4]=e=>_e.value=!1)},{default:p((()=>a[16]||(a[16]=[v("关闭")]))),_:1})])])),default:p((()=>[c("div",null,[m(X,{data:ge.value},{default:p((()=>[m(K,{label:"ID",prop:"id"}),m(K,{label:"等级",prop:"grade"},{default:p((({$index:e})=>[v(_(I.value[e]),1)])),_:1}),m(K,{label:"比例",prop:"rate"},{default:p((({row:e})=>[v(_(e.rate)+"% ",1)])),_:1}),m(K,{label:"操作"},{default:p((({row:e,$index:l})=>[m(U,{link:"",type:"primary",onClick:a=>(e=>{var a;J(Ce),Object.assign(Ce,e),we.value=!0,xe.value="编辑等级",null==(a=De.value)||a.clearValidate()})(e)},{default:p((()=>a[13]||(a[13]=[v("编辑")]))),_:2},1032,["onClick"]),l===ge.value.length-1?(s(),h(U,{key:0,link:"",type:"primary",onClick:a=>(e=>{n.alert("确定删除此等级吗？","提示",{confirmButtonText:"确定",callback:async a=>{"confirm"===a?await b(F.value.levelDeleteApi+`${e.id}`)&&Ve():Ve()}})})(e)},{default:p((()=>a[14]||(a[14]=[v("删除")]))),_:2},1032,["onClick"])):g("",!0)])),_:1})])),_:1},8,["data"]),m(U,{type:"primary",plain:"",style:{width:"100%","margin-top":"10px"},onClick:ke},{default:p((()=>a[15]||(a[15]=[v("新增")]))),_:1})])])),_:1},8,["modelValue","title"]),m(G,{modelValue:we.value,"onUpdate:modelValue":a[8]||(a[8]=e=>we.value=e),title:xe.value,width:"400",style:{"margin-top":"20vh"}},{footer:p((()=>[c("div",N,[m(U,{onClick:a[7]||(a[7]=e=>we.value=!1)},{default:p((()=>a[17]||(a[17]=[v("取消")]))),_:1}),m(U,{type:"primary",onClick:je},{default:p((()=>a[18]||(a[18]=[v(" 确定 ")]))),_:1})])])),default:p((()=>[c("div",null,[m(ee,{model:Ce,ref_key:"addGradeForm",ref:De},{default:p((()=>[m(Z,{label:"比例",prop:"rate",rules:[{required:!0,message:"请输入比例",trigger:"blur"}]},{default:p((()=>[m(Y,{modelValue:Ce.rate,"onUpdate:modelValue":a[6]||(a[6]=e=>Ce.rate=e),precision:2,step:.01,max:100},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])])),_:1},8,["modelValue","title"])])}}};export{U as default};