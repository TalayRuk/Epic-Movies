import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('theaters', {path: '/theater/:postalcode'});
  //path = dynamic segment which contain the zip code we gathered from the user
  //now we need to go to theaters.js to return API Data in a model hook
});

export default Router;
