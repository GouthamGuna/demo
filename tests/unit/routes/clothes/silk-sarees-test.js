import { module, test } from 'qunit';
import { setupTest } from 'demo/tests/helpers';

module('Unit | Route | clothes/silk_sarees', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:clothes/silk-sarees');
    assert.ok(route);
  });
});
