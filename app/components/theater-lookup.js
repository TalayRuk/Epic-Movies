import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    //when user enter zipcode in the nav-bar this should locate the theater
    findTheater() {
      var params = {
        zip: this.get('zip')
      };
      this.sendAction('findTheater', params);
    }
  }
});
