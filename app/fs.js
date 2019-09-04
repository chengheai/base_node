const fs = require('fs');

fs.unlink('./test/1.md', (err) => {
  if (err) throw err;
  console.log('已成功删除 ./test/1.md');
});
