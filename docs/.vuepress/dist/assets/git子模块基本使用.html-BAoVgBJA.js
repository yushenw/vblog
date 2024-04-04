import{_ as e,o as s,c as n,e as a}from"./app-Be99M-nA.js";const t={},c=a(`<p>通过使用Git的子模块（submodule）功能来管理这种结构。子模块允许在一个Git仓库中包含并管理指向其他Git仓库的引用。<code>base</code>仓库可以包含两个子模块：<code>project1</code>和<code>project2</code>。</p><p>以下是具体步骤：</p><h3 id="_1-创建并推送project1和project2到github" tabindex="-1"><a class="header-anchor" href="#_1-创建并推送project1和project2到github"><span>1. 创建并推送<code>project1</code>和<code>project2</code>到GitHub</span></a></h3><p>首先确保<code>project1</code>和<code>project2</code>各自已经是独立的Git仓库，并且已经推送到GitHub上。比如，您可能已经有了两个仓库的URL：</p><ul><li><code>https://github.com/yourusername/project1.git</code></li><li><code>https://github.com/yourusername/project2.git</code></li></ul><h3 id="_2-在base仓库中添加子模块" tabindex="-1"><a class="header-anchor" href="#_2-在base仓库中添加子模块"><span>2. 在<code>base</code>仓库中添加子模块</span></a></h3><p>在您的本地<code>base</code>仓库中，您可以使用以下命令添加子模块：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 切换到base仓库的目录</span>
<span class="token builtin class-name">cd</span> path/to/base

<span class="token comment"># 为project1添加子模块</span>
<span class="token function">git</span> submodule <span class="token function">add</span> https://github.com/yourusername/project1.git project1

<span class="token comment"># 为project2添加子模块</span>
<span class="token function">git</span> submodule <span class="token function">add</span> https://github.com/yourusername/project2.git project2

<span class="token comment"># 提交更改</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;Added project1 and project2 as submodules.&quot;</span>

<span class="token comment"># 推送到GitHub</span>
<span class="token function">git</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-克隆base仓库及其子模块" tabindex="-1"><a class="header-anchor" href="#_3-克隆base仓库及其子模块"><span>3. 克隆<code>base</code>仓库及其子模块</span></a></h3><p>当其他人或您在另一台机器上需要克隆<code>base</code>仓库及其包含的所有子模块时，可以使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 克隆base仓库</span>
<span class="token function">git</span> clone --recurse-submodules https://github.com/yourusername/base.git

<span class="token comment"># 如果已经克隆了base仓库但忘记了--recurse-submodules</span>
<span class="token builtin class-name">cd</span> base
<span class="token function">git</span> submodule update <span class="token parameter variable">--init</span> <span class="token parameter variable">--recursive</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3><ul><li>子模块是指向特定提交的引用，这意味着如果您在<code>project1</code>或<code>project2</code>中做了更改并推送到了GitHub，您还需要在<code>base</code>仓库中更新子模块引用到最新的提交，然后再次提交和推送这些更改。</li><li>使用子模块时，需要记住运行<code>git submodule update --init --recursive</code>来确保子模块是最新的，尤其是在克隆或者拉取了包含子模块的仓库更新后。</li></ul><p>通过这种方式，您可以在GitHub的<code>base</code>项目中独立管理<code>project1</code>和<code>project2</code>，它们可以位于不同的位置，且不会相互影响。</p>`,14),o=[c];function i(d,l){return s(),n("div",null,o)}const r=e(t,[["render",i],["__file","git子模块基本使用.html.vue"]]),u=JSON.parse('{"path":"/posts/git/git%E5%AD%90%E6%A8%A1%E5%9D%97%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html","title":"git子模块基本使用","lang":"zh-CN","frontmatter":{"title":"git子模块基本使用","date":"2024-02-23T17:28:47.000Z","tags":["git"]},"headers":[{"level":3,"title":"1. 创建并推送project1和project2到GitHub","slug":"_1-创建并推送project1和project2到github","link":"#_1-创建并推送project1和project2到github","children":[]},{"level":3,"title":"2. 在base仓库中添加子模块","slug":"_2-在base仓库中添加子模块","link":"#_2-在base仓库中添加子模块","children":[]},{"level":3,"title":"3. 克隆base仓库及其子模块","slug":"_3-克隆base仓库及其子模块","link":"#_3-克隆base仓库及其子模块","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}],"git":{},"filePathRelative":"posts/git/git子模块基本使用.md","excerpt":"<p>通过使用Git的子模块（submodule）功能来管理这种结构。子模块允许在一个Git仓库中包含并管理指向其他Git仓库的引用。<code>base</code>仓库可以包含两个子模块：<code>project1</code>和<code>project2</code>。</p>\\n<p>以下是具体步骤：</p>\\n<h3>1. 创建并推送<code>project1</code>和<code>project2</code>到GitHub</h3>\\n<p>首先确保<code>project1</code>和<code>project2</code>各自已经是独立的Git仓库，并且已经推送到GitHub上。比如，您可能已经有了两个仓库的URL：</p>\\n<ul>\\n<li><code>https://github.com/yourusername/project1.git</code></li>\\n<li><code>https://github.com/yourusername/project2.git</code></li>\\n</ul>\\n<h3>2. 在<code>base</code>仓库中添加子模块</h3>\\n<p>在您的本地<code>base</code>仓库中，您可以使用以下命令添加子模块：</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># 切换到base仓库的目录</span>\\n<span class=\\"token builtin class-name\\">cd</span> path/to/base\\n\\n<span class=\\"token comment\\"># 为project1添加子模块</span>\\n<span class=\\"token function\\">git</span> submodule <span class=\\"token function\\">add</span> https://github.com/yourusername/project1.git project1\\n\\n<span class=\\"token comment\\"># 为project2添加子模块</span>\\n<span class=\\"token function\\">git</span> submodule <span class=\\"token function\\">add</span> https://github.com/yourusername/project2.git project2\\n\\n<span class=\\"token comment\\"># 提交更改</span>\\n<span class=\\"token function\\">git</span> commit <span class=\\"token parameter variable\\">-m</span> <span class=\\"token string\\">\\"Added project1 and project2 as submodules.\\"</span>\\n\\n<span class=\\"token comment\\"># 推送到GitHub</span>\\n<span class=\\"token function\\">git</span> push\\n</code></pre></div>"}');export{r as comp,u as data};
