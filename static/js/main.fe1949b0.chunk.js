(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),s=n(5),a=n.n(s),i=n(3),u=n.n(i),o=n(6),l=n(7),j=n(8),h=n(10),p=n(9),b=n(4),d=n(0),m=function(t){var e=t.item,n=Object(c.useState)(!1),r=Object(b.a)(n,2),s=r[0],a=r[1],i=Object(c.useState)(" "),u=Object(b.a)(i,2),o=u[0],l=u[1];return Object(d.jsxs)("li",{className:"list__item",children:[Object(d.jsxs)("div",{children:["Name:",e.name]}),Object(d.jsxs)("div",{children:["Bithday:",e.birth_year]}),Object(d.jsx)("button",{className:"list__btn",onClick:function(){return a(!s)},children:"Add comment"}),s&&Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a(!s)},children:[Object(d.jsx)("input",{type:"text",maxLength:"25",placeholder:"Add comment",onChange:function(t){return l(t.target.value)}}),Object(d.jsx)("button",{children:"Save"})]}),/\S/.test(o)?Object(d.jsxs)("h2",{children:["Comment:",o]}):null]})},f=(n(17),function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={people:null},t}return Object(j.a)(n,[{key:"getRequest",value:function(){var t=Object(o.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://swapi.dev/api/people/").then((function(t){if(!t.ok)throw new Error("".concat(t.status," - ").concat(t.statusText));return t.json()}));case 2:e=t.sent,console.log(e.results),this.setState({people:e.results});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getRequest()}},{key:"render",value:function(){var t=this.state.people;return Object(d.jsx)(d.Fragment,{children:null!==t&&Object(d.jsx)("ul",{className:"list",children:t.map((function(t,e){return Object(d.jsx)(m,{item:t,index:e},e)}))})})}}]),n}(r.a.Component));a.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.fe1949b0.chunk.js.map