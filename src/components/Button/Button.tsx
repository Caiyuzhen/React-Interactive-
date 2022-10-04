import React, { ReactNode } from "react"
/*
	🐲 可以自定义组件类型！【多态组件】！
		比如 as 为 p 则是 p 标签！
		as 为 h1 则是 h1 标签！
*/



// E 这个范型是用来限制 as 的类型的！
type ButtonOwnProps<E extends React.ElementType = 'button'> ={
	as? : E 	//动态的方式，用【范型】规范 as 的类型。     方法二是： as? : keyof JSX.IntrinsicElements 		//⚡️⚡️写死的方式，IntrinsicElements 包含了所有的内置的元素类型, 所以能够通过 key 获取到'类名'
	children? : React.ReactNode 		//⚡️用户可以传入任何类型的子节点(文字、none、组件等)
}



// 在范型内 extends XXX，相当于把 E 限制为 XXX 的类型, 在这里就是限制为(React 或 原生)元素的标签, 默认可以 = 'button' 类型
export default function Button<E extends React.ElementType = 'button'>({
	as, children, style, ...rest}: 	//{} ⚡️相当于直接解构赋值出 as 跟 children 两个变量！！然后直接定义它们的类型！: 冒号后面为类型
	ButtonOwnProps<E> & Omit<React.ComponentProps<E>, 'as' | 'children'>){  //⚡️& 是联合声明，后面的这个类型要根据前面的类型类变化，就是用范型, 这里的 <E> 就是规范 as 的类型, Omit 是忽略重复的类型！


	const Component = as ?? 'button' //🔥如果 as 不存在，默认就是 'button'

	return(
		//🔥🔥需要上边定义 as keyof JSX.IntrinsicElements ！！不然没法识别类型！！
		<Component 
			className="MainButton" 
			style={{border:'none', borderRadius: 200, padding: '10px 20px', backgroundColor: '#3370FF', color: 'white', cursor: 'pointer', ...style,}}
			{...rest}
		>{children}</Component>
	)
}




// ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————




//用来规范 RoundedButton 内参数的 Props 类型！
type RoundedButtonProps = {
	size: 'large' | 'medium' | 'small'
}


// 这个按钮可以传入上面那个组件内部定义的 as 属性，来改变组件的类型！
export function RoundedButton({style, size='medium', ...rest}: React.ComponentProps<'button'> & RoundedButtonProps){//🔥用原生的 React.ComponentProps -> button 类型来规范参数！ & 表示再增加个联合类型！在外部定义！


	//🔥🔥定义一个 style 变量，根据传入的 size 属性不同来改变样式！不用 styleComponent 的写法，本质都是一样的
	const sizeStyle = {
		large: {
			fontSize: 32
		},
		medium: {
			fontSize: 24
		},
		small: {
			fontSize: 12
		}
	}[size] //🔥相当于 sizeStyle[size], 根据 size 来索引！


	return (
		<button 
			style={{
				...style, //解构出所有 props 样式！
				...sizeStyle, //🔥🔥解构出 sizeStyle 样式！
				border: 'none',
				borderRadius: 200,
			}}
			{...rest} //解构出所有内容！
		/>
	)
}