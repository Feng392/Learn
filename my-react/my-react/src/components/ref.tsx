import React from 'react'
class Ref extends React.Component {
  onClick() {
    console.log(this.refs.btn)
  }
  render() {
    return (
        <div>
          <button ref="btn" onClick={ this.onClick.bind(this) }>点击</button>
        </div>
    )
  }
}
export default Ref