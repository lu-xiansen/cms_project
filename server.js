var http = require('http');
var fs = require("fs");
var data = {
    banner: [{
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
    }],
    newslist: [
        {
            id: 1,
            title: '重大新闻1',
            add_time: '2019-05-24',
            content: '新闻详情巴拉巴拉',
            click_count: 999,
            img_url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559289501&di=ecf0a00f98be25520a48e06d4d3161a6&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F30%2F31%2F58107a9c3af2a_610.jpg'
        },
        {
            id: 2,
            title: '重大新闻2',
            add_time: '2019-03-24',
            content: '新闻详情巴拉巴拉',
            click_count: 999,
            img_url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559289501&di=ecf0a00f98be25520a48e06d4d3161a6&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F30%2F31%2F58107a9c3af2a_610.jpg'
        },
        {
            id: 3,
            title: '重大新闻3',
            add_time: '2019-02-24',
            content: '新闻详情巴拉巴拉',
            click_count: 1234,
            img_url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559289501&di=ecf0a00f98be25520a48e06d4d3161a6&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F30%2F31%2F58107a9c3af2a_610.jpg'
        },
        {
            id: 4,
            title: '重大新闻4',
            add_time: '2018-01-22',
            content: '新闻详情巴拉巴拉',
            click_count: 5422,
            img_url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559289501&di=ecf0a00f98be25520a48e06d4d3161a6&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F30%2F31%2F58107a9c3af2a_610.jpg'
        },
        {
            id: 5,
            title: '重大新闻5',
            add_time: '2017-02-14',
            content: '新闻详情巴拉巴拉',
            click_count: 123,
            img_url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559289501&di=ecf0a00f98be25520a48e06d4d3161a6&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F30%2F31%2F58107a9c3af2a_610.jpg'
        },
        {
            id: 6,
            title: '重大新闻6',
            add_time: '2019-05-24',
            content: '新闻详情巴拉巴拉',
            click_count: 123,
            img_url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559289501&di=ecf0a00f98be25520a48e06d4d3161a6&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F30%2F31%2F58107a9c3af2a_610.jpg'
        },
        {
            id: 7,
            title: '重大新闻7',
            add_time: '2019-05-24',
            content: '新闻详情巴拉巴拉',
            click_count: 432,
            img_url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559289501&di=ecf0a00f98be25520a48e06d4d3161a6&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F30%2F31%2F58107a9c3af2a_610.jpg'
        },
        {
            id: 8,
            title: '重大新闻8',
            add_time: '2019-05-24',
            content: '新闻详情巴拉巴拉',
            click_count: 999,
            img_url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559289501&di=ecf0a00f98be25520a48e06d4d3161a6&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F30%2F31%2F58107a9c3af2a_610.jpg'
        },
        {
            id: 9,
            title: '重大新闻9',
            add_time: '2019-05-24',
            content: '新闻详情巴拉巴拉',
            click_count: 43123,
            img_url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559289501&di=ecf0a00f98be25520a48e06d4d3161a6&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F30%2F31%2F58107a9c3af2a_610.jpg'
        },
        {
            id: 10,
            title: '重大新闻10',
            add_time: '2019-05-24',
            content: '新闻详情巴拉巴拉',
            click_count: 542,
            img_url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559289501&di=ecf0a00f98be25520a48e06d4d3161a6&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F30%2F31%2F58107a9c3af2a_610.jpg'
        },
    ]
}
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
