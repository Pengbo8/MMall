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

## 使用
以上网址只能浏览页面，不能进行登录、注册、加入购物车等操作，这是因为这个项目不是纯静态的，要访问服务器，github pages只能挂载静态文件，所以无法进行登录等操作。如需操作要把本项目拉取到本地。
1.安装nodejs环境,推荐使用v4.4.7
下载地址 : https://nodejs.org/download/release/v4.4.7/
2.全局安装webpack
命令: npm install -g webpack
4.git clone 本项目到本地
命令: git clone xx
5.在项目根目录执行npm初始化
命令: npm install (--registry=https://registry.npm.taobao.org)
6.启动项目
开发模式: npm run dev (windows系统上为npm run dev_win)
生产模式: npm run dist (windows系统上为npm run dist_win)
7.开发模式下预览项目
访问：http://localhost:8086/dist/view/index.html
8.打开chrales






![N|Solid](http://m.qpic.cn/psb?/V14DPIsG3ADUGY/idA2DrttqUhiL7hCcPssoKmo7I5u8UigTb0b.QtPfNU!/b/dPMAAAAAAAAA&bo=1QSAAgAAAAADB3E!&rf=viewer_4)

## 技术

- HTML：实现基本的 HTML 结构
- CSS：渐进增强 or 优雅降级；自己整理的 reset.css 来统一页面初始样式；相对单位 rem；媒体查询；清除浮动等
- JS：增加了一些特效，通过特效来改进用户体验；解决了一些浏览器兼容性问题；用 eslint 做 js 代码校验
- OwlCarousel2.js：响应式轮播图插件
- Gulp：自动化构建工具，使用Gulp进行自动化打包发布
- Node.js：同步异步编程方式的区别，包管理器NPM的使用，package.json 如何配置，http-server 的使用等知识
- Picturefill：填平浏览器picture标签的兼容




## 收获

1. 对常见的响应式布局方法（CSS Media Query、Flex 弹性布局、Bootstrap 栅格系统）有了更深的认识
2. 加深了对 css3 的一些特性的掌握，如 border-radius、transition 等
3. 能够快速掌握并使用一个简易 JS 插件
4. 熟悉了Node.js的基本知识、包管理器npm的使用、httpserver的使用
5. 熟悉了自动化构建工具 Gulp 的基本流程
