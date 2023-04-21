"use strict";
const common_vendor = require("../../common/vendor.js");
const store_counter = require("../../store/counter.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const store = store_counter.counterStore();
    common_vendor.ref(1);
    function goHome() {
      common_vendor.wx$1.switchTab(
        {
          url: "/pages/home/index"
        }
      );
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(store).counter),
        b: common_vendor.o((...args) => common_vendor.unref(store).onAdd && common_vendor.unref(store).onAdd(...args)),
        c: common_vendor.o(goHome)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/learn/Wechat/优医问诊/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
