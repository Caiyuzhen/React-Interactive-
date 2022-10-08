/** @jsxImportSource @emotion/react */
// 👆🔥🔥通过注释来动态的引入 babel 的翻译器，用 emotion 的翻译器！！


/*🐲🎈JSX 实现多态组件的写法
		   比如 as 为 p 则是 p 标签！
		   as 为 h1 则是 h1 标签！ */

import React from 'react'
import { css } from '@emotion/react'



//🔥 as 用来替换元素
//相当于组件的基座
export function Button2({as, style, ...rest}) {

	const Ele = as ?? 'button' //⚡️⚡️⚡️空值合并运算符, 如果 as 为空或者 null，那么则执行右侧的运算，可以用来赋予默认值

	return (
		<Ele 
			style={{
				border:'none', 
				padding: '10px 20px', 			
				backgroundColor: 'Brown',
				color: 'white',
				cursor: 'pointer',
				...style,
			}}
			// 👇引入 emotion 后，会增加个 css 的模板语法，可以用来添加 hover 等选择器的样式
			css={css`
				&:hover {
					filter: brightness(1.6);//🔥高光
				};
				&:active {
					opacity: .4;
				}
			`}
			{...rest}
		/>

	)
}



//🔥一个新的按钮，传入到上面的{多态组件}去做测试（可以继承多态组件的样式)
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



//🔥另一个新的按钮，传入到上面的{多态组件}去做测试（可以继承多态组件的样式)
export function GhostButton({style, ...rest}) {
	return (
		<button
			style={{
				...style,//这个 style 是默认的继承自 Button2 的样式
				border: '3px solid Maroon',
				backgroundColor: 'Sienna',
				padding: '16px 32px',
				color: 'black',
			}}
			{...rest}
		/>
	)
}


//也可以在这一层导出最终的组件，
export default ({variant, ...rest}) => { //🔥🔥🔥加括号表示解构 {variant} , 拿到参数
	if(variant === 'NewButton') return <Button2 as={NewButton} {...rest}/>
	if(variant === 'GhostButton') return <Button2 as={GhostButton} {...rest}/>
}
