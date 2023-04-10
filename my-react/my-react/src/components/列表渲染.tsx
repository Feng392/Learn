import React from 'react'
import "../style/list.scss"
interface listItem {
    title: string;
    content: string;
}
interface State {
  list: listItem[];
}
export default class Card extends React.Component<{}, State> {
  state = {
    list: [
        {
            title: '标题1',
            content: '内容1'
        },
        {
            title: '标题2',
            content: '内容2'
        },
        {
            title: '标题3',
            content: '内容3'
        },
    ]
  }
  render() {
    return (
        <div className='card'>
            {this.state.list.map
              ((item, index) =>
                (<div className='list-item' key={index}>
                  { item.title }
                  <p>{item.content}</p>
                </div>
                )
              )
            }
        </div>
    )
  }
}