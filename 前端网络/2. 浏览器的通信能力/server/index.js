const app = require('express')();
const text = `
<p>
两只老虎爱跳舞

小兔子乖乖拔萝卜

我和小鸭子学走路

童年是最美的礼物
</p>
`;

app.get('/source/file.txt', (req, res) => {
  res.set('Content-Type', 'text/plain; charset=utf-8');
  res.end(text);
});
app.get('/d/file.txt', (req, res) => {
  res.set('Content-Type', 'text/plain; charset=utf-8');
  res.set('Content-Disposition', 'attachment; filename=baby.txt');
  res.end(text);
});

app.listen(9527, () => {
  console.log('server started');
});
