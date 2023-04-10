import React from 'react';
import '../style/btn.css'
// 定义接口
interface HelloState {
    count: number;
    isRed: boolean;
}
class Hello extends React.Component<{}, HelloState> {
  // 只读
  readonly state = {
    count: 1,
    isRed: true,
  };
  // 受保护的
  protected onAdd (e: React.MouseEvent<HTMLButtonElement>) {
    this.setState({
      count: this.state.count + 1,
      isRed: !this.state.isRed,
    })
  }
  // 公用的
  public render() {
    // jsx 语法
    return (
        <div>
          <h1>{ Date.now() }</h1>
          <button
              data-btn="1234665666"
              onClick={ this.onAdd.bind(this) }
              className={ this.state.isRed ? 'btn' : 'btn active'}
          >
            { this.state.count }
          </button>
          <button className={ 'btn' }>12312</button>
        </div>
    )
  }
}
export default Hello;
// 导出是因为在 main.tsx中要引入