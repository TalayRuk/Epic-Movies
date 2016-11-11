import Ember from 'ember';

export default Ember.Service.extend({
  tickets: [],

  deleteTicket(ticket) {
    this.get('tickets').removeObject(ticket);
  },
  add(ticket) {
    this.get('tickets').pushObject(ticket);
  }
});
