"use strict";
const api_login_login = require("../api/login/login.js");
require("../common/vendor.js");
wx.createPage(api_login_login.axios);
