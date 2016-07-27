var fs = require('fs');

fs.writeFileSync('./write.txt','同步写数据');

/**
 * 异步操作
 * flag 是表示要对此文件做何种类型的操作
 *   w 清空并写入
 *   a 在原有基础上追加
 */
fs.writeFile('./write.txt','异步写数据',{encoding:'utf-8',flag:'a'},(err) => {
    console.log(arguments);
   if (err) throw err;
   console.log('保存成功');
});

fs.appendFile('./write.txt','node');