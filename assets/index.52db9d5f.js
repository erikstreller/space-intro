import{g as h,j as m,r as d,R as g,F as b,a as y,b as v}from"./vendor.385f7b30.js";const w=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=i(r);fetch(r.href,l)}};w();function N(){return h.timeline().from("#sun",{x:100,y:200,opacity:0,duration:2.5}).from("#mars",{x:200,y:200,opacity:0,duration:2.5},.5).from("#moon1",{x:75,y:150,opacity:0,duration:2},1).from("#moon2",{x:150,y:150,opacity:0,duration:2},1).from("#section-number, #scroll-down, #page-number, #header",{opacity:0,duration:2.5},3.5)}function k(){return h.timeline().fromTo("#hero-title",{clipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",y:100,opacity:0},{clipPath:"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",y:0,opacity:1,duration:2}).fromTo("#hero-subtitle",{clipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",y:100,opacity:0},{clipPath:"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",y:0,opacity:1,duration:2},0).from("#hero-tl-stroke",{x:-150,opacity:0}).from("#hero-br-stroke",{x:150,opacity:0})}const e=m.exports.jsx,o=m.exports.jsxs,u=m.exports.Fragment,C=()=>o("p",{className:"text-light text-xs absolute sm:left-[6.25%] left-10 bottom-10",children:["Designed ","&"," coded by Erik Streller",e("br",{}),"Art -01",o("a",{href:"https://www.figma.com/@seda",target:"_blank",children:[" ","Seda"]})," ","| -02",o("a",{href:"https://unsplash.com/@fakurian",target:"_blank",children:[" ","Milad Fakurian"," "]}),"&",o("a",{href:"https://unsplash.com/@jrkorpa",target:"_blank",children:[" ","Jr Korpa"]})]}),E=({open:t,setOpen:s})=>{function i(l){return new Promise(a=>setTimeout(a,l))}async function n(l){var a;s(!1),await i(800),(a=document.getElementById(l))==null||a.scrollIntoView({behavior:"smooth"})}const r=[{name:"Home",href:"hero"},{name:"About Me",href:"about"},{name:"Interests",href:"skills"},{name:"Contact",href:"contact"}];return o("nav",{className:`fixed top-0 w-full z-40 bg-gradient-to-r from-primary to-secondary transition-all duration-300 delay-300 ${t?"opacity-100":"opacity-0 -translate-x-full"}`,children:[e(C,{}),e("ul",{className:"w-full h-screen flex flex-col items-center justify-center",children:r.map(l=>e("li",{className:"sm:text-5xl md:text-7xl lg:text-8xl text-9xl text-light mb-10 transition-all duration-500 ease-in-out hover:-translate-y-4",children:e("button",{onClick:()=>n(l.href),children:l.name})},l.href))})]})},z=()=>(document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("path"),s=t==null?void 0:t.getTotalLength();(t==null?void 0:t.style.strokeDasharray)!=null&&(t.style.strokeDasharray=s+" "+s),s!=null&&(t==null?void 0:t.style.strokeDashoffset)!=null&&(t.style.strokeDashoffset=s.toString()),window.addEventListener("scroll",()=>{const i=(document.documentElement.scrollTop+document.body.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight);if(s!=null){const n=s*i;(t==null?void 0:t.style.strokeDashoffset)!=null&&(t.style.strokeDashoffset=(s-n).toString())}})}),e("div",{className:"absolute top-[80vh] left-center h-[270vh] overflow-hidden z-20 md:opacity-90",id:"scrolling-stroke",children:e("svg",{viewBox:"0 0 130 2616",fill:"none",preserveAspectRatio:"xMidYMax meet",className:"h-full w-[130px]",children:e("path",{d:"M67.0541 0V267C67.0542 270 72.5542 270 72.5541 273.5C72.554 275.5 71.4996 275.873 65.5542 278.5C44.0542 288 27.5542 297.5 14.5542 318.5C12.8691 321.222 12.8901 324.891 14.5542 326C16.0543 327 18.5542 328 22.5542 322C26.5542 316 38.054 293.5 67.0541 293.5C96.0541 293.5 116.054 315 116.054 344C116.054 373 88.5541 392.5 68.5541 391.5C48.5541 390.5 25.5542 382.5 19.0542 350.5C13.1766 321.564 0.054051 351.5 1.0541 361C2.05415 370.5 7.05418 374.5 19.0542 374.5C36.5612 374.5 63.554 363 78.054 354.5C92.554 346 133.554 320.5 127.554 310C121.554 299.5 75.0541 314.5 57.0541 323.5C36.5542 333.75 27.0542 340 15.0541 352C-0.453971 367.508 1.98292 374.025 10 379.5C30.5 393.5 67 390.726 67 409C67 683.167 67 1183 67 1233C67 1253 42 1274.5 42 1303.5C42 1326 51 1342.5 67 1360.5C83 1378.5 90 1403.5 90 1422.5C90 1441.5 79.0976 1466 67 1481.5C54.9024 1497 42 1513.5 42 1537C42 1568 67 1588 67 1607C67 1616.5 66.4999 2518.5 66.4999 2523C66.4999 2537.5 86.9999 2546.54 86.9999 2520C86.9999 2495.5 73.2223 2489.99 64.5 2486.5C59.5 2484.5 33.1116 2480.31 22 2505C12.5 2526.11 33.5 2540 57 2552.5C72.0153 2560.49 93.1595 2572 85.4999 2594.5C77.8403 2617 47.5001 2617 34.5 2611C26.1537 2607.15 22.5 2604 12.9999 2595.5",stroke:"#E0505F","stroke-width":"2"})})}));var S="/portfolio/assets/blue-abstract.28753ce7.png",T="/portfolio/assets/white-abstract.fa03b46c.png";const j={lineColor:"dark",numberColor:"dark"},c=({lineColor:t,numberColor:s,number:i})=>o("div",{className:"flex justify-center items-center absolute bottom-6 right-7 z-10",id:"section-number",children:[e("div",{className:`h-0.5 w-section-number-line rounded-full opacity-30 bg-${t} sm:hidden`}),o("div",{className:`font-serif text-section-title ml-[18px] text-${s}`,children:["0",i]})]});c.defaultProps=j;const f=({title:t,description:s})=>o("div",{className:"absolute text-dark flex flex-col items-end md:items-center text-right md:text-center top-[20vh] md:top-[25vh] right-1/2 mr-36 ml-12 md:right-auto md:mx-auto xl:mr-26 whitespace-pre-line z-30",children:[e("div",{className:"text-section-title leading-[1.2] mb-8",children:t}),o("div",{className:"w-fit",children:[e("div",{className:"stroke bg-primary sm:mr-0 ml-14 mb-5"}),e("div",{className:"stroke bg-secondary sm:ml-0 mr-14 sm:absolute sm:top-24"})]}),e("div",{className:"text-section-description max-w-section-description md:max-w-section-description-md mt-10",children:s})]}),p=({topText:t,bottomText:s})=>o(u,{children:[e("div",{className:"overlay-text bottom-[8.5%] left-[7.25%] z-10",children:t}),e("div",{className:"overlay-text bottom-[1%] left-[2%] z-10",children:s})]}),I="Nice to meet you",L="I created this section to say \u201Chello\u201D and introduce myself. Currently I'm living and working in Germany, but that will change soon and my new home will be Portugal, where I want to work as an intern in software development. Exciting times are ahead of me!",P=()=>o("section",{id:"about",className:"h-screen w-full relative flex justify-center",children:[e("div",{className:"absolute h-full w-full bg-light z-10"}),e(f,{title:I,description:L}),o("div",{className:"absolute top-[40.5vh] left-10 text-dark text-2xl sm:hidden z-10",children:[e("div",{className:"-rotate-90",children:"4"}),e("div",{className:"h-6 w-0.5 bg-dark rounded-full ml-[6px]"}),e("div",{className:"-rotate-90",children:"2"})]}),e(p,{topText:"Ol\xE1",bottomText:"Lisbon"}),o("div",{className:"flex flex-col justify-center items-center w-1/2 h-full ml-auto md:hidden",children:[e("img",{src:T,alt:"white abstract",className:"absolute z-20 opacity-90 my-auto mx-auto lg:scale-[.6] xl:scale-[.85] md:scale-50 transition-all duration-300 ease-in-out"}),e("img",{src:S,alt:"blue abstract",className:"absolute z-10 my-auto mx-auto pl-20 pb-20 lg:scale-[.6] xl:scale-[.85] md:scale-50 transition-all duration-300 ease-in-out"})]}),e(c,{number:2})]}),D=()=>o("section",{id:"contact",className:"w-full h-screen bg-dark relative flex justify-center items-center z-10",children:[e("div",{className:"text-overlay font-serif opacity-10 text-light",children:"Page coming"}),e(c,{number:4,numberColor:"light",lineColor:"light"}),o("div",{className:"absolute top-[70.5vh] left-10 text-light text-2xl sm:hidden",children:[e("div",{className:"-rotate-90",children:"4"}),e("div",{className:"h-6 w-0.5 bg-light rounded-full ml-[6px]"}),e("div",{className:"-rotate-90",children:"4"})]})]}),M=({open:t,setOpen:s})=>{const[i,n]=d.exports.useState("light"),r=()=>{window.scrollY>=document.body.scrollHeight/4.2&&window.scrollY<=document.body.scrollHeight/1.35?n("dark"):n("light")};d.exports.useEffect(()=>(window.addEventListener("scroll",r,!0),()=>window.removeEventListener("scroll",r)));const l=[{icon:e(g,{}),href:"https://www.linkedin.com/in/erik-streller-a435631a4/"},{icon:e(b,{}),href:"https://github.com/erikstreller"}];return o("header",{className:`fixed z-50 top-0 w-full text-${i} sm:py-5 sm:px-[6.25%] px-10 pt-10 flex justify-between`,id:"header",children:[e("button",{className:"header-link sm:text-xl text-2xl",onClick:()=>{var a;return(a=document.getElementById("hero"))==null?void 0:a.scrollIntoView({behavior:"smooth"})},children:"Erik Streller"}),e("div",{className:"flex space-x-8 sm:text-xl text-2xl mr-26 md:hidden",children:l.map(a=>e("a",{href:a.href,target:"_blank",className:"header-link pt-1",children:a.icon},a.href))}),e("button",{className:"absolute sm:top-[13px] top-9 sm:right-[6.25%] right-9 w-10 h-10 focus:outline-none",onClick:()=>s(!t),children:o("div",{className:"absolute sm:w-6 w-8 transform -translate-x-1/2 -translate-y-1/2 left-1 top-1/2",children:[e("span",{className:`absolute h-[0.188rem] sm:w-6 w-8 bg-${i} transform transition duration-300 ease-in-out ${t?"rotate-45 delay-200":"-translate-y-1.5"}`}),e("span",{className:`absolute h-[0.188rem] sm:w-6 w-8 bg-${i} transform transition duration-300 ease-in-out ${t?"-rotate-45 delay-200":"translate-y-1.5"}`})]})})]})};var A="/portfolio/assets/planet1.0560a60a.png",F="/portfolio/assets/planet2.b4045ae5.png",x="/portfolio/assets/planet3.841e1d2f.png";const O=()=>o("section",{id:"hero",className:"h-screen w-full top-0 flex justify-center bg-gradient-to-b from-darkblue to-dark",children:[o("div",{className:"text-light text-center sm:pt-32 pt-[24vh] sm:px-[11%] z-30",children:[e("div",{className:"sm:text-4xl text-5xl md:max-w-hero-title max-w-lg mb-8 min-h-[100px]",id:"hero-title",children:"I\u2019m Erik, I design and build things for fun."}),o("div",{className:"w-fit mx-auto",children:[e("div",{className:"stroke bg-primary sm:mr-0 mr-14 mb-5",id:"hero-tl-stroke"}),e("div",{className:"stroke bg-secondary sm:ml-0 ml-14 sm:absolute sm:top-24",id:"hero-br-stroke"})]}),e("div",{className:"sm:text-xl text-2xl md:max-w-hero-subtitle max-w-md mx-auto mt-10",id:"hero-subtitle",children:"I did my diploma in mechanical engineering where I used python to analyze and visualize data. Eversince coding hooked me."})]}),o("div",{className:"text-light absolute bottom-3 flex items-center md:hidden",id:"scroll-down",children:[e("div",{className:"mr-4",children:"scroll"}),e("div",{className:"ml-4",children:"down"})]}),o("div",{className:"absolute top-[25.5vh] left-10 text-light text-2xl md:hidden",id:"page-number",children:[e("div",{className:"-rotate-90",children:"4"}),e("div",{className:"h-6 w-0.5 bg-light rounded-full ml-[6px]"}),e("div",{className:"-rotate-90",children:"1"})]}),e("div",{className:"fixed bottom-0 right-0 z-10 lg:-right-6 lg:-bottom-6 md:hidden",id:"sun",children:e("img",{src:A,alt:"sun",className:"lg:scale-90 lg:opacity-95"})}),e("div",{className:"fixed top-[20vh] right-[13vw] lg:right-20  md:top-14 md:right-0 sm:top-8 sm:-right-8 z-10",id:"mars",children:e("img",{src:F,alt:"mars",className:"lg:opacity-75 md:scale-50 sm:scale-[.3]"})}),e("div",{className:"fixed bottom-[32vh] right-[25vw] z-10",id:"moon1",children:e("img",{src:x,alt:"moon1",className:"lg:opacity-75"})}),e("div",{className:"fixed bottom-[45vh] right-[9vw] z-10",id:"moon2",children:e("img",{src:x,alt:"moon2",className:"lg:opacity-75"})}),e(c,{number:1,numberColor:"light"})]}),H="About my interests",R="I love frontend technologies and automation processes. I like to use React with Typescript in combination with Mui or TailwindCss. For planning and design I use Figma. And Python is my first choice for small games and automation projects.",$=()=>o("section",{id:"skills",className:"h-screen w-full bg-paper relative flex justify-center",children:[e(p,{topText:"React",bottomText:"Python"}),e(f,{title:H,description:R}),e(c,{number:3}),o("div",{className:"absolute top-[55.5vh] left-10 text-dark text-2xl sm:hidden",children:[e("div",{className:"-rotate-90",children:"4"}),e("div",{className:"h-6 w-0.5 bg-dark rounded-full ml-[6px]"}),e("div",{className:"-rotate-90",children:"3"})]})]});function B(){const[t,s]=d.exports.useState(!1);return d.exports.useLayoutEffect(()=>{k(),N()},[]),o(u,{children:[e(z,{}),e(M,{open:t,setOpen:s}),e(E,{open:t,setOpen:s}),e(O,{}),e(P,{}),e($,{}),e(D,{})]})}y.render(e(v.StrictMode,{children:e(B,{})}),document.getElementById("root"));
