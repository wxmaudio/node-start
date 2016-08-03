var path = require('path');
var fs = require('fs');

//合并 连接路径
console.log(path.join('./test','p.json'));

//获得平台分隔符 separator
console.log(path.sep);
console.log('df\\ds\\df'.split(path.sep));

console.log(__filename);//获取当前模块的绝对路径
console.log(__dirname);//获取当前模块所在的绝对目录

//获取一个路径的文件名
console.log(path.basename('./dfsd/sd/nav.html','.html'));

//获取一个路径的拓展名
console.log(path.extname('./dfsd/sd/nav.html'));

console.log(path.dirname('./path.js'));

//解析路径
console.log(path.parse('/home/user/dir/file.txt'));