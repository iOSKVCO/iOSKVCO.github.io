(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{546:function(s,a,e){"use strict";e.r(a);var n=e(6),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("p",[s._v("对于习惯使用Storyboard的人来说，设置圆角、描边是一件比较蛋疼的事，因为苹果没有在xcode的Interface Builder上直接提供修改控件的圆角，边框设置。")]),s._v(" "),e("p",[s._v("我们来说说如何对某个控件进行圆角、描边处理：")]),s._v(" "),e("h1",{attrs:{id:"初级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初级"}},[s._v("#")]),s._v(" 初级")]),s._v(" "),e("p",[s._v("对于一个初学者来说，如果要进行某个控件的圆角、描边设置，就要从Storyboard关联出属性，然后再对属性进行代码处理。")]),s._v(" "),e("p",[s._v("如下代码：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("self.myButton.layer.cornerRadius = 20;\nself.myButton.layer.masksToBounds = YES;\nself.myButton.layer.borderWidth = 2;\nself.myButton.layer.borderColor = [UIColor blackColor].CGColor;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("这样不仅需要Storyboard关联出属性，还要写一堆代码对属性进行设置，不得不说实在麻烦~")]),s._v(" "),e("h1",{attrs:{id:"中级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#中级"}},[s._v("#")]),s._v(" 中级")]),s._v(" "),e("p",[s._v("更聪明的做法是使用Storyboard提供的Runtime Attributes为控件添加圆角描边。")]),s._v(" "),e("p",[s._v("选中控件，然后在Runtime Attributes框中输入对应的"),e("code",[s._v("Key")]),s._v("与"),e("code",[s._v("Type")]),s._v("与"),e("code",[s._v("Value")]),s._v(",这样程序在运行时就会通过KVC为你的控件属性进行赋值。(不仅仅是圆角、描边~)")]),s._v(" "),e("p",[s._v("如下图")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://ww4.sinaimg.cn/large/7853084cgw1fabg89aeqkj207b08j74y.jpg",alt:""}})]),s._v(" "),e("p",[s._v("设置圆角、描边的Key为：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("layer.borderWidth\nlayer.borderColorFromUIColor\nlayer.cornerRadius\nclipsToBounds\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("我这次在测试时，")]),s._v(" "),e("p",[s._v("这样做不用关联出属性，但是需要输入大串字符串，也是不够方便。")]),s._v(" "),e("h1",{attrs:{id:"高级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高级"}},[s._v("#")]),s._v(" 高级")]),s._v(" "),e("p",[s._v("创建UIView的分类，使用"),e("code",[s._v("IBInspectable")]),s._v("+ "),e("code",[s._v("IB_DESIGNABLE")]),s._v("关键字：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#import <UIKit/UIKit.h>\n\nIB_DESIGNABLE\n\n@interface UIView (Inspectable)\n\n@property(nonatomic,assign) IBInspectable CGFloat cornerRadius;\n@property(nonatomic,assign) IBInspectable CGFloat borderWidth;\n@property(nonatomic,assign) IBInspectable UIColor *borderColor;\n\n@end\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('#import "UIView+Inspectable.h"\n\n@implementation UIView (Inspectable)\n\n-(void)setCornerRadius:(CGFloat)cornerRadius{\n    self.layer.masksToBounds = YES;\n    self.layer.cornerRadius = cornerRadius;\n}\n-(void)setBorderColor:(UIColor *)borderColor{\n    self.layer.borderColor = borderColor.CGColor;\n}\n-(void)setBorderWidth:(CGFloat)borderWidth{\n    self.layer.borderWidth = borderWidth;\n}\n\n- (CGFloat)cornerRadius{\n    return self.layer.cornerRadius;\n}\n- (CGFloat)borderWidth{\n    return self.layer.borderWidth;\n}\n- (UIColor *)borderColor{\n    return [UIColor colorWithCGColor:self.layer.borderColor];\n}\n\n@end\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br")])]),e("p",[s._v("附上："),e("a",{attrs:{href:"https://github.com/qiubaiying/CircularAndStroke.git",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub地址"),e("OutboundLink")],1)]),s._v(" "),e("h4",{attrs:{id:"直接使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#直接使用"}},[s._v("#")]),s._v(" 直接使用")]),s._v(" "),e("p",[s._v("直接将这两个文件拖入项目中即可使用，在右边栏将会显示圆角和描边的属性设置")]),s._v(" "),e("p",[s._v("如图：")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://ww4.sinaimg.cn/large/7853084cgw1facfqugjtbj20mp07v401.jpg",alt:""}})]),s._v(" "),e("h4",{attrs:{id:"动态显示设置效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动态显示设置效果"}},[s._v("#")]),s._v(" 动态显示设置效果")]),s._v(" "),e("p",[s._v("直接使用的话只有在运行时才能看到效果，")]),s._v(" "),e("p",[s._v("例如要实时显示一个"),e("code",[s._v("UIBUtton")]),s._v("圆角、描边效果，需要创建一个类继承"),e("code",[s._v("UIButton")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('#import <UIKit/UIKit.h>\n#import "UIView+Inspectable.h"\n\n@interface myButton : UIButton\n\n@end\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('#import "myButton.h"\n\n@implementation myButton\n\n@end\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("只要将button的Class选择该空白类即可")]),s._v(" "),e("p",[s._v("关于"),e("code",[s._v("IBInspectable")]),s._v("与"),e("code",[s._v("IB_DESIGNABLE")]),s._v("的使用详情可以参考这篇文章"),e("a",{attrs:{href:"http://www.jianshu.com/p/a90e44ba1f2b",target:"_blank",rel:"noopener noreferrer"}},[s._v("《谈不完美的IBDesignable/IBInspectable可视化效果编程》"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);