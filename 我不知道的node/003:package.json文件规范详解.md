# package.json(摘录官方文档，npm5.0)

package.json 是一个严格的json文件，而不仅仅是一个js对象。其中很多属性可以通过npm-config来生成。

## name
package.json中最重要的属性是name和version两个属性，这两个属性是必须要有的，否则模块就无法被安装，这两个属性一起形成了一个npm模块的唯一标识符。模块中内容变更的同时，模块版本也应该一起变化。

name属性就是你的模块名称

命名规则:
* 小于等于214个字符，包括包的路径
* 不能以下划线_或点.开头
* 不能包含大写字母
* 名称可能作为url的一部分，因此不能包括url的非法字符

命名建议：
* 不能喝node的核心模块重名。
* name中不要含有"js"和"node"。
* name属性也许会被写在require()的参数中，所以最好取个简短而语义化的值。
* 不要和npm仓库中已经注册的名称重复。

name属性可以有一些前缀如 e.g. @myorg/mypackage.

## version
version必须可以被npm依赖的一个node-semver模块解析

## description
包的描述字符串，方便别人了解包的用途或搜索

## keywords
字符串数组，方便别人搜索本模块

## homepage
项目主页的url

## bugs
填写一个bug提交地址或者一个邮箱，被你的模块坑到的人可以通过这里进行讨论，例如：
```js
{
  "url" :"https://github.com/owner/project/issues",
  "email" : "project@hostname.com"
}
```
url和email可以任意填或不填，如果只填一个，可以直接写成一个字符串而不是对象。如果填写了url，npm bugs命令会使用这个url。

## license
你应该为你的模块制定一个协议，让用户知道他们有何权限来使用你的模块，以及使用该模块有哪些限制。

例如：
`"license" : "BSD-3-Clause"`

如果有多种协议：
`"license" : "(ISC OR GPL-3.0)"`

具体见：https://spdx.org/licenses/

## 和用户相关的属性：author, contributors

"author"是作者(单个人)， "contributors"是一个贡献名单的数组。 是一个有一些描述属性的对象，如下 like this:
```js
{ "name" : "Barney Rubble"
, "email" : "b@rubble.com"
, "url" : "http://barnyrubble.tumblr.com/"
}
```

或 可以解析出的字符串:
```js
"Barney Rubble <b@rubble.com> (http://barnyrubble.tumblr.com/)"

```

## files


## bin

很多模块有一个或多个需要配置到PATH路径下的可执行模块，npm让这个工作变得十分简单（实际上npm本身也是通过bin属性安装为一个可执行命令的）

如果要用npm的这个功能，在package.json里边配置一个bin属性。bin属性是一个已命令名称为key，本地文件名称为value的map.

模块安装的时候，若是全局安装，则npm会为bin中配置的文件在bin目录下(prefix/bin)创建一个软连接,若是局部安装，会在./node_modules/.bin/下创建链接

如下：

```js
{ "bin" : { "myapp" : "./cli.js" } }

//cli.js ====> /usr/local/bin/myapp
```

如果只有一个可执行命令，并且命令名称和模块名称相同，bin属性也可以配置为一个字符串。

如下：

```js
{ "name": "my-program"
, "version": "1.2.5"
, "bin": "./path/to/program" 
}

//等同于：

{ "name": "my-program"
, "version": "1.2.5"
, "bin" : { "my-program" : "./path/to/program" } 
}

```

>注意：命令链接的可执行文件，必须以`#!/usr/bin/env node` 开头。





