'use strict';

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
    fs.writeFile(dest,data,(err) =>{
        if(err) throw err;
        console.log("Writing finished!");
    });

   })
}

//copy('./name.txt','./copy.txt');
copy('atm.jpg','atm1.jpg');