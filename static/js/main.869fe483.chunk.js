(this["webpackJsonpgithub-star-tagger"]=this["webpackJsonpgithub-star-tagger"]||[]).push([[0],{66:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(15),c=a.n(r),i=(a(66),a(10)),l=a(24),o=a(9),u=a(2);function j(e){var t=e.username;return Object(u.jsxs)("header",{className:"d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom",children:[Object(u.jsx)(l.b,{to:"/github-star-tagger",className:"d-flex align-items-center text-dark text-decoration-none",children:Object(u.jsx)("span",{className:"fs-4",children:"GitHub Star Tagger"})}),Object(u.jsxs)("nav",{className:"d-inline-flex mt-2 mt-md-0 ms-md-auto",children:[Object(u.jsx)(l.b,{to:"/github-star-tagger",className:"me-3 py-2 text-dark text-decoration-none",children:"Home"}),Object(u.jsx)(l.b,{to:"/github-star-tagger/user/"+t,className:"me-3 py-2 text-dark text-decoration-none",children:"Stars"})]})]})}var b=a(25),d=a(23),g=a(90),m=a(88),h=a(89),x=a(16),O=function(e){var t=e.tag;return Object(u.jsxs)("button",{className:"tag me-2 btn btn-outline-secondary",children:[Object(u.jsx)(x.c,{className:"me-1"}),t]},t)},f=function(e){var t=e.tag,a=e.starID,n=e.removeTag;return Object(u.jsxs)("span",{id:a.toString(),onClick:function(){return n(a,t)},className:"tag btn btn-outline-danger",children:[Object(u.jsx)(x.c,{className:"me-1"}),t,Object(u.jsx)(x.d,{className:"ms-2"})]},t)};function p(e){var t=e.starID,a=e.tags,s=e.addTag,r=e.removeTag,c=Object(n.useState)(!1),l=Object(i.a)(c,2),o=l[0],j=l[1],b=function(){return j(!1)},d=Object(n.useState)(""),O=Object(i.a)(d,2),p=O[0],v=O[1];return Object(u.jsxs)("div",{className:"tags",children:[Object(u.jsx)(g.a,{variant:"link",onClick:function(){return j(!0)},children:Object(u.jsx)(x.a,{})}),Object(u.jsxs)(m.a,{show:o,onHide:b,children:[Object(u.jsx)(m.a.Header,{children:Object(u.jsx)(m.a.Title,{children:"Edit Tags"})}),Object(u.jsx)(m.a.Body,{children:Object(u.jsxs)(h.a,{id:t,onSubmit:function(e){e.preventDefault();var t=Number(e.target.id),a=p.trim();""!==a?(s(t,a),v("")):alert("Please enter text to add a new tag")},children:[Object(u.jsxs)(h.a.Group,{children:[Object(u.jsx)(h.a.Label,{htmlFor:"add-tag",children:"Add Tag"}),Object(u.jsx)(h.a.Control,{type:"text",name:"add-tag",value:p,onChange:function(e){return v(e.target.value)}}),Object(u.jsx)(g.a,{className:"mt-2 btn btn-success",type:"submit",children:"Add Tag"})]}),Object(u.jsx)("br",{}),Object(u.jsxs)(h.a.Group,{children:[Object(u.jsx)(h.a.Label,{htmlFor:"remove-tag",children:"Remove Tag"}),Object(u.jsxs)("div",{className:"d-flex justify-content-start gap-1",children:[0===a.length?Object(u.jsx)("button",{className:"tag btn btn-outline-secondary disabled",children:"No tags"}):null,a.map((function(e){return Object(u.jsx)(f,{tag:e,starID:t,removeTag:r},e)}))]})]})]})}),Object(u.jsx)(m.a.Footer,{children:Object(u.jsx)(g.a,{onClick:b,variant:"outline-danger",children:Object(u.jsx)(x.d,{})})})]})]})}function v(e){var t=e.star,a=e.addTag,n=e.removeTag;return Object(u.jsxs)("div",{className:"p-0 card",children:[Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h4",{className:"",children:Object(u.jsx)("a",{className:"star-header",href:t.html_url,children:t.name})}),Object(u.jsx)("h6",{className:"card-subtitle mb-4 text-muted fst-italic",children:t.owner.login}),Object(u.jsx)("p",{className:"card-text fst-light",children:t.description})]}),Object(u.jsxs)("div",{className:"d-flex card-footer justify-content-start gap-1",children:[0===t.tags.length?Object(u.jsx)("button",{className:"tag btn btn-outline-secondary disabled",children:"no tags"}):null,t.tags.map((function(e){return Object(u.jsx)(O,{tag:e},e)})),Object(u.jsx)(p,{starID:t.id,tags:t.tags,addTag:a,removeTag:n})]})]})}var N=a(60),y=a(61),S=function(e){var t=e.allTags,a=e.filteredTags,s=e.setFilteredTags,r=(e.filterNoTags,e.showAll),c=Object(n.useState)({}),l=Object(i.a)(c,2),o=l[0],j=l[1];return Object(n.useEffect)((function(){!function(e){var t=e.map((function(e){return{value:e,label:e}}));console.log({options:t}),j([].concat(Object(b.a)(t),[{value:"no tags",label:"no tags"}]))}(t)}),[t]),Object(u.jsxs)("div",{className:"tag-filter col-3",children:[Object(u.jsx)("h4",{children:"Tag Filter"}),Object(u.jsx)("div",{className:"tag-selector",children:Object(u.jsx)(N.a,{components:Object(y.a)(),options:o,className:"mb-3 font-weight-bold",placeholder:"Filter Tags",isSearchable:!0,isMulti:!0,onChange:s,value:a})}),Object(u.jsx)("div",{className:"current-filter",children:Object(u.jsx)("button",{onClick:r,className:"btn btn-primary",children:"Show All"})}),Object(u.jsx)("br",{})]})};function T(e){var t=e.stars,a=e.setStars,s=e.allTags,r=Object(n.useState)([]),c=Object(i.a)(r,2),l=c[0],o=c[1],j=Object(n.useState)(t),g=Object(i.a)(j,2),m=g[0],h=g[1];function x(e,n){t.forEach((function(s){if(s.id===e){if(s.tags.includes(n))return void alert("Tag already assigned to this star");a(t.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{tags:[].concat(Object(b.a)(t.tags),[n])}):t})))}}))}function O(e,n){a(t.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{tags:t.tags.filter((function(e){return e!==n}))}):t})))}return Object(n.useEffect)((function(){console.log({filteredTags:l}),function(){if(l.length<1)h(t);else{var e=l.map((function(e){return e.value})),a=t.filter((function(t){return t.tags.some((function(t){return e.includes(t)}))}));if(e.includes("no tags")){console.log(e.includes("no tags"));var n=t.filter((function(e){return 0===e.tags.length}));a.push.apply(a,Object(b.a)(n))}console.log({filter:a}),h(a)}}()}),[l,t]),Object(u.jsxs)("div",{className:"stars container",children:[Object(u.jsxs)("div",{className:"container d-flex justify-content-between",children:[Object(u.jsx)(S,{allTags:s,filteredTags:l,setFilteredTags:o,filterNoTags:function(){var e=t.filter((function(e){return 0===e.tags.length}));h(e)},showAll:function(){h(t),o([])}}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h4",{className:"text-muted fst-italic",children:["Total Stars: ",t.length]}),Object(u.jsxs)("h5",{className:"mb-4 text-muted fst-italic",children:["Filtered Stars: ",m.length]})]})]}),Object(u.jsx)("div",{className:"container row row-cols-4 gap-2",children:t.length<1?"No stars":m.map((function(e){return Object(u.jsx)(v,{star:e,addTag:x,removeTag:O},e.id)}))})]})}function k(e){var t=e.username,a=e.setUsername,s=Object(n.useState)(!1),r=Object(i.a)(s,2),c=r[0],l=r[1],o=function(){return l(!1)};return Object(u.jsxs)("div",{className:"mt-4 p-0 card container-fluid col-2",children:[Object(u.jsx)("div",{className:"card-header",children:"Username"}),Object(u.jsxs)("div",{className:"d-flex flex-column justify-content-center card-body",children:[Object(u.jsxs)("p",{children:[Object(u.jsx)(x.e,{})," ",t]}),Object(u.jsx)(g.a,{className:"btn btn-sm btn-secondary",onClick:function(){return l(!0)},children:"Change Username"}),Object(u.jsxs)(m.a,{show:c,onHide:o,children:[Object(u.jsx)(m.a.Header,{children:Object(u.jsx)(m.a.Title,{children:"Edit Username"})}),Object(u.jsxs)(m.a.Body,{children:[Object(u.jsx)(h.a.Label,{htmlFor:"new-username",children:"Username"}),Object(u.jsxs)(h.a,{onSubmit:function(e){e.preventDefault();var t=e.target["new-username"].value.trim();console.log(t),""!==t?(a(t),o()):alert("Please enter text to change the username")},children:[Object(u.jsx)(h.a.Control,{type:"text",name:"new-username"}),Object(u.jsx)(g.a,{className:"mt-2 btn btn-success",type:"submit",children:"Update Username"})]})]}),Object(u.jsx)(m.a.Footer,{children:Object(u.jsx)(g.a,{onClick:o,variant:"outline-danger",children:Object(u.jsx)(x.d,{})})})]})]})]})}function w(){return Object(u.jsx)("footer",{className:"pt-4 my-md-5 pt-md-5 border-top",children:Object(u.jsxs)("div",{className:"d-flex justify-content-center",children:["Built by Amanda Pettenati | Source Code ",Object(u.jsx)("a",{href:"https://github.com/apettenati/github-star-tagger",children:Object(u.jsx)(x.b,{className:"ms-2"})})]})})}var C=a(27),F=a.n(C),I=a(43),U=a(87);function A(e){var t=e.username,a=e.setStars,s=e.getAllTags,r=Object(n.useState)(!1),c=Object(i.a)(r,2),l=c[0],j=c[1],g=Object(o.f)();function m(e){return h.apply(this,arguments)}function h(){return(h=Object(I.a)(F.a.mark((function e(t){var a,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(a=e.sent,console.log({response:a}),!a.ok){e.next=11;break}return e.next=7,a.json();case 7:return n=e.sent,e.abrupt("return",n);case 11:return e.abrupt("return",-1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return O.apply(this,arguments)}function O(){return(O=Object(I.a)(F.a.mark((function e(t){var a,n,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!(a=e.sent).ok){e.next=11;break}return n=a.headers.get("Link"),console.log({links:n}),'.*page=(.*)>; rel="last"',s=parseInt(n.match('.*page=(.*)>; rel="last"')[1]),e.abrupt("return",s);case 11:return e.abrupt("return",-1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(I.a)(F.a.mark((function e(){var n,r,c,i,l,o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=3;break}return alert("Username is blank. Please update username then try again."),e.abrupt("return");case 3:return j(!0),n=1,r="https://api.github.com/users/".concat(t,"/starred?per_page=100&page=").concat(n),e.next=8,x(r);case 8:if(-1!==(c=e.sent)){e.next=13;break}return alert("User does not exist"),j(!1),e.abrupt("return");case 13:console.log("last page from getLastPage",c),i=[];case 16:if(!(n<=c)){e.next=29;break}return r="https://api.github.com/users/".concat(t,"/starred?per_page=100&page=").concat(n),e.next=20,m(r);case 20:if(-1!==(l=e.sent)){e.next=25;break}return alert("Failed to retrieve star data"),j(!1),e.abrupt("return");case 25:i.push.apply(i,Object(b.a)(l));case 26:n++,e.next=16;break;case 29:o=i.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{tags:[],show:!0})})),console.log({newStarData:o}),a(o),s(o),j(!1),g.push("/github-star-tagger/user/".concat(t));case 35:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.jsx)("button",{type:"button",className:"col-4 mx-auto mb-4 btn btn-lg btn-primary",onClick:function(){return f.apply(this,arguments)},children:l?Object(u.jsx)(U.a,{animation:"border",role:"status"}):"Get Star Data"})}a(83);function D(){var e=Object(n.useState)((function(){return JSON.parse(localStorage.getItem("stars"))||""})),t=Object(i.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)((function(){return JSON.parse(localStorage.getItem("username"))||""})),c=Object(i.a)(r,2),b=c[0],d=c[1],g=Object(n.useState)([]),m=Object(i.a)(g,2),h=m[0],x=m[1];function O(e){var t=[];e.map((function(e){e.tags.map((function(e){t.includes(e)||t.push(e)}))})),console.log({allTags:t}),x(t)}return Object(n.useEffect)((function(){console.log("render"),localStorage.setItem("stars",JSON.stringify(a)),localStorage.setItem("username",JSON.stringify(b)),a.length>0&&O(a)}),[a,s,b,d]),Object(u.jsx)(l.a,{children:Object(u.jsxs)("div",{className:"container py-3",children:[Object(u.jsx)(j,{username:b}),Object(u.jsx)(o.a,{path:"/github-star-tagger",exact:!0,render:function(){return Object(u.jsxs)("main",{className:"row d-flex flex-column justify-content-center",children:[Object(u.jsxs)("div",{className:"mb-4 mx-auto text-center",children:[Object(u.jsx)("h1",{className:"display-4 fw-normal",children:"GitHub Star Tagger"}),Object(u.jsx)("p",{className:"fs-5 text-muted",children:"Add tags to your starred GitHub repositories!"})]}),Object(u.jsx)(A,{username:b,setStars:s,getAllTags:O}),Object(u.jsx)(k,{username:b,setUsername:d})]})}}),Object(u.jsx)(o.c,{children:Object(u.jsx)(o.a,{path:"/github-star-tagger/user/:user",render:function(){return Object(u.jsx)(T,{stars:a,setStars:s,allTags:h})}})}),Object(u.jsx)(w,{})]})})}c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(D,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.869fe483.chunk.js.map