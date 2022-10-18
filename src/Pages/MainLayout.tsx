import AboutMe from './AboutMe'
import Login from './Login'
import { Outlet, Link } from 'react-router-dom'//Outlet 为二级路由出口


export default function MainLayout() {
  return (
	<div>
		<h2>这是导航页面(一级路由)</h2>
			<p>
				{/* ⚡️可以通过 【link to】 跳转至二级路由，也可以通过【编程式导航】跳转到二级路由！注意， 这里 layout 设置为了 index ，所以路由路径跟一级路由一样！ */}
				<Link to='/mainLayout'>登录</Link>
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
