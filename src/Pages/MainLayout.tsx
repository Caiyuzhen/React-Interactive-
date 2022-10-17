import React from 'react'
import AboutMe from './AboutMe'
import Login from './Login'
import { Outlet, Link } from 'react-router-dom'



export default function MainLayout() {
  return (
	<div>
		<h2>这是导航页面(一级路由)</h2>
			<p>
				{/* ⚡️可以通过 link to 跳转至二级路由，也可以通过编程式导航跳转到二级路由！ */}
				<Link to='/mainLayout/login'>登录</Link>
				<Link to='/mainLayout/about'>关于我</Link>
			</p>
			<h4>👇这是二级路由的出口位置
				<Outlet />
				{/* <Login /> */}
				{/* <AboutMe /> */}
			</h4>
		
	</div>
  )
}
