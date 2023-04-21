"use strict";
const common_vendor = require("../common/vendor.js");
const counterStore = common_vendor.defineStore({
  state: () => ({
    counter: 0
  }),
  actions: {
    onAdd() {
      this.counter++;
    }
  }
});
exports.counterStore = counterStore;
