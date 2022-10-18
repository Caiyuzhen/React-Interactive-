import React from 'react'
import NotfoundPag from '../assets/img/404.jpg'
import { Link } from 'react-router-dom'

// 404 页面
export default function NotFound() {
  return (
	<div>
		<img src={NotfoundPag} alt="" style={{display:'block', width:'540px', height:'400px', margin: 'auto'}}/>
		<div style={{textAlign: 'center'}}>回到
			<Link to="/mainLayout">首页</Link>
		</div>
		<p style={{textAlign: 'center'}}>你访问的页面飞往了月球</p>
	</div>
  )
}
