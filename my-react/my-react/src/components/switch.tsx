import React  from 'react'
import '../style/switch.scss'
class Switch extends React.Component {
  state = {
    isChange : true
  };
  OnChange () {
    this.setState({
        isChange: !this.state.isChange
    })
  }
  render() {
    return(
        <div>
          <button
              data-onoff="1234665666"
              onClick={ this.OnChange.bind(this) }
              className={ this.state.isChange ? 'switch off' : 'switch'}
          ></button>
        </div>
    )
  }
}

export default Switch