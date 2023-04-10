import React from 'react'
interface lifeCycleProps {
}
export default class Lifecycle extends React.Component {
  constructor( props: lifeCycleProps) {
    super(props)

    // 创建 state前
    this.beforeCreate();

    this.state = {
        count: 0
    }

  //   创建 state后
    this.created();
  }
  // 自己写的，创建前
  beforeCreate() {
    console.log('创建前', this.refs.abc) // 创建前
  }
    // 自己写的，创建后
    created() {
        console.log('创建后', this.refs.abc) // 创建后
    }
    // 组件挂在完成后
  public componentDidMount() {
    console.log('挂载后', this.refs.abc) // 挂载后
  //   发请求
  }
  // DOM更新后
    public componentDidUpdate( prevProps: lifeCycleProps, prevState: lifeCycleProps) {
        console.log('DOM更新后', this.refs.abc) // DOM更新后
    }
    // 组件卸载前
  public componentWillUnmount() {
    console.log('卸载前', this.refs.abc) // 卸载前
  }
  // 组件是否需要更新
  // 老版常用于性能优化
  public shouldComponentUpdate( nextProps: lifeCycleProps, nextState: lifeCycleProps) {
    console.log('是否需要更新', this.refs.abc) // 是否需要更新
    return true  // 返回true，就会更新
  }
  render() {
    return (
        <div>
            <div ref='abc'>hello</div>
        </div>
    )
  }
}