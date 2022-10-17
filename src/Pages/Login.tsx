import React from 'react'
import { useNavigate } from 'react-router-dom'//1.引入 useNavigate 放啊



export default function Login() {
	//2.执行 useNavigate 方法得到跳转函数
	const navigate = useNavigate()

	const goAbout = () => {
		//3.调用跳转函数, 找的是配置路由中的 path
		// navigate('/about')

		//4.如果添加 replace: true, 则不会在 history 中留下记录，就是替换掉上一层的路由
		// navigate('/about', {replace: true}) 

		//11.路由传参方式一: searchParams 通过 ? 传参
		// navigate('/about?id=1009&&name=Zen')//如果是一级路由，那就还是 /about
		navigate('/mainLayout/about?id=1009&&name=Zen')//🔥🔥因为变成了二级 chindren 路由, 所以需要加上一级路由的 path！！

		//111.路由传参方式二: params 传参
		// navigate('/about/1010')
	}

	return (
	<>
		<div
			style={{background: '#4649FF', color: 'white',height:'80vh'}}>PageOne
			<button onClick={ goAbout }>跳转到 about Me 路由页面</button>
		</div>
		
	</>
	)
}
