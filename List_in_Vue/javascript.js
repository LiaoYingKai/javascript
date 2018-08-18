var list = new Vue({
  el: "#list",
  data: {
    lists: [],
    newList: ""
  },
  methods: {
    addTask: function(task) {
      this.lists.push({
        content: task,
        complete: false
      });
    },
    removeTask: function(task) {
      this.lists.splice(this.lists.indexOf(task), 1);
    }
  }
});