import React from 'react'
import ChildComponent from './tag'
import './tag.scss'

export default class Tag extends React.Component {
    state = {
      children: '我是子组件',
      list: [
        'Movies',
        'Books',
        'Music',
        'Sports',
      ],
      editing: false,
    };
  onClose(index: number) {
    this.setState({
      list: this.state.list.filter((_, idx) => idx !== index),
    });
  }
  protected add(e: React.FocusEvent<HTMLInputElement>) {
    // console.log(e.target.value);
    this.setState({
      editing: false,
      list: this.state.list.concat(e.target.value),
    });
  }
    protected onAdd() {
        this.setState({
            editing: true,
        });
    }
    render() {
        return (
            <div>
              <ChildComponent>
                {this.state.children}
              </ChildComponent>
              {
                this.state.list.map((item, index) => {
                  return (
                      <ChildComponent
                          key={index}
                          closeable
                          borderType='solid'
                          onClose={() => this.onClose(index)}
                      >
                        {item}
                      </ChildComponent>
                  )
                })
              }
              {
                this.state.editing
                    ? <input type="text" onBlur={ this.add.bind(this) } />
                    : <ChildComponent
                        borderType="dashed"
                        onClick={ this.onAdd.bind(this) }
                    >
                      + New Tag
                    </ChildComponent>
              }
            </div>
        )
    }
}