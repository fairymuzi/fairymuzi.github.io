---
title: RequireJS源码分析（上）
author: shenfq
date: 2017/12/23
thumbnail: //file.shenfq.com/17-12-23/37840070.jpg
categories:
- 模块化
tags:
- 模块化
- 前端
- 前端工程化
---

# RequireJS源码分析（上）


`requirejs`作为`AMD`（Asynchronous Module Definition--异步的模块加载机制）规范的实现，还是有必要看看的。初识`requirejs`源码，必须先弄清楚`requirejs`的模块是如何定义的，并且要知道入口在哪个地方，如果清楚了调用方式，看源码的时候才会觉得顺畅。

在看源码的过程中，我添加了一些代码注释。如果要查看添加过注释的源码，可以直接在我的[github](https://github.com/Shenfq/think-modular/blob/master/requirejs/require.js)上进行fork。我这里的源码是目前最新的版本2.3.5。另外附上requirejs官方的[源码](https://github.com/requirejs/requirejs/tree/2.3.5)。

<!-- more -->


我把requirejs一共分成了三个部分，这三个部分外面是一个闭包，并且两个定义的全局变量。

```javascript
var requirejs, require, define;
(function (global, setTimeout) {
    //1、定义一些变量与工具方法
    var req, s, head ////some defined
    
    //add some function 
    
    //2、创建一个模块加载的上下文
    function newContext(contextName) {
        //somecode

        //定义一个模块加载器
        Module = function (map) {}
        Module.prototype = {
            //原型链上
        };
        context = { //上下文环境
            config: config, //配置
            contextName: contextName, //默认为 "_"
            makeRequire: function (relMap, options) {
                function localRequire () {}
                return localRequire;
            }
            //xxxx
		}
        context.require = context.makeRequire(); //加载时的入口函数
        return context;
    }
    
    //3、定义require、define方法，导入data-main路径与进行模块加载
    req = requirejs = function (deps, callback, errback, optional) {}
    
    req.config = function (config) {
		return req(config);
	};
	
	s = req.s = {
		contexts: contexts,
		newContext: newContext
	};
	
    req({}); //初始化模块加载的上下文环境
    
    define = function (name, deps, callback) {}
    
    req(cfg); //加载data-main，主入口js
    
}(this, (typeof setTimeout === 'undefined' ? undefined : setTimeout)));
```

上面的代码基本能看出`requirejs`的三个部分，中间省略了很多代码。看过大概结构之后，来跟着我一步一步的窥探`requirejs`是如何加载与定义模块的。


## requirejs如何加载入口js

使用过requirejs的朋友都知道，我们会在引入requirejs的时候，在`script`标签添加`data-main`属性，作为配置和模块加载的入口。具体代码如下：

```html
<script type="text/javascript" src="./require.js" data-main="./js/main.js"></script>
```

`requirejs`先通过判断当前是否为浏览器环境，如果是浏览器环境，就遍历当前页面上所有的script标签，取出其中的`data-main`属性，并通过计算，得到baseUrl和需要提前加载js的文件名。具体代码如下：

```javascript
var isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document);

function scripts() { //获取页面上所有的target标签
    return document.getElementsByTagName('script');
}

function eachReverse(ary, func) {
    if (ary) {
        var i;
        for (i = ary.length - 1; i > -1; i -= 1) {
            if (ary[i] && func(ary[i], i, ary)) {
                break;
            }
        }
    }
}

if (isBrowser) {
    head = s.head = document.getElementsByTagName('head')[0];
    baseElement = document.getElementsByTagName('base')[0];
    if (baseElement) {
    	head = s.head = baseElement.parentNode;
    }
}
	
if (isBrowser && !cfg.skipDataMain) {
    eachReverse(scripts(), function (script) {  //遍历所有的script标签
    	//如果head标签不存在，让script标签的父节点充当head
    	if (!head) {
    		head = script.parentNode;
    	}
    	
    	dataMain = script.getAttribute('data-main');
    	if (dataMain) {  //获取data-main属性（如果存在）
    		//保存dataMain变量，防止转换后任然是路径 (i.e. contains '?')
    		mainScript = dataMain;
    		
    		//如果没有指定明确的baseUrl，设置data-main属性的路径为baseUrl
    		//只有当data-main的值不为一个插件的模块ID时才这样做
    		if (!cfg.baseUrl && mainScript.indexOf('!') === -1) {
    			//取出data-main中的路径作为baseUrl
    			src = mainScript.split('/'); //通过  /  符，进行路径切割
    			mainScript = src.pop();  //拿出data-main中的js名
    			subPath = src.length ? src.join('/') + '/' : './';  //拼接父路径，如果data-main只有一个路径，则表示当前目录
    			cfg.baseUrl = subPath;
    		}
    		
    		//去除js后缀，作模块名
    		mainScript = mainScript.replace(jsSuffixRegExp, '');
    		//如果mainScript依旧是一个路径, 将mainScript重置为dataMain
    		
    		if (req.jsExtRegExp.test(mainScript)) {
    			mainScript = dataMain;
    		}
    		
    		//将data-main的模块名放入到deps数组中
    		cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript];
    
    		return true;
    	}
    });
}
```
在进行过上述操作后，我们可以得到一个cfg对象，该对象包括两个属性baseUrl和deps。比如我们上面的案例中，script标签有个属性`data-main="./js/main.js"`，经过requirejs的转后，得到的cfg对象为：

```javascript
cfg = {
    baseUrl: "./js/",
    deps: ["main"]
}
```

拿到cfg对象后，requirejs调用了req方法：`req(cfg);`。req方法就是require方法，是整个requirejs的入口函数，相当于是一个分发装置，进行参数类型的匹配，再来判断当前是config操作还是require操作，并且在这个方法里还会创建一个上下文环境，所有的模块加载和require相关的配置都会在这个上下文进行中进行。在调用`req(cfg);`之前，requirejs还调用了一次req方法：`req({});`，这一步操作就是为了创建模块加载的上下文。我们还在直接来看看req方法的源码吧：

```javascript
//最开始定义的变量
var defContextName = '_', //默认加载的模块名
    contexts = {}; //模块加载的上下文环境的容器

req = requirejs = function (deps, callback, errback, optional) {
    //Find the right context, use default
    var context, config,
    	contextName = defContextName; //默认的上下文环境
    //参数修正
    // Determine if have config object in the call.
    if (!isArray(deps) && typeof deps !== 'string') {
    	// deps is a config object
    	config = deps;  //第一个参数如果不是数组也不是字符串表示为配置参数
    	if (isArray(callback)) {
    		// 调整参数，callback此时是deps
    		deps = callback;
    		callback = errback;
    		errback = optional;
    	} else {
    		deps = [];
    	}
    }
    
    if (config && config.context) {
    	contextName = config.context;
    }
    
    context = getOwn(contexts, contextName);  //获取默认环境
    if (!context) { //如果是第一次进入，调用newContext方法进行创建
    	context = contexts[contextName] = req.s.newContext(contextName); //创建一个名为'_'的环境名
    }
    
    if (config) {
    	context.configure(config);  //设置配置
    }
    
    //如果只是加载配置，deps、callback、errback这几个参数都是空，那么调用require方法什么都不会发生
    return context.require(deps, callback, errback); //最后调用context中的require方法，进行模块加载
};

req.config = function (config) {
    return req(config); //require.config方法最终也是调用req方法
};

if (!require) {  //require方法就是req方法
    require = req;
}

s = req.s = {
    contexts: contexts,
    newContext: newContext //创建新的上下文环境
};
```

继续按照之前`req(cfg);`的逻辑来走，根据传入的cfg，会调用`context.configure(config);`，而这个context就是之前说的`requirejs`三部分中的第二个部分的`newContext`函数创建的，创建得到的context对象会放入全局的contexts对象中。我们可以在控制台打印contexts对象，看到里面其实只有一个名为`'_'`的context，这是`requrejs`默认指定的上下文。

![上下文对象](//file.shenfq.com/17-11-19/90660695.jpg)

newContext函数中有许多的局部变量用来缓存一些已经加载的模块，还有一个模块加载器（Module），这个后面都会用到。还是先看调用的configure方法：

```javascript
function newContext (contextName) {
    var context, config = {};
    
    context = {
        configure: function (cfg) {
            //确保baseUrl以 / 结尾
            if (cfg.baseUrl) { 
            	//所有模块的根路径，
            	//默认为requirejs的文件所在路径，
            	//如果设置了data-main，则与data-main一致
            	if (cfg.baseUrl.charAt(cfg.baseUrl.length - 1) !== '/') {
            		cfg.baseUrl += '/';
            	}
            }
            
            //其他代码，用于添加一些替他配置，与本次加载无关
            
            //如果配置项里指定了deps或者callback, 则调用require方法
            //如果实在requirejs加载之前，使用require定义对象作为配置，这很有用
            if (cfg.deps || cfg.callback) {
            	context.require(cfg.deps || [], cfg.callback);
            }
        },
        makeRequire: function (relMap, options) {
            
        }
    }
    
    return context;
} 
```

这个方法主要是用来做配置，在我们传入的cfg参数中其实并不包含requirejs的主要配置项，但是在最后因为有deps属性，逻辑能继续往下走，调用了require方法：`context.require(cfg.deps);`。上面的代码中能看出，context的require方法是使用makeRequire创建的，这里之所以用makeRequire来创建require方法，主要使用创建一个函数作用域来保存，方便为require方法拓展一些属性。

```javascript
context = {
    makeRequire: function (relMap, options) {
        options = options || {};
        function localRequire(deps, callback, errback) { //真正的require方法
        	var id, map, requireMod;
        
        	if (options.enableBuildCallback && callback && isFunction(callback)) {
        		callback.__requireJsBuild = true;
        	}
        
        	if (typeof deps === 'string') {
        		//如果deps是个字符串，而不是个数组，进行一些其他处理
        	}
        	
        	intakeDefines();
        
        	//通过setTimeout的方式加载依赖，放入下一个队列，保证加载顺序
        	context.nextTick(function () {
        		intakeDefines();
        
        		requireMod = getModule(makeModuleMap(null, relMap));
        		
        		requireMod.skipMap = options.skipMap;
        
        		requireMod.init(deps, callback, errback, {
        			enabled: true
        		});
        
        		checkLoaded();
        	});
        
        	return localRequire;
        }
        //mixin类型与extend方法，对一个对象进行属性扩展
        mixin(localRequire, {
            isBrowser,
            isUrl,
            defined,
            specified
        });
        
        return localRequire;
    }
};
context.require = context.makeRequire(); //加载时的入口函数
```

最初我是使用打断点的方式来阅读源码的，每次在看到`context.nextTick`的之后，就没有往下进行了，百思不得其解。然后我看了看nextTick到底是用来干嘛的，发现这个方法其实就是个定时器。

```javascript
context = {
    nextTick: req.nextTick, //通过setTimeout，把执行放到下一个队列
};
req.nextTick = typeof setTimeout !== 'undefined' ? function (fn) {
	setTimeout(fn, 4);
} : function (fn) { fn(); };
```

我也很费解，为什么要把一些主逻辑放入到一个定时器中，这样所有的加载都会放到下一个任务队列进行。查看了requirejs的版本迭代，发现nextTick是在2.10这个版本加入的，之前也没有这个逻辑。
而且就算我把requirejs源码中的nextTick这段逻辑去除，代码也能正常运行。

![去除nextTick](//file.shenfq.com/17-11-19/29999251.jpg)

> tips:                
这里的setTimeout之所以设置为4ms，是因为html5规范中规定了，setTimeout的最小延迟时间（`DOM_MIN_TIMEOUT_VALUE`）时，这个时间就是4ms。但是在2010年之后，所有浏览器的实现都遵循这个规定，2010年之前为10ms。
    
![html5相关规范](//file.shenfq.com/17-11-19/28482945.jpg)
    
后来参考了网络上其他博客的一些想法，有些人认为设置setTimeout来加载模块是为了让模块的加载是按照顺序执行的，~~这个目前我也没研究透彻，先设个`todo`在这里,哈哈哈~~。

终于在[requirejs的wiki](https://github.com/requirejs/requirejs/wiki/Upgrading-to-RequireJS-2.1)上看到了相关文档，官方说法是为了让模块的加载异步化，为了防止一些细微的bug（具体是什么bug，还不是很清楚）。

![requirejs wiki](//file.shenfq.com/17-11-19/39872244.jpg)

好了，还是继续来看`requirejs`的源码吧。在nextTick中，首先使用makeModuleMap来构造了一个模块映射，
然后立刻通过getModule新建了一个模块加载器。

```javascript
//requireMod = getModule(makeModuleMap(null, relMap));  //nextTick中的代码

//创建模块映射
function makeModuleMap(name, parentModuleMap, isNormalized, applyMap) {
    var url, pluginModule, suffix, nameParts,
    	prefix = null,
    	parentName = parentModuleMap ? parentModuleMap.name : null,
    	originalName = name,
    	isDefine = true, //是否是define的模块
    	normalizedName = '';
    
    //如果没有模块名，表示是require调用，使用一个内部名
    if (!name) {
    	isDefine = false;
    	name = '_@r' + (requireCounter += 1);
    }
    
    nameParts = splitPrefix(name);
    prefix = nameParts[0];
    name = nameParts[1];
    
    if (prefix) { //如果有插件前缀
    	prefix = normalize(prefix, parentName, applyMap);
    	pluginModule = getOwn(defined, prefix); //获取插件
    }
    
    if (name) {
        //对name再进行一些特殊处理
    }
    
    return {
        prefix: prefix,
        name: normalizedName,
        parentMap: parentModuleMap,
        unnormalized: !!suffix,
        url: url,
        originalName: originalName,
        isDefine: isDefine,
        id: (prefix ?
            prefix + '!' + normalizedName :
            normalizedName) + suffix
    };
}

//获取一个模块加载器
function getModule(depMap) {
    var id = depMap.id,
        mod = getOwn(registry, id);
    
    if (!mod) { //对未注册模块，添加到模块注册器中
        mod = registry[id] = new context.Module(depMap);
    }
    
    return mod;
}

//模块加载器
Module = function (map) {
    this.events = getOwn(undefEvents, map.id) || {};
    this.map = map;
    this.shim = getOwn(config.shim, map.id);
    this.depExports = [];
    this.depMaps = [];
    this.depMatched = [];
    this.pluginMaps = {};
    this.depCount = 0;
    
    /* this.exports this.factory
       this.depMaps = [],
       this.enabled, this.fetched
    */
};

Module.prototype = {
    init: function () {},
    fetch: function () {},
    load: function () {},
    callPlugin: function () {},
    defineDep: function () {},
    check: function () {},
    enable: function () {},
    on: function () {},
    emit: function () {}
};
```

```javascript
requireMod.init(deps, callback, errback, {
	enabled: true
});
```

拿到创建的模块加载器之后，立即调用了init方法。init方法中又调用了enable方法，enable方法中为所有的depMap又重新创建了一个模块加载器，并调用了依赖项的模块加载器的enable方法，最后调用check方法，check方法又马上调用了fetch方法，fatch最后调用的是load方法，load方法迅速调用了context.load方法。千言万语不如画张图。

![Module模块加载](//file.shenfq.com/17-11-20/1196893.jpg)

确实这一块的逻辑很绕，中间每个方法都对一些作用域内的参数有一些修改，先只了解大致流程，后面慢慢讲。
这里重点看下req.load方法，这个方法是所有模块进行加载的方法。


```javascript
req.createNode = function (config, moduleName, url) {
    var node = config.xhtml ?
        document.createElementNS('http://www.w3.org/1999/xhtml', 'html:script') :
        document.createElement('script');
    node.type = config.scriptType || 'text/javascript';
    node.charset = 'utf-8';
    node.async = true; //创建script标签添加了async属性
    return node;
};
req.load = function (context, moduleName, url) { //用来进行js模块加载的方法
    var config = (context && context.config) || {},
    	node;
    if (isBrowser) { //在浏览器中加载js文件
    
        node = req.createNode(config, moduleName, url); //创建一个script标签
        
        node.setAttribute('data-requirecontext', context.contextName); //requirecontext默认为'_'
        node.setAttribute('data-requiremodule', moduleName); //当前模块名
        
        node.addEventListener('load', context.onScriptLoad, false);
        node.addEventListener('error', context.onScriptError, false);
        
        node.src = url;
        
        if (config.onNodeCreated) { //script标签创建时的回调
            config.onNodeCreated(node, config, moduleName, url);
        }
        
        currentlyAddingScript = node;
        if (baseElement) { //将script标签添加到页面中
            head.insertBefore(node, baseElement);
        } else {
            head.appendChild(node);
        }
        currentlyAddingScript = null;
        
        return node;
    }
};
```

requirejs加载模块的方式是通过创建script标签进行加载，并且将创建的script标签插入到head中。而且还支持在webwork中使用，在webWorker使用`importScripts()`来进行模块的加载。

最后可以看到head标签中多了个script：
![require运行之后的head标签](//file.shenfq.com/17-11-20/84154956.jpg)


## 使用define定义一个模块

requirejs提供了模块定义的方法：`define`，这个方法遵循AMD规范，其使用方式如下：
```javascript
define(id?, dependencies?, factory);
```

> define三个参数的含义如下：

1. id表示模块名，可以忽略，如果忽略则定义的是匿名模块；
2. dependencies表示模块的依赖项，是一个数组；
3. factory表示模块定义函数，函数的return值为定义模块，如果有dependencies，该函数的参数就为这个数组的每一项，类似于angularjs的依赖注入。


factory也支持commonjs的方式来定义模块，如果define没有传入依赖数组，factory会默认传入三个参数`require, exports, module`。
没错，这三个参数与commonjs对应的加载方式保持一致。require用来引入模块，exports和module用来导出模块。

```javascript
//写法1：
define(
    ['dep1'],
    function(dep1){
        var mod;
        //...
        
        return mod;
    }
);

//写法2：
define(
    function (require, exports, module) {
        var dep1 = require('dep1'), mod;

        //...
           
        exports = mod;
    }

});
```


废话不多说，我们还是直接来看源码吧！



```javascript
/**
 * 用来定义模块的函数。与require方法不同，模块名必须是第一个参数且为一个字符串，
 * 模块定义函数（callback）必须有一个返回值，来对应第一个参数表示的模块名
 */
define = function (name, deps, callback) {
	var node, context;

	//运行匿名模块
	if (typeof name !== 'string') {
		//参数的适配
		callback = deps;
		deps = name;
		name = null;
	}

	//这个模块可以没有依赖项
	if (!isArray(deps)) {
		callback = deps;
		deps = null;
	}

	//如果没有指定名字，并且callback是一个函数，使用commonJS形式引入依赖
	if (!deps && isFunction(callback)) {
		deps = [];
		//移除callback中的注释，
		//将callback中的require取出，把依赖项push到deps数组中。
		//只在callback传入的参数不为空时做这些
		if (callback.length) { //将模块的回调函数转成字符串，然后进行一些处理
			callback
				.toString()
				.replace(commentRegExp, commentReplace) //去除注释
				.replace(cjsRequireRegExp, function (match, dep) {
					deps.push(dep); //匹配出所有调用require的模块
				});

			//兼容CommonJS写法
			deps = (callback.length === 1 ? ['require'] : ['require', 'exports', 'module']).concat(deps);
		}
	}

	//If in IE 6-8 and hit an anonymous define() call, do the interactive
	//work.
	if (useInteractive) { //ie 6-8 进行特殊处理
		node = currentlyAddingScript || getInteractiveScript();
		if (node) {
			if (!name) {
				name = node.getAttribute('data-requiremodule');
			}
			context = contexts[node.getAttribute('data-requirecontext')];
		}
	}

	//如果存在context将模块放到context的defQueue中，不存在contenxt，则把定义的模块放到全局的依赖队列中
	if (context) {
		context.defQueue.push([name, deps, callback]);
		context.defQueueMap[name] = true;
	} else {
		globalDefQueue.push([name, deps, callback]);
	}
};
```


通过define定义模块最后都会放入到globalDefQueue数组中，然后通过`takeGlobalQueue`方法，把globalDefQueue数组中的内容放入当前上下文的defQueue数组中。`takeGlobalQueue`这个方法会被`intakeDefines`调用。

```javascript

/**
 * 内部方法，把globalQueue的依赖取出，放到当前上下文的defQueue中
 */
function intakeDefines() { //获取并加载define方法添加的模块
	var args;

	//取出所有define方法定义的模块（放在globalqueue中的）
	takeGlobalQueue();

	//Make sure any remaining defQueue items get properly processed.
	while (defQueue.length) {
		args = defQueue.shift();
		if (args[0] === null) {
			return onError(makeError('mismatch', 'Mismatched anonymous define() module: ' +
				args[args.length - 1]));
		} else {
			//args are id, deps, factory. Should be normalized by the
			//define() function.
			callGetModule(args);
		}
	}
	context.defQueueMap = {};
}

function takeGlobalQueue() {
	//将全局的DefQueue添加到当前上下文的DefQueue
	if (globalDefQueue.length) {
		each(globalDefQueue, function (queueItem) {
			var id = queueItem[0];
			if (typeof id === 'string') {
				context.defQueueMap[id] = true;
			}
			defQueue.push(queueItem);
		});
		globalDefQueue = [];
	}
}


```


一共有两个地方会调用`intakeDefines`方法：

1. 进行require操作的时候，在makeRequire中调用


```javascript

makeRequire: function (relMap, options) { //用于构造require方法
    options = options || {};
    
    function localRequire(deps, callback, errback) { //真正的require方法
    
        intakeDefines();
        
        context.nextTick(function () {
			//Some defines could have been added since the
			//require call, collect them.
			intakeDefines();
		}
    }
}
```

2. 依赖加载完毕的时候也会调用takeGlobalQueue方法


```javascript
//之前我们提到requirejs是向head头中insert一个script标签的方式加载模块的
//在加载模块的同时，为script标签绑定了一个load事件
node.addEventListener('load', context.onScriptLoad, false);

//这个事件最后会调用completeLoad方法
onScriptLoad: function (evt) {
	if (evt.type === 'load' ||
		(readyRegExp.test((evt.currentTarget || evt.srcElement).readyState))) {
		var data = getScriptData(evt);
		context.completeLoad(data.id);
	}
}

completeLoad: function (moduleName) {
    var found;
    takeGlobalQueue();//获取加载的js中进行define的模块
	while (defQueue.length) {
		args = defQueue.shift();
		if (args[0] === null) {
			args[0] = moduleName;
			
			if (found) {
				break;
			}
			found = true;
		} else if (args[0] === moduleName) {
			found = true;
		}

		callGetModule(args);
	}
	context.defQueueMap = {};
}

```

无论是通过require的方式拿到defie定义的模块，还是在依赖加载完毕后，通过scriptLoad事件拿到定义的模块，这两种方式最后都使用`callGetModule()`这个方法进行模块加载。下面我们还是详细看看callGetModule之后，都发生了哪些事情。



```javascript
function callGetModule(args) {
	//跳过已经加载的模块
	if (!hasProp(defined, args[0])) {
		getModule(makeModuleMap(args[0], null, true)).init(args[1], args[2]);
	}
}
```

其实callGetModule方法就是调用了getModule方法（之前已经介绍过了），getModule方法返回一个Module（模块加载器）实例，最后调用实例的init方法。init方法会调用check方法，在check方法里会执行define方法所定义的factory，最后将模块名与模块保存到defined全局变量中。

```javascript
exports = context.execCb(id, factory, depExports, exports);
defined[id] = exports;
```

到这里定义模块的部分已经结束了。这篇文章先写到这儿，这里只理清了模块的定义和requirejs的初次加载还有requirejs的入口js是如何引入的，这一部分很多细节都没有讲到。自己挖个坑在这儿，下一部分会深入讲解Module模块加载器的构成，还有require方法是如何引入依赖的。


下期再见。


