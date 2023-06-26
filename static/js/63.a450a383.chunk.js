"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[63],{3063:function(n,e,r){r.r(e),r.d(e,{default:function(){return Z}});var t=r(5705),o=r(9434),i="NOT_FOUND";var u=function(n,e){return n===e};function a(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,o=void 0===t?u:t,a=r.maxSize,c=void 0===a?1:a,s=r.resultEqualityCheck,l=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}}(o),m=1===c?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:i},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return i}return{get:t,put:function(e,o){t(e)===i&&(r.unshift({key:e,value:o}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(c,l);function d(){var e=m.get(arguments);if(e===i){if(e=n.apply(null,arguments),s){var r=m.getEntries(),t=r.find((function(n){return s(n.value,e)}));t&&(e=t.value)}m.put(arguments,e)}return e}return d.clearCache=function(){return m.clear()},d}function c(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function s(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var o=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var i,u=0,a={memoizeOptions:void 0},s=t.pop();if("object"===typeof s&&(a=s,s=t.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var l=a,m=l.memoizeOptions,d=void 0===m?r:m,f=Array.isArray(d)?d:[d],h=c(t),p=n.apply(void 0,[function(){return u++,s.apply(null,arguments)}].concat(f)),v=n((function(){for(var n=[],e=h.length,r=0;r<e;r++)n.push(h[r].apply(null,arguments));return i=p.apply(null,n)}));return Object.assign(v,{resultFunc:s,memoizedResultFunc:p,dependencies:h,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),v};return o}var l=s(a),m=function(n){return n.contacts.items},d=function(n){return n.contacts.isLoading},f=function(n){return n.contacts.error},h=l([m,function(n){return n.filter.value}],(function(n,e){return n.filter((function(n){return n.name.toLocaleLowerCase().includes(e.toLocaleLowerCase().trim())}))})),p=r(4287),v=r(7640),x=r(5535),y=r(184),j=function(){var n=(0,o.I0)(),e=(0,o.v9)(m);return(0,y.jsx)(t.J9,{initialValues:{name:"",phone:""},validationSchema:x.gf,onSubmit:function(r,t){e.find((function(n){return n.name===r.name}))?alert("".concat(r.name," ia already in contacts")):n((0,v.uK)(r)),t.resetForm()},children:(0,y.jsxs)(p.l0,{children:[(0,y.jsxs)(p.__,{children:["Name",(0,y.jsx)(p.gN,{name:"name",type:"text"}),(0,y.jsx)(p.Bc,{name:"name",component:"span"})]}),(0,y.jsxs)(p.__,{children:["Number",(0,y.jsx)(p.gN,{name:"phone",type:"tel"}),(0,y.jsx)(p.Bc,{name:"phone",component:"span"})]}),(0,y.jsx)(p.un,{type:"submit",children:"Add contact"})]})})},b=function(n){var e=n.contact,r=e.name,t=e.phone,i=e.id,u=(0,o.I0)();return(0,y.jsxs)(p.ck,{children:[r,": ",t,(0,y.jsx)(p.un,{type:"button",onClick:function(){return u((0,v.GK)(i))},children:"Delite"})]})},g=function(){var n=(0,o.v9)(h);return(0,y.jsx)(p.aV,{children:n.map((function(n){return(0,y.jsx)(b,{contact:n},n.id)}))})},_=function(){var n=(0,o.v9)(f);return(0,y.jsx)(p.UG,{children:n})},w=r(4808),N=function(){var n=(0,o.I0)();return(0,y.jsx)(t.J9,{children:(0,y.jsxs)(p.__,{children:["Find contact by name",(0,y.jsx)(p.gN,{name:"filter",type:"text",onChange:function(e){return n((0,w.W)(e.currentTarget.value))}})]})})},k=function(){return(0,y.jsx)(p.q5,{children:"Loading..."})},q=r(2791),Z=function(){var n=(0,o.v9)(m),e=(0,o.v9)(d),r=(0,o.v9)(f),t=(0,o.I0)();return(0,q.useEffect)((function(){t((0,v.yF)())}),[t]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(p.Dx,{children:"Phonebook"}),(0,y.jsx)(j,{}),(0,y.jsx)(N,{}),(0,y.jsx)(p.Y0,{children:"Contacts"}),e&&!r&&(0,y.jsx)(k,{}),r&&(0,y.jsx)(_,{}),n&&!r&&(0,y.jsx)(g,{})]})}},5535:function(n,e,r){r.d(e,{IY:function(){return o},gf:function(){return u},pj:function(){return i}});var t=r(6727),o=(t.Ry().shape({name:t.Z_().min(5,"Too short - should be 5 chars minimum").max(20,"Too lond! - should be 20 chars maximum").required("No name provided"),phone:t.Z_().matches(/[+3][0-9]{12}$/,"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 +380000000000").required("No name provided"),email:t.Z_().email("Invalid email").required("No email provided"),password:t.Z_().required("No password provided.").min(6,"Password is too short - should be 6 chars minimum.").matches(/[a-zA-Z]/,"Password can only contain Latin letters.")}),t.Ry().shape({name:t.Z_().min(5,"Too short - should be 5 chars minimum").max(20,"Too lond! - should be 20 chars maximum").required("No name provided"),email:t.Z_().email("Invalid email").required("No email provided"),password:t.Z_().required("No password provided.").min(6,"Password is too short - should be 6 chars minimum.").matches(/[a-zA-Z]/,"Password can only contain Latin letters.")})),i=t.Ry().shape({name:t.Z_().min(5,"Too short - should be 5 chars minimum").max(20,"Too lond! - should be 20 chars maximum").required("No name provided"),email:t.Z_().email("Invalid email").required("No email provided")}),u=t.Ry().shape({name:t.Z_().min(5,"Too short - should be 5 chars minimum").max(20,"Too lond - should be 20 chars maximum").required("No name provided"),phone:t.Z_().matches(/[+3][0-9]{12}$/,"Phone should be +380000000000").required("No name provided")})}}]);
//# sourceMappingURL=63.a450a383.chunk.js.map