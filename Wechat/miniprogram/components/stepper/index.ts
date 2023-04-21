// components/stepper/index.ts
Component({
  // 隔离css样式
  options: {
    styleIsolation: 'isolated',
    // 支持多组件
    multipleSlots: true // 在组件定义时的选项中启用多
  },
  /**
   * 组件的属性列表
   */
  properties: {
    value: Number,
    step: Number,
  },

  /**
   * 组件的初始数据
   */
  data: {
    mm: 7,
  },
  // 生命周期
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      console.log(this.properties.value);
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onSubtract() {
      console.log(this.data.mm);
      console.log(this.data);
      console.log(this.properties);
      
      
      this.triggerEvent('change', this.data.value - this.data.step)
    },
    onAdd() {
      this.triggerEvent('change', this.data.value + this.data.step)
    },
  }
})
