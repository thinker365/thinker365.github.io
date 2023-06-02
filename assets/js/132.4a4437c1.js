(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{669:function(t,e,a){"use strict";a.r(e);var s=a(35),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#介绍"}},[t._v("介绍")])]),a("li",[a("a",{attrs:{href:"#准备工作"}},[t._v("准备工作")])]),a("li",[a("a",{attrs:{href:"#特征"}},[t._v("特征")])]),a("li",[a("a",{attrs:{href:"#mitmproxy构成-三种功能一致-差别在交互界面"}},[t._v("Mitmproxy构成（三种功能一致，差别在交互界面）")])]),a("li",[a("a",{attrs:{href:"#插件-自定义脚本-强大的地方"}},[t._v("插件（自定义脚本，强大的地方）")])]),a("li",[a("a",{attrs:{href:"#事件"}},[t._v("事件")])]),a("li",[a("a",{attrs:{href:"#官网"}},[t._v("官网")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("mitmproxy是Python编写的一款功能完善的代理工具，mitmproxy是一款支持拦截HTTP和HTTPS请求和响应并即时修改它们的交互式中间人代理工具。同时它提供了Python API给开发者编写插件用来自定义对流量进行处理和修改。\nmitm为Man-In-The-Middle attack，mitmproxy 即为 中间人攻击代理。")]),t._v(" "),a("h2",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),a("ol",[a("li",[t._v("安装")])]),t._v(" "),a("ul",[a("li",[t._v("下载二进制文件安装\n"),a("ul",[a("li",[t._v("官网下载："),a("a",{attrs:{href:"https://mitmproxy.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mitmproxy.org/"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("执行下载的exe文件安装，安装后，mitmproxy，mitmdump和mitmweb也会添加到环境变量PATH中，可以从命令行调用")]),t._v(" "),a("li",[t._v("执行mitmweb.exe，打开抓包页面")])])]),t._v(" "),a("li",[t._v("pip安装"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pip install mitmproxy\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("检验\n"),a("ul",[a("li",[t._v("windows")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mitmdump --version\nImportError: cannot import name 'soft_unicode' from 'markupsafe'\npip install markupsafe==2.0.1\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ul",[a("li",[t._v("linux、mac")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mitmproxy --version\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"特征"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特征"}},[t._v("#")]),t._v(" 特征")]),t._v(" "),a("ol",[a("li",[t._v("拦截HTTP和HTTPS请求和响应。")]),t._v(" "),a("li",[t._v("保存HTTP会话并进行分析。")]),t._v(" "),a("li",[t._v("模拟客户端发起请求，模拟服务端返回响应。")]),t._v(" "),a("li",[t._v("利用反向代理将流量转发给指定的服务器。")]),t._v(" "),a("li",[t._v("支持 Mac 和 Linux 上的透明代理。")]),t._v(" "),a("li",[t._v("利用Python对HTTP请求和响应进行实时处理")]),t._v(" "),a("li",[t._v("实时生成用于拦截的 SSL / TLS 证书\n...")])]),t._v(" "),a("h2",{attrs:{id:"mitmproxy构成-三种功能一致-差别在交互界面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mitmproxy构成-三种功能一致-差别在交互界面"}},[t._v("#")]),t._v(" Mitmproxy构成（三种功能一致，差别在交互界面）")]),t._v(" "),a("ol",[a("li",[t._v("mitmproxy\n"),a("ul",[a("li",[t._v("提供了一个交互式命令行界面，允许交互式检查和修改HTTP流量（不支持windows，支持os和linux）")]),t._v(" "),a("li",[t._v("它支持 SSL/TLS 的拦截代理，具有 HTTP/1、 HTTP/2和 WebSocket 的控制台接口。")]),t._v(" "),a("li",[t._v("它与 mitmdump 的不同之处在于，所有请求都保存在内存中，这意味着它用于获取和操作小型样本，小的数据量。")]),t._v(" "),a("li",[t._v("使用\n"),a("ul",[a("li",[t._v("浏览器设置代理（127.0.0.1，8989）")]),t._v(" "),a("li",[t._v("安装证书："),a("a",{attrs:{href:"http://mitm.it/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://mitm.it/"),a("OutboundLink")],1),t._v("，注意需要信任该证书，不是下载好了就可以")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mitmproxy -p 8989  # 启动一个代理\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("然后，即可看到访问的请求")])])])])]),t._v(" "),a("li",[t._v("mitmweb\n"),a("ul",[a("li",[t._v("提供了一个基于浏览器的GUI，它允许交互式检查和修改 HTTP 流量")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mitmweb -p 8989\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[t._v("mitmdump（重点学习）\n"),a("ul",[a("li",[t._v("提供非交互式终端输出，它提供了类似tcpdump的功能，可查看、记录和以编程方式处理HTTP流量。因此就不用手动截获和分析 http 请求和响应，只需要写好请求和响应的处理逻辑即可。而且可以做请求的流量的录制与回放。")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mitmdump -p 8899 -w file.txt\nmitmdump -nC file.txt\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"插件-自定义脚本-强大的地方"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件-自定义脚本-强大的地方"}},[t._v("#")]),t._v(" 插件（自定义脚本，强大的地方）")]),t._v(" "),a("ol",[a("li",[t._v("编写一个py文件供 mitmproxy 加载，文件中定义了若干函数，这些函数实现了某些 mitmproxy 提供的事件，mitmproxy 会在某个事件发生时调用对应的函数")]),t._v(" "),a("li",[t._v("编写一个py文件供 mitmproxy 加载，文件定义了变量 addons，addons 是个数组，每个元素是一个类实例，这些类有若干方法，这些方法实现了某些 mitmproxy 提供的事件，mitmproxy 会在某个事件发生时调用对应的方法。这些类，称为一个个的addon。（推荐模式，官方也是这样）")]),t._v(" "),a("li",[t._v("将上面示例代码存为 addons.py，再重新启动 mitmproxy，当浏览器使用代理访问时就能看到数据。")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mitmweb -s addons.py\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),a("ul",[a("li",[t._v("事件针对不同生命周期分为 5 类。“生命周期”这里指在哪一个层面看待事件，举例来说，同样是一次 web 请求，我可以理解为“HTTP 请求 -> HTTP 响应”的过程，也可以理解为“TCP 连接 -> TCP 通信 -> TCP 断开”的过程。")]),t._v(" "),a("li",[t._v("那么，如果我想拒绝来个某个 IP 的客户端请求，应当注册函数到针对TCP生命周期的tcp_start事件，又或者，我想阻断对某个特定域名的请求时，则应当注册函数到针对 HTTP 声明周期的 http_connect 事件。其他情况同理。")])]),t._v(" "),a("ol",[a("li",[t._v("HTTP生命周期")]),t._v(" "),a("li",[t._v("TCP生命周期")]),t._v(" "),a("li",[t._v("WebSocket生命周期")]),t._v(" "),a("li",[t._v("网络连接生命周期")]),t._v(" "),a("li",[t._v("通用生命周期")])]),t._v(" "),a("ul",[a("li",[t._v("实际使用场景，大多数情况下我们只会用到HTTP生命周期的几个事件。甚至只需要用到 http_connect、request、response 三个事件。")])]),t._v(" "),a("h2",{attrs:{id:"官网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官网"}},[t._v("#")]),t._v(" 官网")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://docs.mitmproxy.org/stable/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.mitmproxy.org/stable/"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("解决Client TLS handshake failed. The client does not trust the proxy's certificate for www.bing.com (OpenSSL Error([('SSL routines', 'ssl3_read_bytes', 'sslv3 alert certificate unknown')]))"),a("a",{attrs:{href:"https://githubfast.com/mitmproxy/mitmproxy/blob/8f780524939e5b9262b4b9c91c35707e11b33495/examples/contrib/tls_passthrough.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("点这里"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);