var buf1 = new Buffer("拷");
var buf2 = new Buffer("贝");
var buf3 = new Buffer("文");
var buf4 = new Buffer("件");
var buffers = new Buffer(12);

//buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
buf1.copy(buffers,0,0,3);
console.log(buffers.slice(0,3).toString('utf-8'));

buf2.copy(buffers,3,0,3);
console.log(buffers.toString('utf-8'));

console.log(Buffer.byteLength(new Buffer("sdf")));