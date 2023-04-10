import React from 'react'
import '../style/modal.scss'

export default class Dialog extends React.Component {
  readonly state = {
    isClick: false,
    list: ['a', 'b', 'c'],
  };
  getElementsP() {
    return this.state.list.map((item, index) => (<div key={ index }>{ item}</div>))
  }
  // 关闭弹窗
  onclose() {
    this.setState({
      isClick: !this.state.isClick
    })
  }
  // 阻止冒泡
  stop(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation()
  }
  // 显示弹窗
  getElementModal() {
    if (this.state.isClick) {
      return (
          <div className='box' onClick={ this.onclose.bind(this) }>
            <div className='modal' onClick={ (e) => this.stop(e) }>
              <div
                  className='close'
                  onClick={ this.onclose.bind(this) }
              >
                x
              </div>
              <div>标题</div>
              { this.getElementsP() }
              <div>
                <button onClick={ this.onclose.bind(this) }>取消</button>
                <button onClick={ this.onclose.bind(this) }>确定</button>
              </div>
            </div>
          </div>

      )
    } else {
      return null
    }
  }
  onClick() {
    this.setState({
        isClick: !this.state.isClick
    })
  }
  render() {
    return (
        <div className='body'>
            { this.getElementModal()}
            <button onClick={ this.onClick.bind(this) }>点击弹出</button>
        </div>
    )
  }
}