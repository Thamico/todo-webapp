(()=>{"use strict";document.querySelector("#submitBtn").addEventListener("click",(function(e){e.preventDefault;const n=document.getElementById("title"),t=document.querySelector("#due-date"),o=document.querySelector("#priority"),c=document.querySelector("#description"),l=n.value,u=t.value,s=o.value,a=c.value;console.log(l),console.log(u),console.log(s),console.log(a),function(e,n,t,o){const c=document.createElement("li");c.innerHTML=`\n      <span>${e}</span>\n      <span>${n}</span>\n      <span>${t}</span>\n      <span>${o}</span>\n    `,document.getElementById("content").appendChild(c)}(l,u,s,a)}))})();