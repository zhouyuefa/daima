import{_ as l,R as a,f as e,g as s,h as t,r as n,F as i,a2 as u,o as c,c as o,d,w as r,a as p,t as b,bW as _,bX as v,J as f,K as g,i as m,e as x,j as y,y as k,z as j,a8 as h,a9 as w,b$ as V,M as C,N,B as T,A as z,D,E as O}from"./index-BdR_P0jW.js";/* empty css                */import{E as R}from"./index-C5ggMqbd.js";const J={class:"app-container"},L={style:{"margin-bottom":"20px","font-size":"20px"}},M={style:{"vertical-align":"2px","padding-left":"20px"}},P={class:"label-box"},S={class:"label-box"},A={class:"label-box"},B={class:"label-box"},E={class:"label-box"},H={class:"label-box"},U={class:"label-box"},q={class:"label-box"},F=["src"],I={class:"label-box"},K=["src"],W={class:"label-box"},X=["innerHTML"],Z={class:"label-box"},$={key:0,class:"label-box"},G={key:1,class:"label-box"},Q={class:"label-box"},Y={key:0,class:"label-box"},ll={key:1,class:"label-box"},al={class:"label-box"},el={class:"label-box"},sl={class:"label-box"},tl={key:0,class:"label-box"},nl={key:1,class:"label-box"},il=["src"],ul={class:"label-box"},cl={key:0,class:"label-box"},ol={key:1,class:"label-box"},dl=["src"],rl={key:0},pl=l({__name:"goodsCheck",props:{modelValue:{type:Boolean,default:!1},title:{type:String,default:"商品审核"},selectedRowData:{type:Object,default:()=>({id:"0000000"})}},emits:["commit","closeCheckPage"],setup(l,{emit:pl}){const bl=pl,_l=()=>{bl("closeCheckPage"),ml(jl)},vl=l,fl=a((()=>vl.selectedRowData.id)),gl=e(!1),ml=l=>{for(const a of Object.keys(l))delete l[a]},xl=s({});t(fl,(async l=>{if(l&&vl.modelValue){let l=JSON.parse(JSON.stringify(vl.selectedRowData));Object.assign(xl,l),gl.value=!0}})),t((()=>vl.modelValue),(async l=>{l?(ml(jl),gl.value=!0):l||(gl.value=!1)}));const yl=()=>{hl.value.validate((l=>{if(!l)return!1;bl("closeCheckPage",jl),ml(jl)}))},kl=e([]);(async()=>{const l=await y("/admin/dict/index/lists",{type:8,page:1,page_size:1e3});kl.value=(null==l?void 0:l.lists.list)||[]})();const jl=s({}),hl=e(null),wl=e({xl:10,lg:12,md:12,sm:24,xs:24}),Vl=e({status:[{required:!0,message:"请选择状态",trigger:"blur"}]}),Cl=e([]);return(async()=>{const l=await k("/admin/merchant/type/tree_list");Cl.value=(null==l?void 0:l.map((l=>{var a;return(null==(a=l.children)?void 0:a.length)>0&&(l.children=l.children.map((l=>({value:l.id,label:l.name})))),{value:l.id,label:l.name,children:l.children}})))||[]})(),(l,a)=>{const e=n("DArrowLeft"),s=j,t=h,y=w,k=V,pl=C,bl=N,fl=T,ml=z,kl=D,Cl=O,Nl=R;return i((c(),o("div",J,[d(Nl,{bordered:!1},{default:r((()=>[p("p",L,[d(s,{style:{"font-size":"16px",cursor:"pointer"},onClick:_l},{default:r((()=>[d(e)])),_:1}),p("span",{style:{"vertical-align":"3px","font-size":"16px",cursor:"pointer"},onClick:_l},"返回"),p("span",M,b(vl.title),1)]),p("div",null,[a[29]||(a[29]=p("p",{class:"title-config"},"商品基础信息",-1)),d(y,{gutter:24},{default:r((()=>[d(t,_(v(wl.value)),{default:r((()=>[p("div",P,[a[2]||(a[2]=p("span",{class:"label-label"},"商户：",-1)),p("span",null,b(xl.merchant_name),1)])])),_:1},16),d(t,_(v(wl.value)),{default:r((()=>[p("div",S,[a[3]||(a[3]=p("span",{class:"label-label"},"商品名称：",-1)),p("span",null,b(xl.goods_name),1)])])),_:1},16),d(t,_(v(wl.value)),{default:r((()=>[p("div",A,[a[4]||(a[4]=p("span",{class:"label-label"},"副标题：",-1)),p("span",null,b(xl.subtitle),1)])])),_:1},16),d(t,_(v(wl.value)),{default:r((()=>[p("div",B,[a[5]||(a[5]=p("span",{class:"label-label"},"商户报价(TN)：",-1)),p("span",null,b(xl.sale_price),1)])])),_:1},16),d(t,_(v(wl.value)),{default:r((()=>[p("div",E,[a[6]||(a[6]=p("span",{class:"label-label"},"划线价格(TN)：",-1)),p("span",null,b(xl.refer_price),1)])])),_:1},16),d(t,_(v(wl.value)),{default:r((()=>[p("div",H,[a[7]||(a[7]=p("span",{class:"label-label"},"排序：",-1)),p("span",null,b(xl.sort),1)])])),_:1},16),d(t,_(v(wl.value)),{default:r((()=>{var l;return[p("div",U,[a[8]||(a[8]=p("span",{class:"label-label"},"退款规则：",-1)),p("span",null,b(null==(l=xl.refund_config)?void 0:l.name),1)])]})),_:1},16),d(t,{span:24},{default:r((()=>{var l;return[p("div",q,[a[9]||(a[9]=p("span",{class:"label-label",style:{"vertical-align":"top"}},"商品封面图：",-1)),p("img",{src:null==(l=null==xl?void 0:xl.goods_logo_url)?void 0:l.file_url,alt:"",class:"logo-img"},null,8,F)])]})),_:1}),d(t,{span:24},{default:r((()=>[p("div",I,[a[10]||(a[10]=p("span",{class:"label-label",style:{"vertical-align":"top"}},"商品轮播图：",-1)),p("span",null,[(c(!0),o(f,null,g(xl.goods_img_url,(l=>(c(),o("img",{src:l.file_url,alt:"",class:"banner-img",key:l.id},null,8,K)))),128))])])])),_:1})])),_:1}),d(y,null,{default:r((()=>[d(t,{span:24},{default:r((()=>[p("div",W,[a[11]||(a[11]=p("span",{class:"label-label"},"商品详情：",-1)),d(k,null,{default:r((()=>[p("div",{innerHTML:xl.description,class:"html-content"},null,8,X)])),_:1})])])),_:1})])),_:1}),a[30]||(a[30]=p("p",{class:"title-config"},"结算设置",-1)),d(y,null,{default:r((()=>[d(t,_(v(wl.value)),{default:r((()=>[p("div",Z,[a[12]||(a[12]=p("span",{class:"label-label"},"分成结算方式：",-1)),p("span",null,b(1===xl.wacn_settle_type?"比例结算":"固定额度"),1)]),1===xl.wacn_settle_type?(c(),o("div",$,[a[13]||(a[13]=p("span",{class:"label-label"},"结算比例(%)：",-1)),p("span",null,b(xl.wacn_settle_value)+"% ",1)])):2===xl.wacn_settle_type?(c(),o("div",G,[a[14]||(a[14]=p("span",{class:"label-label"},"结算金额(TN)：",-1)),p("span",null,b(xl.wacn_settle_value),1)])):m("",!0)])),_:1},16),d(t,_(v(wl.value)),{default:r((()=>[p("div",Q,[a[15]||(a[15]=p("span",{class:"label-label"},"积分结算方式：",-1)),p("span",null,b(1===xl.integral_settle_type?"比例结算":"固定额度"),1)]),1===xl.integral_settle_type?(c(),o("div",Y,[a[16]||(a[16]=p("span",{class:"label-label"},"结算比例(%)：",-1)),p("span",null,b(xl.integral_settle_value)+"% ",1)])):2===xl.integral_settle_type?(c(),o("div",ll,[a[17]||(a[17]=p("span",{class:"label-label"},"结算积分：",-1)),p("span",null,b(xl.integral_settle_value),1)])):m("",!0)])),_:1},16)])),_:1}),a[31]||(a[31]=p("p",{class:"title-config"},"平台价格设置",-1)),d(y,null,{default:r((()=>[d(t,_(v(wl.value)),{default:r((()=>[p("div",al,[a[18]||(a[18]=p("span",{class:"label-label"},"上架价格(TN)：",-1)),p("span",null,b(xl.sale_price),1)])])),_:1},16)])),_:1}),a[32]||(a[32]=p("p",{class:"title-config"},"平台、用户积分分成",-1)),d(y,null,{default:r((()=>[d(t,_(v(wl.value)),{default:r((()=>[p("div",el,[a[19]||(a[19]=p("span",{class:"label-label"},"结算积分：",-1)),p("span",null,b(xl.plate_user_inte_value)+"% ",1)])])),_:1},16)])),_:1}),a[33]||(a[33]=p("p",{class:"title-config"},"首页推荐设置",-1)),d(y,null,{default:r((()=>[d(t,{span:12},{default:r((()=>{var l;return[p("div",sl,[a[20]||(a[20]=p("span",{class:"label-label",style:{"vertical-align":"top"}},"是否推荐：",-1)),p("span",null,b(1===xl.is_tuijian?"是":"否"),1)]),1===xl.is_tuijian?(c(),o("div",tl,[a[21]||(a[21]=p("span",{class:"label-label",style:{"vertical-align":"top"}},"推荐排序：",-1)),p("span",null,b(xl.tuijian_sort),1)])):m("",!0),1===xl.is_tuijian?(c(),o("div",nl,[a[22]||(a[22]=p("span",{class:"label-label",style:{"vertical-align":"top"}},"推荐图：",-1)),p("span",null,[p("img",{src:null==(l=null==xl?void 0:xl.tuijian_img_url)?void 0:l.file_url,alt:"",class:"logo-img"},null,8,il)])])):m("",!0)]})),_:1}),d(t,{span:12},{default:r((()=>{var l;return[p("div",ul,[a[23]||(a[23]=p("span",{class:"label-label",style:{"vertical-align":"top"}},"是否精选：",-1)),p("span",null,b(1===xl.is_jingxuan?"是":"否"),1)]),1===xl.is_jingxuan?(c(),o("div",cl,[a[24]||(a[24]=p("span",{class:"label-label",style:{"vertical-align":"top"}},"精选排序：",-1)),p("span",null,b(xl.jingxuan_sort),1)])):m("",!0),1===xl.is_jingxuan?(c(),o("div",ol,[a[25]||(a[25]=p("span",{class:"label-label",style:{"vertical-align":"top"}},"精选图：",-1)),p("span",null,[p("img",{src:null==(l=null==xl?void 0:xl.jingxuan_img_url)?void 0:l.file_url,alt:"",class:"logo-img"},null,8,dl)])])):m("",!0)]})),_:1})])),_:1}),"商品审核"===vl.title?(c(),o("div",rl,[a[28]||(a[28]=p("p",{class:"title-config"},"审核",-1)),d(Cl,{ref_key:"formValidateRef",ref:hl,rules:Vl.value,model:jl,"label-width":"130px"},{default:r((()=>[d(fl,{label:"审核状态：",prop:"status"},{default:r((()=>[d(bl,{modelValue:jl.status,"onUpdate:modelValue":a[0]||(a[0]=l=>jl.status=l)},{default:r((()=>[d(pl,{value:5,label:"审核失败"}),d(pl,{value:4,label:"审核成功"})])),_:1},8,["modelValue"])])),_:1}),d(fl,{label:"备注：",prop:"remark"},{default:r((()=>[d(ml,{modelValue:jl.remark,"onUpdate:modelValue":a[1]||(a[1]=l=>jl.remark=l),type:"textarea",rows:3,placeholder:"请输入备注"},null,8,["modelValue"])])),_:1}),d(fl,null,{default:r((()=>[d(kl,{onClick:_l},{default:r((()=>a[26]||(a[26]=[x("取消")]))),_:1}),d(kl,{type:"primary",onClick:yl},{default:r((()=>a[27]||(a[27]=[x("保存")]))),_:1})])),_:1})])),_:1},8,["rules","model"])])):m("",!0)])])),_:1})],512)),[[u,gl.value]])}}},[["__scopeId","data-v-0da6b9f2"]]);export{pl as default};
