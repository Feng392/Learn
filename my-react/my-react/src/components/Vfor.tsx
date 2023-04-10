import React from 'react';
interface State {
  list: string[];
}
export default class Vfor extends React.Component<{}, State> {
  public readonly state = {
    list: ['a', 'b', 'c'],
  };
  public render() {
    return (
        <div>
          {this.state.list.map((item, index) => (<div key={ index }>{ item}</div>) )}
        </div>
    )
  }
}