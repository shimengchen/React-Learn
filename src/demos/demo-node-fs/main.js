var fs=require('fs');

fs.readFile('src/input.txt',function(err,data){
    if(err){
        return console.log(err);
    }else{
        console.log(data.toString());
    }
});

console.log('程序运行结束');