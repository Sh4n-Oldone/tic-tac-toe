(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),o=c.n(n),r=c(6),s=c.n(r),a=(c(11),c(3)),i=c(4),u=c(2),b=function(e,t,c){return Object.keys(e).slice(t,c).reduce((function(t,c){return t[c]=e[c],t}),{})},l=function(e,t){var c=[];return Object.keys(e).map((function(e){e.slice(e.length-1)===t.toString()&&c.push(e)})),c.reduce((function(t,c){return t[c]=e[c],t}),{})},j=function(e,t){var c=[];return t.map((function(t){Object.keys(e).map((function(e){e===t&&c.push(e)}))})),c.reduce((function(t,c){return t[c]=e[c],t}),{})},d=function(e){return Object.values(e).toString().replaceAll(",","")},f=(c(12),c(1));function O(e){var t=e.position,c=e.isPlayerCross,o=e.handleClick,r=e.newGame,s=Object(n.useState)(!0),a=Object(u.a)(s,2),i=a[0],b=a[1],l=Object(n.useState)(""),j=Object(u.a)(l,2),d=j[0],O=j[1];return Object(n.useEffect)((function(){r&&(b(!0),O(""))}),[r]),Object(f.jsx)("div",{className:"cell".concat(c&&i?" x_hover":i?" zero_hover":"").concat("cross"===d?" cell-x":"zero"===d?" cell-zero":"").concat(i?"":" cell_disabled"),onClick:function(){var e,n;e=t,n=c?"cross":"zero",b(!1),o(e,n),O(c?"cross":"zero")}})}c(14);function h(e){var t=e.isFinished,c=e.whoWon,n=e.onRestart;return Object(f.jsxs)("div",{className:"final-window".concat(t?"":"final-window_hidden"),children:[Object(f.jsx)("p",{className:"final-window__text".concat(t?"":" final-window__text_hidden"),children:"cross"===c?"\u041a\u0440\u0435\u0441\u0442\u0438\u043a\u0438 \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0438!":"zero"===c?"\u041d\u043e\u043b\u0438\u043a\u0438 \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0438!":"\u041d\u0438\u0447\u044c\u044f!"}),Object(f.jsx)("button",{className:"final-window__restart-button".concat(t?"":" final-window__restart-button_hidden"),onClick:n,children:"\u0421\u043d\u043e\u0432\u0430!"})]})}c(15);function w(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),c=t[0],o=t[1],r=Object(n.useState)(!1),s=Object(u.a)(r,2),w=s[0],p=s[1],v={a1:"",a2:"",a3:"",b1:"",b2:"",b3:"",c1:"",c2:"",c3:""},m=Object(n.useState)(v),x=Object(u.a)(m,2),_=x[0],z=x[1],S=Object(n.useState)(!1),k=Object(u.a)(S,2),y=k[0],C=k[1],N=Object(n.useState)(""),g=Object(u.a)(N,2),E=g[0],A=g[1],F=function(e,t){o(!c),z((function(c){return Object(i.a)(Object(i.a)({},c),{},Object(a.a)({},e,t))})),p(!1)},G=function(){var e=[d(b(_,0,3)),d(b(_,3,6)),d(b(_,6,9)),d(l(_,1)),d(l(_,2)),d(l(_,3)),d(j(_,["a1","b2","c3"])),d(j(_,["a3","b2","c1"]))];e.includes("crosscrosscross")&&(A("cross"),C(!0)),e.includes("zerozerozero")&&(A("zero"),C(!0)),function(e){var t=!1;return Object.values(e).map((function(e){return e?"":t=!0})),t}(_)||e.includes("crosscrosscross")||e.includes("zerozerozero")||(A("draw"),C(!0))};return Object(n.useEffect)((function(){G()}),[_]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("div",{className:"board",children:["a1","a2","a3","b1","b2","b3","c1","c2","c3"].map((function(e){return Object(f.jsx)(O,{position:e,handleClick:F,isPlayerCross:c,newGame:w},e.toString())}))}),Object(f.jsx)(h,{onRestart:function(){A(""),C(!1),z(Object(i.a)({},v)),o(!0),p(!0)},isFinished:y,whoWon:E})]})}s.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.eadc5f58.chunk.js.map