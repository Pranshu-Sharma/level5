var app = angular.module('myApp', []);
app.controller('mainController',['$scope','$http','$q',function($scope,$http,$q) {

var main = this;

main.books1 = [];
main.characters1 = [];
main.houses1 = [];
main.arr = [main.books1,main.characters1,main.houses1];


this.baseUrl1 = 'https://www.anapioficeandfire.com/api/books';
this.loadBooks = function(){
  $http({
      method: 'GET',
      url: main.baseUrl1,
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(response);
        console.log(response.data[1].name)
        main.books = response.data;
        main.books1 += main.books;

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("some error occurred. Check the console.");
        console.log(response);
      },
    );
};
//
console.log("started");

this.baseUrl2 = 'https://www.anapioficeandfire.com/api/characters';
this.loadCharacters = function(){
  $http({
      method: 'GET',
      url: main.baseUrl2,
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(response);
        console.log(response.data[1].name)
        main.characters = response.data;
        main.characters1 += main.characters;

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("some error occurred. Check the console.");
        console.log(response);
      },
    );
};

this.baseUrl3 = 'https://www.anapioficeandfire.com/api/houses';
this.loadHouses = function(){
  $http({
      method: 'GET',
      url: main.baseUrl3,
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(response);
        console.log(response.data[1].name)
        main.houses = response.data;
        main.houses1 += main.houses;

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("some error occurred. Check the console.");
        console.log(response);
      },
    );
};


console.log(main.books1);
console.log(main.characters1);
console.log(main.houses1);




this.loadAll = function(){

    $q.all([this.loadBooks(), this.loadCharacters(), this.loadHouses()]).then(function(response){
       // OPTIONAL  aggregate results before resolving
      return main.books;
      return main.characters;
      return main.houses;

    });
}




}]);
