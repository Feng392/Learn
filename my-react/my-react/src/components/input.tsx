import React from 'react'

export default class InputElement extends React.Component {
  state = {
    inputValue: ''
  };
  onInput(e: React.MouseEvent<HTMLInputElement>) {
    this.setState({
      inputValue: (e.target as HTMLInputElement).value
    })
  }

  // 组件挂在完成后
    componentDidMount() {
        console.log('componentDidMount')
      this.setState({
        inputValue: 'hello'
      })
    }
  render() {
    return (
        <div>
          <input type="text" value={ this.state.inputValue} onInput={ this.onInput.bind(this)}/>
        </div>
    )
  }
}