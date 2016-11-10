import Ember from 'ember';

export default Ember.Service.extend({
  tickets: [],

  add(ticket) {
    this.get('tickets').pushObject(ticket);
  }
});
