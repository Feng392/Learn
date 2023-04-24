"use strict";
const utils_req = require("../../utils/req.js");
function onLogin(data) {
  return utils_req.req(
    {
      url: "/login/password",
      method: "post",
      data
    }
  );
}
exports.onLogin = onLogin;
