(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(3),o=n.n(c),a=n(4),i=n(5),l=n(7),h=n(6),u=(n(12),n(13),n(14),n(0)),d=function(e){return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(u.jsxs)("h1",{children:[" ",e.monster.name]}),Object(u.jsx)("p",{children:e.monster.email})]})},j=function(e){return console.log(e),Object(u.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(u.jsx)(d,{monster:e},e.id)}))})},m=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return Object(u.jsx)("input",{className:"search",type:"text",onChange:n,placeholder:t})}),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={monsters:[],searchField:""},e.handleChange=function(t){e.setState({searchField:t.target.value})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:" Monsters Rolodex "}),Object(u.jsx)(m,{placeholder:"Search Monsters",handleChange:this.handleChange}),Object(u.jsx)(j,{monsters:s})]})}}]),n}(r.a.Component);n(17);o.a.render(Object(u.jsx)(p,{}),document.querySelector("#root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.40bf956b.chunk.js.map