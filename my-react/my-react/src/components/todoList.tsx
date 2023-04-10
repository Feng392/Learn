import React from 'react'

export default class TodoList extends React.Component {
  protected isRevise = false;
  state = {
    inputValue: '',
    list: []
  };
  onInput(e: React.MouseEvent<HTMLInputElement>) {
    this.setState({
      inputValue: (e.target as HTMLInputElement).value
    })
  }
  // 增加
  onAdd(e: React.MouseEvent<HTMLButtonElement>) {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }
  // 删除
    onDelete(currentIndex: number){
        this.setState({
            list: this.state.list.filter((item, index) => index !== currentIndex)
        })
    }
  //   修改
    onRevise(currentIndex: number) {
      this.isRevise = true;
      this.setState({
          list: this.state.list.map((item, index) => {
              if (index === currentIndex) {
                  return <input type="text" />
              }
              return item
          })
      })
    }
  render() {
    return (
        <div>
          input: <input type="text" value={ this.state.inputValue} onInput={ this.onInput.bind(this)}/>
          <button onClick={this.onAdd.bind(this)}>增加</button>
          <ul>
            {
              this.state.list
                  .map((item, index) =>
                      <li key={index}>
                        {/*{ this.isRevise ? <input type="text" ref={'inp'}/> : {item}}*/}
                        <button onClick={ () => this.onDelete(index)}>删除</button>  // 箭头函数传参 箭头函数this指向声明时候的指向上下文
                        {/*<button onClick={ this.onDelete.bind(this, index)}>删除</button>  */} // bind 传参
                        <button onClick={ () => this.onRevise(index) }>修改</button>
                      </li>
                  )
            }
          </ul>
        </div>
    )
  }
}