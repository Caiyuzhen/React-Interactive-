import React, { ReactElement, useEffect } from 'react'
import downloadIcon from '../../assets/svg/icon-download.svg'


/* Blob 对象能够实现的功能有：
      大对象的分片上传
	  从互联网上下载数据
	  Blob 作用 URL
	  Blob 转为 Base64
	  图片压缩
	  生成 PDf
	  ...
*/



export default function DownloadFile() {

	//⚡️下载网络图片
	const imgURL = 'data:image/png;base64,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'

	const downloadData = (url: string) => {
		const xhr = new XMLHttpRequest()
		xhr.open('GET', url)
		xhr.responseType = 'blob'//响应为 blob 类型的数据
		xhr.send()
		xhr.onload = function () {//加载传回来的数据
			// if (xhr.status === 200) {
				const fileBlob = xhr.response
				// console.log(fileBlob)
				const fileURL = URL.createObjectURL(fileBlob) //将 blob 转为 URL 地址, 这样就不会跨域了
				// console.log(fileURL)
				const elementA = document.createElement('a')// 创建一个 a 标签然后把它的 href 属性设置为 fileURL, 然后触发点击事件
				elementA.setAttribute('href', fileURL)//设置链接属性
				elementA.setAttribute('download', '')//设置下载属性
				elementA.click()//自动触发点击下载的操作
			// }
		}
	}

	// useEffect(()=>{
	// 	downloadData(imgURL)
	// },[])


	//⚡️获取本地选中的文件并进行下载
	const downFiles = (target: HTMLInputElement) => {
		//排除掉 null 的情况
		if (target.files) {
			//👋获取选中的文件
			let file = target.files[0]
			console.log(file);

			//☁️下载选中的图片
			const a = document.createElement("a")
			a.setAttribute("download", "file")//可以设置文件也可以设置 href 来下载
			a.href = URL.createObjectURL(file)
			a.click()
		}
	}


	//⚡️获取本地图片并进行预览
	const readFiles = (target: HTMLInputElement) => {
		//排除掉 null 的情况
		if (target.files) {
			//👋获取选中的文件
			let file = target.files[0]

			//创建一个要预览的 【图片】元素
			let img = new Image()
			// 方法一（同步的方式）：
			// img.src = URL.createObjectURL(file)
			// document.body.appendChild(img)

			// 方法二（异步的方式）：
			let fileReader = new FileReader()//实例化
			document.body.appendChild(img)
			fileReader.onload = function () {//当资源下载完毕后
				img.src = fileReader.result as string //将读取到的文件赋值给 img 的 src 属性
			}
			fileReader.readAsDataURL(file)//读取文件的路径
		}
	}
	

	return (
	<div style={{zIndex: 10,position: 'absolute'}}>
		{/* 实现点击下载图片 */}
		<img src={downloadIcon} onClick={() => downloadData(imgURL)}/>
		{/* <a download href="" onClick={() => downloadData(imgURL)}> */}{/* </a> */}

		{/* 读取文件并进行下载 */}
		<input type="file" onChange={(e)=>{downFiles(e.target)}}/>

		{/* 读取文件并在页面中进行预览 */}
		<input type="file" onChange={(e)=>{readFiles(e.target)}}/>
	</div>
	)
}
