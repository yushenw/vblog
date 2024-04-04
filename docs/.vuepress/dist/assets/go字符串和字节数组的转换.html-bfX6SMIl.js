import{_ as n,o as s,c as a,e as t}from"./app-Be99M-nA.js";const e={},p=t(`<h2 id="字符串和字节切片" tabindex="-1"><a class="header-anchor" href="#字符串和字节切片"><span>字符串和字节切片</span></a></h2><p>Go 中的字符串是不可变的，这意味着一旦一个字符串被创建，它包含的字节序列就不能被改变。在底层，一个字符串通常由两部分组成：一个指向底层数组的指针和一个表示字符串长度的整数。 字节切片底层也是字节序列，但它们是完全不同的两种类型，内部表示也不同。所以将字节切片（[]byte）转换为字符串（string）时，通常会发生内存的重新分配。</p><h2 id="字符串和字节切片之间的转换" tabindex="-1"><a class="header-anchor" href="#字符串和字节切片之间的转换"><span>字符串和字节切片之间的转换</span></a></h2><p>虽然字符串和字节切片在底层都是字节序列，但由于字符串的不可变性，它们之间的转换需要复制底层的数据：</p><ul><li>将字符串转换为字节切片（[]byte(str)） 会创建一个新的字节切片，并将字符串的内容复制到这个新切片中。</li><li>将字节切片转换为字符串（string(bytes)） 也会创建一个新的字符串，并将字节切片的内容复制到这个新字符串中。</li></ul><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>byteSlice <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">{</span><span class="token number">104</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token number">108</span><span class="token punctuation">,</span> <span class="token number">108</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">}</span> <span class="token comment">// byte slice containing &quot;hello&quot;</span>
str <span class="token operator">:=</span> <span class="token function">string</span><span class="token punctuation">(</span>byteSlice<span class="token punctuation">)</span>                     <span class="token comment">// 创建一个新的字符串 &quot;hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>string(byteSlice) 转换会导致内存的重新分配，因为 Go 需要创建一个新的字符串对象来保持字符串的不可变性。在性能敏感的应用中，这种转换的成本是需要考虑的</p><h2 id="一点转换的小技巧" tabindex="-1"><a class="header-anchor" href="#一点转换的小技巧"><span>一点转换的小技巧</span></a></h2><p><code>strings.Builder</code>在字符串拼接中有很高的效率，不仅仅是它预分配了内存，而且在从字节序列转换成字符串的时候使用了一点技巧：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>Builder<span class="token punctuation">)</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>b<span class="token punctuation">.</span>buf<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码获取了buf的地址成<code>unsafe.Pointer</code>类型，这是一个通用的指针类型，允许任意类型的指针转换和比较。 然后将<code>unsafe.Pointer</code>类型转换为<code>string</code>类型指针，最后解引用这个指针及得到字符串对象的值。</p><h3 id="转换风险" tabindex="-1"><a class="header-anchor" href="#转换风险"><span>转换风险</span></a></h3><p>这种转换是非常高效的，因为它避免了从 strings.Builder 的内部缓冲区到字符串的内存拷贝。但是，它使用了 unsafe 包，这意味着标准的类型安全保证不再适用。这种做法在内部实现中是可行的，因为 Go 的运行时和标准库的开发者清楚地了解底层的内存布局和行为。</p><p>但在您自己的代码中使用 unsafe 包应当非常小心，因为不正确的使用可能导致内存安全问题，比如越界访问、数据竞争或其他类型的未定义行为。</p>`,14),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","go字符串和字节数组的转换.html.vue"]]),d=JSON.parse('{"path":"/posts/go/go%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%92%8C%E5%AD%97%E8%8A%82%E6%95%B0%E7%BB%84%E7%9A%84%E8%BD%AC%E6%8D%A2.html","title":"go字符串和字节数组的转换","lang":"zh-CN","frontmatter":{"layout":"posts","title":"go字符串和字节数组的转换","date":"2024-01-23T16:41:49.000Z","categories":["go"],"tags":["go","内存管理"]},"headers":[{"level":2,"title":"字符串和字节切片","slug":"字符串和字节切片","link":"#字符串和字节切片","children":[]},{"level":2,"title":"字符串和字节切片之间的转换","slug":"字符串和字节切片之间的转换","link":"#字符串和字节切片之间的转换","children":[]},{"level":2,"title":"一点转换的小技巧","slug":"一点转换的小技巧","link":"#一点转换的小技巧","children":[{"level":3,"title":"转换风险","slug":"转换风险","link":"#转换风险","children":[]}]}],"git":{},"filePathRelative":"posts/go/go字符串和字节数组的转换.md","excerpt":"<h2>字符串和字节切片</h2>\\n<p>Go 中的字符串是不可变的，这意味着一旦一个字符串被创建，它包含的字节序列就不能被改变。在底层，一个字符串通常由两部分组成：一个指向底层数组的指针和一个表示字符串长度的整数。\\n字节切片底层也是字节序列，但它们是完全不同的两种类型，内部表示也不同。所以将字节切片（[]byte）转换为字符串（string）时，通常会发生内存的重新分配。</p>\\n<h2>字符串和字节切片之间的转换</h2>\\n<p>虽然字符串和字节切片在底层都是字节序列，但由于字符串的不可变性，它们之间的转换需要复制底层的数据：</p>\\n<ul>\\n<li>将字符串转换为字节切片（[]byte(str)）\\n会创建一个新的字节切片，并将字符串的内容复制到这个新切片中。</li>\\n<li>将字节切片转换为字符串（string(bytes)）\\n也会创建一个新的字符串，并将字节切片的内容复制到这个新字符串中。</li>\\n</ul>\\n<div class=\\"language-go\\" data-ext=\\"go\\" data-title=\\"go\\"><pre class=\\"language-go\\"><code>byteSlice <span class=\\"token operator\\">:=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">byte</span><span class=\\"token punctuation\\">{</span><span class=\\"token number\\">104</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">101</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">108</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">108</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">111</span><span class=\\"token punctuation\\">}</span> <span class=\\"token comment\\">// byte slice containing \\"hello\\"</span>\\nstr <span class=\\"token operator\\">:=</span> <span class=\\"token function\\">string</span><span class=\\"token punctuation\\">(</span>byteSlice<span class=\\"token punctuation\\">)</span>                     <span class=\\"token comment\\">// 创建一个新的字符串 \\"hello\\"</span>\\n</code></pre></div>"}');export{r as comp,d as data};
