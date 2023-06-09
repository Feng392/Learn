// components/hello/index.ts
Component({
  // 样式隔离
  options: {
    styleIsolation: 'isolated'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    name: String,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  // 组件生命周期
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      console.log(this.properties.name);
      this.triggerEvent('abc', 'a');
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})
