(function(){$(".designProcess-reveal").click(function(){$(this).toggleClass("designProcess-revealing");$(".designProcess__revealed").slideToggle()});var e=$(".masonry").masonry({itemSelector:".masonry__item",columnWidth:".masonry__sizer",percentPosition:true,stagger:90,transitionDuration:".4s"});e.on("click",".masonry__item--content",function(){var t=this;var n=".is-expanded";var a=t.parentNode;s(t);if(a.classList.contains("is-expanded")){}else{$(n).removeClass("is-expanded");$(a).toggleClass("is-expanded")}var d=t.offsetWidth;t.style[i]="";o(t);r(t,a);e.masonry()});var t=document.documentElement;var i=typeof t.style.transition=="string"?"transition":"WebkitTransition";var n={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[i];function s(e){var t=getSize(e);e.style[i]="none";e.style.width=t.width+"px";e.style.height=t.height+"px"}function o(e){var t=function(){e.style.width="";e.style.height="";e.removeEventListener(n,t)};e.addEventListener(n,t)}function r(e,t){var i=getSize(t);e.style.width=i.width+"px";e.style.height=i.height+"px"}})();