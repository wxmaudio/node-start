var buf1 = new Buffer("合");
var buf2 = new Buffer("并");
var buf3 = new Buffer("文");
var buf4 = new Buffer("件");


var totalBuffer = Buffer.concat([buf1,buf2,buf3,buf4],9);//合并文

console.log(totalBuffer.toString('utf-8'));

console.log(totalBuffer.slice(9,12).toString());//文