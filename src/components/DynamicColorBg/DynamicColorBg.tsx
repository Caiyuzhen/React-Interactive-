import React from 'react'
import './DynamicColorBg.css'


export const DynamicColorBg = () => {
  return (
	<div className="mainbg">
		<div 
			className="colorBg"
			style={{
				width: 400,
				height: 400,
			}}
			></div>
	</div>
  )
}


export default DynamicColorBg