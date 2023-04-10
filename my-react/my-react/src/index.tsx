import React from 'react'
import RadioTag from './components/组件/单选-多选切换'
export default class Index extends React.Component {
  state = {
    currentIdx: 0,
    list: [
      'Movies',
      'Books',
      'Music',
      'Sports',
    ],
    checkboxList: [
      {
        label: 'Movies',
        checked: false,
      },
      {
        label: 'Books',
        checked: false,
      },
      {
        label: 'Music',
        checked: false,
      },
      {
        label: 'Sports',
        checked: false,
      },
    ],
  }
  protected onTagClick(i: number) {
    this.setState({
      currentIdx: i,
    });
  }

  protected onCheckboxTagClick(i: number) {
    this.setState({
      checkboxList: this.state.checkboxList.map((item, idx) => ({
        label: item.label,
        checked: idx === i ? !item.checked : item.checked,
      })),
    });
  }
  allCheck(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.checked)  // 是否选中的状态 true/false
    this.setState({
      checkboxList: this.state.checkboxList.map(item => ({
        label: item.label,
        checked: e.target.checked,
      })),
    });
  }

  render() {
    return (
        <div>
          {
            this.state.list.map((item, i) => (
                <RadioTag
                    highlight={ this.state.currentIdx === i }
                    key={ i }
                    onClick={ () => this.onTagClick(i) }
                >
                  { item }
                </RadioTag>
            ))
          }
          <br />

          全选<input
                  type="checkbox"
                  checked={ this.state.checkboxList.every(item => item.checked) }
                  onChange={ (e) => this.allCheck(e) }
              />

          {
            this.state.checkboxList.map((item, i) => (
                <RadioTag
                    highlight={ item.checked }
                    key={ i }
                    onClick={ () => this.onCheckboxTagClick(i) }
                >
                  { item.label }
                </RadioTag>
            ))
          }
        </div>
    )
  }
}