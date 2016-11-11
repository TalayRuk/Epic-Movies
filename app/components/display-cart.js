import Ember from 'ember';

export default Ember.Component.extend({
  purchaseCart: Ember.inject.service(),
  actions: {
    deleteTick(ticket){
      this.get('purchaseCart').deleteTicket(ticket);
    }
  }
});
