;(function () {
    const template = `
<div>
    <ul>
        <li v-for="(tech,index) in techArr" :key="tech.id">
            <span>{{ tech.title }}</span>
            <button class="btn btn-default btn-xs" @click="pushTech(tech.id)">查看(Push)</button>&nbsp; 
            <button class="btn btn-default btn-xs" @click="replaceTech(tech.id)">查看(replace)</button>
        </li> 
        <button @click="$router.go(-1)">后退</button>
        <button @click="$router.go(1)">前进</button>
    </ul>
<!--详情-->
    <router-view></router-view>
 </div>`
    window.Tech = {
        template,
        data(){
            return{
                techArr: []
            }
        },
        created() {
            this.getTechArr()
        },
        methods: {
            pushTech(id){
                // push 可后退回来
                this.$router.push(`/news/tech/detail/${id}`)
            },
            replaceTech(id){
                // replace 不可后退回来
                this.$router.replace(`/news/tech/detail/${id}`)
            },
            getTechArr(){
                axios.get('http://localhost:63342/bootstarp/db/tech.json').then(response => {
                    console.log(response.data)
                    this.techArr = response.data
                }).catch(error => {
                    console.log(error.message)
                })
            }
        }
    }
})()