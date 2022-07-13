(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{425:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("Boxx"),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul")]),a("p"),s._v(" "),a("h1",{attrs:{id:"来源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#来源"}},[s._v("#")]),s._v(" 来源")]),s._v(" "),a("p",[s._v("廖雪峰python网站")]),s._v(" "),a("h1",{attrs:{id:"基础概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础概念"}},[s._v("#")]),s._v(" 基础概念")]),s._v(" "),a("p",[s._v("在函数内部，可以调用其他函数。如果一个函数在内部调用自身本身，这个函数就是递归函数。")]),s._v(" "),a("p",[s._v("递归函数的优点是定义简单，逻辑清晰。理论上，所有的递归函数都可以写成循环的方式，但循环的逻辑不如递归清晰。")]),s._v(" "),a("p",[s._v("使用递归函数需要注意防止栈溢出。在计算机中，函数调用是通过栈（stack）这种数据结构实现的，每当进入一个函数调用，栈就会加一层栈帧，每当函数返回，栈就会减一层栈帧。由于栈的大小不是无限的，所以，递归调用的次数过多，会导致栈溢出。")]),s._v(" "),a("h1",{attrs:{id:"阶乘示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阶乘示例"}},[s._v("#")]),s._v(" 阶乘示例")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("def fact(n):\n\tif n == 1:\n\t\treturn 1\n\treturn n * fact(n - 1)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("解决递归调用栈溢出的方法是通过尾递归优化，事实上尾递归和循环的效果是一样的，所以，把循环看成是一种特殊的尾递归函数也是可以的")])]),s._v(" "),a("h1",{attrs:{id:"尾递归优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#尾递归优化"}},[s._v("#")]),s._v(" 尾递归优化")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("def fact(n):\n\treturn fact_iter(n,1)\n\ndef fact_iter(num,product):\n\tif num == 1:\n\t\treturn product\n\treturn fact_iter(num-1,num*product)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("fact_iter函数仅返回函数本身，num-1和num*product在函数调用前就会被计算。")]),s._v(" "),a("h1",{attrs:{id:"汉诺塔问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#汉诺塔问题"}},[s._v("#")]),s._v(" 汉诺塔问题")]),s._v(" "),a("p",[s._v("编写move(n, a, b, c)函数，它接收参数n，表示3个柱子A、B、C中第1个柱子A的盘子数量，然后打印出把所有盘子从A借助B移动到C的方法。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("def move(n,a,b,c):\n\tif n == 1:\n\t\tprint(a,'->',c)\n\telse:\n\t\tmove(n-1,a,c,b)\n\t\tmove(1,a,b,c)\n\t\tmove(n-1,b,a,c)\n\nmove(2,'A','B','C')\nprint('#')\nmove(3,'A','B','C')\nprint('#')\nmove(4,'A','B','C')\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("通过辅助b柱将最底下的那层移动到c柱，其余的按顺序摆放到b柱")])],1)}),[],!1,null,null,null);t.default=e.exports}}]);