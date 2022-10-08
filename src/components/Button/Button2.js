/*🐲 🎈 JSX 实现多态组件的写法
			比如 as 为 p 则是 p 标签！
			as 为 h1 则是 h1 标签！
*/

import React from 'react'



//🔥 as 用来替换元素
const Button2 = ({as, style, ...rest}) => {

	const Ele = as ?? 'button' //⚡️⚡️⚡️空值合并运算符, 如果 as 为空或者 null，那么则执行右侧的运算，可以用来赋予默认值

	return (
		<Ele 
			style={{
				border:'none', 
				padding: '10px 20px', 			
				backgroundColor: 'SteelBlue',
				color: 'white',
				cursor: 'pointer',
				...style,
			}}
			{...rest}
		/>

	)
}



//🔥一个新的按钮，传入到上面的多态组件去做测试（可以继承多态组件的样式)
//⚡️⚡️记得要入参！不然作为类型传入 Button 2 时没法获得样式！！
export function NewButton({style, ...rest}) {//这里也需要传入 style，不然 style 会被 Button2 的给覆盖！
	return (
		<button
			style={{
				...style,//这个 style 是默认的继承自 Button2 的样式
				borderRadius: 200,
			}}
			{...rest} 
		/>
	)
}



//🔥另一个新的按钮，传入到上面的多态组件去做测试（可以继承多态组件的样式)
export function GhostButton({style, ...rest}) {
	return (
		<button
			style={{
				...style,//这个 style 是默认的继承自 Button2 的样式
				backgroundColor: '#FFE7BA',
				padding: '16px 32px',
				color: 'black',
			}}
			{...rest}
		/>
	)
}



export default Button2
