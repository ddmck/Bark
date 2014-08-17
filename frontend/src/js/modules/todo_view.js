module.exports = Backbone.View.extend({
  tagName: 'li',
  template: _.template("<div class='todo-item'><input type='checkbox'><p><%= description %></p></div>"),

  render: function(){
    // var html = '<p>' + this.model.get('description') + '</p>';
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  initialize: function(){
    console.log(this.el);
    this.model.on('change', this.render, this);
    this.model.on('fetch', this.render, this);
  } 
})