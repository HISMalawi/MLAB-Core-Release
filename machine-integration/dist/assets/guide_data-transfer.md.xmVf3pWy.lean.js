import{_ as t,c as r,j as e,a as s,o as n}from"./chunks/framework.XPCTOXrd.js";const h=JSON.parse('{"title":"Data Transfer","description":"","frontmatter":{},"headers":[],"relativePath":"guide/data-transfer.md","filePath":"guide/data-transfer.md"}'),i={name:"guide/data-transfer.md"};function o(d,a,l,c,f,m){return n(),r("div",null,a[0]||(a[0]=[e("h1",{id:"data-transfer",tabindex:"-1"},[s("Data Transfer "),e("a",{class:"header-anchor",href:"#data-transfer","aria-label":'Permalink to "Data Transfer"'},"​")],-1),e("p",null,"Data transfer is facilitated from the machine driver to the Laboratory Information System (LIS), specifically IBLIS, through a RESTful API. The formatted data is transmitted within the URL parameters, encompassing the accession number, test results, and machine attributes such as name and facility.",-1),e("p",null,"Given the potential existence of multiple values for test results, many drivers transmit the data repetitively to ensure comprehensive transmission. Additionally, the system generates output messages confirming successful data transmission to the server, ensuring reliability and completeness of the transfer process.",-1)]))}const p=t(i,[["render",o]]);export{h as __pageData,p as default};