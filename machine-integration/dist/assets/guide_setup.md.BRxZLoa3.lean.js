import{_ as e,c as o,a2 as i,o as n}from"./chunks/framework.XPCTOXrd.js";const l=JSON.parse('{"title":"Communication Setup","description":"","frontmatter":{},"headers":[],"relativePath":"guide/setup.md","filePath":"guide/setup.md"}'),a={name:"guide/setup.md"};function s(r,t,c,h,m,d){return n(),o("div",null,t[0]||(t[0]=[i('<h1 id="communication-setup" tabindex="-1">Communication Setup <a class="header-anchor" href="#communication-setup" aria-label="Permalink to &quot;Communication Setup&quot;">​</a></h1><p>Laboratory Machines use three methods of communication to produce data. The following are the methods used in machine drivers at the facilities.</p><ol><li><p><strong>Serial Communication:</strong> This involves using serial ports to connect machines that output raw text data. The serial port is connected from the machine(s) to the computer with the driver. Most of the computers with this configuration runs on windows.</p></li><li><p><strong>TCP/IP Communication:</strong> This method involves communication over a network using the TCP/IP protocol suite. A designated ip address and port is assigned in the communication configurations of the Machines. An <strong>Ethernet</strong> cable is required for this configuration. It connects from the machine to a local network switch/router. A machine which uses this method for example is the <strong>DxH560, GeneXpert</strong></p></li><li><p><strong>File Export:</strong> Machines can also export data directly to files stored locally or on a network drive. This method involves writing data to a file in a specified format, a machine driver then obtains that file and processes the data. A machine which uses this method for example is the <strong>ELBA XL640 Biochemistry Analyzer</strong></p></li></ol>',3)]))}const p=e(a,[["render",s]]);export{l as __pageData,p as default};