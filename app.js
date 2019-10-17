var express =require("express");
var app=express();
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var session=require("express-session");

//模板请求资源 js/store.js  自动去 public/js文件去找

// cnpm i express body-parser cookie-parser express-session -S

// res  send(字符串) redirect(重定向) render_ejs(返回模板,服务端渲染) json(前端渲染,返回一个json)  
// res.status(404 "字符编码").redirect("/err")
//use(过滤器，无限向后匹配，梭哈) get(接收) post(接收) set(模板引擎) 
//静态资源站

//token

/*
var jwt = require('jsonwebtoken');
生成token
let secretOrPr="xxsdfsrdfdsgfs"  //随机字符串
var token=jwt.sign(
    {uname:"Msea",xxx:xxx},  //账号密码
    secretOrPr,  //随机字符串
    {   
        expiresIn:"8000"  //时效
    }
)
效验token
let token="xzcsdasfjhsjkdfhkjsfh......"
 jwt.verify(token,secretOrPr,(err,decode)=>{
            console.log(err);  //失败 sigin错误,失效
            console.log(decode) //{解析出账号密码}
        })
*/
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(session({
    secret: 'xxxxxsdjalksdjlkafjsjkdhfjksdf',
    // 每当请求进来  时间未失效时间累加
    resave: false,  
    // 每次进来  重新设置
    saveUninitialized: false, //
    cookie: {
        maxAge:1000*10
     }
}))

app.set("views",__dirname+"/views"); //默认自动去 views找
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.send("OK");
})
app.listen(8844,"0.0.0.0");