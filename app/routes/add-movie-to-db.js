import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://www.omdbapi.com/?t=' + params.newMovie +'&y=&plot=short&r=json';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON;
    });
  },
  actions: {
    saveMovieToDB(params) {

      console.log(params);

      var newMovie = this.store.createRecord('movie', params);
      newMovie.save();
      this.transitionTo('index');

    }

  }
});
