import Ember from 'ember';

export default Ember.Service.extend({
  tickets: [],

  add(tickets) {
    var ticket = {
      this.get('title'),
      this.get('cost'),
      this.get('quantity'),
      this.get('type'),
    };
    this.get('tickets').pushObject(ticket);
  }

});
