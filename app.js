// import Vue from 'vue'

new Vue({
 el: '#app',
 data: {
    message: 'test',
    tasks: [
        {
            title: 'Task 1',
            status: 'pending'
        },
        {
            title: 'Task 2',
            status: 'completed'
        }
    ]
 },
 methods: {
    handleTaskClick (index) {
        var task = this.tasks[index]
        const status = (task.status === 'completed') ? 'pending' : 'completed'
        this.$set(task, 'status', status)
    }
 }
})