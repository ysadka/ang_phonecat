'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {

  describe('Phone list view', function() {

    beforeEach(function() {
      browser().navigateTo('Users/yaron/Desktop/Iron.io/angular-phonecat/app/index.html');
    });

    it('should filter the phone list as user types into the search box', function() {
      expect(repeater('.phones li').count()).toBe(3);

      input('query').enter('XOOM');
      expect(repeater('.phones li').count()).toBe(1);
    });
  });
});
