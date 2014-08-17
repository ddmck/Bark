var TodoList = require('./todo_list');
var TodoListView = require('./todo_list_view');
var AddTodoView = require('./add_todo_view.js');

module.exports = Backbone.Router.extend({
  routes: { 
    "": "index"
  },
  initialize: function(){
    $('#app').html("<p>Backbone Initialized</p>");
  },
  index: function(){
    var todoList = new TodoList({});

    var input = new AddTodoView({collection: todoList });
    $('#app').html(input.el);
    
    var todoListView = new TodoListView({collection: todoList});
    todoList.fetch({update: true});
    $('#app').append(todoListView.el);
  },
  start: function(){
    Backbone.history.start({pushState: true});
  }
});