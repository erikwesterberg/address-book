!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o=window.localStorage,r=0;document.getElementById("show-form-button").addEventListener("click",function(){document.getElementById("show-div").style.display="block"}),document.getElementById("hide-form").addEventListener("click",function(){document.getElementById("show-div").style.display="none"}),console.log("here is some text");var c=function(){var e=JSON.parse(o.getItem("contacts")),t=document.querySelector(".contact-list");if(e){t.innerHTML="";var n=document.createElement("ul");e.forEach(function(e){var t=document.createElement("li");t.innerHTML='\n        <div id="contact-card">\n          <div class="content">\n            <h2><i class="ion-md-person"></i>'+e.name+"</h2>\n            <p>"+e.company+"</p>\n            <p>"+e.notes+"</p> \n            <p>"+e.email+' | \n            <a href="https://www.twitter.com/'+e.twitter+'">@'+e.twitter+"</a></p>\n          </div>\n          <br>\n        </div>\n     ",r++;var c=document.createElement("button");c.classList+="delete-contact ui orange button",c.innerHTML="Delete Contact",c.onclick=function(){var e=document.querySelector("li");e.parentNode.removeChild(e);var t=JSON.parse(o.getItem("contacts"));t.splice(r,1),o.setItem("contacts",JSON.stringify(t))},t.appendChild(c),n.appendChild(t)}),t.appendChild(n)}else t.innerHTML="<p>You have no contacts in your address book</p>"};document.addEventListener("DOMContentLoaded",function(){c();var e=document.querySelector(".new-contact-form");e.addEventListener("submit",function(t){t.preventDefault();var n=e.elements,r=n.name,i=n.email,a=n.phone,l=n.company,u=n.notes,d=n.twitter,s={id:Date.now(),name:r.value,email:i.value,phone:a.value,company:l.value,notes:u.value,twitter:d.value};console.log("Saving the following contact: "+JSON.stringify(s));var m=JSON.parse(o.getItem("contacts"))||[];m.push(s),o.setItem("contacts",JSON.stringify(m)),c(),e.reset()})})}]);