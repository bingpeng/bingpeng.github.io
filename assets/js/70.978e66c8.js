(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{467:function(t,e,r){"use strict";r.r(e);var s=r(2),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("Boxx"),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#基础环境"}},[t._v("基础环境")])]),r("li",[r("a",{attrs:{href:"#软件安装"}},[t._v("软件安装")]),r("ul",[r("li",[r("a",{attrs:{href:"#httpd-配置"}},[t._v("httpd 配置")])])])])])]),r("p"),t._v(" "),r("h1",{attrs:{id:"介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),r("p",[t._v("primer3是一款引物设计软件，通过"),r("code",[t._v("primer3web")]),t._v("可以安装一个web页面。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("primer3web仓库地址")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/primer3-org/primer3web",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/primer3-org/primer3web"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"基础环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基础环境"}},[t._v("#")]),t._v(" 基础环境")]),t._v(" "),r("p",[t._v("系统：Linux，centOS 7.5")]),t._v(" "),r("h2",{attrs:{id:"软件安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#软件安装"}},[t._v("#")]),t._v(" 软件安装")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("首先需要得到primer3_core，在"),r("a",{attrs:{href:"http://sourceforge.net/projects/primer3",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://sourceforge.net/projects/primer3"),r("OutboundLink")],1),t._v("下载源代码，编译后得到primer3_core；")])]),t._v(" "),r("li",[r("p",[t._v("使用httpd作为web服务，安装命令为"),r("code",[t._v("yum install httpd")]),t._v("；")])]),t._v(" "),r("li",[r("p",[t._v("将primer3web仓库克隆下来，拷贝primer3_core到cgi-bin；")])]),t._v(" "),r("li",[r("p",[t._v("将cgi-bin中内容放入/var/www/cgi-bin，html内容放入/var/www/html；")])]),t._v(" "),r("li",[r("p",[t._v("安装对应CGI模块，命令如下：")]),t._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[t._v("cpan -i CGI\ncpan -i CGI:Session\nyum "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" perl-CGI-Session\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果是Debian系统，上述改为 apt-get install libcgi-session-perl")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br")])])])]),t._v(" "),r("h3",{attrs:{id:"httpd-配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#httpd-配置"}},[t._v("#")]),t._v(" httpd 配置")]),t._v(" "),r("p",[t._v("修改httpd.conf中cgi部分，删除对应#号取消注释；")]),t._v(" "),r("p",[t._v("默认端口号为80，可以修改为其他端口")]),t._v(" "),r("p",[r("code",[t._v("service httpd restart")]),t._v("重启服务后生效")])],1)}),[],!1,null,null,null);e.default=a.exports}}]);