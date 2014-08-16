module.exports = Backbone.View.extend({
  render: function(){
    var html = '<p>' + this.model.get('description') + '</p>';
    $(this.el).html(html);
  },
  initialize: function(){
    this.model.on('change', this.render, this);
    // this.model.on('fetch', this.render, this);
  } 
})