/**
 * 实现 多个文件同时输出
 * 
 */
let fs = require('fs');

//同步
/*let name = fs.readFileSync('name.txt', 'utf-8');
let age = fs.readFileSync('age.txt', 'utf-8');
console.log(name,age);*/

//异步
//1.回调函数嵌套实现多个异步操作完成之后执行的回调
//1. 需要的时间长，m+n
//2. 代码可读性非常差
/*
fs.readFile('./name.txt','utf8',function(err,name){
    fs.readFile('./age.txt','utf8',function(err,age){
        console.log(name,age);
    });
});
*/

//检查Key的数量，如果=2时表示读完了,或者用计数器也可以实现 
var person= {};

function show(){
  if(Object.keys(person).length >= 2){
    console.log(person);
  }
}

fs.readFile('./name.txt','utf-8',(err,data) => {
    person.name = data;
    show();
})

fs.readFile('./age.txt','utf-8',(err,data) => {
    person.age = data;
    show();
})


