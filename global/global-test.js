/*var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("Before");
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');*/


//global 上的属性可以直接使用，util不是global属性，是模块 so 需要require
console.log('log');
console.info('info');

console.error('error');
console.warn('warn');

console.time('cost');//时间计时器开始
for(var i=0;i<10000;i++){

}
console.timeEnd('cost');//时间计时器结束，会输出中间代码的时间

console.log(__filename);//当前模块文件的绝对路径
console.log(__dirname);//当前模块文件所在目录的绝对路径


//1秒后放在一个任务列表的末尾
global.setTimeout(function(){
    console.log("setTimeout");
},1000);

//global对象上面的方法，放在下一个任务列表的开始,相当于setTimeout(function(){},0);
setImmediate(function(){
    console.log('setImmediate');
});

//当前工作目录
console.log(process.cwd());

/****process****/
//切换上级目录
process.chdir('..');

console.log(process.cwd());
/**
 * 单位：字节
 * { rss: 17,993,728, //常驻内存17M（常驻内存是指栈内存（如分配的变量），是正常运行程序所需的内存
 *  //堆内存中分配着对象 
 * heapTotal: 7,524,096,//堆总内存 7M
 *  heapUsed: 4,253,672 }//堆已经使用的内存 4M
 *  V8引擎最多允许js使用1.4G的堆内存
 *  不要总是写不能释放内存的变量
 */
console.log(process.memoryUsage());

//放在当前任务列表的末尾,一定当前任务中做完
process.nextTick(function(){
    console.log('nextTick');
    process.nextTick(function(){
        console.log('nextTick2');
    })
})

/***util是node自带的模块
1.inherits 继承
2.inspect 把对象转成字符串
3.isArray

**/
var util = require('util');
//util.inherit()
function Parent(){
    this.name='Parent';
}
Parent.prototype.say = function(){
    console.log(this.name);
}

function Child(){
    this.name = 'child';
}
//类似于原型继承 Child.prototype = new Parent.prototype
util.inherits(Child,Parent);
var child = new Child();
child.say();


console.log(util.inspect(child));


var obj = new Object();
obj.name = 'ddds';

//ES5方法，参数：obj,[string] prop,[Object] desc
Object.defineProperty(obj,'age',{
    value:120,
    enumerable:true ,//可枚举的
    configurable:false, //可配置，是否可以删除此属性，为true时不可delete
    writable:true//是否可改值
});
for(var attr in obj){
    console.log(attr);
}
obj.age = 11;
delete obj.age;

console.log(util.inspect(obj,{
    showHidden:false
}));

///////////////////////////////////////
console.log(util.isArray('d'));
console.log(util.isRegExp(/\d\w/));
console.log(util.isDate(new Date));
console.log(util.isError(new Error));