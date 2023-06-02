(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{627:function(s,a,n){"use strict";n.r(a);var e=n(35),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#快速上手"}},[s._v("快速上手")])]),n("li",[n("a",{attrs:{href:"#目录结构"}},[s._v("目录结构")])]),n("li",[n("a",{attrs:{href:"#导航栏和侧边栏配置"}},[s._v("导航栏和侧边栏配置")])]),n("li",[n("a",{attrs:{href:"#部署"}},[s._v("部署")]),n("ul",[n("li",[n("a",{attrs:{href:"#github创建仓库"}},[s._v("github创建仓库")])]),n("li",[n("a",{attrs:{href:"#关联本地项目与github仓库-vuepress-demo"}},[s._v("关联本地项目与github仓库（vuepress-demo）")])]),n("li",[n("a",{attrs:{href:"#新建部署文件"}},[s._v("新建部署文件")])]),n("li",[n("a",{attrs:{href:"#设置ignore文件-提交代码-vuepress-demo"}},[s._v("设置ignore文件，提交代码（vuepress-demo）")])]),n("li",[n("a",{attrs:{href:"#package-json新建deploy指令并执行"}},[s._v("package.json新建deploy指令并执行")])]),n("li",[n("a",{attrs:{href:"#成功啦"}},[s._v("成功啦")])])])])])]),n("p"),s._v(" "),n("h1",{attrs:{id:"vuepress-github-pages-项目搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-github-pages-项目搭建"}},[s._v("#")]),s._v(" Vuepress Github Pages 项目搭建")]),s._v(" "),n("h2",{attrs:{id:"快速上手"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[s._v("#")]),s._v(" 快速上手")]),s._v(" "),n("ol",[n("li",[s._v("创建并进入一个新目录")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("创建并进入一个新目录\nmkdir vuepress-starter && cd vuepress-starter\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("包管理器进行初始化")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("yarn init -y # npm init\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[s._v("将 VuePress 安装为本地依赖，不再推荐全局安装 VuePress")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("yarn add -D vuepress # npm install -D vuepress\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[s._v("在 package.json 中添加一些 scripts")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n  "scripts": {\n    "dev": "vuepress dev docs",\n    "build": "vuepress build docs"\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("ol",{attrs:{start:"5"}},[n("li",[s._v("在本地启动服务器")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("yarn dev\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"目录结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".\n├── docs\n│   ├── .vuepress (可选的)\n│   │   ├── components (可选的)\n│   │   ├── theme (可选的)\n│   │   │   └── Layout.vue\n│   │   ├── public (可选的)\n│   │   ├── styles (可选的)\n│   │   │   ├── index.styl\n│   │   │   └── palette.styl\n│   │   ├── templates (可选的, 谨慎配置)\n│   │   │   ├── dev.html\n│   │   │   └── ssr.html\n│   │   ├── config.js (可选的)\n│   │   └── enhanceApp.js (可选的)\n│   │ \n│   ├── README.md\n│   ├── basic\n│   │   └── README.md\n│   └── config.md\n│ \n└── package.json\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("h2",{attrs:{id:"导航栏和侧边栏配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#导航栏和侧边栏配置"}},[s._v("#")]),s._v(" 导航栏和侧边栏配置")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# vuepress-demo/docs/.vuepress/config.js\n\nmodule.exports = {\n    title: '怪正经的公民',\n    description: 'Just playing around',\n    themeConfig: {\n        logo: '/assets/img/logo.jpg',\n        sidebar: {\n            \"/basic/\": [\n                {\n                    title: '计算机基础',\n                    collapsable: false,\n                    sidebarDepth: 5,\n                    children: [\n                        {\n                            title: '计算机网络',\n                            path: '/basic/network/test1/',\n                            collapsable: false,\n                            sidebarDepth: 5,\n                            children: [\n                                {title: '网络课1', path: '/basic/network/test1/'},\n                            ]\n                        },\n                        {title: '操作系统', path: '/basic/os/'},\n                        {title: 'linux', path: '/basic/linux/'},\n                    ]\n                }\n            ]\n        },\n\n        nav: [\n            {\n                text: '首页',\n                link: '/'\n            },\n            {\n                text: '计算机基础',\n                ariaLabel: 'Language Menu',\n                items: [\n                    {text: '计算机网络', link: '/basic/network/'},\n                    {text: '操作系统', link: '/basic/os/'},\n                    {text: 'Linux', link: '/basic/linux/'},\n                ]\n            }\n        ],\n        displayAllHeaders: true,\n        activeHeaderLinks: false,\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br")])]),n("h2",{attrs:{id:"部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),n("h3",{attrs:{id:"github创建仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#github创建仓库"}},[s._v("#")]),s._v(" github创建仓库")]),s._v(" "),n("ol",[n("li",[s._v("新建仓库一：username.github.io（必须为你的github账户的username，而不是昵称啥的）")]),s._v(" "),n("li",[s._v("新建仓库二，名称随意如vuepress-demo\n二者的关系是：仓库一负责显示网站内容，我们不需要改动它；日常开发和新增内容，都在仓库二中，并通过 npm run deploy 命令，将代码发布到仓库一")])]),s._v(" "),n("h3",{attrs:{id:"关联本地项目与github仓库-vuepress-demo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关联本地项目与github仓库-vuepress-demo"}},[s._v("#")]),s._v(" 关联本地项目与github仓库（vuepress-demo）")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cd vuepress-demo\ngit init\ngit remote add origin https:xxx.git\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"新建部署文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新建部署文件"}},[s._v("#")]),s._v(" 新建部署文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 项目根目录\n# \n#!/usr/bin/env sh\n\n# 确保脚本抛出遇到的错误\nset -e\n\n# 生成静态文件\nnpm run build\n\n# 进入生成的文件夹\ncd docs/.vuepress/dist\n\n# 如果是发布到自定义域名\n# echo 'www.example.com' > CNAME\n\ngit init\ngit add -A\ngit commit -m '部署'\n\n# 如果发布到 https://<USERNAME>.github.io\n# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master\n#git push -f https://github.com/thinker365/thinker365.github.io.git master\n\n# 如果发布到 https://<USERNAME>.github.io/<REPO>\n# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages\ngit push -f git@github.com:thinker365/thinker365.github.io.git master\n\ncd -\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])]),n("h3",{attrs:{id:"设置ignore文件-提交代码-vuepress-demo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置ignore文件-提交代码-vuepress-demo"}},[s._v("#")]),s._v(" 设置ignore文件，提交代码（vuepress-demo）")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("根目录下添加.gitignore\n\ndocs/.vuepress/dist\nnode_modules\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"package-json新建deploy指令并执行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#package-json新建deploy指令并执行"}},[s._v("#")]),s._v(" package.json新建deploy指令并执行")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n  "name": "vuepress",\n  "version": "1.0.0",\n  "main": "index.js",\n  "license": "MIT",\n  "devDependencies": {\n    "vuepress": "^1.9.7"\n  },\n  "scripts": {\n    "dev": "vuepress dev docs",\n    "build": "vuepress build docs",\n    **"deploy": "bash deploy.sh"**\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("yarn deploy")]),s._v(" "),n("h3",{attrs:{id:"成功啦"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#成功啦"}},[s._v("#")]),s._v(" 成功啦")]),s._v(" "),n("p",[s._v("进到username.github.io仓库，settings-》pages，查看页面")])])}),[],!1,null,null,null);a.default=t.exports}}]);