var fs = require('fs');


/**
 * 1.异步方法需要把回调函数传入
 * 2. 回调函数会在同步方法执行完毕之后才执行异步回调
 * 3.异步方法不能阻塞主线程，不会影响后续代码的执行
 */
fs.readFile('../README.MD','utf-8',(err, data) => {
  if (err) throw err;
  console.log(data);
})



/**
 * 1. 每一个同步方法和异步方法都是成对出现的
 * 2. 同步方法会阻塞主线程的执行，在数据没有返回之间不能执行后续代码
 * 3. 它不需要传递回调函数，通过函数返回值接收结果
 * 4. 注意同步读取通过try  catch 来捕获错误
 */
 try{
     var data = fs.readFileSync('./index.txt1','utf8');
     console.log(data)
 }catch(err){
    console.log(err);
 };
