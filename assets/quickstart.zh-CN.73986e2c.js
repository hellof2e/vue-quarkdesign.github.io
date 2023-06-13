import{d as s,c as a,a as n,o as t}from"./vue.f7560311.js";const l={class:"markdown-body"},p=n(`<h1>\u5FEB\u901F\u4E0A\u624B</h1><h2>\u9884\u89C8</h2><blockquote><p>\u626B\u63CF\u4E0B\u65B9\u4E8C\u7EF4\u7801\u4F53\u9A8C\uFF0C\u4F53\u9A8C Quark \u7EC4\u4EF6\u5E93\u793A\u4F8B</p></blockquote><img src="https://m.hellobike.com/resource/helloyun/15697/3_81B_qrcode_quark-design.hellobike.com.png?x-oss-process=image/quality,q_80" width="200" alt="qr.png"><h2>CDN</h2><p>\u4F7F\u7528 Quarkd \u6700\u7B80\u5355\u7684\u65B9\u5F0F\u662F\u76F4\u63A5\u5728 HTML \u6587\u4EF6\u4E2D\u5F15\u5165 CDN \u94FE\u63A5\uFF0C\u4E4B\u540E\u4F60\u53EF\u4EE5\u5168\u5C40\u4E2D\u4EFB\u610F\u4F7F\u7528\u3002\u7531\u4E8E quark \u505A\u5230\u4E86 CSS-IN-JS\uFF0C\u56E0\u6B64\u60A8\u53EA\u9700\u52A0\u8F7D\u4E0B\u9762\u94FE\u63A5\u5373\u53EF\uFF01</p><blockquote><p>CDN \u4F53\u79EF\u53EA\u6709 80kb\uFF0C\u8D85\u4E4E\u4F60\u60F3\u8C61\uFF01\uFF08\u8FDC\u5C0F\u4E8E\u5176\u5B83\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u5E93\u4F53\u79EF\uFF09</p></blockquote><pre><code class="">&lt;script src=&quot;https://fastly.jsdelivr.net/npm/quarkd@latest/umd/index.js&quot; /&gt;
</code></pre><h2>\u901A\u8FC7 NPM \u5B89\u88C5</h2><p>\u5728\u73B0\u6709\u9879\u76EE\u4E2D\u4F7F\u7528 Quark Design \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code class="">npm</code> \u8FDB\u884C\u5B89\u88C5\uFF1A</p><pre><code class="language-bash">npm i quarkd
</code></pre><h2>\u6309\u9700\u5F15\u5165(\u63A8\u8350)</h2><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/\${Component Name}&quot;</span>
</code></pre><h2>\u5168\u91CF\u5F15\u5165</h2><pre><code class="language-js"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib&quot;</span>
</code></pre><h2>\u4F7F\u7528\u793A\u4F8B</h2><pre><code class="language-tsx">&lt;template&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleClick&quot;</span>&gt;</span>\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>;
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/button&quot;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code></pre><h2>Polyfill</h2><blockquote><p>Quarkd(Web components) \u652F\u6301\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF0C\u5982\u9700\u517C\u5BB9\u66F4\u4F4E\u7248\u672C\uFF08 iOS 10 \u4EE5\u4E0B\uFF0CAndroid 7 \u4EE5\u4E0B\uFF09\uFF0C\u8BF7\u5728 HTML \u5934\u90E8\u52A0\u5165 polyfill\u3002</p></blockquote><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://unpkg.com/@webcomponents/webcomponentsjs@^2/&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><p>\u66F4\u591A\u8BE6\u60C5\uFF0C\u53C2\u8003\u5B98\u65B9 Polyfill <a href="https://www.webcomponents.org/polyfills">\u70B9\u51FB\u67E5\u770B\u66F4\u591A</a>\u3002</p>`,21),e=[p],h={},E="",i=s({__name:"quickstart.zh-CN",setup(c,{expose:u}){return u({frontmatter:{},excerpt:void 0}),(o,F)=>(t(),a("div",l,e))}});export{i as default,E as excerpt,h as frontmatter};
