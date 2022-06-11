//写出一个程序，接受一个十六进制的数，输出该数值的十进制表示。
// Math.pow(10,2) 100
//substring(开始下标,结束下标) //返回值包含开始不包含结束 "012345".substring(1,3) //'12'
//substr(开始下标,截取长度) //"012345".substr(1,3) //'123'
//16进制数以ox为前缀 0x2C
 function transfer(str){
     const obj ={
         A:10,
         B:11,
         C:12,
         D:13,
         E:14,
         F:15
     }
     let res = 0;
     let numStr = str.substring(2).split("");
      numStr.forEach((el,i)=>{
        let cur = obj[el]?obj[el]:+el
        res  = res+cur*Math.pow(16,  numStr.length-i-1);
     })
    return res   
}
let str = readline()
print(transfer(str))
