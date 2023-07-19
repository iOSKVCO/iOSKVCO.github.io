(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{569:function(e,s,t){"use strict";t.r(s);var a=t(6),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("blockquote",[t("p",[e._v("本文首次发布于 "),t("a",{attrs:{href:"http://qiubaiying.github.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("BY Blog"),t("OutboundLink")],1),e._v(", 作者 "),t("a",{attrs:{href:"http://github.com/qiubaiying",target:"_blank",rel:"noopener noreferrer"}},[e._v("@柏荧(BY)"),t("OutboundLink")],1),e._v(" ,转载请保留原文链接.")])]),e._v(" "),t("h3",{attrs:{id:"懒加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#懒加载"}},[e._v("#")]),e._v(" 懒加载")]),e._v(" "),t("p",[e._v("常规（简化）写法")]),e._v(" "),t("p",[e._v("懒加载的属性用 "),t("code",[e._v("var")]),e._v(" 声明")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('lazy var name: String = {\n\treturn "BY"\n}()\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("完整写法")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('lazy var name: String = { () -> String i\n\treturn "BY"\n}()\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("本质是一个创建一个闭包 "),t("code",[e._v("{}")]),e._v(" 并且在调用该属性时执行闭包 "),t("code",[e._v("()")]),e._v("。")]),e._v(" "),t("p",[e._v("如OC的懒加载不同的是 swift 懒加载闭包只调用一次，再次调用该属性时因为属性已经创建，不再执行闭包。")]),e._v(" "),t("h3",{attrs:{id:"计算型属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算型属性"}},[e._v("#")]),e._v(" 计算型属性")]),e._v(" "),t("p",[e._v("常规写法")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('var name: string {\n\treturn "BY"\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("完整写法")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('var name: string {\n\tget {\n\t\treturn "BY"\n\t}\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("计算型属性本质是重写了 "),t("code",[e._v("get")]),e._v(" 方法，其类似一个无参有返回值函数，每次调用该属性都会执行 "),t("code",[e._v("return")])]),e._v(" "),t("p",[e._v("通常这样使用")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('struct Cuboid {\n    var width = 0.0, height = 0.0, depth = 0.0\n    var volume: Double {\n        return width * height * depth\n    }\n}\nlet fourByFiveByTwo = Cuboid(width: 4.0, height: 5.0, depth: 2.0)\nprint("the volume of fourByFiveByTwo is \\(fourByFiveByTwo.volume)")\n// Prints "the volume of fourByFiveByTwo is 40.0"\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])]),t("h3",{attrs:{id:"两者对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两者对比"}},[e._v("#")]),e._v(" 两者对比")]),e._v(" "),t("p",[e._v("相同点")]),e._v(" "),t("ul",[t("li",[e._v("使用方法完全一致")]),e._v(" "),t("li",[e._v("都是用 "),t("code",[e._v("var")]),e._v(" 声明")])]),e._v(" "),t("p",[e._v("不同点")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("实现原理不同")]),e._v(" "),t("p",[e._v("懒加载是第一次调用属性时执行闭包进行赋值")]),e._v(" "),t("p",[e._v("计算型属性是重写 "),t("code",[e._v("get")]),e._v(" 方法")])]),e._v(" "),t("li",[t("p",[e._v("调用 "),t("code",[e._v("{}")]),e._v("的次数不同")]),e._v(" "),t("p",[e._v("懒加载的闭包只在属性第一次调用时执行\n计算型属性每次调用都要进入 "),t("code",[e._v("{}")]),e._v(" 中，"),t("code",[e._v("return")]),e._v(" 新的值")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);