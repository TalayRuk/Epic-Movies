import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return this.store.findAll('movie');
    },
  actions: {
    //This may need to move depending on where the route handler need to be for the nav-bar
    findTheater(params) {
      //to search theater on nav
      this.transitionTo('theaters', params.zip);
    },
    addNewMovie(params) {
      this.transitionTo('addMovieToDB', params.newMovie);
    }
  }
});
