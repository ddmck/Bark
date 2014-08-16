module.exports = Backbone.View.extend({
  render: function(){
    var html = '<p>' + this.model.get('description') + '</p>';
    $(this.el).html(html);
  } 
})