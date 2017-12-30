var app = angular.module('myApp');
app.controller('charactersController',['$http',function($http) {

var main = this;

this.arr = [];
this.characters = [];

console.log("characters controller loaded");

this.baseUrl = 'https://www.anapioficeandfire.com/api';


this.loadCharacters = function(){
  $http({
      method: 'GET',
      url: main.baseUrl+"/characters?page=1&pageSize=50",
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

}]);
