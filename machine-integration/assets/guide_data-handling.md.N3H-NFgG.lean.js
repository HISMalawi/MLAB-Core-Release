import{_ as i,D as l,c as r,b as d,w as a,a4 as o,j as e,a as n,o as t,I as c}from"./chunks/framework.jvRD96rJ.js";const L=JSON.parse('{"title":"LIS Data Handling","description":"","frontmatter":{},"headers":[],"relativePath":"guide/data-handling.md","filePath":"guide/data-handling.md"}'),h={name:"guide/data-handling.md"},u=e("h1",{id:"lis-data-handling",tabindex:"-1"},[n("LIS Data Handling "),e("a",{class:"header-anchor",href:"#lis-data-handling","aria-label":'Permalink to "LIS Data Handling"'},"​")],-1),m=e("p",null,"In our context, IBLIS is the LIS that receives data from various machine drivers. Upon receiving data, IBLIS performs the following functions:",-1),p=e("ol",null,[e("li",null,"Creates a JSON file using the accession number received (if already present it skips this)"),e("li",null,"Parses the params and queries of the API an dumps test(s) and their results into the JSON file"),e("li",null,"Appends data from step 2 if there are more than one tests available under the same accession number"),e("li",null,"Updates the fetch results button in the system enter test results section to indicate new results are available"),e("li",null,"On fetch, the results are populated and the user can save")],-1);function f(g,_,v,I,S,b){const s=l("Mermaid");return t(),r("div",null,[u,m,p,(t(),d(o,null,{default:a(()=>[c(s,{id:"mermaid-33",class:"mermaid",graph:"graph%20LR%3B%0A%20%20JSON%20--%3E%20Fetching%20--%3E%20Database%3B%0A"})]),fallback:a(()=>[n(" Loading... ")]),_:1}))])}const x=i(h,[["render",f]]);export{L as __pageData,x as default};