import{d as t,c as a,a as e,o as d}from"./vue.57fd0b66.js";const l={class:"markdown-body"},o=e(`<h1>Uploader</h1><h3>Intro</h3><p>Provide upload function</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/uploader&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-uploader</span> <span class="hljs-attr">:preview</span>=<span class="hljs-string">&quot;false&quot;</span> @<span class="hljs-attr">afterread</span>=<span class="hljs-string">&quot;afterRead&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-uploader</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">afterread</span>(<span class="hljs-params">file</span>) </span>{
  <span class="hljs-built_in">console</span>.log(file.file.name);
}
</code></pre><h3>Preview File</h3><p>Preview is enabled by default</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-uploader</span> <span class="hljs-attr">preview</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;preview&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-uploader</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-built_in">this</span>.$refs.preview.
  setPreview([<span class="hljs-string">&#39;https://img.yzcdn.cn/vant/leaf.jpg&#39;</span>, <span class="hljs-string">&#39;https://img.yzcdn.cn/vant/leaf.jpg&#39;</span>);
}
</code></pre><h3>Max Count</h3><p>Hide redundant and upload button when the number of uploaded files is more than max count.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-uploader</span> <span class="hljs-attr">maxcount</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">preview</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-uploader</span>&gt;</span>
</code></pre><h3>Max Size</h3><p>Max size(B), 1M can be set to 1024 * 1024</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-uploader</span> <span class="hljs-attr">maxsize</span>=<span class="hljs-string">&quot;1024&quot;</span> @<span class="hljs-attr">oversize</span>=<span class="hljs-string">&quot;oversize&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-uploader</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-function"><span class="hljs-title">oversize</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;File size cannot exceed 1kB&#39;</span>)
}
</code></pre><h3>Custom Upload Area</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-uploader</span> <span class="hljs-attr">preview</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;uploader&quot;</span>&gt;</span>Upload files<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-uploader</span>&gt;</span>
</code></pre><h3>Before Upload</h3><p>By passing in the setBeforeUpload function, get boolean arguments. Returning false means upload is prevented. Supports returning Promise.</p><pre><code class="language-js"><span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-built_in">this</span>.$refs.before.setBeforeUpload(<span class="hljs-built_in">this</span>.beforeUpload)
},
<span class="hljs-function"><span class="hljs-title">beforeUpload</span>(<span class="hljs-params">files</span>)</span> {
  <span class="hljs-keyword">const</span> r = files.every(<span class="hljs-function"><span class="hljs-params">file</span> =&gt;</span> file.type === <span class="hljs-string">&#39;image/jpg&#39;</span>);
  <span class="hljs-keyword">if</span>(!r) {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;Please upload jpg format image&#39;</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
  };
  <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
},
</code></pre><h3>Disable Uploader</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-uploader</span> <span class="hljs-attr">preview</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-uploader</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>accept</td><td>Accepted file type</td><td><code class="">string</code></td><td><code class="">image/*</code></td></tr><tr><td>multiple</td><td>Whether to enable multiple selection pictures</td><td><code class="">boolean</code></td><td><code class="">true</code></td></tr><tr><td>preview</td><td>Whether to show preview</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>capture</td><td>Capture, can be set to boolean (call camera directly )</td><td><code class="">false</code></td><td></td></tr><tr><td>maxcount</td><td>Max count of image</td><td><code class="">string</code></td><td></td></tr><tr><td>maxsize</td><td>Max size of file</td><td><code class="">string</code></td><td><code class="">26214400 \uFF0825M\uFF09</code></td></tr><tr><td>disabled</td><td>Whether to disabled the upload</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hidedelete</td><td>Hide delete icon</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>readonly</td><td>ReadOnly</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>afterread</td><td>Emitted when upload files.</td><td><code class="">(file: file or file[]) =&gt; void</code></td><td></td></tr><tr><td>oversize</td><td>Emitted when file size over limit, use with maxsize</td><td><code class="">(items: fiel[], maxsize: string) =&gt; void</code></td><td></td></tr><tr><td>onremove</td><td>Emitted when remove files</td><td></td><td></td></tr></tbody></table><h3>slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>name=loader</td><td>Custom upload Component</td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>methods</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>beforeUpload</td><td>Before upload, can be used as uploader.beforeUpload.(fn)</td><td><code class="">(fn: () =&gt; boolean) =&gt; void</code></td></tr><tr><td>setPreview</td><td>Initialize preview data, can be used as uploader.setPreview.(data)</td><td><code class="">(url: string[]) =&gt; void</code></td></tr><tr><td>beforeDelete</td><td>Before delete uploader.beforeDelete(fn)</td><td><code class="">(file, {index: number}) =&gt; void</code></td></tr><tr><td>closePreview</td><td>close preview modal</td><td></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--uploader-width</code></td><td>Width of upload and preview components</td><td><code class="">93px</code></td></tr><tr><td><code class="">--uploader-height</code></td><td>Height of upload and preview components</td><td><code class="">93px</code></td></tr><tr><td><code class="">--uploader-border-width</code></td><td>Border width of upload component</td><td><code class="">1px</code></td></tr><tr><td><code class="">--uploader-border-color</code></td><td>Border color of upload component</td><td><code class="">#E1E6EB</code></td></tr><tr><td><code class="">--uploader-border-style</code></td><td>Style of upload component</td><td><code class="">dashed</code></td></tr><tr><td><code class="">--uploader-radius</code></td><td>Border radius of upload component</td><td><code class="">4px</code></td></tr><tr><td><code class="">--uploader-margin</code></td><td>Bottom right margin of upload component</td><td><code class="">6px</code></td></tr><tr><td><code class="">--uploader-delete-wrap-width</code></td><td>Preview delete button width</td><td><code class="">14px</code></td></tr><tr><td><code class="">--uploader-delete-wrap-height</code></td><td>Preview delete button height</td><td><code class="">14px</code></td></tr><tr><td><code class="">--uploader-delete-background</code></td><td>Delete component background color</td><td><code class="">rgb(0, 0, 0)</code></td></tr><tr><td><code class="">--uploader-delete-color</code></td><td>Delete component icon color</td><td><code class="">#fff </code></td></tr><tr><td><code class="">--uploader-delete-size</code></td><td>Delete component icon size</td><td><code class="">10px</code></td></tr></tbody></table>`,36),n=[o],i={},u="",g=t({__name:"doc.en-US",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(p,r)=>(d(),a("div",l,n))}});export{g as default,u as excerpt,i as frontmatter};
