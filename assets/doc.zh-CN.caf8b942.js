import{d as a,c as u,a as t,o as e}from"./vue.09c2976d.js";const d={class:"markdown-body"},l=t(`<h1>Uploader \u4E0A\u4F20\u7EC4\u4EF6</h1><h3>\u4ECB\u7ECD</h3><p>\u63D0\u4F9B\u6D4F\u89C8\u5668\u539F\u751F\u4E0A\u4F20\u529F\u80FD</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/uploader&quot;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-uploader</span> <span class="hljs-attr">:preview</span>=<span class="hljs-string">&quot;false&quot;</span> @<span class="hljs-attr">afterread</span>=<span class="hljs-string">&quot;afterRead&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-uploader</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">afterread</span>(<span class="hljs-params">file</span>) </span>{
  <span class="hljs-built_in">console</span>.log(file.file.name);
}
</code></pre><h3>\u6587\u4EF6\u9884\u89C8</h3><p>\u9ED8\u8BA4\u5F00\u542F\u9884\u89C8\u529F\u80FD</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-uploader</span> <span class="hljs-attr">preview</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;preview&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-uploader</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-built_in">this</span>.$refs.preview.
  setPreview([<span class="hljs-string">&#39;https://img.yzcdn.cn/vant/leaf.jpg&#39;</span>, <span class="hljs-string">&#39;https://img.yzcdn.cn/vant/leaf.jpg&#39;</span>);
}
</code></pre><h3>\u9650\u5236\u4E0A\u4F20\u6570\u91CF</h3><p>\u8D85\u8FC7\u6570\u91CF\uFF0C\u9690\u85CF\u591A\u4F59\u90E8\u5206\u5E76\u4E14\u9690\u85CF\u4E0A\u4F20\u6309\u94AE</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-uploader</span> <span class="hljs-attr">maxcount</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">preview</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-uploader</span>&gt;</span>
</code></pre><h3>\u9650\u5236\u4E0A\u4F20\u5927\u5C0F</h3><p>maxsize \u5355\u4F4D B \u8D77\u6B65\uFF0C\u4F8B\u5982 1M \u662F 1024 * 1024</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-uploader</span> <span class="hljs-attr">maxsize</span>=<span class="hljs-string">&quot;1024&quot;</span> @<span class="hljs-attr">oversize</span>=<span class="hljs-string">&quot;oversize&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-uploader</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-function"><span class="hljs-title">oversize</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u6709\u6587\u4EF6\u8D85\u8FC71KB\u4E86\u54E6&#39;</span>)
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-uploader</span> <span class="hljs-attr">preview</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;uploader&quot;</span>&gt;</span>\u4E0A\u4F20\u6587\u4EF6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-uploader</span>&gt;</span>
</code></pre><h3>\u4E0A\u4F20\u524D\u7F6E</h3><p>setBeforeUpload \u8FD4\u56DE Boolean, false \u963B\u6B62\u4E0A\u4F20\u3002</p><pre><code class="language-js"><span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-built_in">this</span>.$refs.before.setBeforeUpload(<span class="hljs-built_in">this</span>.beforeUpload)
},
<span class="hljs-function"><span class="hljs-title">beforeUpload</span>(<span class="hljs-params">files</span>)</span> {
  <span class="hljs-keyword">const</span> r = files.every(<span class="hljs-function"><span class="hljs-params">file</span> =&gt;</span> file.type === <span class="hljs-string">&#39;image/jpg&#39;</span>);
  <span class="hljs-keyword">if</span>(!r) {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u8BF7\u4E0A\u4F20 jpg \u683C\u5F0F\u56FE\u7247&#39;</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
  };
  <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
},
</code></pre><h3>\u7981\u6B62\u4E0A\u4F20</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-uploader</span> <span class="hljs-attr">preview</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-uploader</span>&gt;</span>
</code></pre><h3>\u53EA\u8BFB\u9884\u89C8\u6A21\u5F0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-uploader</span> <span class="hljs-attr">preview</span> <span class="hljs-attr">readonly</span> /&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>accept</td><td>\u5141\u8BB8\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B</td><td><code class="">string</code></td><td><code class="">image/*</code></td></tr><tr><td>multiple</td><td>\u662F\u5426\u591A\u9009</td><td><code class="">boolean</code></td><td><code class="">true</code></td></tr><tr><td>preview</td><td>\u662F\u5426\u5C55\u793A\u9884\u89C8</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>capture</td><td>\u56FE\u7247\u9009\u53D6\u6A21\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">boolean</code> (\u76F4\u63A5\u8C03\u8D77\u6444\u50CF\u5934)</td><td><code class="">false</code></td><td></td></tr><tr><td>maxcount</td><td>\u6700\u5927\u4E0A\u4F20\u6570\u91CF\uFF0C\u8D85\u51FA\u9690\u85CF</td><td><code class="">string</code></td><td></td></tr><tr><td>maxsize</td><td>\u6700\u5927\u4E0A\u4F20\u5927\u5C0F</td><td><code class="">string</code></td><td><code class="">26214400 \uFF0825M\uFF09</code></td></tr><tr><td>disabled</td><td>\u7981\u6B62\u4E0A\u4F20</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hidedelete</td><td>\u9690\u85CF\u5220\u9664\u56FE\u6807</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>readonly</td><td>\u53EA\u8BFB\u6A21\u5F0F</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>afterread</td><td>\u4E0A\u4F20\u540E\u56DE\u8C03</td><td><code class="">(file: file or file[]) =&gt; void</code></td><td></td></tr><tr><td>oversize</td><td>\u914D\u5408 maxsize \u4F7F\u7528\uFF0C\u8D85\u8FC7\u5927\u5C0F\u56DE\u8C03\u51FD\u6570</td><td><code class="">(items: fiel[], maxsize: string) =&gt; void</code></td><td></td></tr></tbody></table><h3>slot</h3><p>| \u540D\u79F0 | \u8BF4\u660E | | ----------- | -------------- | \u2014 | | name=loader | \u81EA\u5B9A\u4E49\u4E0A\u4F20\u7EC4\u4EF6 | |</p><h3>Methods</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>setBeforeUpload</td><td>\u4E0A\u4F20\u524D\u7F6E\uFF0C\u7528\u6CD5 uploader.setBeforeUpload(fn)</td><td><code class="">(fn: () =&gt; boolean) =&gt; void</code></td></tr><tr><td>setPreview</td><td>\u521D\u59CB\u5316\u9884\u89C8\u6570\u636E\uFF0C\u7528\u6CD5 uploader.setPreview(data)</td><td><code class="">(url: string[]) =&gt; void</code></td></tr><tr><td>beforeDelete</td><td>\u5220\u9664\u524D\u7F6E\uFF0C\u7528\u6CD5 uploader.beforeDelete(fn)</td><td><code class="">(file, {index: number}) =&gt; void</code></td></tr><tr><td>closePreview</td><td>\u624B\u52A8\u5173\u95ED\u9884\u89C8\u5F39\u7A97\u65B9\u6CD5</td><td></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--uploader-width</code></td><td>\u4E0A\u4F20\u3001\u9884\u89C8\u7EC4\u4EF6\u7684\u5BBD\u5EA6</td><td><code class="">93px</code></td></tr><tr><td><code class="">--uploader-height</code></td><td>\u4E0A\u4F20\u3001\u9884\u89C8\u7EC4\u4EF6\u7684\u9AD8\u5EA6</td><td><code class="">93px</code></td></tr><tr><td><code class="">--uploader-border-width</code></td><td>\u4E0A\u4F20\u7EC4\u4EF6\u7684\u8FB9\u6846</td><td><code class="">1px</code></td></tr><tr><td><code class="">--uploader-border-color</code></td><td>\u4E0A\u4F20\u7EC4\u4EF6\u7684\u8FB9\u6846\u8272</td><td><code class="">#E1E6EB</code></td></tr><tr><td><code class="">--uploader-border-style</code></td><td>\u4E0A\u4F20\u7EC4\u4EF6\u7684\u98CE\u683C</td><td><code class="">dashed</code></td></tr><tr><td><code class="">--uploader-radius</code></td><td>\u4E0A\u4F20\u3001\u9884\u89C8\u7EC4\u4EF6\u7684\u8FB9\u6846</td><td><code class="">4px</code></td></tr><tr><td><code class="">--uploader-margin</code></td><td>\u4E0A\u4F20\u3001\u9884\u89C8\u7EC4\u4EF6\u53F3\u4E0B\u95F4\u8DDD</td><td><code class="">6px</code></td></tr><tr><td><code class="">--uploader-delete-wrap-width</code></td><td>\u9884\u89C8\u5220\u9664\u6309\u94AE\u5BBD\u5EA6</td><td><code class="">14px</code></td></tr><tr><td><code class="">--uploader-delete-wrap-height</code></td><td>\u9884\u89C8\u5220\u9664\u6309\u94AE\u9AD8\u5EA6</td><td><code class="">14px</code></td></tr><tr><td><code class="">--uploader-delete-background</code></td><td>\u5220\u9664\u7EC4\u4EF6\u7684\u80CC\u666F\u8272</td><td><code class="">rgb(0, 0, 0)</code></td></tr><tr><td><code class="">--uploader-delete-color</code></td><td>\u5220\u9664\u7EC4\u4EF6\u56FE\u6807\u989C\u8272</td><td><code class="">#fff</code></td></tr><tr><td><code class="">--uploader-delete-size</code></td><td>\u5220\u9664\u7EC4\u4EF6 \u56FE\u6807\u5927\u5C0F</td><td><code class="">10px</code></td></tr></tbody></table>`,38),n=[l],h={},F="",i=a({__name:"doc.zh-CN",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(p,o)=>(e(),u("div",d,n))}});export{i as default,F as excerpt,h as frontmatter};
