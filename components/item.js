;(function () {
    const template = `
                <tr>
                  <td>{{emp.id}}</td>
                  <td>{{emp.name}}</td>
                  <td>{{emp.salary}}</td>
                  <td>
                    <a href="#" @click="deleteItem">删除</a>
                  </td>
                </tr>`
    window.Item = {
        props:{
            emp: {
                type: Object,
                required: true
            },
            index: Number,
            deleteEmp: Function
        },
        template,
        methods: {
            deleteItem(){
                this.deleteEmp(this.index)
            }
        }
    }
})()