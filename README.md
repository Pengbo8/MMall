# MMall商城

👉 [商城首页](https://chasen8.github.io/MMall/dist/view/index.html)<br>
👉 [登录](https://chasen8.github.io/MMall/dist/view/user-login.html)<br>
👉 [注册](https://chasen8.github.io/MMall/dist/view/user-register.html)<br>
👉 [购物车](https://chasen8.github.io/MMall/dist/view/cart.html)<br>
👉 [商品详情](https://chasen8.github.io/MMall/dist/view/detail.html)<br>
👉 [我的订单](https://chasen8.github.io/MMall/dist/view/order-list.html)<br>
👉 [个人中心](https://chasen8.github.io/MMall/dist/view/user-center.html)<br>
👉 [找回密码](https://chasen8.github.io/MMall/dist/view/user-pass-reset.html)<br>
👉 [修改密码](https://chasen8.github.io/MMall/dist/view/user-pass-update.html)<br>
👉 [关于MMall](https://chasen8.github.io/MMall/dist/view/about.html)<br>
👉 [商品列表](https://chasen8.github.io/MMall/dist/view/list.html?keyword=%E6%89%8B%E6%9C%BA)<br>
👉 [订单支付](https://chasen8.github.io/MMall/dist/view/payment.html)<br>
👉 [订单列表](https://chasen8.github.io/MMall/dist/view/order-list.html)<br>
👉 [订单详情](https://chasen8.github.io/MMall/dist/view/order-detail.html)<br>
👉 [结果页](https://chasen8.github.io/MMall/dist/view/result.html)<br>

## ✏️ 项目初始化
以上网址只能浏览页面，不能进行登录、注册、加入购物车等操作，这是因为这个项目不是纯静态的，要访问服务器，github pages只能挂载静态文件，所以无法进行登录等操作。如需操作要把本项目拉取到本地。

1. 安装nodejs环境,推荐使用v4.4.7<br>
下载地址 : https://nodejs.org/download/release/v4.4.7/ 
1. 全局安装webpack<br>
命令: npm install -g webpack
1. git clone 本项目到本地<br>
命令: git clone xx
1. 在项目根目录执行npm初始化<br>
命令: npm install
1. 启动项目<br>
开发模式: npm run dev (windows系统上为npm run dev_win)
1. 开发模式下预览项目<br>
访问：http://localhost:8088/dist/view/index.html
1. 打开chrales<br>
刷新项目页面，找到404报错的页面，右击Map remote，设置如图，其他的404报错页面也是如此处理，根据404报错页面决定Path为/user/或/cart/等。完成即可正常注册登录访问。<br>
![N|Solid](http://m.qpic.cn/psb?/V14DPIsG3ADUGY/XkpQnu5YKP5Wa9iofwhjChouD8bmD0HdkwYAvgOnhR4!/b/dGcBAAAAAAAA&bo=iAM7AgAAAAADJ7A!&rf=viewer_4)<br>

## ✏️ 技术

- HTML：HTML5；实现基本的 HTML 结构
- CSS：CSS3；渐进增强 or 优雅降级
- jQuery：JavaScript的框架
- Unslider：jQuery轮播图插件
- webpack：打包工具
- webpack-dev-server：小型的Node.js Express服务器
- Node.js：包管理器NPM的使用，package.json 如何配置
- EJS模板引擎：填充数据的模板
- Chrales：代理工具

<br>

## ✏️ 收获

1. 加深了对 html5 和 css3 的一些特性的掌握，如 border-radius、transition 等。
1. 能够快速掌握并使用一个简易 JS 插件，学会如何看官方文档。
1. 最大收获是对项目开发有了更完整的认识，学会如何自己解决问题，明白学习的方向。
1. 知道需求分析、架构设计和技术选型，了解如何看后端接口文档，前后端如何配合。
1. 学会了使用Github管理项目。
1. 熟悉了Node.js的基本知识、包管理器npm的使用，代理工具chrales和Fiddler的使用。
1. 学会如何搭载一个开发环境，从没有接触过webpack到已经能熟练使用webpack压缩代码，用webpack-dev-server搭载实时刷新的服务器，大大提高了工作效率。
1. 由此也查询了一下其他搭载服务器的办法，包括有Gulp和http-server，还有谷歌的插件livereload，有的需要配合使用。
1. 学会开发时对可复用部分进行提取，单独通用开发，然后将需求变成一块一块，进行模块开发。
1. 知道了数据统计的方法，基本的SEO优化，访问数据统计，和大概的项目上线过程。

<br>

## ✏️ 开发流程

1. 需求分析：用户端（展示、购物车、下单、支付、订单、用户）和后台管理
1. 架构设计：分层架构和模块化
1. 技术选型：软件过程、前后端分离、构建工具、框架、版本控制、发布方式
1. 前后端配合方式和数据接口定义：前端（数据请求、数据处理、页面展示）
1. 开发环境搭载（安装nodejs、npm）
1. git项目配置（安装后vim .gitconfig）
1. git远程仓库建立（配置sshkey—克隆ssh—gitignore配置—切换分支）
1. 开发工具准备（sublime、chrome、Charles、Photoshop、LiveReload）
1. 目录结构设计
1. webpack环境配置（webpack.config.js配置文件，npm安装插件）
1. 通用功能开发
1. 分模块开发（用户模块、商品模块、购物车模块、订单模块、支付模块）
1. 生产环境适配（添加favicon、线上域名的分离、添加dns-prefetch、适配完成后对线上打包结果做回归测试）
1. SEO优化

