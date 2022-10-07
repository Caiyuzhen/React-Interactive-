import React from 'react';



//...rest 拿到剩余参数, ⚡️定义 style 的 props 才能做到样式的合并！
const Button1 = ({style, rounded, variant, children, ...rest}) => {

	//🔥组件的多态写法一: 单独抽离样式（步骤1） ->  定义样式(比如圆角）
	const roundedStyle = {
		borderRadius: 24,
	}


	//🔥组件的多态写法二: 根据条件判断样式（步骤1） ->  定义样式(比如深浅模式）
	let variantStyle = {
		DarkMode: {
			backgroundColor: '#000080',
			padding: '16px 24px',
			color: 'white',
		},
		LightMode: {
			backgroundColor: '#FFE7BA',
			padding: '16px 24px',
			color: 'black',
		}
	}[variant]//🔥相当于 -> variantStyle[variant] 直接取 key ！！


	return (
		//...props 透传所有 props
		<button 
			className='Button1' 
			style={{
					border:'none', 
					padding: '10px 20px', 
					//基础命名颜色: https://htmlcolorcodes.com/color-names/
					backgroundColor: 'MediumSeaGreen',
					color: 'white',
					cursor: 'pointer',
					...(rounded && roundedStyle),//🔥组件的多态写法一：单独抽离样式（步骤2）  ->  判断 rounded 是否存在，存在的话就给 roundedStyle 的样式
					...variantStyle,//🔥组件的多态写法二: 根据条件判断样式（步骤2） ->  判断是哪个 variant，然后给 variantStyle 的样式
					...style,//⚡️⚡️拿到剩余参数！不然不生效
				}}
			{...rest}//⚡️⚡️拿到剩余参数！
		>{children}</button>
	);
}



export function RoundedButton({style, ...rest}) {
	return (
		<>
		</>
	)
}



export default Button1;
