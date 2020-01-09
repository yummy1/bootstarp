new Vue({
    el: '#app',
// Vue 根实例中有 template 选项引用了组件后，然后会把 template 中的渲染结果替换掉 #app 标签 template: '<app></app>',
    template: '<app/>',
    router,
    components: {
        App //等价于 App: App
    }
})