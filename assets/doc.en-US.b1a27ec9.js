import{d as a,c as t,a as e,o as n}from"./vue.cc1baa29.js";const l={class:"markdown-body"},c=e(`<h1>Rate</h1><h3>Intro</h3><p>The rate component is used for rating things.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/rate&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-rate</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-rate</span>&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-comment">/* Unchosen star color */</span>
quark-rate {
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">rgb</span>(<span class="hljs-number">238</span>, <span class="hljs-number">238</span>, <span class="hljs-number">238</span>);
}
</code></pre><h3>Custom color</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-rate</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;green&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-rate</span>&gt;</span>
</code></pre><h3>Disabled</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-rate</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-rate</span>&gt;</span>
</code></pre><h3>Readonly</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-rate</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">readonly</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-rate</span>&gt;</span>
</code></pre><h3>Change Event</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-rate</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;rate&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onselect&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-rate</span>&gt;</span>
</code></pre><pre><code class="language-javascript"> <span class="hljs-function"><span class="hljs-title">onselect</span>(<span class="hljs-params">e</span>)</span> { <span class="hljs-built_in">console</span>.log(e.detail.value) }
</code></pre><h3>image icon</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-rate</span>
  <span class="hljs-attr">defaultvalue</span>=<span class="hljs-string">&quot;2&quot;</span>
  <span class="hljs-attr">imgicon</span>=<span class="hljs-string">&quot;https://vue-quarkdesign.hellobike.com/assets/quark-logo.f9a6a307.png&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-rate</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>defaultvalue</td><td>Default chosen value 1-5 represent star</td><td><code class="">string</code></td><td><code class=""> 0</code></td></tr><tr><td>value</td><td>Chosen value\uFF0Ccan be set to async value, 1-5 represent star</td><td><code class="">string</code></td><td><code class=""> 0</code></td></tr><tr><td>size</td><td>Icon font size</td><td><code class="">string</code></td><td><code class="">25</code></td></tr><tr><td>disabled</td><td>Whether to disable rate</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>readonly</td><td>Whether to be readonly</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>activecolor</td><td>chosen color</td><td><code class="">string</code></td><td><code class="">#ffc800</code></td></tr><tr><td>imgicon</td><td>iamge icon</td><td><code class="">string</code></td><td><code class="">-</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>change</td><td>Emitted when rate changed</td><td><code class="">(e: { detail: { value: string } }) =&gt; void</code></td></tr></tbody></table>`,24),p=[c],u={},g="",i=a({__name:"doc.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(d,r)=>(n(),t("div",l,p))}});export{i as default,g as excerpt,u as frontmatter};
