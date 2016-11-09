import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveMovieToDB() {
      var params = {
        Title: this.get('model.Title'),
        Poster: this.get('model.Poster'),
        Year: this.get('model.Year'),
        Rated: this.get('model.Rated'),
      };
      this.sendAction('saveMovieToDB', params);
    }
  }

});
