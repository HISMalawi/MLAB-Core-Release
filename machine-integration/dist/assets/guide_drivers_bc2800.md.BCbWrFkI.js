import{_ as a,c as s,a2 as n,o as t}from"./chunks/framework.XPCTOXrd.js";const i="/assets/bc2800.BKxTIHW2.png",m=JSON.parse('{"title":"BC2800 Hematology Analyzer","description":"","frontmatter":{},"headers":[],"relativePath":"guide/drivers/bc2800.md","filePath":"guide/drivers/bc2800.md"}'),o={name:"guide/drivers/bc2800.md"};function l(c,e,p,r,d,h){return t(),s("div",null,e[0]||(e[0]=[n('<h1 id="bc2800-hematology-analyzer" tabindex="-1">BC2800 Hematology Analyzer <a class="header-anchor" href="#bc2800-hematology-analyzer" aria-label="Permalink to &quot;BC2800 Hematology Analyzer&quot;">​</a></h1><p><img src="'+i+`" alt=""> Machine driver for mindray bc2800 - Bc3000</p><ol><li>Install node v10.24.1 on all in one pc</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash</span></span>
<span class="line"><span> source ~/.bashrc</span></span>
<span class="line"><span> nvm install 10.24.1</span></span>
<span class="line"><span> nvm use 10.24.1</span></span></code></pre></div><ol start="2"><li>Navigate into BC2800 folder</li><li>Install dependencies</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  npm install</span></span></code></pre></div><ol start="3"><li>Connect the serial machine and all in one using the serial cable provided. The cable to the all in one should connected on the port found on the side of the all in one</li><li>Run the driver( cd BC2800)</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  node kx21n.js</span></span></code></pre></div><p>NB: This should show a log: &quot;Port open&quot;, if the connection is succesful. Should opening port require permissions, give the port permission by running: <code>sudo chmod -R 777 /dev/ttyUSB0</code></p><ol start="5"><li>Go to settings about transimission in the lab machine - then enable Auto Trans.</li><li>Do a dummy test on the machine and observe the log on the all in one terminal whenever the machine finishes processing the test.</li></ol>`,10)]))}const g=a(o,[["render",l]]);export{m as __pageData,g as default};