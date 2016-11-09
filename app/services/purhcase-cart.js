import Ember from 'ember';

export default Ember.Service.extend({
  tickets: [],

  add(ticket) {
    this.get('tickets').pushObject(ticket);
  }
});




add(tickets) {
  var ticket = {
    this.get('title'),
    this.get('cost'),
    this.get('quantity'),
    this.get('type'),
  };
