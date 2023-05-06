import React, { Component } from 'react';

// 🔥🔥🔥【高阶函数（当参数是函数或者返回值是函数）的函数】


// 🔥🔥🔥【高阶组件(组件表示构造函数)（函数的参数是一个组件,并且能够返回一个组件）】 -->  用来复用逻辑  -->  只关心【数据逻辑部分】, 👀 不处理渲染部分
const withSize = (Comp: React.ComponentClass) => { // T extends object 限制传入的组件必须是一个类组件, 然后根据不同的 T 进行类型推断
	return class reSize extends Component {
		state = {
			xPos: window.innerWidth,
			yPos: window.innerHeight
			// xPos: document.documentElement.clientWidth,
			// yPos: document.documentElement.clientHeight
		}
	
		getPos = () => {
			this.setState({
				xPos: window.innerWidth,
				yPos: window.innerHeight
			})
		}
	
		// 组件挂载时，监听窗口变化
		componentDidMount() { 
			window.addEventListener('resize', this.getPos)
		}
	
		// 组件卸载时，移除监听
		componentWillUnmount() {
			window.removeEventListener('resize', this.getPos)
		}

		render() {
			// 【🔥核心:把处理完的数据原封不动的返回给 Component 组件】
			return <Comp {...this.state}/> //不关心渲染部分, 传进来是什么就返回什么, 【只处理数据逻辑部分】👈
		} 
	}
}



// 组件 1 , 只处理渲染部分
export class Sub extends Component<Partial<{ xPos: number; yPos: number }>> { //🔥 Partial 是 TypeScript 内置的类型，它可以将一个类型中的所有属性都变成可选属性，即使这些属性原本是必需属性也可以变成可选属性, 相当于都加了 ？
	render() {
		return (
			<div>
				<button>x: {this.props.xPos} -- y: {this.props.yPos}</button>
			</div>
		)
	}
}


// 组件 2 , 只处理渲染部分
export class Foo extends Component<Partial<{ xPos: number; yPos: number }>> { //🔥 Partial 是 TypeScript 内置的类型，它可以将一个类型中的所有属性都变成可选属性，即使这些属性原本是必需属性也可以变成可选属性, 相当于都加了 ？
	render() {
		return (
			<div>
				<p>x: {this.props.xPos}</p>
				<p>y: {this.props.yPos}</p>
			</div>
		)
	}
}


const SubFunc = withSize(Sub) //wiSize（...) 返回的是一个组件，所以需要传入一个组件
const FooFunc = withSize(Foo) //wiSize（...) 返回的是一个组件，所以需要传入一个组件


export default class MainComp extends Component{
	render() {
		return (
			<div>
				<SubFunc />
				<FooFunc />
			</div>
		)
	}
}