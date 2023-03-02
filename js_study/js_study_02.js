/** label
 * 
 */

{
    let a, b
    if ((a = 5) === (b = 5)) {console.log('条件表达式中使用赋值语句')}
}{
    let a = new Boolean(false)
    if (a) console.log('不要将原始的布尔值与 Boolean 对象的真与假混淆')
}{
    try {
        throw '异常处理语句 1'
    } catch (e) {
        console.log(e)
        // throw '异常处理语句 2'
    } finally {
        console.log('异常处理语句 3')
    }
}{
    let err = new Error('Error 语句')
    console.log(err.name)
    console.log(err.message)
}{
    var num = 0
    label1:
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (i == 5 && j == 5) {
                break label1;
            }
            num++;
        }
    }
    console.log(num)
}{
    var num = 0
    label1:
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (i == 5 && j == 5) {
                continue label1;
            }
            num++;
        }
    }
    console.log(num)
}{
    let indexs = {'a': 'A', 'b': 'B'}
    for (let index in indexs) {
        console.log(index)
    }
}{
    let indexs = [1, 2]
    for (let index of indexs) {
        console.log(index)
    }
}