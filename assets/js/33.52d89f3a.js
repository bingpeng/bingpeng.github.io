(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{432:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("Boxx"),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#数据卷"}},[s._v("数据卷")]),t("ul",[t("li",[t("a",{attrs:{href:"#创建数据卷"}},[s._v("创建数据卷")])]),t("li",[t("a",{attrs:{href:"#查看数据卷"}},[s._v("查看数据卷")])]),t("li",[t("a",{attrs:{href:"#挂载数据卷"}},[s._v("挂载数据卷")])]),t("li",[t("a",{attrs:{href:"#删除数据卷"}},[s._v("删除数据卷")])])])]),t("li",[t("a",{attrs:{href:"#挂载主机目录"}},[s._v("挂载主机目录")]),t("ul",[t("li",[t("a",{attrs:{href:"#目录作为数据卷"}},[s._v("目录作为数据卷")])]),t("li",[t("a",{attrs:{href:"#文件作为数据卷"}},[s._v("文件作为数据卷")])])])])])]),t("p"),s._v(" "),t("h1",{attrs:{id:"意义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#意义"}},[s._v("#")]),s._v(" 意义")]),s._v(" "),t("p",[s._v("由于容器不应该向其存储层内写入任何数据，容器存储层要保持无状态化。")]),s._v(" "),t("p",[s._v("所有的文件写入操作，都应该使用"),t("strong",[s._v("数据卷（Volume）")]),s._v("、或者"),t("strong",[s._v("绑定宿主目录")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据卷"}},[s._v("#")]),s._v(" 数据卷")]),s._v(" "),t("p",[s._v("数据卷是一个可供一个或多个容器使用的特殊目录，可以提供很多有用的特性：")]),s._v(" "),t("ul",[t("li",[s._v("数据卷 可以在容器之间共享和重用")]),s._v(" "),t("li",[s._v("对 数据卷 的修改会立马生效")]),s._v(" "),t("li",[s._v("对 数据卷 的更新，不会影响镜像")]),s._v(" "),t("li",[s._v("数据卷 默认会一直存在，即使容器被删除")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("数据卷的使用，类似于Linux 下对目录或文件进行 mount，镜像中的被指定为挂载点的目录中的文件会复制到数据卷中（仅数据卷为空时会复制）。")])]),s._v(" "),t("h3",{attrs:{id:"创建数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建数据卷"}},[s._v("#")]),s._v(" 创建数据卷")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker volume create my-vol\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"查看数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看数据卷"}},[s._v("#")]),s._v(" 查看数据卷")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker volume ls\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查看指定数据卷的信息")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker volume inspect my-vol\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"挂载数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#挂载数据卷"}},[s._v("#")]),s._v(" 挂载数据卷")]),s._v(" "),t("p",[s._v("docker run 命令的时候，使用 --mount 标记来将数据卷挂载到容器里。在一次 docker run 中可以挂载多个数据卷。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker run -d \\\n    --name web \\\n\t# -v my-vol:/usr/share/nginx/html \\\n    --mount source=my-vol,target=/usr/share/nginx/html \\\n    nginx:alpine\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"删除数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除数据卷"}},[s._v("#")]),s._v(" 删除数据卷")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker volume rm my-vol\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("数据卷是被设计用来持久化数据的，它的生命周期独立于容器，Docker 不会在容器被删除后自动删除数据卷。")])]),s._v(" "),t("p",[s._v("如果需要在删除容器的同时移除数据卷。可以在删除容器的时候使用 docker rm -v 这个命令。")]),s._v(" "),t("p",[s._v("无主的数据卷可能会占据很多空间，要清理请使用以下命令:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker volume prune\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"挂载主机目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#挂载主机目录"}},[s._v("#")]),s._v(" 挂载主机目录")]),s._v(" "),t("h3",{attrs:{id:"目录作为数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录作为数据卷"}},[s._v("#")]),s._v(" 目录作为数据卷")]),s._v(" "),t("p",[s._v("使用 --mount 标记可以指定挂载一个本地主机的目录到容器中去。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker run -d -P \\\n    --name web \\\n    # -v /src/webapp:/usr/share/nginx/html \\\n    --mount type=bind,source=/src/webapp,target=/usr/share/nginx/html \\\n    nginx:alpine\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("加载主机的 /src/webapp 目录到容器的 /usr/share/nginx/html目录。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("本地目录的路径必须是绝对路径，以前使用 -v 参数时如果本地目录不存在 Docker 会自动为你创建一个文件夹，现在使用 --mount 参数时如果本地目录不存在，Docker 会报错。")])]),s._v(" "),t("h3",{attrs:{id:"文件作为数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件作为数据卷"}},[s._v("#")]),s._v(" 文件作为数据卷")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker run --rm -it \\\n   # -v $HOME/.bash_history:/root/.bash_history \\\n   --mount type=bind,source=$HOME/.bash_history,target=/root/.bash_history \\\n   ubuntu:18.04 \\\n   bash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("这样就可以记录在容器输入过的命令了。")])],1)}),[],!1,null,null,null);a.default=r.exports}}]);