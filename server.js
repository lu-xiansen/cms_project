var http = require('http');
var fs = require("fs");
// 定义接口路径
var src = [
    "/src/data/banner.json",
    "/src/data/newsList.json",
    "/src/data/newsDetail.json",
    "/src/data/photoList.json",
    "/src/data/photoType.json"
];
//开启服务
var server = http.createServer(function(req,res){
    console.log('有客户端连接');//有请求发起时显示在后台
    // console.log(req)
    // 遍历并创建接口，根据请求的接口来响应对应的数据
    for(var i=0;i<src.length;i++){
        if(src[i] == req.url){
            // console.log(req)
            fs.readFile('.'+src[i],'utf-8',function(err,data){
                if(err){
                    res.writeHeader(404,{
                        'content-type' : 'text/html;charset="utf-8"',
                        // 解决跨域
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
        }       
    }    
});
server.listen(8888);
console.log('服务器开启成功');


// cmd 盘符切换  直接输入 D:切换盘符
// 输入cd + 路径进入到指定文件夹或打开文件
// cd.. 返回上级目录