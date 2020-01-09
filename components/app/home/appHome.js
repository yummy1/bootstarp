;(function () {
    const template = `
            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

                <!--右边上半区域-->
<!--            <h1 class="page-header">Dashboard</h1>-->
                <!--插槽的简单使用-->
                <slot name="dashborad"></slot>
                <!--通过属性绑定的方式向子组件传递数据
                    @自定义事件名=事件监听函数        
                    在子组件 dashboard 中触发 了 delete_hobby 事件来调用 deleteHobby 函数
                -->
                <app-home-top :hobbies="hobbies" @delete_hobby="deleteHobby"></app-home-top>
                <!--右边下半区域-->
                <h2 class="sub-header">Section title</h2>
                <app-home-bottom :empList="empList" :deleteEmp="deleteEmp"></app-home-bottom>
            </div>`
    window.AppHome = {
        template,
        data () {
            return{
                hobbies: ['看书', '台球', '睡觉', '撸代码'],
                empList: [
                    {id: 1, name: '小梦1', salary: 80001},
                    {id: 2, name: '小梦2', salary: 80002},
                    {id: 3, name: '小梦3', salary: 80003},
                    {id: 4, name: '小梦4', salary: 80004},
                    {id: 5, name: '小梦5', salary: 80005},
                    {id: 6, name: '小梦6', salary: 80006},
                ]
            }
        },
        created() {
            axios.get('http://localhost:63342/bootstarp/db/emp.json').then(response => {
                this.empList = response.data
            }).catch(error => {
                console.log(error.message)
            })
        },
        methods: {
            // 删除某个员工
            // 因为删除 emp 会对 empList 做更新操作
            // 而这个 empList 初始化在当前组件中，所以删除 的函数需要定义在这个组件里面
            deleteEmp(index){
                this.empList.splice(index,1)
            },
            deleteHobby(index){
                this.hobbies.splice(index,1)
                //发布事件
                PubSub.publish('changeNum',1)
            }
        },
        components: {
            AppHomeTop,
            AppHomeBottom
        }
    }
})()