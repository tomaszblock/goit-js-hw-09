const e=document.querySelector('[name="delay"]'),o=document.querySelector('[name="step"]'),t=document.querySelector('[name="amount"]');function n(e,o){return new Promise(((t,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}document.querySelector(".form").addEventListener("submit",(function(l){l.preventDefault();const r=parseInt(e.value),s=parseInt(o.value),a=parseInt(t.value);for(let e=0;e<a;e++)n(e+1,r+e*s).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}));
//# sourceMappingURL=03-promises.24296940.js.map
