/*
1. new RegExp()
2. /^\uD83D/u.test('\uD83D\uDC2A') //false 匹配4个字节字符
3. 识别32位4字节的字符,需要加u

4.regexp.escape模块
  
  var escape = require('regexp.escape');
  escape('hi. how are you?');
  // "hi\\. how are you\\?"   
*/