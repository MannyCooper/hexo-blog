!function(t,e){void 0!==t.IntersectionObserver&&e.querySelectorAll("#toc").forEach((function(o){const s=new Set,r=new Map,n=Array.from(o.querySelectorAll(".menu-list > li > a"));for(const t of n){const o=t.getAttribute("href").trim().slice(1),s=e.getElementById(o);s&&r.set(s,t)}const l=Array.from(r.keys()),i=new IntersectionObserver((e=>{for(const t of e)t.isIntersecting?s.add(t.target):s.delete(t.target);let o;if(s.size?o=[...s].sort(((t,e)=>t.offsetTop-e.offsetTop))[0]:l.length&&(o=l.filter((e=>e.offsetTop<t.scrollY)).sort(((t,e)=>e.offsetTop-t.offsetTop))[0]),o&&r.has(o)){n.forEach((t=>t.classList.remove("is-active")));const t=r.get(o);t.classList.add("is-active");let e=t.parentElement.parentElement;for(;e.classList.contains("menu-list")&&"li"===e.parentElement.tagName.toLowerCase();)e.parentElement.children[0].classList.add("is-active"),e=e.parentElement.parentElement}}),{threshold:0});for(const t of l)if(i.observe(t),r.has(t)){const o=r.get(t);o.setAttribute("data-href",o.getAttribute("href")),o.setAttribute("href","javascript:;"),o.addEventListener("click",(()=>{var s,r;"function"==typeof t.scrollTo&&(s=t.id,r=e.getElementById(s).offsetTop- -20,e.documentElement.scrollTop=r,e.body.scrollTop=r);const n=o.getAttribute("data-href");history.pushState?history.pushState(null,null,n):location.hash=n})),t.style.scrollMargin="3.5em"}}))}(window,document);