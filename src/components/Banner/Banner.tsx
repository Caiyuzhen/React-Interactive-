import React from 'react'
import './banner.css'



export default function Banner() {

	const imgs = [
		'https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80',
		'https://images.unsplash.com/photo-1633783156075-a01661455344?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80',
		'https://images.unsplash.com/photo-1645511897949-3d687943386b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
	]

	return (
		<>
			<div className='scroller'>
				<div className='inner'>
					{imgs.map((img,index)=>{
						return(<img src={img} />)
					})}	
				</div>
			</div>
		</>
	)
	
}
