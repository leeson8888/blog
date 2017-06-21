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

