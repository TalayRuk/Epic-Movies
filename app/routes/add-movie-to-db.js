import Ember from 'ember';

export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://www.omdbapi.com/?t=' + params.newMovie +'&y=&plot=short&r=json';
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON;
   });
  }
});
