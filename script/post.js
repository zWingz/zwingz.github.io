let toc,stay,heading,tocIcon;function $(t){const e=document.querySelectorAll(t);return Array.prototype.slice.call(e)}function setAnchorActive(){const t=heading.filter(t=>{const e=t.previousElementSibling;if(!e)return[t];const c=e.getBoundingClientRect();return c.top+c.height/2<0}),e=t.slice(-1)[0];if(!e)return;const c=t.length-1;tocIcon.style.transform=`translate3d(0, ${19*c}px,0) rotate(45deg)`,$(".toc a").forEach(function(t){t.classList.remove("active")}),document.querySelector(`.toc a[href="#${e.id}"]`).classList.add("active")}function fixedToc(){const t=window.scrollY;tocTop=toc.getBoundingClientRect().top,tocTop<=t?stay.classList.add("fixed"):stay.classList.remove("fixed")}function calc(){toc&&fixedToc(),setAnchorActive()}document.addEventListener("DOMContentLoaded",function(){toc=document.querySelector(".toc"),stay=document.querySelector(".stay"),heading=$(".post-content .heading"),tocIcon=document.querySelector(".toc-icon"),heading.length&&(calc(),window.addEventListener("scroll",()=>{calc()},{passive:!0}))});