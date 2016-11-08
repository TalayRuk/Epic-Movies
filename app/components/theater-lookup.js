import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    //when user enter zipcode in the nav-bar this should locate the theater
    findTheater() {
      var params = {
        postalcode: this.get('postalcode')
      };
      this.sendAction('findTheater', params);
    }
  }
});
