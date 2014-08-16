var Router = require('./modules/router');
var TodoListItem = require('./modules/todo_list_item');
var TodoListItemView = require('./modules/todo_list_item_view');
var App = new Router();

$(document).ready(function(){
  App.start();
  var todoListItem = new TodoListItem({});
  var todoListItemView = new TodoListItemView({model: todoListItem});
  todoListItemView.render();
  $('#app').html(todoListItemView.el);
  console.log(todoListItemView);
  console.log(todoListItem.get('description'));
});