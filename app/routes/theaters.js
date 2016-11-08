import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://api.fandango.com/v1/?apikey=qywmcyxhhsbzqayrbamhdssc&sig=da30722f535fc6f40e7ea3fe38596e28a9b31f8dea3659975a09c65965d840e8&op=performancesbypostalcodesearch&postalcode=' + params.postalcode;

    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON);
      return responseJSON.theaters;
      //using then for Ember to wait til getJSOn promise done firest then run
    });
    }
});
