'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('myApp', function() {

  browser.get('index.html');

  it('should automatically redirect to / when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });


});
