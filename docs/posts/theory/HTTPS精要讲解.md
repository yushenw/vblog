---
title: HTTPS精要讲解
toc: true
keywords: 'https,tls/ssl,数字签名，数字证书'
tags:
  - https
  - tls/ssl
categories:
  - web安全
abbrlink: 1a14933b
date: 2021-6-23 13:01:01
---
## 导读
> HTTPS是HTTP基于TLS/SSL安全套阶层的安全通信标准，关于它的定义、结构不在本文讨论范围之内，HTTPS的精髓在于理解它是如何工作的，在这一点上网上多数博文长篇阔论，给人一种好像看了很多，但还是在很多细节上没有彻底理解的错觉。而本文主要就是要解决这些细节问题。

## 场景需求
阮一峰 在自己的博文 [什么是数字签名](http://www.ruanyifeng.com/blog/2011/08/what_is_a_digital_signature.html) 非常形象的引用了一个场景，在看本篇文章之前，建议先阅读此篇博文。

<!-- more -->


## HTTPS通信过程
HTTPS使用了`对称加密`、`非对称加密`、`哈希算法`三种算法用于保证通信数据的安全，下面简要说明为什么这样
- **对称加密**
因为 对称加密 相对于 非对称加密 加密速度更快，为了保证效率使用了对称加密。
- **非对称加密**
非对称加密较之对称加密更安全，所以HTTPS使用非对称加密来进行部分初始化加密。
- **哈希算法**
哈希主要用来做数字签名，签名能保证数据不被篡改。  
   
   
由此可见，HTTPS结合了以上几种优点，在安全的同时保证了效率。

### 交流过程

1. **客户端向服务器发起请求**: 当在浏览器中输入一个HTTPS网址（例如https://www.example.com）时，您的浏览器（客户端）会向服务器发送一个请求，请求建立一个安全连接。
2. **服务器响应并发送证书**: 服务器收到客户端请求后，会将自己由`CA`颁发的数字证书返回给客户端。这个证书包含了服务器的公钥以及证书颁发机构（CA）的签名。
3. **证书验证**: 客户端收到证书后，会验证证书的合法性。浏览器会根据自己或系统自带的受信任的`CA`机构验证数字证书是否受信任，然后会使用CA对应公钥解密证书（也称根证书），拿到服务器公钥，同时加密明文生成数字摘要，对比数字签名以确定拿到的数据未被篡改。（此步骤客户端通过CA的参与安全的拿到了服务器的公钥

> 证书验证过程详见 >> [https(ssl)证书验证过程](/2024/02/21/https(ssl)证书验证过程/)

4. **客户端响应**: 一旦证书验证通过，客户端会生成一个随机的对称加密密钥。这个密钥将用于此次会话的加密通信。然后**客户端会用服务器的公钥加密这个对称密钥**，并发送给服务器。

5. **服务器解密**: 服务器拿到加密后的会话密钥，用自己的私钥解密后获取到会话密钥。
6. **加密通信**: 一旦双方都有了对称加密密钥，它们就可以开始安全的加密通信了。所有传输的数据都将使用这个对称密钥进行加密和解密。
7. **会话结束**: 一旦会话结束，双方将废弃用于此次通信的对称密钥。

## 如何生成服务器证书？
可参照我的另一片文章 [使用OpenSSL自签名证书](/2021/03/17/web安全/使用OpensSSL自签名证书/)

## 总结
`数字签名`其实就是为了保证双方通信而使用了哈希算法，以确保收到的内容不被篡改。
但是中途可能有人伪造了你以为对的加密公钥，会造成和 `"假的对方"` 通信。
为了解决这个问题就引入了一个`权威的中间人（CA）`做证明，证明后的可信公钥就叫`数字证书`。

