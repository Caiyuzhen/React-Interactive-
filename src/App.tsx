import React from 'react'
import logo from './logo.svg'
import './App.css'
import Sliders from './components/Slider/Sliders'
import Button, {RoundedButton} from './components/Button/Button'
import Banner from './components/Banner/Banner'
import Button1 from './components/Button/Button1'

function App() {
  return (
    <div className="App">
		<Sliders />
		<Button as='a' href='http://www.google.com'>Click me</Button>
		<Button as='img' src='https://images.unsplash.com/photo-1574680722984-851c61fa55fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
		<Button as='h1'>大标题</Button>
		<RoundedButton size='large' children='大按钮'/>
		{/* 🔥🔥🔥嵌套组件！用 RoundedButton 的类型定义 Button 的类型！！*/}
		<Button as={RoundedButton} size='small' children='中按钮'/>

		<Banner />

		<Button1 
			rounded 
			variant='LightMode'
			style={{}} 
			>这是按钮1</Button1>
    </div>
  );
}

export default App;
