var fs=require('fs');
var data='百度url:www.baidu.com';

//创建一个写入流，写入到文件output.txt中
var writerStream=fs.createWriteStream('demo-node-stream/output.txt');
//使用utf8编码写入数据
writerStream.write(data,'UTF8');
//标记文件末尾
writerStream.end();
//处理流事件-->data,end,error,finish
writerStream.on('finish',function(){
    console.log('写入完成');
});
writerStream.on('error',function(err){
    console.log(err.stack);
});

console.log('程序执行完毕');