import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    post(contact) {
      if (confirm('Your information has been sent.')){
        this.sendAction('destroyContact', contact);
      }
    }
  }
});
