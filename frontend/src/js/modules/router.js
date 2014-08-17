var TodoList = require('./todo_list');
var TodoListView = require('./todo_list_view');

module.exports = Backbone.Router.extend({
  routes: { 
    "": "index"
  },
  initialize: function(){
    $('#app').html("<p>Backbone Initialized</p>");
  },
  index: function(){
    var todoList = new TodoList({});
    var todoListView = new TodoListView({collection: todoList});
    todoList.fetch({update: true});
    $('#app').html(todoListView.el);
  },
  start: function(){
    Backbone.history.start({pushState: true});
  }
});