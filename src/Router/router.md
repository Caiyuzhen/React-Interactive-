# 为什么需要前端路由
* 能够避免页面跳转，提升用户体验

# 前端路由的本质是什么？
* 通过不同的 path 来匹配不同的 component, 本质是路径和组件的对应关系

# 依赖文件
* yarn add react-router-dom

# 如何使用路由？
1. 在根文件引入**路由方法**和**路由组件**, 实例化路由方法 (也也可以抽离路由方法，然后在根路径进行引入)
2. 调用 {createBrowserRouter, createHashRouter}   方法来生成实例, 配置对应关系
3. 在 index 根文件渲染 RouterProvider 组件, 传入 {createBrowserRouter} 方法返回的实例对象 router

# 两种路由模式
**history 模式**
- 需要后端支持) 
- url 表现: url/login 
**Hash 模式**
- 不需要后端支持
- url 表现: url/#/login

# 编程式导航（路由跳转）
1. 导入 {useNavigate} 方法
2. 执行 {useNavigate} 方法, 得到跳转函数
3. 调用跳转函数
4. 替换路由记录: 如果添加 replace: true, 则不会在 history 中留下记录，就是替换掉上一层的路由

# 路由传参
**方式一 searchParams 方式**
- 在跳转方法内的 ? 后方携带参数: navigate('/about?id=1&name=jack')
- 在需要获取参数的组件内 引入 {useSearchParams} 方法
- 解构赋值，获取 XX 组件内的参数: const [params] = useSearchParams()
**方式二 params 方式**
- 在传参组件内: navigate('/about/1010')
- 在路由根配置路径内: path: '/about/:id',
- 在需要获取参数的组件内 引入 useParams 方法
- 解构赋值，获取参数: const params = useParams()

# 嵌套路由(局部内容进行切换)
1. 在根路由配置文件中, 配置 children 属性
2. 在 Layout 组件内, 通过 {Outlet} 方法渲染二级路由的出口
3. 在 Layout 组件内,使用 {Link} 方法来配置声明式导航
- 注意: 二级路由的路径 = 一级路由的路径 + 二级路由的路径

# 默认二级路由的设置(比如默认会渲染出二级路由的内容)