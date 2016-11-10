import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      get theater() {
        var url = 'http://data.tmsapi.com/v1.1/movies/showings?startDate=2016-11-10&api_key=ryhrbug5pq4222vswnsd48z2&zip=98052';
        return Ember.$.getJSON(url).then(function(responseJSON) {
          console.log(responseJSON);
          return responseJSON;
          //using then for Ember to wait til getJSOn promise done firest then run
        });
      },
      zip:params.zip,
    });
  }
});
