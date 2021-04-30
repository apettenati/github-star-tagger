(this["webpackJsonpgithub-star-tags"]=this["webpackJsonpgithub-star-tags"]||[]).push([[0],{65:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(15),c=a.n(r),i=(a(65),a(10)),l=a(26),o=a(9),j=a(2);function u(e){var t=e.username;return Object(j.jsxs)("header",{className:"d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom",children:[Object(j.jsx)("a",{href:"/",className:"d-flex align-items-center text-dark text-decoration-none",children:Object(j.jsx)("span",{className:"fs-4",children:"GitHub Star Tags"})}),Object(j.jsxs)("nav",{className:"d-inline-flex mt-2 mt-md-0 ms-md-auto",children:[Object(j.jsx)(l.b,{to:"/github-star-tags",className:"me-3 py-2 text-dark text-decoration-none",children:"Home"}),Object(j.jsx)(l.b,{to:"/github-star-tags/user/"+t,className:"me-3 py-2 text-dark text-decoration-none",children:"Stars"})]})]})}var b=a(28),d=a(23),m=a(91),g=a(89),h=a(90),x=a(16),O=function(e){var t=e.tag;return Object(j.jsxs)("button",{className:"tag me-2 btn btn-outline-secondary",children:[Object(j.jsx)(x.c,{className:"me-1"}),t]},t)},f=function(e){var t=e.tag,a=e.starID,s=e.removeTag;return Object(j.jsxs)("span",{id:a.toString(),onClick:function(){return s(a,t)},className:"tag btn btn-outline-danger",children:[Object(j.jsx)(x.c,{className:"me-1"}),t,Object(j.jsx)(x.d,{className:"ms-2"})]},t)};function p(e){var t=e.starID,a=e.tags,n=e.addTag,r=e.removeTag,c=Object(s.useState)(!1),l=Object(i.a)(c,2),o=l[0],u=l[1],b=function(){return u(!1)},d=Object(s.useState)(""),O=Object(i.a)(d,2),p=O[0],v=O[1];return Object(j.jsxs)("div",{className:"tags",children:[Object(j.jsx)(m.a,{variant:"link",onClick:function(){return u(!0)},children:Object(j.jsx)(x.a,{})}),Object(j.jsxs)(g.a,{show:o,onHide:b,children:[Object(j.jsx)(g.a.Header,{children:Object(j.jsx)(g.a.Title,{children:"Edit Tags"})}),Object(j.jsx)(g.a.Body,{children:Object(j.jsxs)(h.a,{id:t,onSubmit:function(e){e.preventDefault();var t=Number(e.target.id),a=p.trim();""!==a?(n(t,a),v("")):alert("Please enter text to add a new tag")},children:[Object(j.jsxs)(h.a.Group,{children:[Object(j.jsx)(h.a.Label,{htmlFor:"add-tag",children:"Add Tag"}),Object(j.jsx)(h.a.Control,{type:"text",name:"add-tag",value:p,onChange:function(e){return v(e.target.value)}}),Object(j.jsx)(m.a,{className:"mt-2 btn btn-success",type:"submit",children:"Add Tag"})]}),Object(j.jsx)("br",{}),Object(j.jsxs)(h.a.Group,{children:[Object(j.jsx)(h.a.Label,{htmlFor:"remove-tag",children:"Remove Tag"}),Object(j.jsxs)("div",{className:"d-flex justify-content-start gap-1",children:[0===a.length?Object(j.jsx)("button",{className:"tag btn btn-outline-secondary disabled",children:"No tags"}):null,a.map((function(e){return Object(j.jsx)(f,{tag:e,starID:t,removeTag:r},e)}))]})]})]})}),Object(j.jsx)(g.a.Footer,{children:Object(j.jsx)(m.a,{onClick:b,variant:"outline-danger",children:Object(j.jsx)(x.d,{})})})]})]})}function v(e){var t=e.star,a=e.addTag,s=e.removeTag;return Object(j.jsx)("div",{className:"bg-light card",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h3",{className:"card-title",children:Object(j.jsx)("a",{href:t.html_url,children:t.name})}),Object(j.jsx)("p",{className:"card-subtitle mb-4 text-muted fst-italic",children:t.owner.login}),Object(j.jsx)("p",{className:"card-text fst-light",children:t.description}),Object(j.jsxs)("div",{className:"d-flex justify-content-start gap-1",children:[0===t.tags.length?Object(j.jsx)("button",{className:"tag btn btn-outline-secondary disabled",children:"No tags"}):null,t.tags.map((function(e){return Object(j.jsx)(O,{tag:e},e)})),Object(j.jsx)(p,{starID:t.id,tags:t.tags,addTag:a,removeTag:s})]})]})})}var N=a(59),y=a(60),S=function(e){var t=e.allTags,a=e.setFilteredTags,n=e.filterNoTags,r=e.removeFilterNoTags,c=Object(s.useState)({}),l=Object(i.a)(c,2),o=l[0],u=l[1];return Object(s.useEffect)((function(){!function(e){var t=e.map((function(e){return{value:e,label:e}}));console.log({options:t}),u(Object(b.a)(t))}(t)}),[t]),Object(j.jsxs)("div",{className:"tag-filter",children:[Object(j.jsx)("h4",{children:"Tag Filter"}),Object(j.jsx)("div",{className:"tag-selector",children:Object(j.jsx)(N.a,{components:Object(y.a)(),options:o,className:"mb-3 font-weight-bold",placeholder:"Filter Tags",isSearchable:!0,isMulti:!0,onChange:a})}),Object(j.jsxs)("div",{className:"current-filter",children:[Object(j.jsx)("button",{onClick:n,className:"btn btn-primary",children:"Filter Stars No Tags"}),Object(j.jsx)("button",{onClick:r,className:"ms-2 btn btn-outline-primary",children:"Remove No Tags Filter"})]}),Object(j.jsx)("br",{})]})};function T(e){var t=e.stars,a=e.setStars,n=e.allTags,r=Object(s.useState)([]),c=Object(i.a)(r,2),l=c[0],o=c[1],u=Object(s.useState)(t),m=Object(i.a)(u,2),g=m[0],h=m[1];function x(e,s){t.forEach((function(n){if(n.id===e){if(n.tags.includes(s))return void alert("Tag already assigned to this star");a(t.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{tags:[].concat(Object(b.a)(t.tags),[s])}):t})))}}))}function O(e,s){a(t.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{tags:t.tags.filter((function(e){return e!==s}))}):t})))}return Object(s.useEffect)((function(){console.log({filteredTags:l}),function(){if(l.length<1)h(t);else{var e=l.map((function(e){return e.value})),a=t.filter((function(t){return t.tags.some((function(t){return e.includes(t)}))}));console.log({filter:a}),h(a)}}()}),[l,t]),Object(j.jsxs)("div",{className:"stars",children:[Object(j.jsx)("h3",{children:"Your Stars"}),Object(j.jsxs)("h4",{className:"text-muted fst-italic",children:["Total Stars: ",t.length]}),Object(j.jsxs)("h5",{className:"mb-4 text-muted fst-italic",children:["Filtered Stars: ",g.length]}),Object(j.jsx)(S,{allTags:n,setFilteredTags:o,filterNoTags:function(){var e=t.filter((function(e){return 0===e.tags.length}));h(e)},removeFilterNoTags:function(){h(t)}}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"row row-cols-1 row-cols-lg-4 gap-3",children:t.length<1?"No stars":g.map((function(e){return Object(j.jsx)(v,{star:e,addTag:x,removeTag:O},e.id)}))})})]})}function w(e){var t=e.username,a=e.setUsername,n=Object(s.useState)(!1),r=Object(i.a)(n,2),c=r[0],l=r[1],o=function(){return l(!1)};return Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h4",{className:"card-title pricing-card-title",children:"Username"}),Object(j.jsxs)("p",{children:[Object(j.jsx)(x.e,{})," ",t]}),Object(j.jsx)(m.a,{className:"btn btn-sm btn-secondary",onClick:function(){return l(!0)},children:"Change Username"}),Object(j.jsxs)(g.a,{show:c,onHide:o,children:[Object(j.jsx)(g.a.Header,{children:Object(j.jsx)(g.a.Title,{children:"Edit Username"})}),Object(j.jsxs)(g.a.Body,{children:[Object(j.jsx)(h.a.Label,{htmlFor:"new-username",children:"Username"}),Object(j.jsxs)(h.a,{onSubmit:function(e){e.preventDefault();var t=e.target["new-username"].value.trim();console.log(t),""!==t?(a(t),o()):alert("Please enter text to change the username")},children:[Object(j.jsx)(h.a.Control,{type:"text",name:"new-username"}),Object(j.jsx)(m.a,{className:"mt-2 btn btn-success",type:"submit",children:"Update Username"})]})]}),Object(j.jsx)(g.a.Footer,{children:Object(j.jsx)(m.a,{onClick:o,variant:"outline-danger",children:Object(j.jsx)(x.d,{})})})]})]})}function k(){return Object(j.jsx)("footer",{className:"pt-4 my-md-5 pt-md-5 border-top",children:Object(j.jsxs)("div",{className:"d-flex justify-content-center",children:["Built by Amanda Pettenati | Source Code ",Object(j.jsx)("a",{href:"https://github.com/apettenati/github-star-tags",children:Object(j.jsx)(x.b,{className:"ms-2"})})]})})}var F=a(25),C=a.n(F),I=a(43),D=a(88);function E(e){var t=e.username,a=e.setStars,n=e.getAllTags,r=Object(s.useState)(!1),c=Object(i.a)(r,2),l=c[0],u=c[1],m=Object(o.f)();function g(e){return h.apply(this,arguments)}function h(){return(h=Object(I.a)(C.a.mark((function e(t){var a,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!(a=e.sent).ok){e.next=8;break}return e.next=6,a.json();case 6:return s=e.sent,e.abrupt("return",s);case 8:throw new Error("Failed to get response object");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return O.apply(this,arguments)}function O(){return(O=Object(I.a)(C.a.mark((function e(t){var a,s,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!(a=e.sent).ok){e.next=8;break}return s=a.headers.get("Link"),'.*page=(.*)>; rel="last"',n=parseInt(s.match('.*page=(.*)>; rel="last"')[1]),e.abrupt("return",n);case 8:throw Error("Failed to get last page");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(I.a)(C.a.mark((function e(){var s,r,c,i,l,o;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=3;break}return alert("Username is blank. Please update username then try again."),e.abrupt("return");case 3:return u(!0),s=1,r="https://api.github.com/users/".concat(t,"/starred?per_page=100&page=").concat(s),e.next=8,x(r);case 8:c=e.sent,console.log("last page from getLastPage",c),i=[];case 12:if(!(s<=c)){e.next=21;break}return r="https://api.github.com/users/".concat(t,"/starred?per_page=100&page=").concat(s),e.next=16,g(r);case 16:l=e.sent,i.push.apply(i,Object(b.a)(l));case 18:s++,e.next=12;break;case 21:o=i.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{tags:[],show:!0})})),console.log({newStarData:o}),a(o),n(o),u(!1),m.push("/github-star-tags/user/".concat(t));case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsx)("button",{type:"button",className:"w-100 btn btn-lg btn-primary",onClick:function(){return f.apply(this,arguments)},children:l?Object(j.jsx)(D.a,{animation:"border",role:"status"}):"Get Star Data"})}a(84);function U(){var e=Object(s.useState)((function(){return JSON.parse(localStorage.getItem("stars"))||""})),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)((function(){return JSON.parse(localStorage.getItem("username"))||""})),c=Object(i.a)(r,2),b=c[0],d=c[1],m=Object(s.useState)([]),g=Object(i.a)(m,2),h=g[0],x=g[1];function O(e){var t=[];e.map((function(e){e.tags.map((function(e){t.includes(e)||t.push(e)}))})),console.log({allTags:t}),x(t)}return Object(s.useEffect)((function(){console.log("render"),localStorage.setItem("stars",JSON.stringify(a)),localStorage.setItem("username",JSON.stringify(b)),O(a)}),[a,n,b,d]),Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{className:"container py-3",children:[Object(j.jsx)(u,{username:b}),Object(j.jsx)(o.a,{path:"/github-star-tags",exact:!0,render:function(){return Object(j.jsxs)("main",{className:"d-sm-flex flex-column justify-content-center",children:[Object(j.jsxs)("div",{className:"pricing-header p-3 pb-md-4 mx-auto text-center",children:[Object(j.jsx)("h1",{className:"display-4 fw-normal",children:"GitHub Star Tags"}),Object(j.jsx)("p",{className:"fs-5 text-muted",children:"Add tags to your starred GitHub repositories!"})]}),Object(j.jsxs)("div",{className:"main-card card rounded-3 shadow-sm",children:[Object(j.jsx)("div",{className:"card-header py-3",children:Object(j.jsx)("h2",{className:"my-0 fw-normal",children:"Get Star Data"})}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)(w,{username:b,setUsername:d}),Object(j.jsx)(E,{username:b,setStars:n,getAllTags:O})]})]})]})}}),Object(j.jsx)(o.c,{children:Object(j.jsx)(o.a,{path:"/github-star-tags/user/:user",render:function(){return Object(j.jsx)(T,{stars:a,setStars:n,allTags:h})}})}),Object(j.jsx)(k,{})]})})}c.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(U,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.20da4c34.chunk.js.map