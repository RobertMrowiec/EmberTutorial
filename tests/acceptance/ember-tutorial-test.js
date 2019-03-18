import { module, test } from 'qunit';
import { click, currentURL, visit, fillIn, triggerKeyEvent } from '@ember/test-helpers';
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

  test('should filter the list of rentals by city.', async function (assert) {
    await visit('/')
    await fillIn('.list-filter input', 'seattle')
    await triggerKeyEvent('.list-filter input', 'keyup', 69)
    assert.equal(this.element.querySelectorAll('.results .listing').length, 1, 'should display only 1 listing')
    assert.ok(this.element.querySelector('.listing .location').textContent.includes('Seattle'), 'should contain 1 listing with Seattle as city')
  });

  test('should show details for a selected rental', async function () {
  });
});
