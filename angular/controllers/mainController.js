var app = angular.module('myApp', []);
app.controller('mainController',['$http',function($http) {

var main = this;

this.arr = [];


this.baseUrl = 'https://www.anapioficeandfire.com/api';

this.loadBooks = function(){
  $http({
      method: 'GET',
      url: main.baseUrl+"/books",
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(response);
        console.log(response.data[1].name)
        main.books = response.data;
        main.arr.push.apply(main.arr,main.books);

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("some error occurred. Check the console.");
        console.log(response);
      },
    );
};
//
this.loadBooks();
console.log("started");


this.loadCharacters = function(){
  $http({
      method: 'GET',
      url: main.baseUrl+"/characters",
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(response);
        console.log(response.data[1].name)
        main.characters = response.data;
        main.arr.push.apply(main.arr,main.characters);

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("some error occurred. Check the console.");
        console.log(response);
      },
    );
};
this.loadCharacters();


this.loadHouses = function(){
  $http({
      method: 'GET',
      url: main.baseUrl+"/houses",
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(response);
        console.log(response.data[1].name)
        main.houses = response.data;
        main.arr.push.apply(main.arr,main.houses);

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("some error occurred. Check the console.");
        console.log(response);
      },
    );
};
this.loadHouses();

console.log(main.arr);






}]);
