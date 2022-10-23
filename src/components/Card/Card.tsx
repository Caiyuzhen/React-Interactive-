import React from 'react'
import Tilty from 'react-tilty'
import './Card.css'

export default function Card() {

	return (
	<div>
		<Tilty 
			style={{ height: 200, width: 200}}
			className="tilty" 
			glare 
			scale={1.05} 
			maxGlare={0.2}
			transformStyle='preserve-3d'
			speed={300}
			>
     		 	<div className="inner">react-tilty</div>
    	</Tilty>
			
	</div>
	)
}
