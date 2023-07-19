(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{579:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("平常我们都会用 Instrument 的 Leaks / Allocations 或其他一些开源库进行内存泄露的排查，但它们都存在各种问题和不便，")]),t._v(" "),s("p",[t._v("在这个 ARC 时代更常见的内存泄露是循环引用导致的 Abandoned memory，Leaks 工具查不出这类内存泄露，应用有限。")]),t._v(" "),s("p",[t._v("今天介绍一种简单直接的检测内测泄漏的方法："),s("strong",[t._v("Debug Memory Graph")])]),t._v(" "),s("p",[t._v("就是这货：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://ws4.sinaimg.cn/large/006tNc79gy1fhxct12udnj311x0s3grw.jpg",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"正文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正文"}},[t._v("#")]),t._v(" 正文")]),t._v(" "),s("p",[t._v("我最近的项目中，退出登录后（跳转到登录页），发现首页控制器没有被销毁，依旧能接收通知。")]),t._v(" "),s("p",[t._v("退出登录代码：")]),t._v(" "),s("div",{staticClass:"language-objc line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-objc"}},[s("code",[t._v("UIStoryboard "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("storyboard "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIStoryboard storyboardWithName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"Login"')]),t._v(" bundle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSBundle mainBundle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nAppDelegate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("appDelegate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AppDelegate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIApplication sharedApplication"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delegate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nappDelegate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rootViewController "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("storyboard instantiateViewControllerWithIdentifier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"LoginVC"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("很明显发生了循环引用导致的内测泄漏。")]),t._v(" "),s("p",[t._v("接下来就使用 "),s("strong",[t._v("Debug Memory Graph")]),t._v(" 来查看内测泄漏了。")]),t._v(" "),s("h3",{attrs:{id:"运行程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行程序"}},[t._v("#")]),t._v(" 运行程序")]),t._v(" "),s("p",[t._v("首先启动 Xcode 运行程序。")]),t._v(" "),s("h3",{attrs:{id:"debug-memory-graph"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debug-memory-graph"}},[t._v("#")]),t._v(" Debug Memory Graph")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://ws3.sinaimg.cn/large/006tNc79gy1fhxend1a8aj315y0s3gw5.jpg",alt:""}})]),t._v(" "),s("p",[t._v("点击 Debug Memory Graph 按钮后，可以看到红框内的是当前内存中存在的对象。其中，绿色的就是视图控制器。")]),t._v(" "),s("p",[t._v("这样，我们随时都可以查看内测中存在的对象，换句话说，就是可以通过观察 Memory Graph 查看内测泄漏。")]),t._v(" "),s("h3",{attrs:{id:"调试你的app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调试你的app"}},[t._v("#")]),t._v(" 调试你的App")]),t._v(" "),s("p",[t._v("继续运行你的程序")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://ws2.sinaimg.cn/large/006tNc79gy1fhxeuh1np5j30v90kvn03.jpg",alt:""}})]),t._v(" "),s("p",[t._v("然后对App进行调试、push、pop 操作，再次点击 Debug Memory Graph 按钮。那些该释放而依旧在内测中的 "),s("code",[t._v("控制器")]),t._v(" 或 "),s("code",[t._v("对象")]),t._v(" 就能一一找出来了。")]),t._v(" "),s("p",[t._v("接下来，只要进入对应的控制器找到内测泄漏的代码就OK了，一般是Block里引用了 "),s("code",[t._v("self")]),t._v("，改为 "),s("code",[t._v("weakSelf")]),t._v(" 就解决了。")]),t._v(" "),s("div",{staticClass:"language-objc line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-objc"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("WS")]),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("weakSelf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" __weak "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__typeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("weakSelf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("weakSelf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("btnBlock "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSInteger idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("weakSelf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableView reloadSections"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSIndexSet indexSetWithIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" withRowAnimation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("UITableViewRowAnimationAutomatic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h2",{attrs:{id:"结语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[t._v("#")]),t._v(" 结语")]),t._v(" "),s("p",[t._v("就这样，利用 Debug Memory Graph，可以简单快速的检测内测泄漏。")]),t._v(" "),s("p",[t._v("一般由两个对象循环引用的内测泄漏是比较好发现的，如果是由三个及其三个以上的对象形成的大的循环引用，就会比较难排查了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);