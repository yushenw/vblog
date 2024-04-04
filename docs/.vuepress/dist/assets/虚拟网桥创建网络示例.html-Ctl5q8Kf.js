import{_ as n,o as s,c as e,e as a}from"./app-Be99M-nA.js";const i={},t=a(`<p>在OpenWrt系统上创建一个名为<code>br3</code>的新桥接接口并在其上启动一个访客网络涉及几个步骤，包括配置网络接口、设置无线接入点和定义防火墙规则以隔离访客网络。以下是一个基本的步骤指南：</p><h3 id="_1-创建桥接接口" tabindex="-1"><a class="header-anchor" href="#_1-创建桥接接口"><span>1. 创建桥接接口</span></a></h3><p>首先，确保<code>br3</code>接口尚未创建。如果需要创建，你可以参考之前关于如何添加桥接接口的说明。对于OpenWrt，通常你会直接在Web界面（LuCI）中操作或编辑<code>/etc/config/network</code>文件。</p><h3 id="_2-配置网络接口" tabindex="-1"><a class="header-anchor" href="#_2-配置网络接口"><span>2. 配置网络接口</span></a></h3><p>编辑<code>/etc/config/network</code>文件，添加一个新的接口配置段落。例如，为<code>br3</code>创建一个新的接口并配置其为静态IP或DHCP客户端（根据你的网络需求）。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>config interface <span class="token string">&#39;guest&#39;</span>
    option <span class="token builtin class-name">type</span> <span class="token string">&#39;bridge&#39;</span>
    option ifname <span class="token string">&#39;br3&#39;</span>
    option proto <span class="token string">&#39;static&#39;</span>
    option ipaddr <span class="token string">&#39;192.168.3.1&#39;</span>
    option netmask <span class="token string">&#39;255.255.255.0&#39;</span>
    option delegate <span class="token string">&#39;0&#39;</span> <span class="token comment"># 禁用IPv6分配，如果需要的话</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-配置无线网络" tabindex="-1"><a class="header-anchor" href="#_3-配置无线网络"><span>3. 配置无线网络</span></a></h3><p>接下来，在<code>/etc/config/wireless</code>文件中添加一个新的无线网络配置段落，将其绑定到刚刚创建的接口。你可能需要根据实际的无线硬件配置适当调整此部分。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>config wifi-iface <span class="token string">&#39;guest_wifi&#39;</span>
    option device <span class="token string">&#39;radio0&#39;</span> <span class="token comment"># 或你的无线设备标识符</span>
    option network <span class="token string">&#39;guest&#39;</span>
    option mode <span class="token string">&#39;ap&#39;</span>
    option ssid <span class="token string">&#39;GuestNetwork&#39;</span>
    option encryption <span class="token string">&#39;psk2&#39;</span>
    option key <span class="token string">&#39;APasswordForGuests&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-更新防火墙规则" tabindex="-1"><a class="header-anchor" href="#_4-更新防火墙规则"><span>4. 更新防火墙规则</span></a></h3><p>为了隔离访客网络，你需要在<code>/etc/config/firewall</code>文件中添加相应的规则。这将确保访客网络的用户只能访问互联网，而不能访问你的主网络。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>config zone
    option name <span class="token string">&#39;guest&#39;</span>
    option network <span class="token string">&#39;guest&#39;</span>
    option input <span class="token string">&#39;REJECT&#39;</span>
    option output <span class="token string">&#39;ACCEPT&#39;</span>
    option forward <span class="token string">&#39;REJECT&#39;</span>

config forwarding
    option src <span class="token string">&#39;guest&#39;</span>
    option dest <span class="token string">&#39;wan&#39;</span>

<span class="token comment"># 阻止访客网络访问私有IP地址（可选）</span>
config rule
    option name <span class="token string">&#39;Guest LAN Isolation&#39;</span>
    option src <span class="token string">&#39;guest&#39;</span>
    option dest <span class="token string">&#39;lan&#39;</span>
    option proto <span class="token string">&#39;all&#39;</span>
    option target <span class="token string">&#39;DROP&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-应用更改" tabindex="-1"><a class="header-anchor" href="#_5-应用更改"><span>5. 应用更改</span></a></h3><p>修改配置文件后，需要重启网络和防火墙服务，使更改生效。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/etc/init.d/network restart
/etc/init.d/firewall restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者，你也可以通过重启OpenWrt设备来应用更改。</p><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h3><ul><li>请确保在操作之前备份所有相关的配置文件。</li><li>根据你的OpenWrt版本和具体硬件，上述步骤中的一些选项可能需要调整。</li><li>如果你不熟悉命令行操作，OpenWrt的Web界面（LuCI）提供了图形化的配置选项，可以通过它来完成大部分上述操作。</li></ul><p>这个基本指南应该能帮助你在OpenWrt系统上为访客创建一个隔离的网络环境。根据你的具体需求，你可能还需要进一步调整和优化网络配置。</p>`,19),l=[t];function d(o,c){return s(),e("div",null,l)}const p=n(i,[["render",d],["__file","虚拟网桥创建网络示例.html.vue"]]),v=JSON.parse('{"path":"/posts/net/%E8%99%9A%E6%8B%9F%E7%BD%91%E6%A1%A5%E5%88%9B%E5%BB%BA%E7%BD%91%E7%BB%9C%E7%A4%BA%E4%BE%8B.html","title":"虚拟网桥创建网络示例","lang":"zh-CN","frontmatter":{"title":"虚拟网桥创建网络示例","date":"2024-02-27T23:06:03.000Z","tags":["net"],"categories":"net","author":"haha"},"headers":[{"level":3,"title":"1. 创建桥接接口","slug":"_1-创建桥接接口","link":"#_1-创建桥接接口","children":[]},{"level":3,"title":"2. 配置网络接口","slug":"_2-配置网络接口","link":"#_2-配置网络接口","children":[]},{"level":3,"title":"3. 配置无线网络","slug":"_3-配置无线网络","link":"#_3-配置无线网络","children":[]},{"level":3,"title":"4. 更新防火墙规则","slug":"_4-更新防火墙规则","link":"#_4-更新防火墙规则","children":[]},{"level":3,"title":"5. 应用更改","slug":"_5-应用更改","link":"#_5-应用更改","children":[]},{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]}],"git":{},"filePathRelative":"posts/net/虚拟网桥创建网络示例.md","excerpt":"<p>在OpenWrt系统上创建一个名为<code>br3</code>的新桥接接口并在其上启动一个访客网络涉及几个步骤，包括配置网络接口、设置无线接入点和定义防火墙规则以隔离访客网络。以下是一个基本的步骤指南：</p>\\n<h3>1. 创建桥接接口</h3>\\n<p>首先，确保<code>br3</code>接口尚未创建。如果需要创建，你可以参考之前关于如何添加桥接接口的说明。对于OpenWrt，通常你会直接在Web界面（LuCI）中操作或编辑<code>/etc/config/network</code>文件。</p>\\n<h3>2. 配置网络接口</h3>\\n<p>编辑<code>/etc/config/network</code>文件，添加一个新的接口配置段落。例如，为<code>br3</code>创建一个新的接口并配置其为静态IP或DHCP客户端（根据你的网络需求）。</p>"}');export{p as comp,v as data};
