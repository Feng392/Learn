const axios = (function() {
  let requestInterceptor = null;
  let responseSuccessInterceptor = null;
  let responseFailInterceptor = null;

  function 真正的axios(conf) {
    // 执行请求拦截的正确时机
    const newConf = requestInterceptor
      ? requestInterceptor(conf)
      : conf;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(newConf.method, newConf.url);
      if (newConf.headers) {
        Object.keys(newConf.headers).forEach(key => {
          xhr.setRequestHeader(key, newConf.headers[key]);
        });
      }
      xhr.send(newConf.data);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const res = JSON.parse(xhr.responseText);
            const newRes = responseSuccessInterceptor
              ? responseSuccessInterceptor(res)
              : res;
            resolve(newRes);
          } else {
            const err = xhr;
            const newErr = responseFailInterceptor
              ? responseFailInterceptor(err)
              : err;
            reject(newErr);
          }
        }
      };
    });
  }

  真正的axios.interceptors = {
    request: {
      use(getNewConf) {
        // 把getNewConf存起来等着执行
        requestInterceptor = getNewConf;
      },
    },
    response: {
      use(getNewRes, getNewErr) {
        responseSuccessInterceptor = getNewRes;
        responseFailInterceptor = getNewErr;
      },
    },
  };

  真正的axios.get = function(url, conf) {
    真正的axios({
      url,
      method: 'get',
      ...conf,
    });
  };

  return 真正的axios;
})();

export default axios;