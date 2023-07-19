(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{557:function(t,e,i){"use strict";i.r(e);var v=i(6),r=Object(v.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("blockquote",[i("p",[t._v("使用 "),i("code",[t._v(".gitignore")]),t._v(" 文件忽略指定文件")])]),t._v(" "),i("h2",{attrs:{id:"gitignore"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#gitignore"}},[t._v("#")]),t._v(" .gitignore")]),t._v(" "),i("p",[t._v("在Git中，很多时候你只想将代码提交到仓库，而不是将当前文件目录下的文件全部提交到Git仓库中，例如在MacOS系统下面的"),i("code",[t._v(".DS_Store")]),t._v("文件，或者是Xocde的操作记录，又或者是pod库的中一大串的源代码。这种情况下使用"),i("code",[t._v(".gitignore")]),t._v("就能够在Git提交时自动忽略掉这些文件。")]),t._v(" "),i("h2",{attrs:{id:"忽略的格式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#忽略的格式"}},[t._v("#")]),t._v(" 忽略的格式")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("#")]),t._v(" :此为注释 – 将被 Git 忽略")]),t._v(" "),i("li",[i("code",[t._v("*.a")]),t._v(" :忽略所有 "),i("code",[t._v(".a")]),t._v(" 结尾的文件")]),t._v(" "),i("li",[i("code",[t._v("!lib.a")]),t._v(" : 不忽略 "),i("code",[t._v("lib.a")]),t._v(" 文件")]),t._v(" "),i("li",[i("code",[t._v("/TODO")]),t._v(" :仅仅忽略项目根目录下的 "),i("code",[t._v("TODO")]),t._v(" 文件,不包括 "),i("code",[t._v("subdir/TODO")])]),t._v(" "),i("li",[i("code",[t._v("build/")]),t._v(" : 忽略 "),i("code",[t._v("build/")]),t._v(" 目录下的所有文件")]),t._v(" "),i("li",[i("code",[t._v("doc/*.txt")]),t._v(" : 会忽略 "),i("code",[t._v("doc/notes.txt")]),t._v(" 但不包括 "),i("code",[t._v("doc/server/arch.txt")])])]),t._v(" "),i("h2",{attrs:{id:"创建方法"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#创建方法"}},[t._v("#")]),t._v(" 创建方法")]),t._v(" "),i("h4",{attrs:{id:"从-github-上获取"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#从-github-上获取"}},[t._v("#")]),t._v(" 从 "),i("a",{attrs:{href:"https://github.com/github/gitignore.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),i("OutboundLink")],1),t._v(" 上获取")]),t._v(" "),i("p",[t._v("github上整理了一些常用需要的项目中需要忽略的文件配置，根据需要进行获取")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[t._v("https://github.com/github/gitignore.git\n")])])]),i("p",[t._v("与 Xcode 相关的三个文件")]),t._v(" "),i("ul",[i("li",[t._v("Xcode.gitignore")]),t._v(" "),i("li",[t._v("Objective-C.gitignore")]),t._v(" "),i("li",[t._v("Swift.gitignore")])]),t._v(" "),i("p",[i("code",[t._v("Xcode.gitignore")]),t._v("忽略 "),i("code",[t._v("Xcode")]),t._v(" 配置信息，如操作记录，默认打开窗口等")]),t._v(" "),i("p",[t._v("其他两个在 "),i("code",[t._v("Xcode.gitignore")]),t._v(" 基础上针对不同的语言进行忽略")]),t._v(" "),i("p",[t._v("将这些文件重写命名为 "),i("code",[t._v(".gittignore")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[t._v("$ mv Swift.gitignore .gittignore\n")])])]),i("h4",{attrs:{id:"通过-gitignore-io-创建-推荐"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#通过-gitignore-io-创建-推荐"}},[t._v("#")]),t._v(" 通过 "),i("a",{attrs:{href:"https://www.gitignore.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitignore.io"),i("OutboundLink")],1),t._v(" 创建（推荐）")]),t._v(" "),i("h6",{attrs:{id:"先自定义终端命令"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#先自定义终端命令"}},[t._v("#")]),t._v(" 先自定义终端命令：")]),t._v(" "),i("p",[t._v("macOS下默认是"),i("code",[t._v("\\#!/bin/bash")]),t._v("：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[t._v('$ echo "function gi() { curl -L -s https://www.gitignore.io/api/\\$@ ;}" >> ~/.bash_profile && source ~/.bash_profile\n')])])]),i("p",[t._v("如果是 "),i("code",[t._v("#!/bin/zsh")])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[t._v('$ echo "function gi() { curl -L -s https://www.gitignore.io/api/\\$@ ;}" >> ~/.zshrc && source ~/.zshrc\n')])])]),i("h6",{attrs:{id:"使用"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),i("p",[t._v("在当前终端目录下")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[t._v("$ gi swift > .gitignore\n")])])]),i("p",[t._v("就会针对 Swifit 类型的工程创建 "),i("code",[t._v(".gitignore")]),t._v(" 文件。")])])}),[],!1,null,null,null);e.default=r.exports}}]);