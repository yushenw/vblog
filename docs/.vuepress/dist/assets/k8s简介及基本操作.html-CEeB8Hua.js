import{_ as l,r as s,o as r,c as i,a as e,b as n,d as a,e as t}from"./app-Be99M-nA.js";const u={},c=t('<p>Kubernetes（通常简称为 K8s）是一个开源的容器编排系统，用于自动化部署、扩展和管理容器化应用程序。它最初由 Google 设计并捐赠给了 Cloud Native Computing Foundation。下面我会简要介绍 Kubernetes 的主要组件，并提供在 macOS 系统上使用 Kubernetes 的基本指导。</p><h3 id="kubernetes-的主要组件" tabindex="-1"><a class="header-anchor" href="#kubernetes-的主要组件"><span>Kubernetes 的主要组件</span></a></h3><ol><li><strong>控制平面（Control Plane）</strong>: <ul><li><strong>API 服务器（API Server）</strong>: Kubernetes API 的核心，是控制平面与其他组件交互的接口。</li><li><strong>调度器（Scheduler）</strong>: 负责调度 Pod 到合适的节点上。</li><li><strong>控制器管理器（Controller Manager）</strong>: 管理控制器，负责节点、Pod、服务等的状态。</li><li><strong>etcd</strong>: 一种轻量级的分布式键值存储，用于存储集群的配置和状态。</li></ul></li></ol><ol start="2"><li><p><strong>节点（Nodes）</strong>:</p><ul><li><strong>Kubelet</strong>: 运行在每个节点上，与 API 服务器通信，管理 Pod 和容器。</li><li><strong>容器运行时（Container Runtime）</strong>: 负责运行容器，例如 Docker、containerd。</li><li><strong>kube-proxy</strong>: 网络代理，实现 Kubernetes 服务的网络规则。</li></ul></li><li><p><strong>其他组件</strong>:</p><ul><li><strong>Pod</strong>: Kubernetes 的最小部署单位，通常包含一个或多个容器。</li><li><strong>服务（Service）</strong>: 定义一组 Pod 的访问规则和策略。</li><li><strong>部署（Deployment）</strong>: 管理 Pod 的创建、更新和扩展。</li></ul></li></ol><h3 id="在-macos-上使用-kubernetes" tabindex="-1"><a class="header-anchor" href="#在-macos-上使用-kubernetes"><span>在 macOS 上使用 Kubernetes</span></a></h3><p>在 macOS 上，您可以使用 Minikube 或 Docker Desktop 来运行 Kubernetes 集群。</p><h4 id="使用-minikube" tabindex="-1"><a class="header-anchor" href="#使用-minikube"><span>使用 Minikube</span></a></h4>',7),d=e("p",null,[e("strong",null,"安装 Minikube"),n(":")],-1),g={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,[n("通过 Homebrew 安装 Minikube："),e("code",null,"brew install minikube")],-1),k=t("<li><p><strong>启动 Minikube</strong>:</p><ul><li>运行 <code>minikube start</code> 启动一个本地的 Kubernetes 集群。</li></ul></li><li><p><strong>使用 kubectl</strong>:</p><ul><li><code>kubectl</code> 是 Kubernetes 的命令行工具，用于与集群交互。</li><li>安装 <code>kubectl</code>：<code>brew install kubectl</code></li><li>通过 <code>kubectl</code> 运行命令与集群交互，如 <code>kubectl get nodes</code> 查看节点状态。</li></ul></li>",2),p=e("h4",{id:"使用-docker-desktop",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用-docker-desktop"},[e("span",null,"使用 Docker Desktop")])],-1),h=e("p",null,"如果您已经安装了 Docker Desktop for Mac，可以直接在其设置中启用 Kubernetes。",-1),_=e("ol",null,[e("li",null,"打开 Docker Desktop 设置。"),e("li",null,'在 "Kubernetes" 选项卡中，勾选 "Enable Kubernetes"。'),e("li",null,'点击 "Apply & Restart" 应用更改。')],-1);function m(K,P){const o=s("ExternalLinkIcon");return r(),i("div",null,[c,e("ol",null,[e("li",null,[d,e("ul",null,[e("li",null,[n("安装 "),e("a",g,[n("Homebrew"),a(o)]),n("，一个 macOS 的包管理器。")]),b])]),k]),p,h,_])}const C=l(u,[["render",m],["__file","k8s简介及基本操作.html.vue"]]),S=JSON.parse('{"path":"/posts/go/k8s%E7%AE%80%E4%BB%8B%E5%8F%8A%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C.html","title":"go/k8s简介及基本操作.md","lang":"zh-CN","frontmatter":{"title":"go/k8s简介及基本操作.md","date":"2024-01-30T22:44:07.000Z","tags":["go","k8s"],"categories":["go","k8s"]},"headers":[{"level":3,"title":"Kubernetes 的主要组件","slug":"kubernetes-的主要组件","link":"#kubernetes-的主要组件","children":[]},{"level":3,"title":"在 macOS 上使用 Kubernetes","slug":"在-macos-上使用-kubernetes","link":"#在-macos-上使用-kubernetes","children":[]}],"git":{},"filePathRelative":"posts/go/k8s简介及基本操作.md","excerpt":"<p>Kubernetes（通常简称为 K8s）是一个开源的容器编排系统，用于自动化部署、扩展和管理容器化应用程序。它最初由 Google 设计并捐赠给了 Cloud Native Computing Foundation。下面我会简要介绍 Kubernetes 的主要组件，并提供在 macOS 系统上使用 Kubernetes 的基本指导。</p>\\n<h3>Kubernetes 的主要组件</h3>\\n<ol>\\n<li><strong>控制平面（Control Plane）</strong>:\\n<ul>\\n<li><strong>API 服务器（API Server）</strong>: Kubernetes API 的核心，是控制平面与其他组件交互的接口。</li>\\n<li><strong>调度器（Scheduler）</strong>: 负责调度 Pod 到合适的节点上。</li>\\n<li><strong>控制器管理器（Controller Manager）</strong>: 管理控制器，负责节点、Pod、服务等的状态。</li>\\n<li><strong>etcd</strong>: 一种轻量级的分布式键值存储，用于存储集群的配置和状态。</li>\\n</ul>\\n</li>\\n</ol>\\n"}');export{C as comp,S as data};
