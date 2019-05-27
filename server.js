var http = require('http');
var fs = require("fs");
//开启服务
var server = http.createServer(function(req,res){
    // console.log(req)
    console.log('有客户端连接');//有请求发起时显示在后台
    // switch(src){
    //     case banner:
            
    // }
    fs.readFile('./src/data/data.json','utf-8',function(err,data){
        if(err){
            res.writeHeader(404,{
                'content-type' : 'text/html;charset="utf-8"',
                'Access-Control-Allow-Origin' :  '*'
            });
            res.write(err);
            res.end();
        }else{
            res.writeHeader(200,{
                'content-type' : 'text/html;charset="utf-8"',
                'Access-Control-Allow-Origin' :  '*'
            });
            res.write(data);
            res.end();
        }
    })
});
server.listen(8888);
console.log('服务器开启成功');
