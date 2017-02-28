 "use strict";
 var app = angular.module("app", []);

 app.controller("appCtrl", function ($scope) {

   $scope.names = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

 });

 app.filter('parseIntFilter', function () {
   return function (item) {
     return Math.floor(item / 2);
   }
 })