var fs = require('fs');
var path = require('path');

//1.创建目录,可以创建多级目录
//创建目录 的时候要求父目录必须存在
//如果创建目录已存在会报Error: EEXIST: file already exists错误
/*fs.mkdir('test/newDir', (err)=>{
    if(err){
        console.log(err);
        console.log('创建目录失败');
    }else{
        console.log('创建目录成功');
    }
});*/

//无论父级目录是否存在都可以创建多级目录
function mkdir(path){
    var dirs = [path].split(path.sep);
    while(dirs.length > 0){
        var dir = dirs.shift();
        if(!fs.existsSync(dir)){
            fs.mkdir(dir);
        }
    }
}



//2.读取目录下所有的文件
/*fs.readdir('book',(err,files)=>{
    if(!err){
        console.log(files);
    }
});*/


//3.获取一个目录下文件或目录的详情
function getStats(dir){
  fs.readdir(dir,(err,files)=>{
    if(err){
        console.log('读取目录出错。');
        return;
    }
         
    files.forEach((file,index,arr)=>{

        //注意file是文件名，需要转换成路径才能读到文件信息
        fs.stat(dir + '/' + file,(err,stats)=>{
            if(err){
                console.log('文件或目录的详情出错。');
                return;
            }
            //console.log(stats);
            console.log(file,"是目录么？", stats.isDirectory());
            console.log('是文件么？',stats.isFile());
            console.log('大小：',stats.size);
        })
      })
    })
}

//getStats('book');

//4.判断文件(或文件夹)是否存在
fs.exists('./new',(exists)=>{
   console.log('./new', exists?'存在':'不存在');
})