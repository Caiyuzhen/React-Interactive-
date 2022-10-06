import React, { FC, useEffect, useState } from 'react'
import './banner.css'



/**  
	*基于时间间隔重复调用的 callback 的 hooks
	*@param {*} callback
	*@param {*} interval
*/

// 时间间隔
function useInterval(callback: (x:number)=>void, interval: number) : void {
	const time = useEffect(() => {
		const start = new Date().getTime()
		const I = setInterval(() => {
			callback( (new Date().getTime()) - start )
		}, interval)
		clearInterval(I)
		return () => clearInterval(I)
	}, [])
}



/**
 * 实现 slider 的底层逻辑
 * @param {*} N 
 */

function useSlider(N:number, speed = 3000) : number{

	const [slider, setSlider] = useState(0) //slider 表示播放到第几张了

	useInterval((diff) : void => {
		setSlider(_ => Math.floor(diff / speed) % N)
	}, 300)
	return slider
}




export default function Banner() {

	const imgs = [
		'https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80',
		'https://images.unsplash.com/photo-1633783156075-a01661455344?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80',
		'https://images.unsplash.com/photo-1645511897949-3d687943386b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
	]

	const slider = useSlider(imgs.length)  //🔥🔥使用 useSlider() 函数中的 hook ！

	return (
		<>
			{/* React 中 zIndex 要添加个绝对定位才生效 */}
			<div className='scroller' style={{position: 'absolute',zIndex:12}}>
				<div 
					className='inner' 
					style={{
						width: `${imgs.length * 100}%`, //计算宽度
						transform: `translateX(-${100 * slider / imgs.length}%)`
						
					}}
				>
					{imgs.map((img,index)=>{
						return(<img key={index}  alt=''  src={img}  style={{ width:`${100 / imgs.length}%` }}/>)
					})}	
				</div>
			</div>
		</>
	)
	
}
