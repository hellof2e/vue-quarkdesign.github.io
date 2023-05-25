import{d as t,c as a,a as u,o as n}from"./vue.5f720aa0.js";const l={class:"markdown-body"},p=u(`<h1>Steps \u6B65\u9AA4\u6761</h1><h3>\u4ECB\u7ECD</h3><p>\u62C6\u5206\u5C55\u793A\u67D0\u9879\u6D41\u7A0B\u7684\u6B65\u9AA4\uFF0C\u5F15\u5BFC\u7528\u6237\u6309\u6D41\u7A0B\u5B8C\u6210\u4EFB\u52A1\u6216\u5411\u7528\u6237\u5C55\u793A\u5F53\u524D\u72B6\u6001\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/steps&quot;</span>;
</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-steps</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-step</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;done&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6B65\u9AA4\u4E00&quot;</span> <span class="hljs-attr">order</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-step</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;doing&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6B65\u9AA4\u4E8C&quot;</span> <span class="hljs-attr">order</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-step</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-step</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;todo&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6B65\u9AA4\u4E09&quot;</span> <span class="hljs-attr">order</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-step</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-steps</span>&gt;</span>
</code></pre><h3>\u6807\u9898\u548C\u63CF\u8FF0\u4FE1\u606F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-steps</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-step</span>
    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;done&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5DF2\u5B8C\u6210&quot;</span>
    <span class="hljs-attr">order</span>=<span class="hljs-string">&quot;1&quot;</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;\u60A8\u7684\u8BA2\u5355\u5DF2\u7ECF\u6253\u5305\u5B8C\u6210\uFF0C\u5546\u54C1\u5DF2\u53D1\u51FA&quot;</span>
    &gt;</span>1&lt;/quark-step
  &gt;
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-step</span>
    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;doing&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8FDB\u884C\u4E2D&quot;</span>
    <span class="hljs-attr">order</span>=<span class="hljs-string">&quot;2&quot;</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;\u60A8\u7684\u8BA2\u5355\u6B63\u5728\u914D\u9001\u4E2D&quot;</span>
    &gt;</span>2&lt;/quark-step
  &gt;
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-step</span>
    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;todo&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u672A\u5F00\u59CB&quot;</span>
    <span class="hljs-attr">order</span>=<span class="hljs-string">&quot;3&quot;</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;\u6536\u8D27\u5730\u5740\u4E3A\uFF1A\u676D\u5DDE\u5E02\u76CA\u5C55\u5546\u52A1\u5927\u53A616F&quot;</span>
    &gt;</span>3&lt;/quark-step
  &gt;
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-steps</span>&gt;</span>
</code></pre><h3>\u7AD6\u5411\u6B65\u9AA4\u6761</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-steps</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-step</span>
    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;done&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5DF2\u5B8C\u6210&quot;</span>
    <span class="hljs-attr">order</span>=<span class="hljs-string">&quot;1&quot;</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;\u60A8\u7684\u8BA2\u5355\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u5546\u54C1\u5DF2\u53D1\u51FA&quot;</span>
    &gt;</span>1&lt;/quark-step
  &gt;
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-step</span>
    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;doing&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8FDB\u884C\u4E2D&quot;</span>
    <span class="hljs-attr">order</span>=<span class="hljs-string">&quot;2&quot;</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;\u60A8\u7684\u8BA2\u5355\u6B63\u5728\u914D\u9001\u4E2D&quot;</span>
    &gt;</span>2&lt;/quark-step
  &gt;
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-step</span>
    <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;todo&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u672A\u5F00\u59CB&quot;</span>
    <span class="hljs-attr">order</span>=<span class="hljs-string">&quot;3&quot;</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;\u6536\u8D27\u5730\u5740\u4E3A\uFF1A\u676D\u5DDE\u5E02\u76CA\u5C55\u5546\u52A1\u5927\u53A6&quot;</span>
    &gt;</span>3&lt;/quark-step
  &gt;
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-steps</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><h4>quark-steps</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>direction</td><td>\u663E\u793A\u65B9\u5411\uFF0C<code class="">horizontal</code> <code class="">vertical</code></td><td><code class="">string</code></td><td><code class="">horizontal</code></td></tr></tbody></table><h4>quark-step</h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u652F\u6301 slot</th></tr></thead><tbody><tr><td>title</td><td>\u6D41\u7A0B\u6B65\u9AA4\u7684\u6807\u9898</td><td><code class="">string</code></td><td><code class="">name = title</code></td></tr><tr><td>status</td><td>\u72B6\u6001 \uFF0C\u53EF\u8BBE\u7F6E <code class="">done</code>\uFF0C<code class="">doing</code>\uFF0C <code class="">todo</code></td><td><code class="">string</code></td><td></td></tr><tr><td>content</td><td>\u6D41\u7A0B\u6B65\u9AA4\u7684\u63CF\u8FF0\u6027\u6587\u5B57(\u652F\u6301 html \u7ED3\u6784)</td><td><code class="">string </code></td><td><code class="">name = content</code></td></tr><tr><td>order</td><td>\u5E8F\u53F7</td><td><code class="">string</code></td><td><code class="">name = order</code></td></tr></tbody></table><h3>slot</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td><code class="">string</code></td><td></td></tr><tr><td>content</td><td>\u6D41\u7A0B\u6B65\u9AA4\u7684\u63CF\u8FF0\u6027\u6587\u5B57(\u652F\u6301 html \u7ED3\u6784)</td><td><code class="">string</code></td><td></td></tr><tr><td>order</td><td>\u5E8F\u53F7</td><td><code class="">string</code></td><td></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--quark-theme-color</code></td><td>\u4E3B\u9898\u8272\uFF08\u84DD\u8272\uFF09</td><td><code class="">#0088FF</code></td></tr><tr><td><code class="">--step-title-font-size</code></td><td>\u6807\u9898\u5B57\u4F53\u5927\u5C0F</td><td><code class="">14px</code></td></tr><tr><td><code class="">--step-title-color</code></td><td>\u6807\u9898\u5B57\u4F53\u989C\u8272</td><td><code class="">#909ca4</code></td></tr><tr><td><code class="">--step-content-font-size</code></td><td>\u5185\u5BB9\u5B57\u4F53\u5927\u5C0F</td><td><code class="">14px</code></td></tr><tr><td><code class="">--step-content-color</code></td><td>\u5185\u5BB9\u5B57\u4F53\u989C\u8272</td><td><code class="">#666</code></td></tr><tr><td><code class="">--steps-base-font-size</code></td><td>\u7528\u4E8E\u8BBE\u7F6E\u5706\u5F62\u5927\u5C0F (\u5706\u5BBD\u9AD8\uFF1A 2em)</td><td><code class="">13px</code></td></tr></tbody></table>`,22),c=[p],h={},j="",g=t({__name:"doc.zh-CN",setup(e,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,d)=>(n(),a("div",l,c))}});export{g as default,j as excerpt,h as frontmatter};
