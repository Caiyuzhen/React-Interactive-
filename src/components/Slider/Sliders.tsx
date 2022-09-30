import React, { FC, ReactElement, useState } from 'react'
import './sliders.css'

interface IProps {
}



const Sliders:FC<IProps> = ():ReactElement => {

	//🔥🔥🔥用来控制让哪个卡片展开！当 current 数字 === 遍历出来的 index 序号时，展开!!
	const [current, setCurrent] = useState<number>(0)//🔥 0 表示显示【第一个】!!

	return (
	<>
		<h1>Accordion Demo</h1>
		<div id='container'>
			{
				//🔥🔥循环创建 4 个 slider, ⚡️然后根据条件判断是否要添加 'active' 这个展开的类名！
				[1,2,3,4,5,6].map((item, index) => 
					<div 
						key={item} 
						onMouseEnter={ ()=> {setCurrent(index)} }
						className={ `item ${current === index ? 'active' : ''}` }> 
						{index} </div>
				)
			}
		</div>
	</>
	)
}



export default Sliders
