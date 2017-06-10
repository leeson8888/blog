# 通过WebSocket判断低版本浏览器

对于HTML5中WebSocket的技术，目前的浏览器支持情况如下：
支持WebSocket的浏览器：
IE10+，现代浏览器，android4.4，ios Safari 等都支持。


### html头部建议
```js
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="renderer" content="webkit">
```
### JS 头部提示
```js
(function(w){if(!("WebSocket"in w&&2===w.WebSocket.CLOSING)){var d=document.createElement("div");d.className="browsehappy";d.innerHTML='<div style="width:100%;height:100px;font-size:20px;line-height:100px;text-align:center;background-color:#E90D24;color:#fff;margin-bottom:40px;">\u4f60\u7684\u6d4f\u89c8\u5668\u5b9e\u5728<strong>\u592a\u592a\u65e7\u4e86</strong>\uff0c\u592a\u592a\u65e7\u4e86 <a target="_blank" href="http://browsehappy.osfipin.com/" style="background-color:#31b0d5;border-color: #269abc;text-decoration: none;padding: 6px 12px;background-image: none;border: 1px solid transparent;border-radius: 4px;color:#FFEB3B;">\u7acb\u5373\u5347\u7ea7</a></div>';var f=function(){var s=document.getElementsByTagName("body")[0];if("undefined"==typeof(s)){setTimeout(f,10)}else{s.insertBefore(d,s.firstChild)}};f()}}(window));
```
### JS 直接跳转
```js
(function(w){if(!("WebSocket"in w&&2===w.WebSocket.CLOSING)){w.location.replace("http://browsehappy.osfipin.com/");}}(window));
```
以上皆为JS代码可以内嵌到html中(放在 script 标签内)或放在js文件中，代码中会自动检测浏览器版本(不是根据User-Agent判断)，只有是老旧的版本才会提示。
