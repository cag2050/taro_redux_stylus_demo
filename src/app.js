import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.styl'

const store = configStore()

class App extends Component {
  // 通常入口文件会包含一个 config 配置项，这里的配置主要参考微信小程序的全局配置而来，在编译成小程序时，这一部分配置将会被抽离成 app.json，而编译成其他端，亦会有其他作用。
  config = {
    // 页面创建好后如果需要渲染展示，则需要在项目入口文件 app.js 中 config 的 pages 数组中进行指定，例如 index 页面，需要如下进行配置，页面配置需要指定到页面具体的 js 文件，可以不带 .js 后缀
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
