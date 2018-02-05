## resume-2

#### 给简历添加轮播
- 进入 Swiper 官网
- 在页面引入 Swiper（CSS 和 JS）

![](https://i.loli.net/2018/01/31/5a716bb1a4a1e.png
)

按照步骤一个个添加
[link](http://idangero.us/swiper/get-started/)

#### 模块化
把简历的JS代码模块化分成多个JS文件

#### 立即执行函数
用`!function(){}.call`把js代码的全局变量包成局部变量

#### 添加MVC的view和controller
用view和controller把js代码分成模块

#### 添加数据库
引入LeanCloud,添加留言板功能

#### 添加MVC的model

#### 添加面向对象类重新封装代码
- 新建view.js，controller.js和model.js
- 把用MVC封装好的重复代码提出来，分别放进view.js，controller.js和model.js里面，使代码能更加开放性使用
