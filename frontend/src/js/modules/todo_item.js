module.exports = Backbone.Model.extend({
  urlRoot: "/todos",
  defaults: {
    description: "Thing to do...",
    completed: false
  },
  toggleCompleted: function(){
    alert("Toggled from model");
    if( this.get('completed') == false ){
      this.set('completed', true);
    } else {
      this.set('completed', false);
    }
    alert("Toggled from model: " + this.get('completed'));
    this.save();
  }
})