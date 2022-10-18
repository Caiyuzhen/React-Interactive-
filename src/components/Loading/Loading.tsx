import React from 'react'
import LoadingImg from '../../assets/img/loading.gif'

//模拟加载组件
export default function Loading() {
  return (
	<div>
		<img src={LoadingImg} alt="" style={{display:'block', margin: 'auto', width:'400px', height:'200px'}}/>
	</div>
  )
}
