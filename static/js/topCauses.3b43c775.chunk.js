(this["webpackJsonpTaskingManager-frontend"]=this["webpackJsonpTaskingManager-frontend"]||[]).push([[825],{1946:function(a,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"c",(function(){return r})),e.d(t,"b",(function(){return l})),e.d(t,"e",(function(){return s})),e.d(t,"d",(function(){return d}));const o=(a,t)=>{let e={datasets:[{data:[],backgroundColor:[]}],labels:[]};e.datasets[0].data=a.map((a=>t[a.field]));const o=e.datasets[0].data.reduce(((a,t)=>a+t),0);return e.datasets[0].data=e.datasets[0].data.map((a=>Math.round(a/o*100))),e.datasets[0].backgroundColor=a.map((a=>a.backgroundColor)),e.datasets[0].borderColor=a.map((a=>a.borderColor)),e.labels=a.map((a=>a.label)),e},r=(a,t,e)=>{let o={data:[],backgroundColor:t.color,borderColor:t.color,fill:!1,label:t.label},r={data:[],backgroundColor:e.color,borderColor:e.color,fill:!1,label:e.label};const l=a.map((a=>a.date));return o.data=a.map((a=>Math.round(a.cumulative_mapped/a.total_tasks*100))),r.data=a.map((a=>Math.round(a.cumulative_validated/a.total_tasks*100))),{datasets:[r,o],labels:l}},l=(a,t,e)=>{let o={data:[],backgroundColor:t.color,label:t.label},r={data:[],backgroundColor:e.color,label:e.label};const l=a.map((a=>a.date));return o.data=a.map((a=>a.mapped)),r.data=a.map((a=>a.validated)),{datasets:[o,r],labels:l}},s=a=>{var t=a.label;return t&&(t+=": "),t+=a.dataset.data[a.dataIndex],"".concat(t,"%")},d=(a,t)=>{var e=a.dataset.label||"";return e&&(e+=": "),e+=a.dataset.data[a.dataIndex],"".concat(e).concat(t?"%":"")}},2345:function(a,t,e){"use strict";e.r(t);e(1);var o=e(1978),r=e(2040),l=e(50),s=e(30),d=e(1923),n=e(9),c=e(1946),b=e(0);o.f.register(o.a,o.s,o.h);t.default=a=>{let{userStats:t}=a;const e=Object(l.a)(),o=[n.d.green,n.d.orange,n.d.red,n.d.blue],u={};let i=t.ContributionsByInterest.slice(0,3).map(((a,t)=>(u[a.name]=a.countProjects,{label:a.name,field:a.name,backgroundColor:o[t],borderColor:n.d.white})));u.Others=t.ContributionsByInterest.slice(3).map((a=>a.countProjects)).reduce(((a,t)=>a+t),0),i.push({label:e.formatMessage(d.a.others),field:"Others",backgroundColor:o[o.length-1],borderColor:n.d.white});const p=Object(c.a)(i,u);return Object(b.jsx)("div",{className:"pv2 ph3 bg-white blue-dark shadow-6 h-100",children:Object(b.jsxs)("div",{className:"ml2 mt1 mb3",children:[Object(b.jsx)("h3",{className:"f125 mv3 fw6",children:Object(b.jsx)(s.a,{...d.a.topCausesTitle})}),t.projectsMapped&&p.datasets[0].data.some((a=>!isNaN(a)))?Object(b.jsx)(r.b,{data:p,options:{aspectRatio:2,plugins:{legend:{position:"right",labels:{boxWidth:12}},tooltip:{callbacks:{label:a=>Object(c.e)(a)}}}}}):Object(b.jsx)("div",{className:"h-100 tc pv5 blue-grey",children:Object(b.jsx)(s.a,{...d.a.noProjectsData})})]})})}}}]);
//# sourceMappingURL=topCauses.3b43c775.chunk.js.map