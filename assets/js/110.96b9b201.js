(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{642:function(s,t,a){"use strict";a.r(t);var e=a(35),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#性能指标监控分层概述"}},[s._v("性能指标监控分层概述")]),a("ul",[a("li",[a("a",{attrs:{href:"#硬件层"}},[s._v("硬件层")])]),a("li",[a("a",{attrs:{href:"#系统层"}},[s._v("系统层")])]),a("li",[a("a",{attrs:{href:"#链路层"}},[s._v("链路层")])]),a("li",[a("a",{attrs:{href:"#业务层"}},[s._v("业务层")])])])]),a("li",[a("a",{attrs:{href:"#实操"}},[s._v("实操")]),a("ul",[a("li",[a("a",{attrs:{href:"#cpu-central-processing-unit"}},[s._v("CPU(central processing unit)")])]),a("li",[a("a",{attrs:{href:"#说明"}},[s._v("说明")])]),a("li",[a("a",{attrs:{href:"#内存"}},[s._v("内存")])]),a("li",[a("a",{attrs:{href:"#磁盘"}},[s._v("磁盘")])]),a("li",[a("a",{attrs:{href:"#网络"}},[s._v("网络")])]),a("li",[a("a",{attrs:{href:"#通用"}},[s._v("通用")])]),a("li",[a("a",{attrs:{href:"#说明"}},[s._v("说明")])])])]),a("li",[a("a",{attrs:{href:"#工具监控"}},[s._v("工具监控")]),a("ul",[a("li",[a("a",{attrs:{href:"#netdata"}},[s._v("netdata")])])])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"性能指标监控分层概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能指标监控分层概述"}},[s._v("#")]),s._v(" 性能指标监控分层概述")]),s._v(" "),a("h3",{attrs:{id:"硬件层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#硬件层"}},[s._v("#")]),s._v(" 硬件层")]),s._v(" "),a("p",[s._v("一般包含了 CPU 的使用率、内存使用率、磁盘和网络读写速度等，通过这些指标能够反馈出系统运行的基本情况，以及不同的TPS量级会消耗多少硬件资源。")]),s._v(" "),a("h3",{attrs:{id:"系统层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统层"}},[s._v("#")]),s._v(" 系统层")]),s._v(" "),a("p",[s._v("系统层监控包括连接请求数、拒绝数、丢包率、请求超时等，相对于基础的硬件监控而言，这些指标更能够反映出目前系统存在的瓶颈，从而为根因问题的定位提供有力的线索。")]),s._v(" "),a("h3",{attrs:{id:"链路层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链路层"}},[s._v("#")]),s._v(" 链路层")]),s._v(" "),a("p",[s._v("链路层是直接面向架构和代码的，它的监控能够帮助你更加准确地看到代码执行了哪些函数，涉及哪些服务，并且能够较为清晰地看到函数之间的调用耗时，还可以帮助你定位代码存在的问题。")]),s._v(" "),a("h3",{attrs:{id:"业务层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#业务层"}},[s._v("#")]),s._v(" 业务层")]),s._v(" "),a("p",[s._v("业务层监控本意是帮助你判断用户输入是否合规，代码逻辑是否健壮。对于性能测试而言，业务层的监控可以帮助你发现脚本参数问题以及高并发下业务逻辑运行是否正常等。")]),s._v(" "),a("h2",{attrs:{id:"实操"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实操"}},[s._v("#")]),s._v(" 实操")]),s._v(" "),a("p",[s._v("下面以监控硬件资源为例，介绍通过使用Linux 命令行对服务器进行监控\n优点：它具有灵活迅速的特点，通过命令可以最快地输出对应结果")]),s._v(" "),a("h3",{attrs:{id:"cpu-central-processing-unit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cpu-central-processing-unit"}},[s._v("#")]),s._v(" CPU(central processing unit)")]),s._v(" "),a("p",[s._v("中央处理器，一块超大规模的集成电路，是硬件系统的核心，计算机的运算核心和控制核心；功能主要是解释计算机指令和处理计算机软件中的数据，能完成算术运算、逻辑计算及控制功能。")]),s._v(" "),a("h4",{attrs:{id:"cpu异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cpu异常"}},[s._v("#")]),s._v(" cpu异常")]),s._v(" "),a("p",[s._v("死锁、频繁GC、频繁上下文切换、线程执行报错、计算密集都会导致CPU飙升；通常建议使用率70%以下")]),s._v(" "),a("h4",{attrs:{id:"top"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#top"}},[s._v("#")]),s._v(" top")]),s._v(" "),a("p",[s._v("是我们查看各个进程的资源占用状况最常用的命令，尤其注意负载load和使用率；vmstat也能看系统运行状态，关注的是上下文切换和swap分区的使用情况。")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":01:17 up "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("85")]),s._v(" days,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":45,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" users,  load average: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.03")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("\t\t概况\nTasks: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("442")]),s._v(" total,   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" running, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("441")]),s._v(" sleeping,   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" stopped,   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" zombie\t进程信息\n%Cpu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" us,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" sy,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" ni,100.0 id,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" wa,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" hi,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" si,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" st\t\tCPU状态\nMiB Mem "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32104.3")]),s._v(" total,    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("569.9")]),s._v(" free,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22476.6")]),s._v(" used,   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9057.9")]),s._v(" buff/cache\t\t内存状态\nMiB Swap:    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("923.3")]),s._v(" total,    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("913.0")]),s._v(" free,     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.2")]),s._v(" used.   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8857.7")]),s._v(" avail Mem\t\t交换区状态\n\n    PID "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND      以下进程详细信息                                                                                 \n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("949680")]),s._v(" root      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15212")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4588")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3528")]),s._v(" R   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.7")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00.24 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v("                                                                                           \n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7693")]),s._v(" root      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2392000")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("59916")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36328")]),s._v(" S   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.3")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("633")]),s._v(":00.35 containerd                                                                                    \n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("949173")]),s._v(" root      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" I   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.3")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00.87 kworker/u32:1-ext4-rsv-conversion                                                             \n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("170876")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12900")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8132")]),s._v(" S   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(":43.48 systemd  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h4",{attrs:{id:"load-average-一段时间内-cpu正在处理和等待处理的进程数之和的统计信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-average-一段时间内-cpu正在处理和等待处理的进程数之和的统计信息"}},[s._v("#")]),s._v(" load average(一段时间内，CPU正在处理和等待处理的进程数之和的统计信息)")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("load average: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.07")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.15")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.21")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",[a("li",[s._v("三个数字都是代表进程队列的长度，从左到右分别表示一分钟、 五分钟和十五分钟的数据，数字越小压力值就越低，数字越大则压力越高")]),s._v(" "),a("li",[s._v("以单核处理器为例\n"),a("ul",[a("li",[s._v("0 表示没有任何车辆需要通过；")]),s._v(" "),a("li",[s._v("从 0 到 1 可以认为很流畅，车辆不需要任何等待就可以通过；")]),s._v(" "),a("li",[s._v("1 表示正好在这个通道可接受范围之内；")]),s._v(" "),a("li",[s._v("超过 1 就已经有车辆在后面排队了。")])])]),s._v(" "),a("li",[s._v("所以理想情况下，希望平均负载值在1以下。如果是1就代表目前没有可用资源了。在实际情况中，很多时候会把理想负载设置在0.7以下，这也是业内的一个“经验值”。")]),s._v(" "),a("li",[s._v("多核 CPU 的话，负载数值/CPU核数在 0~1之间表示正常，理想值也是在0.7以内。")]),s._v(" "),a("li",[s._v("查看CPU核数")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'model name'")]),s._v(" /proc/cpuinfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" multiprocessing\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("multiprocessing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cpu_count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"cpu状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cpu状态"}},[s._v("#")]),s._v(" CPU状态")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v(" %Cpu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.9")]),s._v(" us,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.3")]),s._v(" sy,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" ni, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("94.6")]),s._v(" id,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v(" wa,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" hi,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" si,  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" st\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",[a("li",[s._v("us(user space) 列显示了用户进程所花费 CPU 时间的百分比。这个数值越高，说明用户进程消耗的 CPU 时间越多，可以用来分析代码中的 CPU 消耗热点。")]),s._v(" "),a("li",[s._v("sy(system) 列表示系统进程消耗的 CPU 时间百分比。")]),s._v(" "),a("li",[s._v("ni(niced user processes) 列表示改变优先级的进程占用 CPU 的百分比。")]),s._v(" "),a("li",[s._v("id(system idle processes) 列表示 CPU 处于空闲状态的时间百分比。")]),s._v(" "),a("li",[s._v("wa(wait space) 列显示了 I/O 等待所占用的 CPU 时间的百分比，这里 wa 的参考值为 0.5，如果长期高于这个参考值，需要注意是否存在磁盘瓶颈。可使用iostat、sar进一步分析")]),s._v(" "),a("li",[s._v("hi(hardware interrupt) 列表示硬件中断占用 CPU 时间百分比。硬中断由外设硬件发出，如键盘，需要有中断控制器参与，特点是快速执行")]),s._v(" "),a("li",[s._v("si(software interrupt) 列表示软件中断占用 CPU 时间百分比。软中断由软件发出中断信号，如网络收发、定时调度，特点是延迟执行")]),s._v(" "),a("li",[s._v("st(steal time) 列表示当系统运行在虚拟机中时，当前虚拟机在等待 CPU 为它服务的时间。仅出现在多虚拟机场景，如指标过高，可检查宿主机和其他虚拟机是否异常")])]),s._v(" "),a("h4",{attrs:{id:"交换区状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交换区状态"}},[s._v("#")]),s._v(" 交换区状态")]),s._v(" "),a("ol",[a("li",[s._v("total交换区总量")]),s._v(" "),a("li",[s._v("free空闲交换区总量")]),s._v(" "),a("li",[s._v("used已使用交换区总量，如果这个数值在不断变化，说明内核在不断的进行内存和swap数据的交换，这是真正的内存不够了")]),s._v(" "),a("li",[s._v("avail Mem缓冲的交换区总量，可用于进程下一次分配的物理内存数量")])]),s._v(" "),a("h4",{attrs:{id:"进程详细信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程详细信息"}},[s._v("#")]),s._v(" 进程详细信息")]),s._v(" "),a("ol",[a("li",[s._v("PID：进程 PID")]),s._v(" "),a("li",[s._v("USER：进程所有者的用户名")]),s._v(" "),a("li",[s._v("PR：进程调度优先级，值越低优先级越高")]),s._v(" "),a("li",[s._v("NI：从用户空间视角的进程优先级（niced值），值越低优先级越高；")]),s._v(" "),a("li",[s._v("VIRT：进程使用的虚拟内存（KB），VIRT=SWAP+RES")]),s._v(" "),a("li",[s._v("RES：进程使用的（未被换出的）物理内存（KB），RES=CODE+DATA")]),s._v(" "),a("li",[s._v("SHR：共享内存大小（KB）\n"),a("ul",[a("li",[s._v("S：进程状态")]),s._v(" "),a("li",[s._v("D：不可中断的睡眠状态（通常出现在IO阻塞）")]),s._v(" "),a("li",[s._v("R：运行态")]),s._v(" "),a("li",[s._v("S：睡眠态")]),s._v(" "),a("li",[s._v("T：跟踪/停止")]),s._v(" "),a("li",[s._v("Z：僵尸态")])])]),s._v(" "),a("li",[s._v("%CPU：进程占用 CPU 时间比例")]),s._v(" "),a("li",[s._v("%MEM：进程占用的物理内存比例")]),s._v(" "),a("li",[s._v("TIME+：进程占用 CPU 的时间总量（1/100秒），而非进程的存活时间。所以可能存在 TIME+大于程序运行时间，也可能小于程序运行时间，这两没有必然的关系。")]),s._v(" "),a("li",[s._v("COMMAND：运行进程使用的命令")])]),s._v(" "),a("h3",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),a("ol",[a("li",[s._v("CPU时间即反映CPU全速工作时完成该进程所花费的时间")]),s._v(" "),a("li",[s._v("RES列，显示的就是进程实际占用的物理内存")]),s._v(" "),a("li",[s._v("凡是用于完成操作系统的各种功能的进程就是系统进程")]),s._v(" "),a("li",[s._v("用户进程就是所有由你启动的进程")]),s._v(" "),a("li",[s._v("出现进程CPU使用率超过100%的情况，这个和CPU核数有关系，数值是每个核上该进程消耗CPU之和")]),s._v(" "),a("li",[s._v("关于nice，参考"),a("a",{attrs:{href:"https://linux.9iphp.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://linux.9iphp.com/"),a("OutboundLink")],1),s._v("和"),a("a",{attrs:{href:"https://www.linuxcool.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.linuxcool.com/"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("在已经输入 top 的情况下再输入数字 1，可以查看 CPU 的核数和每个核的运行状态")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("%Cpu0 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),s._v(" us, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.7")]),s._v(" sy, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" ni, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("95.3")]),s._v(" id, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" wa, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" hi, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" si, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" st\n%Cpu1 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.4")]),s._v(" us, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(" sy, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" ni, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("96.6")]),s._v(" id, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" wa, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" hi, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" si, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" st\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("看 CPU 的使用率时，只看 us 这个数值，是不准确的。除了用户进程，还有其他系统进程会占用 CPU，所以实际 CPU 的使用率可以用 100 减去空闲值（id）去计算。")]),s._v(" "),a("h4",{attrs:{id:"定位消耗资源过多的进程-案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定位消耗资源过多的进程-案例"}},[s._v("#")]),s._v(" 定位消耗资源过多的进程（案例）")]),s._v(" "),a("ol",[a("li",[s._v("top找到消耗cpu高的进程id（pid），如果知道进程name，直接ps -ef | grep pname")]),s._v(" "),a("li",[s._v("top -Hp pid，单独监控该进程，查看该进程下所有的线程")]),s._v(" "),a("li",[s._v("查找消耗cpu高的线程nid，将线程nid转换为16进制(printf '0x%x\\n' nid)")]),s._v(" "),a("li",[s._v("通过进程号查看进程堆栈信息，使用线程号定位指定线程 jstack pid | grep nid -C10 --color；或者dump到本地分析 jstack pid > log.txt")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/oldratlee/useful-scripts/blob/dev-2.x/docs/java.md#-show-busy-java-threads",target:"_blank",rel:"noopener noreferrer"}},[s._v("社区高效工具"),a("OutboundLink")],1)])]),s._v(" "),a("h4",{attrs:{id:"快捷操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快捷操作"}},[s._v("#")]),s._v(" 快捷操作")]),s._v(" "),a("ol",[a("li",[s._v("1 ：可以监控每个逻辑 CPU 的状况")]),s._v(" "),a("li",[s._v("b ：打开关闭加亮效果，在打开加亮的效果之后，我们可以按x键实现列的加亮效果")]),s._v(" "),a("li",[s._v("P：以CPU的使用资源排序显示")]),s._v(" "),a("li",[s._v("M：以内存的使用资源排序显示")]),s._v(" "),a("li",[s._v("N：以pid排序显示")]),s._v(" "),a("li",[s._v("T：由进程使用的时间累计排序显示")]),s._v(" "),a("li",[s._v("S：切换到累计模式")]),s._v(" "),a("li",[s._v("k：给某一个 pid 一个信号。可以用来杀死进程")]),s._v(" "),a("li",[s._v("r：给某个 pid 重新定制一个 nice 值（即优先级）")]),s._v(" "),a("li",[s._v("d：可以更改刷新时间（默认3秒）")]),s._v(" "),a("li",[s._v("s：改变两次刷新之间的延迟时间（单位为s）")]),s._v(" "),a("li",[s._v("i：可以只显示状态为R的进程")]),s._v(" "),a("li",[s._v("c：可以显示进程的完整的命令（COMMAND列）")]),s._v(" "),a("li",[s._v("shift + >：可以依次按照  PID、USER、PR····· 来进行排序。")]),s._v(" "),a("li",[s._v("shift + <：可以依次按照 COMMAND、TIME+、%MEM····· 来进行排序")]),s._v(" "),a("li",[s._v("o/O：可以自定义显示哪些列")]),s._v(" "),a("li",[s._v("f/F：从当前显示中添加或者删除项目")]),s._v(" "),a("li",[s._v("l：切换显示平均负载和启动时间信息")]),s._v(" "),a("li",[s._v("m：切换显示内存信息")]),s._v(" "),a("li",[s._v("t：切换显示进程和CPU状态信息")]),s._v(" "),a("li",[s._v("W：将当前设置写入~/.toprc文件中")]),s._v(" "),a("li",[s._v("q：退出 top（用ctrl+c也可以退出 top）\ntop -s以安全模式启动top界面，可以防止在 top 界面对进程进行修改操作")])]),s._v(" "),a("h3",{attrs:{id:"内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存"}},[s._v("#")]),s._v(" 内存")]),s._v(" "),a("h4",{attrs:{id:"free"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#free"}},[s._v("#")]),s._v(" free")]),s._v(" "),a("p",[s._v("空闲的、未使用的，关注剩余内存的大小（free）")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@JD ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# free -m")]),s._v("\n\t\t total    used    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v("   shared  buff/cache  available\nMem:      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7822")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5917")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("302")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("373")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1602")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1195")]),s._v("\nSwap:       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ol",[a("li",[s._v("total总的物理内存")]),s._v(" "),a("li",[s._v("used已使用的物理内存（包括过去使用过，现在可以重复利用的内存，因此Linux上free内存会越来越少）")]),s._v(" "),a("li",[s._v("free空闲的物理内存")]),s._v(" "),a("li",[s._v("为什么 free 值很低却未必代表内存达到瓶颈呢？这和 Linux 内核机制有关系，简单来说，内存空间会开辟 buffer 和 cache 缓冲区，对于物理内存来说，这都属于被使用过的内存。而应用需要内存时，如果没有可用的 free 内存，内核就会从缓冲区回收内存以满足要求，当 free 值很低的时候，如上代码中的 available 就能体现出缓冲区可用内存的大小，这个指标可以比较真实地反映出内存是否达到使用上限。")])]),s._v(" "),a("h3",{attrs:{id:"磁盘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#磁盘"}},[s._v("#")]),s._v(" 磁盘")]),s._v(" "),a("h4",{attrs:{id:"iostat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iostat"}},[s._v("#")]),s._v(" iostat")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@JD ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# iostat -x")]),s._v("\nLinux "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(".0-514.el7.x86_64 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("JD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    01/18/2021   _x86_64_    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" CPU"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\navg-cpu: %user %nice %system %iowait %steal %idle\n\t\t "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.24")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.57")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.07")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("93.12")]),s._v("\nDevice:   rrqm/s wrqm/s  r/s   w/s   rkB/s  wkB/s  avgrq-sz avgqu-sz await  r_await w_await svctm %util\nvda       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.29")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.57")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.30")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.50")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("630.14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("221.82")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.07")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.53")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("59.83")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.36")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.18")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.69")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ol",[a("li",[s._v("iostat是sysstat的一部分，所以要安装sysstat。")]),s._v(" "),a("li",[s._v("idle 代表磁盘空闲百分比；")]),s._v(" "),a("li",[s._v("util 接近 100%，表示磁盘产生的 I/O 请求太多，I/O 系统已经满负荷在工作，该磁盘可能存在瓶颈；")]),s._v(" "),a("li",[s._v("svctm 代表平均每次设备 I/O 操作的服务时间 (毫秒)。")]),s._v(" "),a("li",[s._v("组合看这些指标，如果 idle 长期在 50% 以下，util 值在 50% 以上以及 svctm 高于 10ms，说明磁盘可能存在一定的问题。")])]),s._v(" "),a("h4",{attrs:{id:"iotop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iotop"}},[s._v("#")]),s._v(" iotop")]),s._v(" "),a("ol",[a("li",[s._v("iotop 这个命令并不是 linux 原生，需安装。")]),s._v(" "),a("li",[s._v("输入iotop，就能清楚地看到哪些进程在消耗磁盘资源。")])]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6448")]),s._v("  be/4 root        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % ifrit-agent\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14647")]),s._v(" be/4 root        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.70")]),s._v(" K/s  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % java -Dserver.port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9080")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"iftop-if-interface-可与ifconfig联想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iftop-if-interface-可与ifconfig联想"}},[s._v("#")]),s._v(" iftop（if--\x3einterface，可与ifconfig联想）")]),s._v(" "),a("p",[s._v("可以查看占用 I/O 最多的进程")]),s._v(" "),a("h3",{attrs:{id:"网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络"}},[s._v("#")]),s._v(" 网络")]),s._v(" "),a("h4",{attrs:{id:"netstat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netstat"}},[s._v("#")]),s._v(" netstat")]),s._v(" "),a("p",[s._v("netstat 能提供 TCP 和 UDP 的连接状态等统计信息，可以简单判断网络是否存在堵塞。")]),s._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@JD ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# netstat")]),s._v("\nActive Internet connections "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("w/o servers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nProto Recv-Q Send-Q Local Address           Foreign Address         State\ntcp        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" JD:49190                "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("169.254")]),s._v(".169.250:http    FIN_WAIT1\ntcp        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" JD:39444                "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("169.254")]),s._v(".169.254:http    TIME_WAIT\ntcp        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" JD:us-srv               worker-18.:sentinel-ent ESTABLISHED\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ol",[a("li",[s._v("Proto：协议名（可以 TCP 协议或者 UDP 协议）。")]),s._v(" "),a("li",[s._v("recv-Q：网络接收队列还有多少请求在排队。")]),s._v(" "),a("li",[s._v("send-Q：网络发送队列有多少请求在排队。")]),s._v(" "),a("li",[s._v("recv-Q 和 send-Q 如果长期不为 0，很可能存在网络拥堵，这个是判断网络瓶颈的重要依据。")]),s._v(" "),a("li",[s._v("Foreign Address：与本机端口通信的外部socket。")]),s._v(" "),a("li",[s._v("State：TCP 的连接状态。")])]),s._v(" "),a("h4",{attrs:{id:"iotop-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iotop-2"}},[s._v("#")]),s._v(" iotop")]),s._v(" "),a("p",[s._v("可以看到占用网络流量最高的进程")]),s._v(" "),a("h4",{attrs:{id:"ss-socket-statistics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ss-socket-statistics"}},[s._v("#")]),s._v(" ss（Socket Statistics）")]),s._v(" "),a("p",[s._v("当前机器上的网络连接汇总")]),s._v(" "),a("h3",{attrs:{id:"通用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用"}},[s._v("#")]),s._v(" 通用")]),s._v(" "),a("h4",{attrs:{id:"lsof-lists-openfiles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lsof-lists-openfiles"}},[s._v("#")]),s._v(" lsof（lists openfiles）")]),s._v(" "),a("p",[s._v("可以查看当前进程所关联的所有资源")]),s._v(" "),a("h4",{attrs:{id:"sysctl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sysctl"}},[s._v("#")]),s._v(" sysctl")]),s._v(" "),a("p",[s._v("可以查看当前系统内核的配置参数")]),s._v(" "),a("h4",{attrs:{id:"dmesg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dmesg"}},[s._v("#")]),s._v(" dmesg")]),s._v(" "),a("p",[s._v("可以显示系统级别的一些信息")]),s._v(" "),a("h3",{attrs:{id:"说明-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明-2"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),a("p",[s._v("同时监控以上4个资源，可以使用vmstat、dstat（需安装）、nmon（需安装）")]),s._v(" "),a("h2",{attrs:{id:"工具监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具监控"}},[s._v("#")]),s._v(" 工具监控")]),s._v(" "),a("h3",{attrs:{id:"netdata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netdata"}},[s._v("#")]),s._v(" netdata")]),s._v(" "),a("h4",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("ol",[a("li",[s._v("Netdata的分布式实时监视代理以零配置的方式，从系统、硬件、容器和应用程序收集数千个指标，它可以运行在所有的物理或虚拟服务器、容器、云和IoT设备上，可以在大多数Linux发行版（Ubuntu，Debian，CentOS等），容器平台（Kubernetes集群，Docker）和许多其他操作系统（FreeBSD，macOS）上安装，不需要sudo权限。")]),s._v(" "),a("li",[s._v("Netdata由系统管理员，DevOps工程师和开发人员设计，旨在收集所有内容，可视化监控指标，解决复杂的性能问题。")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://learn.netdata.cloud/docs/overview/why-netdata",target:"_blank",rel:"noopener noreferrer"}},[s._v("查看更多"),a("OutboundLink")],1)])]),s._v(" "),a("h4",{attrs:{id:"官网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官网"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://learn.netdata.cloud/docs/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);