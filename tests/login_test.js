/// <reference path="./steps.d.ts" />
Feature('Login');

Scenario('test successful login', (I) => {   
    I.amOnPage('/#login');
    I.waitForEnabled('login', 30000);
    I.fillField('Login', 'admin');
    I.fillField('Password', 'password');
    I.click('Submit');
    I.seeInCurrentUrl('#dashboard');
});
