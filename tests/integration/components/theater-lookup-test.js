import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('theater-lookup', 'Integration | Component | theater lookup', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{theater-lookup}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#theater-lookup}}
      template block text
    {{/theater-lookup}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
