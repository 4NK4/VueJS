
console.log("hello world!");//用来测试是否打包成功
document.writeln("hello world!")//这样子显示直接一点
require("./js/index.js")//用来测试图片文件是否能被级联打包



/* 模块化简单的vue尝试步骤一 Vue模块会被自动打包到bundle.js中

    //搭配index.html中的<div id="app">{{message}}</div> 这一行代码
    import Vue from 'vue'
    const vm=new Vue({
        el:"#app",
        data:{
            message:"hello Vue in Webpack"
        }

    })
*/

/* 不手动去修改index.html的改进方案
import Vue from 'vue'
//如何才能 在不修改index.html的情况下应用Vue的View呢?
    //使用template
        //template的内容会将整个index.html有app标记的div覆盖掉

new Vue({//省去了接收vue实例的vm对象
    el: "#app",
    template: `
    <div>{{message}}</div>
    `,
    data: {
        message: "hello Vue in Webpack"
    }

})
*/

/*
//利用root根节点的template去显示组件
import Vue from 'vue'

const cnp={
    template:`<div>{{message}}</div>`,
    data(){
        return{
            message:"hello world!"
        }
    }

}
new Vue({
    el: "#app",
    template:`<cnp_show/>`,//妙处在这里!!!
    components:{
       cnp_show:cnp
    }

})
*/

/*
//既然已经把组件抽离成了一个对象了,则就分离到不同文件中去
    //建立一个vue文件夹,并建立一个app.js文件默认导出一个组件对象
    //还有一点不好,就是模板和js代码没有分离
    import Vue from 'vue'
    import cnp_show from './vue/app.js'
    new Vue({
        el: "#app",
        template:`<cnp_show/>`,
        components:{
           cnp_show
        }
    })
*/

//将vue模板与js分离
//为vscode安装vetur插件
//在vue文件夹中添加一个app.vue文件
//敲入vue按tab生成模板
//配置一个解析.vue文件格式的loader
// npm i vue-loader vue-template-compiler --save-dev
//配置 查看官网https://vue-loader.vuejs.org/zh/

import Vue from 'vue'
import cnp_show from './vue/app.vue'
new Vue({
    el: "#app",
    template: `<cnp_show/>`,
    components: {
        cnp_show
    }
})