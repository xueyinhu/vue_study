/** JavaScript（JS）是一种具有【函数优先】特性的轻量级、【解释型或者说即时编译型】的编程语言。
 * 函数优先
 * 即时编译型
 */

/** JavaScript 是一种基于【原型】、【多范式】、【单线程】的【动态 (en-US)】语言，并且支持【面向对象】、【命令式】和【声明式（如函数式编程）】风格。
 * 原型
 * 多范式
 * 单线程
 * 动态
 * 面向对象
 * 命令式
 * 声明式
 */

/** JavaScript 的标准：ECMAScript 语言规范 和 ECMAScript 国际化 API 规范
 * 
 * 
 */

/** JavaScript 核心语言特性
 * 
 */

(function() {
    "use strict"
    function sayHello(name) {
        console.log('Hello ' + name + '!')
    }
    sayHello('JavaScript')
})()

/** Js 的语法与数据类型
 * 借鉴了 Java 的大部分语法，但同时借鉴了 Awk、Peri 和 Python 的影响
 * 声明方式：
 *  1. val 声明一个变量，可初始化一个值
 *  2. let 声明一个块作用域的局部变量，可初始化一个值
 *  3. const 声明一个块作用域的只读常量
 * 声明变量：
 *  1. var 声明局部变量与全局变量
 *  2. 直接赋值，这样会产生一个全局变量，严格模式下会产生错误
 *  3. let 声明块作用域的局部变量
 * 变量求值：
 *  使用 var 或 let 声明的变量，如果没有初始值，则其值为 undefined
 *  undefined 在布尔环境下当作 false，在数值环境下当作 NaN
 *  null 在布尔环境下当作 false，在数值环境下当作 0
 */

/** 变量的作用域
 * 在函数之外声明的变量是全局变量，可以被当前文档中任何其他代码访问
 * 在函数内声明的变量是局部变量，只能在函数的内部进行访问
 * ES6 之前没有语句块作用域，语句块声明的变量将成为语句块所在函数（或全局作用域）的局部变量
 */

/** 变量提升：可以在使用变量稍后再声明变量而不会引发异常
 * 实际上，提升后的变量将返回 undefined 值
 * var 尽量集中在代码顶部
 * let 与 const 同样会提升但是不会赋予初始值，在声明前进行使用，会抛出引用错误
 */

/** 函数提升
 * 只有函数声明会被提升到顶部，而函数表达式不会
 */

/** 数据结构与类型
 * 1. 基本数据类型
 *  a. Boolean
 *  b. null
 *  c. undefined
 *  d. Number
 *  e. BigInt
 *  f. String
 *  g. Symbol es6 新类型，实例唯一且不可以改变
 * 2. Object
 * 
 * 类型转换
 * 1. Number -> String
 *  加法运算符，区别于如减法运算符等
 * 2. String -> Number
 *  a. parseInt(radix参数用于指定进制) parseFloat()
 *  b. 一元加法运算符
 */

/** 字面量
 * 1. 数组字面量
 *  多余的逗号会生成没有被指定的元素，除了列表尾部
 * 2. 布尔字面量
 * 3. 数字字面量（无符号，负数可以理解为一元运算符-作用于前）
 *  a. 整数字面量
 *      严格模式下，八进制整数字面量必须要以 0o 或者 0O 开头
 *  b. 浮点数字面量
 *      [(+|-)][digits][.digits][(E|e)[(+|-)]digits]
 * 4. 对象字面量
 *  增强的对象字面量
 * 5. RegExp 字面量
 *  正则表达式是字符被斜线围成的表达式
 * 6. 字符串字面量
 *  可以在字符串字面值上使用字符串对象的所有方法
 *  JavaScript 会自动将字符串字面值转换为一个临时字符串对象
 *  模板字符量
 *      可以在模板字符串前添加一个 tag 来自定义模板字符串的解析过程，
 *      这可以用来防止注入攻击，或者建议基于字符串的高级数据抽象
 *      
 */

/** 解构赋值与对象字面量
 * 解构赋值：将数组中的值或对象的属性取出，赋值给其他变量
 * 对象字面值：封闭在花括号之中的一个对象的零个或多个'k-v'对的列表
 */

/** 全局变量
 * 
 */

/** 常量
 * 对象属性被赋值为常量是不受保护的
 * 数组被定义为常量也是不受保护的
 */

// 区分大小写，并使用 Unicode 字符集
// var Früh = "foobar"

// es6 前
// if (true) {
//     var x = 5
// }
// console.log(x)

// 变量提升
// console.log(x === undefined)
// var x = 1
var x1 = "x0";
(function() {
    console.log(x1)
    var x1 = "x1"
})()
// 输出 undefined 的原因：？

// 函数提升
// test1()
// function test1() {console.log('函数声明')}
// test2()
// var test2 = function test2() {console.log('函数表达式')}

// 常量
// const obj = {'k': 'v1'}
// obj.k = 'v2'
// console.log(obj.k)
// const arr = ['h', 'c', 'j']
// arr.pop('j')
// console.log(arr)

// 类型转换
// console.log('37' - 7)
// console.log('37' + 7)
// console.log(+'1.1')

// 解构赋值
// let a, b, moreNum
// [a, b, ...moreNum] = [0, 1, 2, 3, 4]
// console.log(moreNum)

// 对象字面量
// let obj = {
//     "!": '对象属性名称并不是合法的标识符，必须用""进行包裹',
//     "": '对象属性名称不合法，只能通过类数组标记访问与赋值'
// }
// console.log(obj["!"])
// console.log(obj[""])
// var test = {a: 'alpha', 2: 'two'}
// console.log(test["a"])
// console.log(test[2])

// 字符串字面量
// console.log('I want eat some.'.length)

// 模板字符串
// var a = 5, b = 10;
// console.log(`${a} + ${b} = ${a + b}`)


function template(strings, ...keys) {
    return (function(...values){
        var dict = values[values.length - 1] || {}
        var result = [strings[0]]
        keys.forEach(function(key, i) {
            var value = Number.isInteger(key) ? values[key] : dict[key]
            result.push(value, strings[i + 1])
        })
        return result.join('')
    })
}
var t1Closure = template`${0}${1}${0}`
console.log(t1Closure('Y', 'A'))
var t2Closure = template`${0} ${'foo'}`
console.log(t2Closure('Hello', {foo: 'World'}))







