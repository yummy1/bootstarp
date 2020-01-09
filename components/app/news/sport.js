;(function () {
    const template = `
<div>
    <ul> 
        <li v-for="(sport, index) in sportArr" :key="sport.id">
        <!--注意： to 中是JS表达式，就需要使用 v-bind绑定 to属性，即 :to
                    注意单引号不要少了 ''
                -->
            <router-link :to="'/news/sport/detail/'+sport.id">
                {{sport.title}}
            </router-link>
        </li>
    </ul>
    <!--详情-->
    <router-view></router-view>
</div>`
    window.Sport = {
        template,
        data() {
            return{
                sportArr: []
            }
        },
        created() {
            this.getSportArr()
        },
        methods:{
            // 异步获取数据
            getSportArr(){
                axios.get('http://localhost:63342/bootstarp/db/sport.json').then(response => {
                    console.log(response.data)
                    this.sportArr = response.data
                }).catch(error => {
                    console.log(error.message)
                })
            }
        }
    }
})()