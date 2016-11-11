import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    findTheater(params) {
      this.transitionTo('theaters', params.zip);
    }
  }
});
