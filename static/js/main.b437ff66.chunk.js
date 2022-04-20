(this["webpackJsonpstar-wars-planets"]=this["webpackJsonpstar-wars-planets"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/icons8-guerra-nas-estrelas.952e2ba8.svg"},function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),u=a.n(l),c=(a(14),a(4)),o=a(1),i=a(2),m=Object(n.createContext)(),s=["population","orbital_period","diameter","rotation_period","surface_water"];var d=function(){var e=Object(n.useContext)(m),t=e.filters,a=e.setFilters,l=e.columnFilters,u=e.setOrder,d=e.savedFilters,f=e.setSavedFilters,p=e.setColumnFilters,b=Object(n.useState)({column:"population",sort:"ASC"}),E=Object(i.a)(b,2),v=E[0],h=E[1],O={column:"population",comparison:"maior que",value:"0",id:Math.floor(Date.now()*Math.random()).toString(36)},j=Object(n.useState)(O),g=Object(i.a)(j,2),C=g[0],N=g[1],y=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.substr(1)};return Object(n.useEffect)((function(){var e=d.map((function(e){return e.column}));if(e){var t=s.filter((function(t){return!e.includes(t)}));p(t)}}),[d,p]),r.a.createElement("div",{className:"filters-container"},r.a.createElement("div",{className:"input-containers"},r.a.createElement("section",{className:"filters"},r.a.createElement("input",{"data-testid":"name-filter",type:"text",placeholder:"Digite um planeta",onChange:function(e){return a(Object(o.a)(Object(o.a)({},t),{},{filterByName:e.target.value}))}}),r.a.createElement("select",{defaultValue:l[0],"data-testid":"column-filter",value:C.column,onChange:function(e){var t=e.target;return N(Object(o.a)(Object(o.a)({},C),{},{column:t.value,id:Math.floor(Date.now()*Math.random()).toString(36)}))}},l.map((function(e){return r.a.createElement("option",{key:e,value:e},y(e.replace(/_/i," ")))}))),r.a.createElement("select",{defaultValue:"maior que",value:C.comparison,"data-testid":"comparison-filter",onChange:function(e){var t=e.target;return N(Object(o.a)(Object(o.a)({},C),{},{comparison:t.value}))}},r.a.createElement("option",{value:"maior que"},"Maior que"),r.a.createElement("option",{value:"menor que"},"Menor que"),r.a.createElement("option",{value:"igual a"},"Igual a")),r.a.createElement("input",{defaultValue:0,type:"number",value:C.value,"data-testid":"value-filter",placeholder:"Digite um n\xfamero",onChange:function(e){var t=e.target;return N(Object(o.a)(Object(o.a)({},C),{},{value:t.value}))}}),r.a.createElement("button",{"data-testid":"button-filter",type:"button",onClick:function(){f([].concat(Object(c.a)(d),[C])),N(O)}},"Filtrar"),r.a.createElement("button",{type:"button","data-testid":"button-remove-filters",onClick:function(){return f([])}},"Remover filtros")),r.a.createElement("section",{className:"order"},r.a.createElement("select",{"data-testid":"column-sort",onChange:function(e){var t=e.target;return h(Object(o.a)(Object(o.a)({},v),{},{column:t.value}))}},s.map((function(e,t){return r.a.createElement("option",{key:t,value:e},y(e.replace(/_/i," ")))}))),r.a.createElement("label",{htmlFor:"ASC"},r.a.createElement("input",{name:"order",value:"ASC",type:"radio","data-testid":"column-sort-input-asc",id:"ASC",onChange:function(e){var t=e.target;return h(Object(o.a)(Object(o.a)({},v),{},{sort:t.value}))},className:"radio"}),"Ascendente"),r.a.createElement("label",{htmlFor:"DSC"},r.a.createElement("input",{name:"order",value:"DSC",type:"radio","data-testid":"column-sort-input-desc",id:"DSC",onChange:function(e){var t=e.target;return h(Object(o.a)(Object(o.a)({},v),{},{sort:t.value}))},className:"radio"}),"Descendente"),r.a.createElement("button",{type:"button","data-testid":"column-sort-button",onClick:function(){return u(v)}},"Ordenar"))),r.a.createElement("section",{className:"applied-filters"},d&&d.map((function(e){return r.a.createElement("p",{key:e.id,"data-testid":"filter"},"".concat(e.column," ").concat(e.comparison," ").concat(e.value),r.a.createElement("button",{type:"button",onClick:function(){return function(e){var t=d.filter((function(t){return t.id!==e}));f(t)}(e.id)}},"X"))}))))},f=a(8),p=a.n(f);var b=function(){return r.a.createElement("header",null,r.a.createElement("img",{src:p.a,alt:"starwars-logo"}))};a(15);var E=function(){var e=Object(n.useContext)(m),t=e.data.results,a=e.filters.filterByName,l=e.savedFilters,u=e.order,o=function(){var e=a.toLowerCase();return""!==a?t.filter((function(t){return t.name.toLowerCase().includes(e)})):l.length?l.reduce((function(e,t){return e=e.filter((function(e){switch(t.comparison){case"maior que":return Number(e[t.column])>Number(t.value);case"menor que":return Number(e[t.column])<Number(t.value);default:return Number(e[t.column])===Number(t.value)}}))}),t):t}(),i=function(){if(Object.keys(u).length){var e=u.column,t=u.sort,a=o.filter((function(t){return"unknown"===t[e]})),n=function(e,t){var a=o.filter((function(t){return"unknown"!==t[e]}));return a.sort((function(a,n){return"ASC"===t?Number(a[e])-Number(n[e]):Number(n[e])-Number(a[e])})),a}(e,t);return[].concat(Object(c.a)(n),Object(c.a)(a))}return o}();return i?r.a.createElement("div",{className:"table-container"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Rotation Period"),r.a.createElement("th",null,"Orbital Period"),r.a.createElement("th",null,"Diameter"),r.a.createElement("th",null,"Climate"),r.a.createElement("th",null,"Gravity"),r.a.createElement("th",null,"Terrain"),r.a.createElement("th",null,"Surface Water"),r.a.createElement("th",null,"Population"),r.a.createElement("th",null,"Films"),r.a.createElement("th",null,"Created"),r.a.createElement("th",null,"Edited"),r.a.createElement("th",null,"URL"))),r.a.createElement("tbody",null,i.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",{"data-testid":"planet-name"},e.name),r.a.createElement("td",null,e.rotation_period),r.a.createElement("td",null,e.orbital_period),r.a.createElement("td",null,e.diameter),r.a.createElement("td",null,e.climate),r.a.createElement("td",null,e.gravity),r.a.createElement("td",null,e.terrain),r.a.createElement("td",null,e.surface_water),r.a.createElement("td",null,e.population),r.a.createElement("td",null,e.films),r.a.createElement("td",null,e.created),r.a.createElement("td",null,e.edited),r.a.createElement("td",null,e.url))}))))):r.a.createElement("span",null,"Loading")},v=function(e,t){fetch("https://swapi-trybe.herokuapp.com/api/planets/").then((function(a){return a.json().then((function(n){return a.ok?e(n):t(n)}))}))},h=["population","orbital_period","diameter","rotation_period","surface_water"];var O=function(e){var t=e.children,a=Object(n.useState)({}),l=Object(i.a)(a,2),u=l[0],c=l[1],o=Object(n.useState)({}),s=Object(i.a)(o,2),d=s[0],f=s[1],p=Object(n.useState)({filterByName:""}),b=Object(i.a)(p,2),E=b[0],O=b[1],j=Object(n.useState)(h),g=Object(i.a)(j,2),C=g[0],N=g[1],y=Object(n.useState)([]),S=Object(i.a)(y,2),w=S[0],k=S[1],F=Object(n.useState)({}),_=Object(i.a)(F,2),D=_[0],q=_[1];Object(n.useEffect)((function(){return v(c,f)}),[]),function(){var e=u.results;e&&e.sort((function(e,t){return e.name.localeCompare(t.name)}))}();var A={data:u,error:d,filters:E,setFilters:O,columnFilters:C,setColumnFilters:N,savedFilters:w,setSavedFilters:k,order:D,setOrder:q};return r.a.createElement(m.Provider,{value:A},t)};var j=function(){return r.a.createElement(O,null,r.a.createElement(b,null),r.a.createElement("div",{className:"container"},r.a.createElement(d,null),r.a.createElement(E,null)))};a(16);u.a.render(r.a.createElement(j,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.b437ff66.chunk.js.map