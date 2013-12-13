'use strict';

/* jasmine specs for controllers go here */

describe('PhoneCat controllers', function() {
  beforeEach(module('phonecatApp'));

  describe('PhoneListCtrl', function(){

    it('should create "phones" model w/ 3 phones', inject(function($controller){
      var scope = {},
        ctrl = $controller('PhoneListCtrl', { $scope : scope});


      expect(scope.phones.length).toBe(3);
    }));
  });
});
