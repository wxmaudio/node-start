var fs = require('fs');
/*
* 拷贝一个文件
 */
function copy(source,dest){
//
   fs.readFile(source, (err,data)=>{
    if(err){
        throw err;
    }
      fs.appendFile(dest,data);

   })
}

//copy('./name.txt','./copy.txt');
copy('atm.jpg','atm1.jpg');