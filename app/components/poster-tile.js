import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addNewMovie() {
      var params = {
        newMovie: this.get('newMovie')
      };
      this.sendAction('addNewMovie', params);
    }
  }
});
