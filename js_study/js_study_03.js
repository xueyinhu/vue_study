{
    /** 函数声明
     * 函数名称 + 函数参数列表 + {定义函数的 Js 代码}
     */
    function square(number) {return number * number}
} {
    // 函数表达式
    const factorial = function fac(n) {return n<2 ? 1 : n * fac(n-1)}
    console.log(factorial(4))
} {
    // 可以类似于 eval() 用 Function 构造器由一个字符串来创建一个函数
} {
    function outside(x) {
        function inside(y) {
            return x + y
        }
        return inside
    }
    fn_inside = outside(3)
    result = fn_inside(5)
    console.log(result)
} {
    // arguments 对象
} {
    // 函数参数：默认参数与剩余参数
} {
    // 箭头参数
}