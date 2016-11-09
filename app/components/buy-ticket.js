import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  wantbuy: false,
  adultTicket: 0,
  childTicket: 0,
  seniorTicket: 0,
  adultTicketPrice: computed('adultTicket', function(){
    var price = this.get('adultTicket') * 12;
    return price;
  }),
  childTicketPrice: computed('childTicket', function() {
    var price = this.get('childTicket') * 8;
    return price;
  }),
  seniorTicketPrice: computed('seniorTicket', function() {
    var price = this.get('seniorTicket') * 6.50;
    return price;
  }),
  totalPrice: computed('adultTicketPrice', 'childTicketPrice', 'seniorTicketPrice', function(){
    return this.get('adultTicketPrice') + this.get('childTicketPrice') + this.get('seniorTicketPrice');
  }),

  actions: {
    showBuy(){
      this.set('wantBuy', true);
    },
    hideBuy(){
      this.set('wantBuy', false);
    },
    buyTicket(){
      // this.get('buyTicket', ticket);
    }
  }

});
