"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{867:function(e,n,t){t.d(n,{Fn:function(){return c},Jx:function(){return r},xb:function(){return i},xw:function(){return o}});var r="https://api.themoviedb.org/3/trending/movie/day?api_key=02500819c0fb023207ee1042480b6c4f",i="https://api.themoviedb.org/3/search/movie?api_key=02500819c0fb023207ee1042480b6c4f&page=1&query=",o="https://api.themoviedb.org/3/movie/",c="?api_key=02500819c0fb023207ee1042480b6c4f"},779:function(e,n,t){t.r(n),t.d(n,{Reviews:function(){return m}});var r,i,o=t(433),c=t(439),a=t(867),u=t(243),s=t(791),f=t(689),h=t(168),l=t(444),p=l.ZP.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-left: 30px;\n"]))),d=l.ZP.p(i||(i=(0,h.Z)(["\n  margin-top: 10px;\n"]))),v=t(184),m=function(){var e,n=null===(e=(0,f.TH)().state)||void 0===e?void 0:e.id,t=(0,s.useState)([]),r=(0,c.Z)(t,2),i=r[0],h=r[1];return(0,s.useEffect)((function(){var e=new AbortController;return u.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews").concat(a.Fn),{signal:e.signal}).then((function(e){var n=e.data.results;h((0,o.Z)(n))})).catch((function(e){})),function(){e.abort()}}),[n]),(0,v.jsx)(v.Fragment,{children:0===i.length?(0,v.jsx)("p",{children:"Sorry we don`t have reviews for this movie"}):(0,v.jsx)(p,{children:null===i||void 0===i?void 0:i.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,v.jsxs)("li",{children:[(0,v.jsxs)("b",{children:["Author: ",t," "]}),(0,v.jsx)(d,{children:r})]},n)}))})})}}}]);
//# sourceMappingURL=779.b789454b.chunk.js.map