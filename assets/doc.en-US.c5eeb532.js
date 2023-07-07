import{d as s,c as a,a as e,o}from"./vue.094f02a2.js";const d={class:"markdown-body"},l=e(`<h1>MarketDialog</h1><h3>Intro</h3><p>Pure picture popup</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> MarketDialog <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;quarkd/lib/marketdialog&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-js">MarketDialog({
  <span class="hljs-attr">url</span>: <span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/15697/Zj-NfJdxdA.png&quot;</span>,
});
</code></pre><h3>Tabbed Call</h3><p>For example, we need to customize the image rounded corners</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-market-dialog</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
    <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;market&quot;</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-market-dialog</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>open</td><td>Control popup window show and hide</td><td><code class="">boolean</code></td><td><code class="">require</code></td></tr><tr><td>url</td><td>popup image url</td><td><code class="">string</code></td><td></td></tr><tr><td>size</td><td>The size of close button</td><td><code class="">string</code></td><td><code class="">32</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>Event</th><th>Description</th><th>Callback</th></tr></thead><tbody><tr><td>close</td><td>Click the close icon callback function</td><td><code class="">() =&gt; void</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>,which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">Theme customization</a>\u3002</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--market-dialog-width</code></td><td>Image width</td><td><code class="">288px</code></td></tr><tr><td><code class="">--market-dialog-radius</code></td><td>Image Radius</td><td><code class="">12px</code></td></tr></tbody></table>`,18),n=[l],i={},u="",g=s({__name:"doc.en-US",setup(c,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(r,h)=>(o(),a("div",d,n))}});export{g as default,u as excerpt,i as frontmatter};
