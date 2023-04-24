"use strict";
const api_user_user = require("../../api/user/user.js");
const common_vendor = require("../../common/vendor.js");
require("../../utils/req.js");
require("../../utils/uxios.js");
const _sfc_main = {
  __name: "user",
  setup(__props) {
    api_user_user.getUser();
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/learn/Wechat/优医问诊/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
