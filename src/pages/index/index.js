// 必须声明 Taro 和组件:https://nervjs.github.io/taro/docs/jsx.html#%E5%BF%85%E9%A1%BB%E5%A3%B0%E6%98%8E-taro-%E5%92%8C%E7%BB%84%E4%BB%B6
import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text} from '@tarojs/components'
import {connect} from '@tarojs/redux'

import {add, minus, asyncAdd} from '../../actions/counter'

import './index.styl'

// 这里的counter2，是src/reducers/counter.js
@connect(({counter2}) => ({
  counter2
}), (dispatch) => ({
  add() {
    dispatch(add())
  },
  dec() {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
  }
}))

class Index extends Component {
  // Taro 的页面同样是继承自 Component 组件基类，每一个页面都拥有自己配置 config，这个配置参考自微信小程序的页面配置，在编译成小程序时，将会生成跟页面 JS 文件同名的 json 配置文件；在编译成 H5 时，config 配置中 navigationBarTitleText 将会被用来设置当前页面的标题。
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props)
    console.log(nextProps)
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  // 页面 JS 要求必须有一个 render 函数，函数返回 JSX 代码
  render() {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter2.num}</Text></View>
        <View><Text>Hello, World999</Text></View>
      </View>
    )
  }
}

export default Index
