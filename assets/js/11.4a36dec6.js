(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{544:function(e,a,s){"use strict";s.r(a);var r=s(6),n=Object(r.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),s("p",[e._v("最近在办公室觉得有点吵，然后忽然想做一个噪音计测试一下噪音，在App Store下载了几款测噪音软件，使用原来都大同小异。于是决定自己实现测噪音的原理。")]),e._v(" "),s("h2",{attrs:{id:"分贝db"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分贝db"}},[e._v("#")]),e._v(" 分贝dB")]),e._v(" "),s("p",[e._v("首先要测量噪音，必须知道噪音的大小的参考的单位为分贝（dB），分贝的定义如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("SPL = 20lg[p(e)/p(ref)]\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("code",[e._v("p(e)")]),e._v("为待测的有效声压，"),s("code",[e._v("p(ref)")]),e._v("为参考声压，一般取2*10E-5帕，这是人耳能分辨的最小声压（1KHz）。")]),e._v(" "),s("p",[e._v("就是说噪音每增加20dB，声压增强了10倍。")]),e._v(" "),s("h2",{attrs:{id:"ios测噪音原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ios测噪音原理"}},[e._v("#")]),e._v(" iOS测噪音原理")]),e._v(" "),s("p",[e._v("iOS设备测量噪音原理非常简单：调用系统麦克风，根据麦克风输入强度计算转化为对应的dB值。但是，实现的过程可是坑满满。")]),e._v(" "),s("p",[e._v("找到了一篇博客介绍iOS硬件的调用:"),s("a",{attrs:{href:"http://www.cnblogs.com/kenshincui/p/4186022.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("iOS开发系列--音频播放、录音、视频播放、拍照、视频录制"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("iOS的"),s("code",[e._v("AVFoundation")]),e._v("框架中有一个"),s("code",[e._v("AVAudioRecorder")]),e._v("类专门处理录音操作，详见"),s("a",{attrs:{href:"https://developer.apple.com/reference/avfoundation/1668872-av_foundation_audio_settings_con",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple文档"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("在"),s("code",[e._v("AVAudioRecorder.h")]),e._v("中找到下列方法")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("- (void)updateMeters; /* call to refresh meter values */ 更新麦克风测量值\n- (float)peakPowerForChannel:(NSUInteger)channelNumber; /* returns peak power in decibels for a given channel */ 获取峰值\n- (float)averagePowerForChannel:(NSUInteger)channelNumber; /* returns average power in decibels for a given channel */ 获取平局值\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[s("code",[e._v("- (float)averagePowerForChannel:(NSUInteger)channelNumber;")]),e._v("文档中描述：")]),e._v(" "),s("blockquote",[s("p",[e._v("Return Value")])]),e._v(" "),s("blockquote",[s("p",[e._v("The current average power, in decibels, for the sound being recorded. A return value of 0 dB indicates full scale, or maximum power; a return value of -160 dB indicates minimum power (that is, near silence).")])]),e._v(" "),s("blockquote",[s("p",[e._v("If the signal provided to the audio recorder exceeds ±full scale, then the return value may exceed 0 (that is, it may enter the positive range).")])]),e._v(" "),s("blockquote",[s("p",[e._v("Discussion")])]),e._v(" "),s("blockquote",[s("p",[e._v("To obtain a current average power value, you must call the updateMeters method before calling this method.")])]),e._v(" "),s("p",[e._v("也就是说获取的麦克风测量值返回值范围为 "),s("code",[e._v("-160dB ~ 0dB")]),e._v(",并且注意最后那句话返回值可能超过0。")]),e._v(" "),s("h2",{attrs:{id:"转化公式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转化公式"}},[e._v("#")]),e._v(" 转化公式")]),e._v(" "),s("p",[e._v("获取的的测量值为 "),s("code",[e._v("-160 ~ 0dB")]),e._v(" ，如何转化为我们所要的噪音值呢？在网上找了很多资料都没有结果，于是就自己摸索转化公式。")]),e._v(" "),s("p",[e._v("刚开始想到的是利用分贝计算公式"),s("code",[e._v("SPL = 20lg[p(e)/p(ref)]")]),e._v("进行计算，后来直接放弃这个方案，因为这是一个对数运算，获取到的值非常稳定，几乎不会波动，与其他的测噪软件所得的分贝值出入太大。")]),e._v(" "),s("p",[e._v("然后发现有个App在麦克风没有输入时显示-55dB")]),e._v(" "),s("p",[s("img",{attrs:{src:"http://ww2.sinaimg.cn/large/7853084cgw1f9u0nu3xv3j205n0a0glq.jpg",alt:""}})]),e._v(" "),s("p",[e._v("于是思路就有了。")]),e._v(" "),s("p",[e._v("其他测噪音软件的量程均为"),s("code",[e._v("0~110dB")]),e._v(",而我们获取的的测量值为 "),s("code",[e._v("-160 ~ 0dB")]),e._v("，两者之间差了"),s("code",[e._v("50dB")]),e._v("，也就是说以麦克风的测量值的"),s("code",[e._v("-160dB+50dB = -110dB")]),e._v("作为起点，"),s("code",[e._v("0dB")]),e._v("作为Max值,恰好量程为"),s("code",[e._v("0~110dB")]),e._v(".")]),e._v(" "),s("p",[e._v("问题看似结束，但是直接以"),s("code",[e._v("50dB")]),e._v("作为补偿测量结果会偏大。最后选择了分段进行处理，代码如下")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('\n-(void)audioPowerChange{\n    \n    [self.audioRecorder updateMeters];//更新测量值\n    float power = [self.audioRecorder averagePowerForChannel:0];// 均值\n    float powerMax = [self.audioRecorder peakPowerForChannel:0];// 峰值\n    NSLog(@"power = %f, powerMax = %f",power, powerMax);\n    \n    CGFloat progress = (1.0 / 160.0) * (power + 160.0);\n    \n    // 关键代码\n    power = power + 160  - 50;\n    \n    int dB = 0;\n    if (power < 0.f) {\n        dB = 0;\n    } else if (power < 40.f) {\n        dB = (int)(power * 0.875);\n    } else if (power < 100.f) {\n        dB = (int)(power - 15);\n    } else if (power < 110.f) {\n        dB = (int)(power * 2.5 - 165);\n    } else {\n        dB = 110;\n    }\n    \n    NSLog(@"progress = %f, dB = %d", progress, dB);\n    self.powerLabel.text = [NSString stringWithFormat:@"%ddB", dB];\n    [self.audioPowerProgress setProgress:progress];\n\n}\n\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br")])]),s("h1",{attrs:{id:"效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#效果"}},[e._v("#")]),e._v(" 效果")]),e._v(" "),s("p",[e._v("效果如下：")]),e._v(" "),s("p",[s("img",{attrs:{src:"http://ww4.sinaimg.cn/large/7853084cgw1f9u1gqgqieg20k00zk7d8.gif",alt:""}})]),e._v(" "),s("h1",{attrs:{id:"下载地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载地址"}},[e._v("#")]),e._v(" 下载地址")]),e._v(" "),s("p",[e._v("Demo下载地址："),s("a",{attrs:{href:"https://github.com/qiubaiying/Noise-meter-Demo",target:"_blank",rel:"noopener noreferrer"}},[e._v("Noise-meter-Demo"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);