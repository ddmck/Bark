module.exports = Backbone.Router.extend({
  routes: { 
    "": "index"
  },
  initialize: function(){
    $('#app').html("<p>Backbone Initialized</p>");
  },
  index: function(){
    $('#app').append("<p>On Index</p>");
  },
  start: function(){
    Backbone.history.start({pushState: true});
  }
})