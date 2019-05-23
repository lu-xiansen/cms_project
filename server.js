var http = require('http');
var fs = require("fs");
var data = [
    {
        "id:" : 1,
        "src" : "http://img.zcool.cn/community/019a0558be22d6a801219c77d0578a.jpg@2o.jpg"
    },
    {
        "id:" : 2,
        "src" : "http://img1.imgtn.bdimg.com/it/u=2738116507,3030577930&fm=26&gp=0.jpg",
    },
    {
        "id:" : 3,
        "src" : "http://img.zcool.cn/community/019a0558be22d6a801219c77d0578a.jpg@2o.jpg",
    },
    {
        "id:" : 4,
        "src" : "http://img1.imgtn.bdimg.com/it/u=2738116507,3030577930&fm=26&gp=0.jpg",
    }
]
//开启服务
var server = http.createServer(function(req,res){
    console.log('有客户端连接');//创建连接成功显示在后台
    res.writeHeader(200,{
        'content-type' : 'text/html;charset="utf-8"',
        'Access-Control-Allow-Origin' :  '*' //'http://192.168.43.171'
    });
    res.write(JSON.stringify(data));//显示给客户端
    res.end();
});
server.listen(8888);
console.log('服务器开启成功');
