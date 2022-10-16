# 为什么需要前端路由
* 能够避免页面跳转，提升用户体验

# 前端路由的本质是什么？
* 通过不同的 path 来匹配不同的 component, 本质是路径和组件的对应关系

# 依赖文件
* yarn add react-router-dom

# 如何使用路由？
1. 在根文件引入**路由方法**和**路由组件**, 实例化路由方法 (也也可以抽离路由方法，然后在根路径进行引入)
2. 调用 {createBrowserRouter, createHashRouter}   方法来生成实例, 配置对应关系
3. 在 index 根文件渲染 RouterProvider 组件, 传入 createBrowserRouter 方法返回的实例对象 router

# 两种路由模式
**history 模式**
- 需要后端支持) 
- url 表现: url/login 
**Hash 模式**
- 不需要后端支持
- url 表现: url/#/login

# 编程式导航（路由跳转）
1. 导入 useNavigate 方法
2. 执行 useNavigate 方法, 得到跳转函数
3. 调用跳转函数