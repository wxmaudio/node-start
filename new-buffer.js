var buffer = new Buffer(1);//1为包含的字节数
console.log(buffer);

buffer[0] = 10;//改变值时可以像数组一样操作赋值
buffer[1] = 34;//超出buffer大小的赋值无效
console.log(buffer);//<Buffer 0a>

//字符串创建buffer
console.log(new Buffer("吴"));//<Buffer e5 90 b4>

//数组创建buffer：buffer有3个字节，创建并赋值，长度就是数组的长度，每个字节值就是数组对应位置的值
//数组的数可以十进制、二进制或八进制表示
console.log(new Buffer([0x0f,2,3]));


