import React from 'react'
import logo from './logo.svg'
import './App.css'
// import Sliders from './components/Slider/Sliders'
import Button, {RoundedButton} from './components/Button/Button'
import Banner from './components/Banner/Banner'
import Button1 from './components/Button/Button1'
import { Button2, NewButton, GhostButton } from './components/Button/Button2'
import DefaultButton from './components/Button/MainButton/DefaultButton'
import { lazy, Suspense } from 'react' // 懒加载
import Loading from './components/Loading/Loading'
import DownloadFile from './components/DownloadFile/DownloadFile'
import Card from './components/Card/Card'


const Sliders = lazy(()=> import('./components/Slider/Sliders'))//动态加载  懒加载  异步加载



function App() {
  return (
    <div className="App">
		
		<Card />

		<DownloadFile />

		{/* 👇包裹需要懒加载的组件, 然后用 fallback 来配置在空档时间要渲染的东西 */}
		<Suspense fallback={ <Loading/> }>
			<Sliders />
		</Suspense>


		{/* tsx 多态组件的写法 */}
		<Button as='a' href='http://www.google.com'>Click me</Button>
		<Button as='img' src='https://images.unsplash.com/photo-1574680722984-851c61fa55fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
		<Button as='h1'>大标题</Button>
		{/*  RoundedButton 的类型定义 Button 的类型！！*/}
		<RoundedButton size='large' children='大按钮'/>
		<Button as={RoundedButton} size='small' children='中按钮'/>

		<Banner />


		{/* jsx 传统多样式组件的写法 */}
		<Button1 rounded variant='LightMode'style={{}} >这是按钮1</Button1>
		<Button1 rounded variant='DarkMode'style={{}} >这是按钮2</Button1>



		{/* jsx 多态组件实现多样式的写法 */}
		<Button2 as='a' style={{}} href='https://github.com/'>Github</Button2>
		<Button2 as={NewButton} style={{}}>传入多态组件</Button2>
		<Button2 as={GhostButton} style={{}}>GhostButton</Button2>
		<DefaultButton variant='Big'>大按钮</DefaultButton>
    </div>
  );
}

export default App;
