(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{444:function(s,a,t){"use strict";t.r(a);var _=t(2),v=Object(_.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("Boxx"),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#简介"}},[s._v("简介")])]),t("li",[t("a",{attrs:{href:"#主键"}},[s._v("主键")])]),t("li",[t("a",{attrs:{href:"#外键"}},[s._v("外键")])]),t("li",[t("a",{attrs:{href:"#索引"}},[s._v("索引")]),t("ul",[t("li",[t("a",{attrs:{href:"#唯一索引"}},[s._v("唯一索引")])]),t("li",[t("a",{attrs:{href:"#小结"}},[s._v("小结")])])])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v("关系模型本质上就是若干个存储数据的二维表，可以把它们看作很多Excel表。")]),s._v(" "),t("p",[s._v("表的每一行称为记录（Record），记录是一个逻辑意义上的数据。")]),s._v(" "),t("p",[s._v("表的每一列称为字段（Column），同一个表的每一行记录都拥有相同的若干字段。")]),s._v(" "),t("p",[s._v("关系数据库的表和表之间需要建立“一对多”，“多对一”和“一对一”的关系，这样才能够按照应用程序的逻辑来组织和存储数据。")]),s._v(" "),t("h2",{attrs:{id:"主键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主键"}},[s._v("#")]),s._v(" 主键")]),s._v(" "),t("p",[s._v("能够通过某个字段唯一区分出不同的记录，这个字段被称为"),t("strong",[s._v("主键")]),s._v("。")]),s._v(" "),t("p",[s._v(":::\n选取主键的一个基本原则是：不使用任何业务相关的字段作为主键。")]),s._v(" "),t("p",[s._v("因此，身份证号、手机号、邮箱地址这些看上去可以唯一的字段，均不可用作主键。\n:::")]),s._v(" "),t("p",[s._v("关系数据库实际上还允许通过多个字段唯一标识记录，即两个或更多的字段都设置为主键，这种主键被称为"),t("strong",[s._v("联合主键")]),s._v("。")]),s._v(" "),t("p",[s._v("没有必要的情况下，我们尽量不使用联合主键，因为它给关系表带来了复杂度的上升。")]),s._v(" "),t("h2",{attrs:{id:"外键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#外键"}},[s._v("#")]),s._v(" 外键")]),s._v(" "),t("p",[s._v("关系数据库通过外键可以实现一对多、多对多和一对一的关系。外键既可以通过数据库来约束，也可以不设置约束，仅依靠应用程序的逻辑来保证。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ALTER TABLE students\nADD CONSTRAINT fk_class_id\nFOREIGN KEY (class_id)\nREFERENCES classes (id);\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("其中，外键约束的名称fk_class_id可以任意，FOREIGN KEY (class_id)指定了class_id作为外键，REFERENCES classes (id)指定了这个外键将关联到classes表的id列（即classes表的主键）。")]),s._v(" "),t("p",[s._v("通过定义外键约束，关系数据库可以保证无法插入无效的数据。即如果classes表不存在id=99的记录，students表就无法插入class_id=99的记录。")]),s._v(" "),t("p",[s._v("由于外键约束会降低数据库的性能，大部分互联网应用程序为了追求速度，并不设置外键约束，而是仅靠应用程序自身来保证逻辑的正确性。")]),s._v(" "),t("h2",{attrs:{id:"索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[s._v("#")]),s._v(" 索引")]),s._v(" "),t("p",[s._v("在关系数据库中，如果有上万甚至上亿条记录，在查找记录的时候，想要获得非常快的速度，就需要使用索引。")]),s._v(" "),t("p",[s._v("索引是关系数据库中对某一列或多个列的值进行预排序的数据结构。通过使用索引，可以让数据库系统不必扫描整个表，而是直接定位到符合条件的记录，这样就大大加快了查询速度。")]),s._v(" "),t("p",[s._v(":::\n索引的效率取决于索引列的值是否散列，即该列的值如果越互不相同，那么索引效率越高。\n:::")]),s._v(" "),t("h3",{attrs:{id:"唯一索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#唯一索引"}},[s._v("#")]),s._v(" 唯一索引")]),s._v(" "),t("p",[s._v("在设计关系数据表的时候，看上去唯一的列，例如身份证号、邮箱地址等，因为他们具有业务含义，因此不宜作为主键。")]),s._v(" "),t("p",[s._v("但是，这些列根据业务要求，又具有唯一性约束：即不能出现两条记录存储了同一个身份证号。这个时候，就可以给该列添加一个唯一索引。")]),s._v(" "),t("h3",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("p",[s._v("当我们在数据库中查询时，如果有相应的索引可用，数据库系统就会自动使用索引来提高查询效率，如果没有索引，查询也能正常执行，只是速度会变慢。")]),s._v(" "),t("ul",[t("li",[s._v("通过对数据库表创建索引，可以提高查询速度。")]),s._v(" "),t("li",[s._v("通过创建唯一索引，可以保证某一列的值具有唯一性。")])])],1)}),[],!1,null,null,null);a.default=v.exports}}]);