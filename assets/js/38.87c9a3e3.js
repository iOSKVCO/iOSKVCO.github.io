(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{568:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("本文首次发布于 "),a("a",{attrs:{href:"http://qiubaiying.github.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("BY Blog"),a("OutboundLink")],1),s._v(", 作者 "),a("a",{attrs:{href:"http://github.com/qiubaiying",target:"_blank",rel:"noopener noreferrer"}},[s._v("@柏荧(BY)"),a("OutboundLink")],1),s._v(" ,转载请保留原文链接.")])]),s._v(" "),a("h1",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("通过 IB 设置 控件 的属性非常的方便。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://ww3.sinaimg.cn/large/006tNc79gy1ff9fpog0vrj30ho084t9m.jpg",alt:""}})]),s._v(" "),a("p",[s._v("但是缺点也很明显，那就是有一些属性没有暴露在 IB 的设置面板中。这时候就要使用 "),a("code",[s._v("@IBInspectable")]),s._v(" 在 IB 面板中添加这些没有的属性。")]),s._v(" "),a("p",[s._v("关于在 OC 中使用 "),a("code",[s._v("IBInspectable")]),s._v(" 可以看一下我的 "),a("a",{attrs:{href:"http://qiubaiying.top/2016/12/01/%E5%BF%AB%E9%80%9F%E6%B7%BB%E5%8A%A0%E5%9C%86%E8%A7%92%E5%92%8C%E6%8F%8F%E8%BE%B9/#%E9%AB%98%E7%BA%A7",target:"_blank",rel:"noopener noreferrer"}},[s._v("这篇文章"),a("OutboundLink")],1)]),s._v(" "),a("h1",{attrs:{id:"正文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正文"}},[s._v("#")]),s._v(" 正文")]),s._v(" "),a("p",[s._v("在项目中最常遇到的情况是为 view 设置圆角、描边，以及为 文本控件 添加本地化字符串。")]),s._v(" "),a("h2",{attrs:{id:"圆角、描边"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#圆角、描边"}},[s._v("#")]),s._v(" 圆角、描边")]),s._v(" "),a("p",[s._v("先来看看设置圆角、描边")]),s._v(" "),a("div",{staticClass:"language-swift line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extension")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("UIView")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@IBInspectable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" cornerRadius"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("CGFloat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" layer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cornerRadius\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            layer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cornerRadius "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" newValue\n            layer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("masksToBounds "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" newValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@IBInspectable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" borderWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("CGFloat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" layer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("borderWidth\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            layer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("borderWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" newValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" newValue "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@IBInspectable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" borderColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("UIColor")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("UIColor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cgColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" layer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("borderColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            layer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("borderColor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" newValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cgColor\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("p",[s._v("添加完成就可以在 IB 中设置 view 的这些属性了")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://ww4.sinaimg.cn/large/006tNc79gy1ff9h5afhv2j30f803ajri.jpg",alt:""}})]),s._v(" "),a("p",[s._v("运行效果")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://ww3.sinaimg.cn/large/006tNc79gy1ff9h70z922j30ag061wf7.jpg",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"利用-ibdesignable-在-ib-中实时显示-ibinspectable-的样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用-ibdesignable-在-ib-中实时显示-ibinspectable-的样式"}},[s._v("#")]),s._v(" 利用 @IBDesignable 在 IB 中实时显示 @IBInspectable 的样式")]),s._v(" "),a("p",[s._v("创建一个新的 class 继承 "),a("code",[s._v("UIView")]),s._v(" ，并且使用 "),a("code",[s._v("@IBDesignable")]),s._v(" 声明")]),s._v(" "),a("div",{staticClass:"language-swift line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("UIKit")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@IBDesignable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IBDesignableView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("UIView")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("在 IB 中，选择 view 的 class 为 我们新建的 "),a("code",[s._v("IBDesignableView")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://ww1.sinaimg.cn/large/006tNc79gy1ff9hs6z5q1j30fr03vweu.jpg",alt:""}})]),s._v(" "),a("p",[s._v("这样在 IB 调整属性时，这些属性的变化就会实时显示在 IB 中。")]),s._v(" "),a("h2",{attrs:{id:"本地化字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地化字符串"}},[s._v("#")]),s._v(" 本地化字符串")]),s._v(" "),a("p",[s._v("本地化字符串的解决方法和上面的添加圆角一样")]),s._v(" "),a("div",{staticClass:"language-swift line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extension")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("UILabel")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@IBInspectable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" localizedKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("guard")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" newValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" newValue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            text "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("NSLocalizedString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("newValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" comment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" text "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extension")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("UIButton")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@IBInspectable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" localizedKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("guard")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" newValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" newValue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTitle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("NSLocalizedString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("newValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" comment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("normal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" titleLabel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extension")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("UITextField")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@IBInspectable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" localizedKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("guard")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" newValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" newValue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            placeholder "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("NSLocalizedString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("newValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" comment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" placeholder "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("p",[s._v("这样，在 IB 中我们就可以利用对应类型的 Localized Key 来直接设置本地化字符串了：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://ww1.sinaimg.cn/large/006tNc79gy1ff9h94um01j30aj01vjre.jpg",alt:""}})]),s._v(" "),a("h1",{attrs:{id:"结语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[s._v("#")]),s._v(" 结语")]),s._v(" "),a("p",[a("code",[s._v("IBInspectable")]),s._v(" 可以使用这些的类型")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("Int")])]),s._v(" "),a("li",[a("code",[s._v("CGFloat")])]),s._v(" "),a("li",[a("code",[s._v("Double")])]),s._v(" "),a("li",[a("code",[s._v("String")])]),s._v(" "),a("li",[a("code",[s._v("Bool")])]),s._v(" "),a("li",[a("code",[s._v("CGPoint")])]),s._v(" "),a("li",[a("code",[s._v("CGSize")])]),s._v(" "),a("li",[a("code",[s._v("CGRect")])]),s._v(" "),a("li",[a("code",[s._v("UIColor")])]),s._v(" "),a("li",[a("code",[s._v("UIImage")])])]),s._v(" "),a("p",[s._v("合理的使用"),a("code",[s._v("@IBInspectable")]),s._v(" 能减少很多的模板代码，提高我们的开发效率。")]),s._v(" "),a("blockquote",[a("p",[s._v("参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://onevcat.com/2017/04/storyboard-argue/",target:"_blank",rel:"noopener noreferrer"}},[s._v("《再看关于 Storyboard 的一些争论》"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://medium.com/@Anantha1992/ibdesignable-and-ibinspectable-in-swift-3-702d7dd00ca",target:"_blank",rel:"noopener noreferrer"}},[s._v("《@IBDesignable and @IBInspectable in Swift 3》"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=e.exports}}]);