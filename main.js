/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t){t.forEach((function(t){var e=document.querySelector(t.formSelector),r=e.querySelectorAll(t.inputSelector),n=(e.querySelector(t.errorClass),e.querySelector(t.submitButtonSelector));function o(){var r=e.checkValidity();n.disabled=!r,n.classList.toggle(t.inactiveButtonClass,!r)}function i(r){var n=r.target;n.validity.valid?function(r){e.querySelector("".concat(t.errorClass,"-").concat(r.name)).textContent="",r.classList.remove(t.inputErrorClass)}(n):function(r){var n="".concat(t.errorClass,"-").concat(r.name);e.querySelector(n).textContent=r.validationMessage,r.classList.add(t.inputErrorClass)}(n),o()}r.forEach((function(t){t.addEventListener("input",i)})),o()}))}t.d({},{k:()=>T});var r=[{formSelector:".popup__form_place_edit-profile",inputSelector:".popup__input",errorClass:".popup__input-error",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_invalid"},{formSelector:".popup__form_place_add-item",inputSelector:".popup__input",errorClass:".popup__input-error",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_invalid"},{formSelector:".popup__form_place_edit-avatar",inputSelector:".popup__input",errorClass:".popup__input-error",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_invalid"}],n=document.querySelector(".profile__edit-button"),o=document.querySelector(".popup_edit-profile"),i=document.querySelector(".popup__close-icon_place_edit-profile"),a=document.querySelector(".profile__add-button"),c=document.querySelector(".popup_add-item"),u=document.querySelector(".popup__close-icon_place_add-item"),l=document.querySelector(".popup_image"),s=document.querySelector(".popup__close-icon_place_image"),p=document.querySelector(".popup__image"),f=document.querySelector(".popup__description"),d=document.querySelector(".popup__form_place_edit-profile"),h=document.querySelector(".popup__input_profile_name"),v=document.querySelector(".popup__input_profile_about-me"),y=document.querySelector(".popup__save-button_place_edit-profile"),_=document.querySelector(".profile__name"),m=document.querySelector(".profile__about-me"),g=document.querySelector(".profile__avatar"),b=document.querySelector(".profile__avatar-edit"),S=document.querySelector(".popup_edit-avatar"),w=document.querySelector(".popup__close-icon_place_edit-avatar"),E=document.querySelector(".popup__form_place_edit-avatar"),L=document.querySelector(".popup__input_edit-avatar_link"),k=document.querySelector(".popup__save-button_place_edit-avatar");function x(){g.setAttribute("src",L.value)}var q=function(t){"Escape"===t.key&&j(document.querySelector(".popup_opened"))};function C(t){t.classList.add("popup_opened"),e(r),r.forEach((function(t){return console.log(t)})),document.addEventListener("keydown",q)}function j(t){t.classList.remove("popup_opened"),document.removeEventListener("keydown",q)}function O(t,e){e.target.classList.contains("popup")&&j(t)}var A={baseUrl:"https://nomoreparties.co/v1/wbf-cohort-10",headers:{authorization:"08a9e413-f3a2-4906-808f-70fe33826b1a","Content-Type":"application/json"}};function P(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var T,N=document.querySelector(".popup__form_place_add-item"),U=document.querySelector(".popup__input_new-item_title"),I=document.querySelector(".popup__input_new-item_link"),B=document.querySelector(".popup__save-button_place_add-item"),G=document.querySelector(".elements");function D(t){var e=document.querySelector("#card-template").content.querySelector(".elements__card").cloneNode(!0),r=e.querySelector(".elements__photo");e.querySelector(".elements__title").textContent=t.name,r.setAttribute("src",t.link),r.setAttribute("alt",t.name);var n=e.querySelector(".elements__like-button"),o=e.querySelector(".elements__like-counter"),i=e.querySelector(".elements__delete-icon");n.addEventListener("click",(function(e){var r;e.target.classList.contains("elements__like-button_active")?function(t){return fetch("".concat(A.baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:A.headers}).then((function(t){if(t.ok)return t.json();throw new Error("Ошибка")}))}(t._id).then((function(t){u(t.likes.length),e.target.classList.toggle("elements__like-button_active")})).catch((function(t){return console.log(t)})):(r=t._id,fetch("".concat(A.baseUrl,"/cards/likes/").concat(r),{method:"PUT",headers:A.headers}).then((function(t){if(t.ok)return t.json();throw new Error("Ошибка")}))).then((function(t){u(t.likes.length),e.target.classList.toggle("elements__like-button_active")})).catch((function(t){return console.log(t)}))}));var a,c=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return P(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?P(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}(t.likes);try{for(c.s();!(a=c.n()).done;)a.value._id===T&&n.classList.toggle("elements__like-button_active")}catch(t){c.e(t)}finally{c.f()}function u(t){o.textContent=t}return t.owner._id===T&&(i.classList.add("elements__delete-icon_hidden"),i.addEventListener("click",(function(e){var r;(r=t._id,fetch("".concat(A.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:A.headers}).then((function(t){t.ok?console.log("Карточка успешно удалена"):console.log("Ошибка при удалении карточки")}))).then((function(){return e.target.closest(".elements__card").remove()})).catch((function(t){return console.log(t)}))}))),r.addEventListener("click",(function(){C(l),f.textContent=t.name,p.setAttribute("src",t.link)})),u(t.likes.length),e}function F(t){G.prepend(D(t))}function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function M(){M=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof f?e:f,a=Object.create(i.prototype),c=new k(o||[]);return n(a,"_invoke",{value:S(t,r,c)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p={};function f(){}function d(){}function h(){}var v={};u(v,i,(function(){return this}));var y=Object.getPrototypeOf,_=y&&y(y(x([])));_&&_!==e&&r.call(_,i)&&(v=_);var m=h.prototype=f.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(n,i,a,c){var u=s(t[n],t,i);if("throw"!==u.type){var l=u.arg,p=l.value;return p&&"object"==J(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(p).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=w(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function w(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function x(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:q}}function q(){return{value:void 0,done:!0}}return d.prototype=h,n(m,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:d,configurable:!0}),d.displayName=u(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(b.prototype),u(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(m),u(m,c,"Generator"),u(m,i,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=x,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Y(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}o.addEventListener("click",(function(t){O(o,t)})),c.addEventListener("click",(function(t){O(c,t)})),l.addEventListener("click",(function(t){O(l,t)})),S.addEventListener("click",(function(t){O(S,t)})),n.addEventListener("click",(function(){h.value=_.textContent,v.value=m.textContent,C(o)})),i.addEventListener("click",(function(){return j(o)})),a.addEventListener("click",(function(){return C(c)})),u.addEventListener("click",(function(){return j(c)})),s.addEventListener("click",(function(){return j(l)})),b.addEventListener("click",(function(){return C(S)})),w.addEventListener("click",(function(){return j(S)})),E.addEventListener("submit",(function(t){var e;t.preventDefault(),k.textContent="Сохранение…",(e=L.value,fetch("".concat(A.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:A.headers,body:JSON.stringify({avatar:e})}).then((function(t){if(t.ok)return t.json();throw new Error("Ошибка")}))).then((function(t){x(),S.querySelectorAll(".popup__input").forEach((function(t){t.value=""}))})).catch((function(t){return console.log(t)})).finally((function(){k.textContent="Сохранить",j(S)}))})),d.addEventListener("submit",(function(t){var e,r;t.preventDefault(),y.textContent="Сохранение…",(e=h.value,r=v.value,fetch("".concat(A.baseUrl,"/users/me"),{method:"PATCH",headers:A.headers,body:JSON.stringify({name:e,about:r})}).then((function(t){if(t.ok)return t.json();throw new Error("Ошибка")}))).then((function(t){_.textContent=h.value,m.textContent=v.value})).catch((function(t){return console.log(t)})).finally((function(){y.textContent="Сохранить",j(o)}))})),N.addEventListener("submit",(function(t){var e,r;t.preventDefault(),B.textContent="Создаём…",(e=U.value,r=I.value,fetch("".concat(A.baseUrl,"/cards"),{method:"POST",headers:A.headers,body:JSON.stringify({name:e,link:r})}).then((function(t){if(t.ok)return t.json();throw new Error("Ошибка")}))).then((function(t){F(t),c.querySelectorAll(".popup__input").forEach((function(t){t.value=""}))})).catch((function(t){return console.log(t)})).finally((function(){B.textContent="Создать",j(c)}))})),e(r),function(){var t,e=(t=M().mark((function t(){var e,r,n,o;return M().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all([fetch("".concat(A.baseUrl,"/users/me"),{headers:A.headers}).then((function(t){if(t.ok)return t.json();throw new Error("Ошибка")})),fetch("".concat(A.baseUrl,"/cards"),{headers:A.headers}).then((function(t){return function(t){if(t.ok)return t.json();throw new Error("Ошибка")}(t)}))]);case 3:e=t.sent,a=2,r=function(t){if(Array.isArray(t))return t}(i=e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(i,a)||function(t,e){if(t){if("string"==typeof t)return H(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(t,e):void 0}}(i,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=r[0],o=r[1],T=n._id,_.textContent=n.name,m.textContent=n.about,g.src=n.avatar,o.forEach((function(t){F(t)})),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),alert("error");case 17:case"end":return t.stop()}var i,a}),t,null,[[0,14]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){Y(i,n,o,a,c,"next",t)}function c(t){Y(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}()()})();