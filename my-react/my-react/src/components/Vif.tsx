import React from "react";

export default class Vif extends React.Component {
  state = {
    isShow: true,
  };
  // getElement() {
  //   if (this.store.isShow) {
  //     return <div>hello</div>
  //   } else {
  //     return null
  //   }
  // }
  toggle() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }

  render() {
    return (
      <div>
        {/*{ this.getElement() }*/}
        {this.state.isShow && <div>hello</div>}
        <button onClick={this.toggle.bind(this)}>
          {this.state.isShow ? "隐藏" : "显示"}
        </button>
      </div>
    );
  }
}