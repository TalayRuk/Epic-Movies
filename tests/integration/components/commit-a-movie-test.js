import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('commit-a-movie', 'Integration | Component | commit a movie', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{commit-a-movie}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#commit-a-movie}}
      template block text
    {{/commit-a-movie}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
