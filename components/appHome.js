;(function () {
    const template = `<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

            <!--右边上半区域-->
<!--            <h1 class="page-header">Dashboard</h1>-->
            <!--插槽的简单使用-->
            <slot name="dashborad"></slot>
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
        methods: {
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