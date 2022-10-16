import React from 'react'
import { useNavigate } from 'react-router-dom'//1.引入 useNavigate 放啊



export default function Login() {
	//2.执行 useNavigate 方法得到跳转函数
	const navigate = useNavigate()

	const goAbout = () => {
		//3.调用跳转函数
		navigate('/about')
	}

	return (
	<>
		<div
			style={{background: '#3370ff', color: 'white',height:'80vh'}}>PageTwo
		</div>
		<button onClick={ goAbout }>跳转到 about Me 路由页面</button>
	</>
	)
}
