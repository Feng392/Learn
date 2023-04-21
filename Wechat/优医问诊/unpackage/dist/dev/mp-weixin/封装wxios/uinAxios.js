"use strict";
const common_vendor = require("../common/vendor.js");
function uinAxios(config) {
  return new Promise((resolve, reject) => {
    const xhr = common_vendor.index.request();
    xhr(config.method, config.url);
    success = function() {
      if (config.success.data.code === 200) {
        resolve(
          {
            data: JSON.parse(xhr.responseText),
            config
            // ...
          }
        );
      } else {
        reject(xhr);
      }
    };
  });
}
wx.createPage(uinAxios);
