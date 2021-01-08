# nodepro

# express中获取post提交的参数
.使用body-parser模块
.在app中使用app.use()使用模块解析
. 运行代码时出现[Object: null prototype] 解决方案为把app.use(bodyParser.urlencoded({ extended:false }));把false改为true

# node学习使用连接mongodb
. 安装并导入mongoose
. 连接数据库
. 创建schema
. 创建model
. 操作CRDU


# 中间件
.应用层中间件 应用每次收到请求都会执行该函数
.路由层中间件 路由器层中间件的工作方式与应用层中间件基本相同，差异之处在它绑定到 express.Router() 的实例。在app的应用中使用app.use()使用。
.错误处理中间件
.内置中间件
.第三方中间件


# nodejs操作es