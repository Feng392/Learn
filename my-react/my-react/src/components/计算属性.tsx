import React from 'react'

export default class Computed extends React.Component {
  state = {
    a: 1,
    b: 2
  };
  public componentDidMount() {
    setInterval(() => {
      this.setState({
        a: this.state.a + 1,
        b: this.state.b + 2
      })
    }, 2000)
  }
  gitC() {
    return this.state.a + this.state.b
  }
  render() {
    return(
        <div>
          {this.state.a} + {this.state.b} = {this.gitC()}
        </div>
    )
  }
}