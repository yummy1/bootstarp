;(function () {
    const template = `
<!--详情-->
    <div class="jumbotron">
        <h1>{{ id }}</h1>
        <h2>{{ sportDetail.title }}</h2>
        <p>{{ sportDetail.content }}</p> 
    </div>`
    window.SportDetail = {
        template,
        data(){// data 只会初始化一次，后面点击之后不会进行重新赋值
            return{
                sportDetail: {},
                id : null
            }
        },
        created() {// 第一次初始化组件时，要调用函数进行获取id并查找数据
            this.getSportDataByID()
        },
        methods:{
            getSportDataByID(){
                // 1. 获取路由地址中的 id值, -0 把id从字符串转为数字
                this.id = this.$route.params.id-0
                // 2. 获取所有的体育新闻
                axios.get('http://localhost:63342/bootstarp/db/sport.json').then(response => {
                    console.log(response.data)
                    const sportArr = response.data
                    // 3. 通过 id 获取指定的数据
                    // find 返回满足条件的 1条数据
                    this.sportDetail = sportArr.find(detail => {
                        // this 如果要代表 当前组件对象，则 回调函数要使用箭头函数
                        return detail.id == this.id
                    })
                }).catch(error => {
                    console.log(error.message)
                })
            }
        },
        watch: {// watch 是对象，用于监听属性使用
            '$route': function () {
                this.getSportDataByID()
            }
        }
    }
})()