(this.webpackJsonphw3=this.webpackJsonphw3||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(6),o=n.n(a),c=(n(11),n(2)),s=n(5),l=n(3),u=(n(12),n(0));function r(){return Object(u.jsxs)("div",{className:"info",children:["\u6d3b\u52d5\u65e5\u671f\uff1a2020/12/10 ~ 2020/12/11",Object(u.jsx)("br",{}),"\u6d3b\u52d5\u5730\u9ede\uff1a\u53f0\u5317\u5e02\u5927\u5b89\u5340\u65b0\u751f\u5357\u8def\u4e8c\u6bb51\u865f",Object(u.jsx)("div",{className:"remind",children:"* \u5fc5\u586b"})]})}function j(e){var t=e.question,n=e.isRequired,i=e.placeholderText,a=e.inputType,o=e.isRadio,c=e.other,s=e.name,l=e.formValue,r=(e.setFormValue,e.onHandleChangeInput),j=e.notification,m=e.isSubmit;return Object(u.jsxs)("div",{className:"question",children:[Object(u.jsxs)("h2",{children:[t,n?Object(u.jsx)("span",{className:"remind__symbol",children:" *"}):Object(u.jsx)("p",{})]}),c?Object(u.jsx)("div",{className:"additional__explanation",children:"\u5c0d\u6d3b\u52d5\u7684\u4e00\u4e9b\u5efa\u8b70"}):Object(u.jsx)("p",{}),o?Object(u.jsxs)("div",{className:"question__radio",children:[Object(u.jsx)("input",{type:a,className:"required__field radio__input",name:s,value:"\u8eba\u5728\u5e8a\u4e0a\u7528\u60f3\u50cf\u529b\u5be6\u4f5c",onChange:r})," ","\u8eba\u5728\u5e8a\u4e0a\u7528\u60f3\u50cf\u529b\u5be6\u4f5c",Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:a,className:"required__field radio__input",name:s,value:"\u8db4\u5728\u5730\u4e0a\u6ed1\u624b\u6a5f\u627e\u73fe\u6210\u7684",onChange:r})," ","\u8db4\u5728\u5730\u4e0a\u6ed1\u624b\u6a5f\u627e\u73fe\u6210\u7684"]}):Object(u.jsx)("input",{type:a,className:"required__field text__input",placeholder:i,name:s,value:l.name,onChange:r}),m&&n&&j?Object(u.jsx)("div",{className:"notification",children:"\u6b64\u6b04\u70ba\u5fc5\u586b"}):Object(u.jsx)("p",{})]})}function m(e){e.formValue;var t=e.onHandleSubmit;return Object(u.jsxs)("div",{className:"question",children:[Object(u.jsx)("input",{type:"submit",value:"\u63d0\u4ea4",onClick:t}),Object(u.jsx)("div",{className:"additional__explanation",children:"\u8acb\u52ff\u900f\u904e\u8868\u55ae\u9001\u51fa\u60a8\u7684\u5bc6\u78bc\u3002"})]})}var d=function(){var e=Object(i.useState)({nickname:"",email:"",phone:"",activity:"",howToKnow:"",other:""}),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(i.useState)({nickname:!1,email:!1,phone:!1,activity:!1,howToKnow:!1}),d=Object(l.a)(o,2),h=d[0],p=d[1],b=Object(i.useState)(!1),x=Object(l.a)(b,2),O=x[0],f=x[1],v=function(e){var t=e.target.name,i=e.target.value;a(Object(s.a)(Object(s.a)({},n),{},Object(c.a)({},t,i)))};return Object(i.useEffect)((function(){p({nickname:Boolean(!n.nickname),email:Boolean(!n.email),phone:Boolean(!n.phone),activity:Boolean(!n.activity),howToKnow:Boolean(!n.howToKnow)})}),[n.nickname,n.email,n.phone,n.activity,n.howToKnow,O]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)("h1",{children:"\u65b0\u62d6\u5ef6\u904b\u52d5\u5831\u540d\u8868\u55ae"}),Object(u.jsx)(r,{}),Object(u.jsx)(j,{question:"\u66b1\u7a31",isRequired:!0,placeholderText:"\u60a8\u7684\u66b1\u7a31",inputType:"text",name:"nickname",formValue:n,notification:h.nickname,setFormValue:a,onHandleChangeInput:v,isSubmit:O}),Object(u.jsx)(j,{question:"\u96fb\u5b50\u90f5\u4ef6",isRequired:!0,placeholderText:"\u60a8\u7684\u96fb\u5b50\u90f5\u4ef6",inputType:"email",name:"email",formValue:n,setFormValue:a,onHandleChangeInput:v,notification:h.email,isSubmit:O}),Object(u.jsx)(j,{question:"\u624b\u6a5f\u865f\u78bc",isRequired:!0,placeholderText:"\u60a8\u7684\u624b\u6a5f\u865f\u78bc",inputType:"text",name:"phone",formValue:n,setFormValue:a,onHandleChangeInput:v,notification:h.phone,isSubmit:O}),Object(u.jsx)(j,{question:"\u5831\u540d\u985e\u578b",isRequired:!0,isRadio:!0,inputType:"radio",name:"activity",onHandleChangeInput:v,notification:h.activity,isSubmit:O}),Object(u.jsx)(j,{question:"\u600e\u9ebc\u77e5\u9053\u9019\u500b\u6d3b\u52d5\u7684\uff1f",isRequired:!0,placeholderText:"\u60a8\u7684\u56de\u7b54",inputType:"text",name:"howToKnow",formValue:n,setFormValue:a,onHandleChangeInput:v,notification:h.howToKnow,isSubmit:O}),Object(u.jsx)(j,{question:"\u5176\u4ed6",isRequired:!1,placeholderText:"\u60a8\u7684\u56de\u7b54",inputType:"text",name:"other",other:!0,formValue:n,setFormValue:a,onHandleChangeInput:v,isSubmit:O}),Object(u.jsx)(m,{formValue:n,onHandleSubmit:function(e){f(!0),e.preventDefault(),n.nickname&&n.email&&n.phone&&n.activity&&n.howToKnow?alert("\u9001\u51fa\u8cc7\u6599\u70ba\uff1a\n      ".concat(JSON.stringify(n))):alert("\u8cc7\u6599\u4e0d\u5b8c\u6574")}})]}),Object(u.jsx)("footer",{children:"\xa9 2020 \xa9 Copyright. All rights Reserved."})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),o(e),c(e)}))};o.a.render(Object(u.jsx)(d,{}),document.getElementById("root")),h()}},[[14,1,2]]]);
//# sourceMappingURL=main.6a132e2c.chunk.js.map