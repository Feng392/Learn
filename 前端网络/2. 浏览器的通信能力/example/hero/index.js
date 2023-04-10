async function getHeroes() {
  const resp = await fetch('https://study.duyiedu.com/api/herolist');
  const body = await resp.json();
  return body.data;

  // return new Promise((resolve) => {
  //   var xhr = new XMLHttpRequest(); //创建发送请求的对象
  //   xhr.onreadystatechange = function () {
  //     //当请求状态发生改变时运行的函数
  //     // xhr.readyState： 一个数字，用于判断请求到了哪个阶段
  //     // 1: open方法已被调用
  //     // 2: send方法已被调用
  //     // 3: 正在接收服务器的响应消息体
  //     // 4: 服务器响应的所有内容均已接收完毕
  //     // xhr.responseText： 获取服务器响应的消息体文本
  //     // xhr.getResponseHeader("Content-Type") 获取响应头Content-Type
  //     if (xhr.readyState === 4) {
  //       const resp = JSON.parse(xhr.responseText);
  //       resolve(resp.data);
  //     }
  //   };
  //   xhr.open('GET', 'https://study.duyiedu.com/api/herolist'); //配置请求

  //   xhr.send(null); //构建请求体，发送到服务器，如果没有请求体，传递null
  // });
}
const ul = document.querySelector('.list');
getHeroes().then((hs) => {
  ul.innerHTML = hs
    .map(
      (h) => `<li>
  <a
    href="https://pvp.qq.com/web201605/herodetail/${h.ename}.shtml"
    target="_blank"
  >
    <img
      src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/${h.ename}/${h.ename}.jpg"
      alt=""
    />
    <span>${h.cname}</span>
  </a>
</li>`
    )
    .join('');
});
