import Ember from 'ember';

export default Ember.Component.extend({
  name: '',
  actions: {
    post() {
      if (confirm('your information works')) {

      }
      this.set('name',"");
      this.set('message', "");
      this.set('email', "");
    }
  }
});
