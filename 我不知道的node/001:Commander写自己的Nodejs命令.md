Commander.js 是 TJ 写的一个帮助快速开发Nodejs命令行工具的package。

```js
//git:https://github.com/tj/commander.js
npm install commander --save
```

#### commander的特性：

* 自记录代码
* 自动生成帮助
* 合并短参数（“ABC”==“-A-B-C”）
* 默认选项
* 强制选项​​
* 命令解析
* 提示符

# 主要API

##  Option(flags, description)

使用指定的“关键字”和“描述”初始化一个选项

```js
var program = require('commander');
program
    .version('0.0.1')
    .option('-i, --init', 'init a project')
    .option('-l, --list', 'list all template project')
```

## Command(name)
初始化命令行参数对象，直接获得命令行输入

- Command#command(name, desc, opts)
添加一个命令名字


## Command#action(fn)
为命令注册一个回调函数

## Command#option()

定义关键字(flags)和描述
关键字包简写标识和完整标准，用逗号，管道符或空格分割，如
```js
"-p, --pepper"
"-p|--pepper"
"-p --pepper"
```

option示例
```js
// simple boolean defaulting to false
program.option('-p, --pepper', 'add pepper');

--pepper
program.pepper
// => Boolean

// simple boolean defaulting to true
program.option('-C, --no-cheese', 'remove cheese');

program.cheese
// => true

--no-cheese
program.cheese
// => false

// required argument
program.option('-C, --chdir <path>', 'change the working directory');

--chdir /tmp
program.chdir
// => "/tmp"

// optional argument
program.option('-c, --cheese [type]', 'add cheese [marble]');
```

## Command#parse(argv)

解析命令行参数argv

## Command#description()
设置description值

## Command#usage(str)
设置或获取usage值

## Command#name()
获取命令名称

## Command#outputHelp()
输出命令的帮助信息

## Command#help()
输出命令的帮助信息并退出

## Command#alias(alias)
为命令设置别名

## Command#opts()
返回选项的键值对object

## Command#parseOptions()

解析命令行参数argv,并返回argv

## Command#arguments()
定义顶层命令的参数语法

## Command#parseExpectedArgs(args)
解析期望的参数args

例如：` ["[type]"] becomes [{ required: false, name: 'type' }]`.

## Command#allowUnknownOption()

允许命令行的未知选项，不报错

# 其他重点知识

### option() 接收 四个参数

* 第一个参数中，如： -d 为short option， --date 为对应的long option, 二者的分割符是 |, 。在命令行里使用时, 这两个是等价的。 区别是后者可以在程序里通过 program.date 的方式取到该option的值，此处option的值为bool，也可以为字符串
* 第二个为option描述, 会在help信息里展示出来
* 第三个参数为回调函数
* 第四个参数为默认值

### option 类型:

required 和 optional

在option的第一个参数里, 除了short, long option, 还可以指定option类型, 分隔符也是 |, 其中

- <lang> required参数, 使用时后边必须跟参数值, 否则程序会报错。

- [db] optional参数, 后面可以选择是否跟参数值





# command 模块实战

## - 入门

在当前目录,新建：commd.js
```js
#!/usr/bin/env node

var program = require('commander');

program
  .version('1.0.0')
  .parse(process.argv);

```

执行 npm init -y 建立 package.json，并添加bin属性

```js
  "bin": {
    "mycommdtest": "./commd.js"
  }
```

建立软连接： npm link

执行：mycommdtest -h,则输出如下：

```js
  //输出
Usage: mycommdtest [options]

Options:

-h, --help     output usage information
-V, --version  output the version number
```

可见:

commander模块提供-h, --help和-V, --version两个内置命令。

## -创建命令

创建一个 `mycommdtest print <author>`的命令，当用户输入`mycommdtest print leeson`时，终端显示hello leeson。修改commd.js：

```js
#!/usr/bin/env node

var program = require('commander');

program
  .version('1.0.0')
  .usage('<command> [options]')
   //建立：mycommdtest-print命令
  .command('print', 'print the anthor') 
  .parse(process.argv);
```
建立`mycommdtest-print`命令文件:mycommdtest-print.js

```js
#!/usr/bin/env node
console.log('hello author');
```

执行：mycommdtest print 则输出:`hello author`

如果想根据用户的输入进行输出，修改mycommdtest-print.js：

```js
#!/usr/bin/env node

var program = require('commander');

program.parse(process.argv);

const author = program.args[0];

console.log('hello', author);
```

则，当用户输入 ：`mycommdtest print leeson`时，输出：`hello leeson`









