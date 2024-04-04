import{_ as n,o as s,c as a,e}from"./app-Be99M-nA.js";const t={},p=e(`<p>在 Go 语言中，决定一个方法是否应该返回一个结构体的指针（如 *pb.GreetResponse）或是直接返回结构体（如 pb.GreetResponse）通常取决于几个因素，包括性能、内存使用和函数的预期用途。让我们来看看这两种方法的应用场景：</p><h3 id="返回-pb-greetresponse-结构体实例" tabindex="-1"><a class="header-anchor" href="#返回-pb-greetresponse-结构体实例"><span>返回 pb.GreetResponse（结构体实例）:</span></a></h3><ul><li>当返回的结构体是小的或者中等大小时，直接返回结构体可能更高效，因为它减少了内存分配（避免了在堆上创建对象）和垃圾回收的开销。</li><li>如果函数的调用者通常不需要修改返回的结构体，或者你想确保返回的数据不会被外部修改（因为 Go 中结构体是按值传递的），那么返回结构体实例会更合适。 在结构体内容比较小的情况下，按值返回可以减少解引用的需要，从而提高访问速度。</li></ul><h3 id="返回-pb-greetresponse-结构体指针" tabindex="-1"><a class="header-anchor" href="#返回-pb-greetresponse-结构体指针"><span>返回 *pb.GreetResponse（结构体指针）:</span></a></h3><ul><li>当结构体较大时，返回指针更高效，因为它减少了数据复制的开销。这是因为返回指针只需要复制内存地址，而不是整个结构体。</li><li>如果函数的调用者可能需要修改返回的结构体，那么返回指针会更合适，因为结构体指针允许调用者直接修改原始结构体。</li><li>当涉及到接口实现或多态时，通常使用指针，因为结构体可能需要实现某些接口，而接口方法通常是通过指针接收者来定义的。</li><li>在使用指针时，你还可以返回 nil 来表示某些特殊情况，比如错误或“无值”情况，这在返回结构体实例时无法做到。</li></ul><p>如果 pb.GreetResponse 是一个较大的结构体或者你希望调用者能够修改返回的数据，或者你的方法需要实现某个接口，那么返回 *pb.GreetResponse 可能更合适。如果这个结构体相对较小，并且你想要保证返回的数据不会被修改，那么返回 pb.GreetResponse 可能更好。</p><p>比如grpc生成的pb.go中，因为GreetResponse使用指针接受者方法，所以返回结构体指针更合适。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 指针方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>x <span class="token operator">*</span>GreetResponse<span class="token punctuation">)</span> <span class="token function">Reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token operator">*</span>x <span class="token operator">=</span> GreetResponse<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">if</span> protoimpl<span class="token punctuation">.</span>UnsafeEnabled <span class="token punctuation">{</span>
		mi <span class="token operator">:=</span> <span class="token operator">&amp;</span>file_greeter_proto_msgTypes<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
		ms <span class="token operator">:=</span> protoimpl<span class="token punctuation">.</span>X<span class="token punctuation">.</span><span class="token function">MessageStateOf</span><span class="token punctuation">(</span>protoimpl<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
		ms<span class="token punctuation">.</span><span class="token function">StoreMessageInfo</span><span class="token punctuation">(</span>mi<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Server处实现Hello</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>g <span class="token operator">*</span>GreeterService<span class="token punctuation">)</span> <span class="token function">Hello</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> in <span class="token operator">*</span>pb<span class="token punctuation">.</span>GreetRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>pb<span class="token punctuation">.</span>GreetResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Name: %s&quot;</span><span class="token punctuation">,</span> in<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>pb<span class="token punctuation">.</span>GreetResponse<span class="token punctuation">{</span>Message<span class="token punctuation">:</span> <span class="token string">&quot;Hello: &quot;</span> <span class="token operator">+</span> in<span class="token punctuation">.</span><span class="token function">GetName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","返回结构体是否该用指针.html.vue"]]),k=JSON.parse('{"path":"/posts/go/%E8%BF%94%E5%9B%9E%E7%BB%93%E6%9E%84%E4%BD%93%E6%98%AF%E5%90%A6%E8%AF%A5%E7%94%A8%E6%8C%87%E9%92%88.html","title":"GO返回参数结构体是否该用指针","lang":"zh-CN","frontmatter":{"title":"GO返回参数结构体是否该用指针","date":"2023-12-10T18:09:21.000Z","tags":["go"],"categories":["go"]},"headers":[{"level":3,"title":"返回 pb.GreetResponse（结构体实例）:","slug":"返回-pb-greetresponse-结构体实例","link":"#返回-pb-greetresponse-结构体实例","children":[]},{"level":3,"title":"返回 *pb.GreetResponse（结构体指针）:","slug":"返回-pb-greetresponse-结构体指针","link":"#返回-pb-greetresponse-结构体指针","children":[]}],"git":{},"filePathRelative":"posts/go/返回结构体是否该用指针.md","excerpt":"<p>在 Go 语言中，决定一个方法是否应该返回一个结构体的指针（如 *pb.GreetResponse）或是直接返回结构体（如 pb.GreetResponse）通常取决于几个因素，包括性能、内存使用和函数的预期用途。让我们来看看这两种方法的应用场景：</p>\\n"}');export{r as comp,k as data};
