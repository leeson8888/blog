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

允许命令行的未知选项















