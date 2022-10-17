//配置路由的对应关系

/* 1.在根文件引入路由组件根方法
	createBrowserRouter    		创建路由实例的方法, 用来定义 path 跟 component 的对应关系
	RouterProvider 		   		作为组件进行渲染，并传入 createBrowserRouter 执行后生成的 router 实例

	2.调用 createBrowserRouter   方法来生成实例, 配置对应关系

	3.渲染 RouterProvider 组件并传入 createBrowserRouter 方法返回的实例对象 router
*/

import App from '../App';
import Login from '../Pages/Login';
import AboutMe from '../Pages/AboutMe';
import MainLayout from '../Pages/MainLayout';
import { createBrowserRouter, createHashRouter } from 'react-router-dom'//1.引入路由组件根方法(createBrowserRouter 为用来生产 history 模式的路由，createHashRouter 为用来生成 hash 模式的路由)


const router = createHashRouter([ //2.路由配置
	{
		path: '/', //什么路径
		element: <App />//渲染什么组件
	},
	{
		path: '/mainLayout', 
		element: <MainLayout />,
		children: [ //一、在根路由配置文件中配置 children 属性
			{
				path: 'login', 
				element: <Login/>
			},
			{
				path: 'about', 
				element: <AboutMe />
			}
		]
	},
	// {
	// 	path: '/login', //什么路径
	// 	element: <Login/>//渲染什么组件
	// },
	// {
	// 	path: '/about', //什么路径
	// 	// 222.params 传参数, 需要在这里配置 id 等参数的位置
	// 	// path: '/about/:id',
	// 	element: <AboutMe />//渲染什么组件
	// }
])

export default router;