"use strict";
const common_vendor = require("../../common/vendor.js");
const api_login_login = require("../../api/login/login.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const params = {
      mobile: "13230000009",
      password: "abc12345"
    };
    function login() {
      api_login_login.onLogin(params);
      common_vendor.wx$1.switchTab(
        {
          url: "/pages/home/index"
        }
      );
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(login)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/learn/Wechat/优医问诊/pages/login/index.vue"]]);
wx.createPage(MiniProgramPage);
