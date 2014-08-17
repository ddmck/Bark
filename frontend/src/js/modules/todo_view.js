var template = require('./todo_item.handlebars')
module.exports = Backbone.View.extend({
  tagName: 'li',
  template: template,
  events: {
    'click p': 'sayHi',
    'change input': 'toggleCompleted'
  },
  render: function(){
    // var html = '<p>' + this.model.get('description') + '</p>';
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  initialize: function(){
    console.log(this.el);
    this.model.on('change', this.render, this);
    this.model.on('fetch', this.render, this);
  },
  sayHi: function(){
    alert("Hi");
  },
  toggleCompleted: function(){
    this.model.toggleCompleted();
  } 

})