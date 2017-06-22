参考：http://man.linuxde.net/

# ln
ln命令用来为文件创件连接，连接类型分为硬连接和符号连接两种，默认的连接类型是硬连接。如果要创建符号连接必须使用"-s"选项。
```js
ln(选项)(源文件 模板文件)
```

例如当前目录下有 ln.js文件：
```js
#!/usr/bin/env node
console.log("hello,ln");
```

执行：
```js
ln ln.js /usr/local/bin/wodeln_command

//然后执行：chmod 777 /usr/local/bin/wodeln_command
//然后执行 wodeln_command
//输出：hello,ln
```

# which
which命令用于查找并显示给定命令的绝对路径，环境变量PATH中保存了查找命令时需要遍历的目录。
which是根据使用者所配置的 PATH 变量内的目录去搜寻可运行档的！所以，不同的 PATH 配置内容所找到的命令当然不一样的！

例如，查询当前系统是否安装node环境.

**也可以通过which查看npm link 生成的命令**

```js
which node
// 如果安装，输出如下：
// usr/local/bin/node
```
