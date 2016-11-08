import Ember from 'ember';

export default Ember.Route.extend({
  name: "peter",
  actions: {
    post() {
      if (confirm('Your information has been sent.')){
      }
      this.set('name', 'hey');
    }
  }
});
