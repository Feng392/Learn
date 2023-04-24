"use strict";
const common_vendor = require("../../common/vendor.js");
const api_login_login = require("../../api/login/login.js");
const utils_uxios = require("../../utils/uxios.js");
require("../../utils/req.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const params = {
      mobile: "13230000009",
      password: "abc12345"
    };
    const detail = common_vendor.ref(
      {}
    );
    function login() {
      api_login_login.onLogin(params).then((res) => {
        console.log(res);
        if (res.data.code === 1e4) {
          common_vendor.index.setStorage(
            {
              key: "token",
              data: res.data.data.token
            }
          );
        }
      }).catch((err) => {
        console.log(err);
      });
      common_vendor.wx$1.switchTab(
        {
          url: "/pages/home/index"
        }
      );
    }
    function onGetuserinfo(e) {
      console.log(e);
      detail = e.detail;
    }
    common_vendor.wx$1.login().then((res) => {
      console.log(res);
      detail.code = res.code;
    });
    function wxLogin() {
      utils_uxios.uxios.post(
        "https://api-hmugo-web.itheima.net/api/public/v1/users/wxlogin",
        {
          code: "detail.value.code",
          encryptedData: "detail.value.encryptedData",
          iv: "detail.value.iv",
          rawData: "detail.value.rawData",
          signature: "detail.value.signature"
        }
      ).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
    }
    function getOrder() {
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(login),
        b: common_vendor.o(onGetuserinfo),
        c: common_vendor.o(wxLogin),
        d: common_vendor.o(getOrder)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/learn/Wechat/优医问诊/pages/login/index.vue"]]);
wx.createPage(MiniProgramPage);
