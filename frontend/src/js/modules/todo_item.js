module.exports = Backbone.Model.extend({
  urlRoot: "/todos",
  defaults: {
    description: "Thing to do...",
    completed: false
  }
})