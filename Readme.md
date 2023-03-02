## <font color='green'>【Vue】</font> 是一套用于<font color='aqua'> 构建用户界面 </font>的<font color='orange'> 渐进式</font> Javascript 框架

---

**A. 特点：**

    -> 使用组件化模式，提高代码复用率，代码更好维护；
    -> 声明式编码，无需直接操作 DOM，提高开发效率；
    -> 使用虚拟 DOM 与优秀的 Diff 算法，尽量复用 DOM 节点。


**B. 语法**

<table border=2>
    <tr>
        <td>名称</td>
        <td>写法</td>
        <td>用途</td>
        <td>备注</td>
    </tr>
    <tr>
        <td>插值语法</td>
        <td>{{ js 表达式 }}</td>
        <td>解析标签体内容</td>
        <td></td>
    </tr>
    <tr>
        <td rowspan=3>指令语法</td>
        <td>[v-bind]:href = ' js 表达式 '</td>
        <td rowspan=2>解析标签属性</td>
        <td></td>
    </tr>
    <tr>
        <td>v-model[:href] = ' js 表达式 '</td>
        <td>只能用于表单类元素上，双向绑定</td>
    </tr>
    <tr>
        <td>[v-on:/@]xxx = 'demo($event, values)'</td>
        <td>事件处理</td>
        <td>事件修饰符: 
        <br/> .prevent 阻止默认事件
        <br/> .stop 阻止冒泡
        <br/> .once 事件只发生一次
        <br/> .capture 使用事件的捕获模式
        <br/> .self 只有是当前操作的元素时才会触发事件
        <br/> .passive 事件的默认行为立刻执行，无需等待事件回调执行完毕
        </td>
    </tr>
</table>  

**C. 组件**

```javascript
const vm = new Vue({
    data() {
        return {
            /** 函数式（不能使用箭头函数） 对比 对象式 的优势
             */
        }
    }
})
vm.$mount('#root') // 挂载
```

**D. 杂项**

    -> MVVM 模型
    -> 数据代理：通过一个对象代理对另一个对象中属性的操作（读/写）












