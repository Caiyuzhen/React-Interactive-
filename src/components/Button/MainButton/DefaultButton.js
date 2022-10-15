// 统一管理 Button 组件
import { Button2, NewButton, GhostButton } from "../Button2"



//🔥🔥也可以在这一层导出最终的组件, 相当于 DefaultButton 的 variants
export default ({variant, ...rest}) => { //🔥🔥🔥加括号表示解构 {variant} , 拿到参数
	if(variant === 'Big') return <Button2 as={NewButton} {...rest}/>
	if(variant === 'Small') return <Button2 as={GhostButton} {...rest}/>
	return null;
}
