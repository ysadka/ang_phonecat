'use strict';

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope){
  $scope.phones = [
    { 'name':'Nexus S',
      'snippet': 'This is the snippet Nexus S'},
    { 'name':'Razor',
      'snippet': 'This is the snippet Razor'},
    { 'name':'XOOM',
      'snippet': 'This is the snippet for XOOM'}
  ]

  $scope.hello = "Hello, World!"
});
