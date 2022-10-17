import React from 'react'
import { useSearchParams, useParams } from 'react-router-dom'//22.引入 useSearchParams 方法



export default function AboutMe() {

	//33.通过解构赋值，获取 Login 组件内通过 searchParams 传递的参数
	const [params] = useSearchParams()
	// console.log(params)
	const id = params.get('id')
	const name = params.get('name')

	//333. 获取 params 方式传过来的参数
	// const params = useParams()

	return (
		<>
			<div style={{backgroundColor: '#d39efd', height: '100vh'}}>PageTwo
				<div>这是 Login 传过来的 id : {id}</div>
				<div>这是 Login 传过来的 name : {name}</div>
				{/* <div>这是 Login 传过来的 id : {params.id}</div> */}
			</div>
		</>
	)
}
