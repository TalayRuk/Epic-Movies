import Ember from 'ember';

export default Ember.Service.extend({
  tickets: [],

  add(ticket) {
    this.get('tickets').pushObject(ticket);
  }

});

addATicket(){
  var ticket = {
    title: this.get('title'),
    cost: this.get('cost'),
    this.get('quantity'),
    this.get('type'),
  };
  add(ticket);
}

//
