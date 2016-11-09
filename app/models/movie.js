import DS from 'ember-data';

export default DS.Model.extend({
  Title: DS.attr(),
  Poster: DS.attr(),
  Year: DS.attr(),
  Rated: DS.attr()

});
