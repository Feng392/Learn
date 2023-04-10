import React from 'react'
import './index.scss'
import Box from './box'
interface CheckableTagProps {
  flag: number
}
export default class CheckableTag extends React.Component<CheckableTagProps> {
  state = {
    contents: [
        {
          content: '1',
          checked: false
       },
        {
            content: '2',
            checked: false,
        },
        {
            content: '3',
            checked: false,
        },
        {
            content: '4',
            checked: false,
        }
    ],
  };
  onChecked = (index: number) => {
    const contents = this.state.contents
    if (this.props.flag === 1) {
      contents[index].checked = !contents[index].checked
    }
    if (this.props.flag === 2) {
        contents.forEach((item, i) => {
            if (i === index) {
              item.checked = !item.checked
            } else {
              item.checked = false
            }
        })
    }
    this.setState({
      contents
    })
  }
  getBox = () => {
    return this.state.contents
        .map((item, index) => {
          return (
              <Box
                key={index}
                currentIndex={index}
                content={item.content}
                checked={item.checked}
                onChecked={ this.onChecked }
              />
          )
        })
  }
  render() {
    return(
        <div
            className={'main'}
        >
          {this.getBox()}
        </div>
    )
  }
}