(this["webpackJsonpchess-champions"]=this["webpackJsonpchess-champions"]||[]).push([[0],{346:function(e,a,n){},347:function(e,a,n){},410:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),s=n(14),i=n.n(s),r=(n(346),n(347),n(291),n(15)),l=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar navbar-expand-lg nav-bar",children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"www.google.com",children:"Navbar"}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(r.jsxs)("ul",{className:"navbar-nav",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link active","aria-current":"page",href:"www.google.com",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link",href:"www.google.com",children:"Features"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link",href:"www.google.com",children:"Pricing"})}),Object(r.jsxs)("li",{className:"nav-item dropdown",children:[Object(r.jsx)("a",{className:"nav-link dropdown-toggle",href:"www.google.com",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Dropdown link"}),Object(r.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"dropdown-item",href:"www.google.com",children:"Action"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"dropdown-item",href:"www.google.com",children:"Another action"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"dropdown-item",href:"www.google.com",children:"Something else here"})})]})]})]})})]})})})},o=n(330),d=n(221),b=n.n(d),j=function(){var e=Object(t.useState)([]),a=Object(o.a)(e,2),n=a[0],c=a[1],s=[{field:"avatar",title:"Avatar",render:function(e){return Object(r.jsx)("img",{src:e.avatar,style:{width:50,borderRadius:"50%"},alt:"user_avatar"})}},{title:"Rank",field:"rank"},{title:"Username",field:"username"},{title:"Score",field:"score"}];return Object(t.useEffect)((function(){fetch("https://api.chess.com/pub/leaderboards").then((function(e){return e.json()})).then((function(e){c(e.live_blitz),console.log(e.live_blitz)}))}),[]),Object(r.jsx)("div",{className:"size",children:Object(r.jsx)(b.a,{title:"Chess.com Blitz Ranking",data:n,columns:s,options:{search:!1,paging:!0,filtering:!0,exportButton:!0,maxBodyHeight:"30em",pageSize:10,pageSizeOptions:[10,25,50]}})})};var h=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{}),Object(r.jsx)("h1",{children:"Chess Champions Website"}),Object(r.jsx)(j,{})]})},m=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,816)).then((function(a){var n=a.getCLS,t=a.getFID,c=a.getFCP,s=a.getLCP,i=a.getTTFB;n(e),t(e),c(e),s(e),i(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),m()}},[[410,1,3]]]);
//# sourceMappingURL=main.b7e8b500.chunk.js.map