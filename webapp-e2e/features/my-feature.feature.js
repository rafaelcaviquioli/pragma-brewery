Feature('My Feature');

Scenario('default', I => {
  I.amOnPage('/');
  I.see('My Feature');
});
