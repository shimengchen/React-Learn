//创建一个包含[0x1,0x2,0x3,0x4,0x5]的Buffer
const buf=Buffer.from([0x1,0x2,0x3,0x4,0x5]);
const json=JSON.stringify(buf);
//输出{"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);
//转换为JS对象
const copy=JSON.parse(json,(key,value)=>{
    return value&&value.type==='Buffer'?
    Buffer.from(value.data):
    value;
});
console.log(copy);