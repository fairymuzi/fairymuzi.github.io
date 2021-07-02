---
title: Go 函数与指针
author: shenfq
date: 2021/04/12
categories:
- Go
tags:
- Go
- 函数
- 指针
---

# Go 函数与指针

## 函数

函数就是一段基本的代码块，一般用来对需要重复执行的代码进行复用。在 go 中，函数是『一等公民』，这与 js 类似，也就是可以将函数当做一个变量进行传递。

### 函数声明

由于是强类型语言，与 js 不同，在函数声明的过程中，需要指定参数与返回值的类型。

```go
func max (n1, n2 int) int {
  var result int
  if n1 >= n2 {
    result = n1
  }
  if n1 < n2 {
    result = n2
  }
  return result
}
```

![](https://file.shenfq.com/pic/20210411144315.png)

在声明函数参数和类型的时候，与声明变量类似，可以一次性指定多个参数的类型，也可以分别指定多个参数为不同类型。

```go
func max (n1 int, n2 int) int {
  ……
}
```

如果函数返回值有多个，在指定返回类型的时候，需要指定每个返回值的类型。

```go
func max (n1 int, n2 int) (error, int) {
  ……
  return errors.New(""), result
}
```

上面的代码，表示返回的时候需要返回两个值，第一个值为 `error` 对象，用来表示执行期间是否出现异常。这种方式也是 Node.js 中常见的 `error-first callback` 的写法。

### 特殊函数

在 go 中，有两个特殊函数：`main`、`init`，这两个函数声明之后，一般不需要主动调用，会有自动执行的机制。

#### 🔎 func main()

`main` 函数是 go 语言中默认的入口函数，只能应用于 `package main` 中，如果在其他的 `package` 中不会执行。`main` 函数有如下几点需要注意：

- 不能定义参数；
- 不能定义返回值；
- 必须在 `package main` 中声明；

#### 🔎 func init()

`init` 函数所有的包启动的时候都会执行，执行时机比 `main` 函数早，与 `main` 函数一样，不能定义参数和返回值。

```go
package main

import "fmt"

func init() {
	fmt.Println("执行 init 函数\n")
}
func main() {
	fmt.Println("执行 main 函数\n")
}
```

![](https://file.shenfq.com/pic/20210411162546.png)

### 函数调用

函数的调用比较简单，和其他编程语言类似，只需要将函数需要接受的参数传入其中，在执行结束后，就能得到对应的返回值。

```go
// 定义 max 函数
func max (n1, n2 int) int {
  var result int
  if n1 >= n2 {
    result = n1
  }
  if n1 < n2 {
    result = n2
  }
  return result
}

func main () {
	var result = max(5, 100)
	fmt.Println("max return", result)
}
```

![](https://file.shenfq.com/pic/20210411163110.png)

### 匿名函数

匿名函数就是一个没有定义函数名的函数，匿名函数可以当成一个值，将其赋值放到某个变量中。这也是之前为什么说函数是『一等公民』，就是可以将函数当成一个变量。

```go
var max = func (n1, n2 int) int {
  var result int
  if n1 >= n2 {
    result = n1
  }
  if n1 < n2 {
    result = n2
  }
  return result
}
var result = max(5, 100)
fmt.Println("max return", result)
```

### 立即执行函数

由于 go 中的函数是 『一等公民』，可以在声明之后立即执行，就是在函数声明结束后，直接加上一个括号，表示该函数会立即执行，执行之后的结果可以通过变量进行接收。

```go
import "math"

var Pi = func () float64 {
  return math.Pi
}()

fmt.Println("PI =",Pi)
```

![](https://file.shenfq.com/pic/20210411212512.png)

### 闭包

> 闭包就是能够读取其他函数内部变量的函数。在本质上，闭包是将函数内部和函数外部连接起来的桥梁。	——[百度百科](https://baike.baidu.com/item/%E9%97%AD%E5%8C%85/10908873?fr=aladdin)

上面的描述来自百度百科，初次看概念比较难理解，如果站在使用的角度来说，闭包就是在一个函数调用后，返回另一个匿名函数，并保持当前函数内的局部变量，可以给匿名函数引用。

下面我们可以简单实现一个迭代器函数，该函数接受一个切片，返回一个匿名函数，该匿名函数每次执行，都会取出切片的一个值，直到全部读取。

```go
func generate(slice []int) func() (bool, int) {
	i := 0
	length := len(slice)
	return func () (bool, int) {
		if i >= length {
			return true, 0
		}
		var result = slice[i]
		i++
		return false, result
	}
}

func main() {
	slice := []int{1, 2, 3, 4, 5}
	nextNum := generate(slice)
	done, result := nextNum()
  // 直到 done 不等于 false，才停止
	for done == false {
		fmt.Println(result, done)
		done, result = nextNum()
	}
  fmt.Println(result, done)
}
```

![](https://file.shenfq.com/pic/20210412140712.png)

![](https://file.shenfq.com/pic/20210412141647.png)

## 指针

我们前面常说的变量指的一般是一个值，指针是指向该变量存储在内存的位置。指针也可以存储在一个变量中，该变量称为『指针变量』。

![](https://file.shenfq.com/pic/20210412154247.png)

### 指针变量声明

声明指针变量时，需要指针指向哪一种类型，因为不同类型的值在内存占用的空间大小不一样，仅仅知道内存地址还是不够，还需要知道该变量在内存中占用多大空间。声明指针变量只需要在类型前，加上 `*` 即可。

```go
var point *int // 声明 int 类型的指针
```

### 指针变量赋值

给指针变量赋值，需要在对应类型的变量前加上`&`符号，表示取出该变量的地址。

```go
var i = 1
var point *int
point = &i
```

### 值传递与引用传递

一般情况下，我们传入函数的参数仅为变量的值，这样的传递被称为值传递，在函数内对参数修改也不会影响到外部变量。

```go
func addOne(slice []int, number int) {
	slice = append(slice, number)
	fmt.Println("inner slice =",  slice)
}

slice := []int{1, 2, 3}
addOne(slice, 100)
fmt.Println("outer slice =",  slice)
```

上述代码中，我们写了一个函数，会对传入的切片追加一个值，调用之后，我们会发现外部切片的值并没有发生变量。

![](https://file.shenfq.com/pic/20210412162927.png)

如果需要外部变量的值会跟随函数调用发生变化，就需要将变量的指针传入函数中，这样的传递被称为引用传递。这样在函数中修改参数就会影响到外部的变量了。

```go
// 此时 slice 为指针变量
func addOne(slice *[]int, number int) {
  // 通过 *slice 可以取出 slice 指针对应的值
	*slice = append(*slice, number)
	fmt.Println("inner slice =",  *slice)
}

slice := []int{1, 2, 3}
addOne(&slice, 100)
fmt.Println("outer slice =",  slice)
```

![](https://file.shenfq.com/pic/20210412163342.png)

![](https://file.shenfq.com/pic/20210412164001.png)



