function e(e,t){const g=t?new Date(1*t):new Date,r=g.getFullYear()+"",a=g.getMonth()+1,c=g.getDate(),l=g.getHours(),n=g.getMinutes(),s=g.getSeconds();return e.replace(/YYYY|yyyy/g,r).replace(/YY|yy/g,r.substr(2,2)).replace(/MM/g,(a<10?"0":"")+a).replace(/DD/g,(c<10?"0":"")+c).replace(/HH|hh/g,(l<10?"0":"")+l).replace(/mm/g,(n<10?"0":"")+n).replace(/ss/g,(s<10?"0":"")+s)}export{e as d};
