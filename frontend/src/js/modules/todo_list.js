var TodoItem = require('./todo_item');

module.exports = Backbone.Collection.extend({
  url: "/todos",
  model: TodoItem,
  initialize: function(){
  }
});