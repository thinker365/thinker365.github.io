(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{590:function(i,r,t){"use strict";t.r(r);var n=t(35),l=Object(n.a)({},(function(){var i=this,r=i.$createElement,t=i._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[t("h1",{attrs:{id:"交换机流量镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#交换机流量镜像"}},[i._v("#")]),i._v(" 交换机流量镜像")]),i._v(" "),t("ol",[t("li",[i._v("ssh登录交换机")]),i._v(" "),t("li",[i._v("显示当前配置\n"),t("ul",[t("li",[i._v("display current-configuration")])])]),i._v(" "),t("li",[i._v("查看具体某个接口\n"),t("ul",[t("li",[i._v("display interface Ten-GigabitEthernet1/0/17")])])]),i._v(" "),t("li",[i._v("查看都有镜像组的流量配置\n"),t("ul",[t("li",[i._v("display mirroring-group all")])])]),i._v(" "),t("li",[i._v("重启服务器网卡\n"),t("ul",[t("li",[i._v("sudo ifconfig ens11f1 up")])])])]),i._v(" "),t("p",[i._v("备注：")]),i._v(" "),t("ul",[t("li",[t("p",[i._v("H3C命令参考："),t("a",{attrs:{href:""}},[i._v("https://www.h3c.com/cn/d_202103/1395965_30005_0.htm")])])]),i._v(" "),t("li",[t("p",[i._v("还需注意交换机与模块是否匹配，光模块型号一对需要匹配")])]),i._v(" "),t("li",[t("p",[i._v("[sysname] system-view")])]),i._v(" "),t("li",[t("p",[i._v("[sysname] mirroring-group 1  local")])]),i._v(" "),t("li",[t("p",[i._v("[sysname] mirroring-group 1 mirroring-port G0/1 both  (设置源端口，镜像可以根据实际情况灵活选择入方向、出方向及全部流量；both，全部流量；inbound，入方向流量；outbound，出方向流量)")])]),i._v(" "),t("li",[t("p",[i._v("[sysname] mirroring-group 1 monitor-port G0/2  (设置目的端口)")])])])])}),[],!1,null,null,null);r.default=l.exports}}]);