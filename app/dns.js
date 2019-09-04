const dns = require('dns');

dns.lookup('www.baidu.com', (err, address, family) => {
  console.log('地址: %j 地址族: IPv%s', address, family);
});
