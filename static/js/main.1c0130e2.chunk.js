(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),r=n(6),i=n(8),o=(n(13),n(14),n(1)),a=n(3),u=n.n(a),l=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d="Sort alphabetically",j="Sort by length",h="Reset";var f=function(){var t=Object(o.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1],c=Object(o.useState)(!1),a=Object(r.a)(c,2),f=a[0],g=a[1],p=function(t,e){var n=e.sortField,s=e.isReversed,c=Object(i.a)(t);if(n)switch(n){case d:c.sort((function(t,e){return t.localeCompare(e)}));break;case j:c.sort((function(t,e){return t.length-e.length}));break;default:return c}return s&&c.reverse(),c}(b,{sortField:n,isReversed:f});return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:u()("button","is-info",{"is-light":n!==d}),onClick:function(){return s(d)},children:d}),Object(l.jsx)("button",{type:"button",className:u()("button","is-success",{"is-light":n!==j}),onClick:function(){return s(j)},children:j}),Object(l.jsx)("button",{type:"button",className:u()("button","is-warning",{"is-light":!f}),onClick:function(){return g(!f)},children:"Reverse"}),(n||f)&&Object(l.jsx)("button",{type:"button",className:u()("button","is-danger",{"is-light":n!==h}),onClick:function(){return s(""),void g(!1)},children:h})]}),Object(l.jsx)("ul",{children:p.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1c0130e2.chunk.js.map