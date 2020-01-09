;(function () {
    const template = `<div id="app">
      <!--头部导航区域-->
      <app-navbar></app-navbar>
      <!--核心区域:分左右两边-->
      <div class="container-fluid">
        <div class="row">
          <!--左边菜单栏区域-->
          <app-leaf></app-leaf>
          <!--右边主页面区域-->
          <keep-alive>
            <router-view>
              <h1 slot="dashborad" class="page-header">{{homeTittle}}</h1>
            </router-view>
          </keep-alive>
        </div>
      </div>
    </div>`
    window.App = {
        template,
        data(){
            return{
                homeTittle: 'Dashboard00'
            }
        },
        components: {
            AppNavbar,
            AppLeaf,
            AppHome
        }
    }
})()