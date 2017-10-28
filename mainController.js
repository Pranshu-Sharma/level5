var app = angular.module('myApp', []);
app.controller('mainController',['$http','$q',function($http,$q) {

var main = this;

// this.books1 = [];
// this.characters1 = [];
// this.houses1 = [];
this.arr = [];


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
        main.arr.push(main.books);

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
        main.arr.push(main.characters);

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
        main.arr.push(main.houses);

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("some error occurred. Check the console.");
        console.log(response);
      },
    );
};


console.log(main.arr);





this.loadAll = function(){

    $q.all([this.loadBooks(), this.loadCharacters(), this.loadHouses()]).then(function(response){
       // OPTIONAL  aggregate results before resolving
      return main.books;
      return main.characters;
      return main.houses;

    });
}




}]);
