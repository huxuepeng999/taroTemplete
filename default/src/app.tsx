import React, { Component } from "react";
import "./app.less";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import 'taro-ui/dist/style/index.scss' 

class App extends Component<any, any> {

  componentDidMount() { }

  onLaunch(options) { }

  componentDidShow() { }

  componentDidHide() { }

  // this.props.children 是将要会渲染的页面
  render() {
    return (
      <RecoilRoot>
        <React.Suspense fallback={<div>加载中...</div>}>
          {this.props.children}
        </React.Suspense>
      </RecoilRoot>
    )
  }
}

export default App;
