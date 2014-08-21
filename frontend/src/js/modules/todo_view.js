var template = require('./todo_item.handlebars')
module.exports = Backbone.View.extend({
  tagName: 'li',
  template: template,
  events: {
    'click p.delete': 'delete',
    'change input': 'toggleCompleted'
  },
  render: function(){
    // var html = '<p>' + this.model.get('description') + '</p>';
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  initialize: function(){
    this.model.on('displayImage', this.displayImage, this);
    this.model.on('change', this.render, this);
    this.model.on('fetch', this.render, this);
    this.model.on('hide', this.remove, this);
  },
  delete: function(){
    this.model.collection.remove(this.model)
  },
  toggleCompleted: function(){
    this.model.toggleCompleted();
  }, 
  displayImage: function(){
    $('#app').prepend('<img src="https://scontent-a.cdninstagram.com/hphotos-xpa1/t51.2885-15/925046_1447103408877220_699749604_n.jpg" width="100%">');
  } 

})