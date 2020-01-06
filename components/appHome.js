;(function () {
    const template = `<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

            <!--右边上半区域-->
            <h1 class="page-header">Dashboard</h1>
            <app-home-top></app-home-top>
            <!--右边下半区域-->
            <h2 class="sub-header">Section title</h2>
            <app-home-bottom></app-home-bottom>
          </div>`
    window.AppHome = {
        template,
        components: {
            AppHomeTop,
            AppHomeBottom
        }
    }
})()