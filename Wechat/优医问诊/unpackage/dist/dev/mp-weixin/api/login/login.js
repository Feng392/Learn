"use strict";
const common_vendor = require("../../common/vendor.js");
const axios = function() {
  let requestInterceptor = null;
  function 真正的axios(conf) {
    const newConf = requestInterceptor ? requestInterceptor(conf) : conf;
    return new Promise((resolve, reject) => {
      common_vendor.index.request(
        {
          ...newConf,
          success: (res) => {
            switch (res.statusCode) {
              case 200:
                resolve(res.data);
              case 401:
                reject(res);
            }
            console.log(res);
          },
          fail: (err) => {
            reject(err);
          }
        }
      );
    });
  }
  真正的axios.interceptors = {
    request: {
      use(getNewConf) {
        requestInterceptor = getNewConf;
      }
    },
    response: {
      use(getNewRes, getNewErr) {
      }
    }
  };
  return 真正的axios;
}();
axios.interceptors.request.use((conf) => {
  return {
    ...conf,
    headers: {
      ...conf.headers,
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwOCIsImlhdCI6MTY4MTg4OTQyMywiZXhwIjoxNjgyMDYyMjIzfQ.KgWEDM3VgtaVvACZIbwlWvZj9K-auruosTo0pB1cDNI"
    }
  };
});
axios.interceptors.response.use(
  (res) => res,
  (err) => {
    switch (err.statusCode) {
      case 401:
        common_vendor.index.redirectTo(
          {
            url: "/pages/login/index"
          }
        );
        break;
    }
    return err;
  }
);
function onLogin(data) {
  return axios(
    {
      url: "https://consult-api.itheima.net/login/password",
      method: "post",
      data
    }
  );
}
exports.axios = axios;
exports.onLogin = onLogin;
