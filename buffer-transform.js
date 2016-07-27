//字符串转buffer
var buffer = new Buffer("测试");
console.log(buffer);//<Buffer e6 b5 8b e8 af 95>


//buffer转字符串
console.log(buffer.toString('UTF-8'));//测试
console.log(buffer.toString('UTF-8',0,5));//乱码
console.log(buffer.toString('UTF-8',0,6));//测试