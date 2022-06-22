(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{508:function(v,_,l){"use strict";l.r(_);var i=l(37),e=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"简介"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[v._v("#")]),v._v(" 简介")]),v._v(" "),l("p",[l("strong",[v._v("分布式任务调度平台")])]),v._v(" "),l("p",[v._v("开发迅速、学习简单、轻量级、易扩展")]),v._v(" "),l("p",[l("a",{attrs:{href:"https://www.xuxueli.com/xxl-job/",target:"_blank",rel:"noopener noreferrer"}},[v._v("官方文档"),l("OutboundLink")],1)]),v._v(" "),l("h2",{attrs:{id:"特性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[v._v("#")]),v._v(" 特性")]),v._v(" "),l("ol",[l("li",[v._v("简单：支持通过Web页面对任务进行CRUD操作，操作简单，一分钟上手；")]),v._v(" "),l("li",[v._v("动态：支持动态修改任务状态. 启动/停止任务，以及终止运行中任务，即时生效；")]),v._v(" "),l("li",[v._v("调度中心HA（中心式）：调度采用中心式设计，“调度中心”自研调度组件并支持集群部署，可保证调度中心HA；")]),v._v(" "),l("li",[v._v("执行器HA（分布式）：任务分布式执行，任务”执行器”支持集群部署，可保证任务执行HA；")]),v._v(" "),l("li",[v._v("注册中心: 执行器会周期性自动注册任务, 调度中心将会自动发现注册的任务并触发执行。同时，也支持手动录入执行器地址；")]),v._v(" "),l("li",[v._v("弹性扩容缩容：一旦有新执行器机器上线或者下线，下次调度时将会重新分配任务；")]),v._v(" "),l("li",[v._v("触发策略：提供丰富的任务触发策略，包括：Cron触发. 固定间隔触发. 固定延时触发. API（事件）触发. 人工触发. 父子任务触发；")]),v._v(" "),l("li",[v._v("调度过期策略：调度中心错过调度时间的补偿处理策略，包括：忽略. 立即补偿触发一次等；")]),v._v(" "),l("li",[v._v("阻塞处理策略：调度过于密集执行器来不及处理时的处理策略，策略包括：单机串行（默认）. 丢弃后续调度. 覆盖之前调度；")]),v._v(" "),l("li",[v._v("任务超时控制：支持自定义任务超时时间，任务运行超时将会主动中断任务；")]),v._v(" "),l("li",[v._v("任务失败重试：支持自定义任务失败重试次数，当任务失败时将会按照预设的失败重试次数主动进行重试；其中分片任务支持分片粒度的失败重试；")]),v._v(" "),l("li",[v._v("任务失败告警；默认提供邮件方式失败告警，同时预留扩展接口，可方便的扩展短信. 钉钉等告警方式；")]),v._v(" "),l("li",[v._v("路由策略：执行器集群部署时提供丰富的路由策略，包括：第一个. 最后一个. 轮询. 随机. 一致性HASH. 最不经常使用. 最近最久未使用. 故障转移. 忙碌转移等；")]),v._v(" "),l("li",[v._v("分片广播任务：执行器集群部署时，任务路由策略选择”分片广播”情况下，一次任务调度将会广播触发集群中所有执行器执行一次任务，可根据分片参数开发分片任务；")]),v._v(" "),l("li",[v._v("动态分片：分片广播任务以执行器为维度进行分片，支持动态扩容执行器集群从而动态增加分片数量，协同进行业务处理；在进行大数据量业务操作时可显著提升任务处理能力和速度。")]),v._v(" "),l("li",[v._v("故障转移：任务路由策略选择”故障转移”情况下，如果执行器集群中某一台机器故障，将会自动Failover切换到一台正常的执行器发送调度请求。")]),v._v(" "),l("li",[v._v("任务进度监控：支持实时监控任务进度；")]),v._v(" "),l("li",[v._v("Rolling实时日志：支持在线查看调度结果，并且支持以Rolling方式实时查看执行器输出的完整的执行日志；")]),v._v(" "),l("li",[v._v("GLUE：提供Web IDE，支持在线开发任务逻辑代码，动态发布，实时编译生效，省略部署上线的过程。支持30个版本的历史版本回溯。")]),v._v(" "),l("li",[v._v("脚本任务：支持以GLUE模式开发和运行脚本任务，包括Shell. Python. NodeJS. PHP. PowerShell等类型脚本;")]),v._v(" "),l("li",[v._v("命令行任务：原生提供通用命令行任务Handler（Bean任务，”CommandJobHandler”）；业务方只需要提供命令行即可；")]),v._v(" "),l("li",[v._v("任务依赖：支持配置子任务依赖，当父任务执行结束且执行成功后将会主动触发一次子任务的执行, 多个子任务用逗号分隔；")]),v._v(" "),l("li",[v._v("一致性：“调度中心”通过DB锁保证集群分布式调度的一致性, 一次任务调度只会触发一次执行；")]),v._v(" "),l("li",[v._v("自定义任务参数：支持在线配置调度任务入参，即时生效；")]),v._v(" "),l("li",[v._v("调度线程池：调度系统多线程触发调度运行，确保调度精确执行，不被堵塞；")]),v._v(" "),l("li",[v._v("数据加密：调度中心和执行器之间的通讯进行数据加密，提升调度信息安全性；")]),v._v(" "),l("li",[v._v("邮件报警：任务失败时支持邮件报警，支持配置多邮件地址群发报警邮件；")]),v._v(" "),l("li",[v._v("推送maven中央仓库: 将会把最新稳定版推送到maven中央仓库, 方便用户接入和使用;")]),v._v(" "),l("li",[v._v("运行报表：支持实时查看运行数据，如任务数量. 调度次数. 执行器数量等；以及调度报表，如调度日期分布图，调度成功分布图等；")]),v._v(" "),l("li",[v._v("全异步：任务调度流程全异步化设计实现，如异步调度. 异步运行. 异步回调等，有效对密集调度进行流量削峰，理论上支持任意时长任务的运行；")]),v._v(" "),l("li",[v._v("跨语言：调度中心与执行器提供语言无关的 RESTful API 服务，第三方任意语言可据此对接调度中心或者实现执行器。除此之外，还提供了 “多任务模式”和“httpJobHandler”等其他跨语言方案；")]),v._v(" "),l("li",[v._v("国际化：调度中心支持国际化设置，提供中文. 英文两种可选语言，默认为中文；")]),v._v(" "),l("li",[v._v("容器化：提供官方docker镜像，并实时更新推送dockerhub，进一步实现产品开箱即用；")]),v._v(" "),l("li",[v._v("线程池隔离：调度线程池进行隔离拆分，慢任务自动降级进入”Slow”线程池，避免耗尽调度线程，提高系统稳定性；")]),v._v(" "),l("li",[v._v("用户管理：支持在线管理系统用户，存在管理员. 普通用户两种角色；")]),v._v(" "),l("li",[v._v("权限控制：执行器维度进行权限控制，管理员拥有全量权限，普通用户需要分配执行器权限后才允许相关操作；")])]),v._v(" "),l("Vssue",{attrs:{title:"XXL-JOB简介"}})],1)}),[],!1,null,null,null);_.default=e.exports}}]);