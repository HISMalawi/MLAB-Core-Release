import{_ as i,D as r,o as t,c as s,b as c,w as a,a4 as d,k as e,a as n,R as h,I as l}from"./chunks/framework.y8PEYUKI.js";const L=JSON.parse('{"title":"Introduction to Machine Integration","description":"","frontmatter":{},"headers":[],"relativePath":"guide/introduction.md","filePath":"guide/introduction.md"}'),m={name:"guide/introduction.md"},g=e("h1",{id:"introduction-to-machine-integration",tabindex:"-1"},[n("Introduction to Machine Integration "),e("a",{class:"header-anchor",href:"#introduction-to-machine-integration","aria-label":'Permalink to "Introduction to Machine Integration"'},"​")],-1),u=e("p",null,"Welcome to the LIS Machine Integration Guide! This guide provides comprehensive instructions for integrating laboratory machines with other systems, particularly EMR (Electronic Medical Records) systems. Below is the workflow for data transfer from the machine to LIS (Laboratory Management System).",-1),p=h('<h2 id="machines-drivers" tabindex="-1">Machines &amp; Drivers <a class="header-anchor" href="#machines-drivers" aria-label="Permalink to &quot;Machines &amp; Drivers&quot;">​</a></h2><p>Malawi Hospital Laboratories have different departments with different machines. Examples of these machines include <strong>GeneXpert Machine</strong>, <strong>Mindray</strong>, <strong>BS120</strong>, <strong>Elba</strong> etc. Most of these machines can be integrated i.e, automate the process of data (test results data) from the machine to IBLIS automatically. The departments notably; <strong>Biochemistry</strong>, <strong>Hematology</strong>, <strong>Blood Bank</strong>, <strong>Molecular</strong> and <strong>Microbiology</strong> have machines that can be integrated.</p><p>A machine driver is a Node service (written in Node.js) that interfaces between the machine and IBLIS, it obtains data from the machines, process it into readable formats and later sends it to IBLIS via a RESTful API. <a href="/guide/installation.html">Read more about drivers and installation</a></p><h2 id="lis-integration" tabindex="-1">LIS Integration <a class="header-anchor" href="#lis-integration" aria-label="Permalink to &quot;LIS Integration&quot;">​</a></h2><p>As previously stated IBLIS is the main point of focus system. In IBLIS, data sent from the machine driver is saved in a <strong>JSON</strong> file named in respective to the order <strong>accession number</strong>. This JSON file is then parsed by IBLIS and results are saved in the patient&#39;s record upon fetching results in the IBLIS.</p>',5);function f(I,_,S,b,v,B){const o=r("Mermaid");return t(),s("div",null,[g,u,(t(),c(d,null,{default:a(()=>[l(o,{id:"mermaid-6",class:"mermaid",graph:"graph%20LR%3B%0A%20%20Machine%20--%3E%20Driver%20--%3E%20LIS%3B%0A"})]),fallback:a(()=>[n(" Loading... ")]),_:1})),p])}const y=i(m,[["render",f]]);export{L as __pageData,y as default};