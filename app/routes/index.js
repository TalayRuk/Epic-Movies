import Ember from 'ember';

var demos = [{
  id: 1,
  name: "DrStrange",
  image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2ODA4MTM0M15BMl5BanBnXkFtZTgwNzE5OTYxMDI@._V1_UY268_CR0,0,182,268_AL_.jpg"
}, {
  id: 2,
  name: "ironman2",
  image: "http://api.comingsoon.net//images//2010/Iron_Man_2_52.jpg"
}, {
  id: 3,
  name: "Logan",
  image: "http://cdn2-www.comingsoon.net/assets/uploads/gallery/untitled-wolverine-sequel/cuaiczwueaaid_w-jpg-large.jpg"
}, {
  id: 4,
  name: "ironman3",
  image: "https://upload.wikimedia.org/wikipedia/en/d/d5/Iron_Man_3_theatrical_poster.jpg"
}];



export default Ember.Route.extend({
  model() {
    return demos;
  },
  actions: {
    //This may need to move depending on where the route handler need to be for the nav-bar
    findTheater(params) {
      //to search theater on nav
      this.transitionTo('theaters', params.postalcode);
    }
  }
});
