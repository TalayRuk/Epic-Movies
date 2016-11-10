import Ember from 'ember';

export default Ember.Component.extend({
  showingZipForm: false,
  actions: {
    formShow: function() {
      this.set('showingZipForm', true);
    },
    findTheater(params) {
      this.sendAction('findTheater', params);
    }

  }
});
