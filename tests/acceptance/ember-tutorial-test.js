import { module, test } from 'qunit';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | ember tutorial', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks)

  test('should show rentals as the home page', async function (assert) {
    await visit('/')
    assert.equal(currentURL(), '/rentals', 'should automatically redirect')
  });

  test('should link to information about the company.', async function (assert) {
    await visit('/')
    await click('.menu-about')
    assert.equal(currentURL(), '/about', 'should navigate to about page')
  });

  test('should link to contact information', async function(assert) {
    await visit('/')
    await click('.menu-contact')
    assert.equal(currentURL(), '/contact', 'should navigate to contact page')
  });
  
  test('should list available rentals.', async function (assert) {    
    await visit('/')
    assert.equal(this.element.querySelectorAll('.listing').length, 3, 'should display 3 rentals')
  });

  test('should filter the list of rentals by city.', async function () {
  });

  test('should show details for a selected rental', async function () {
  });
});
