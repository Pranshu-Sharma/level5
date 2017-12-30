var app = angular.module('myApp');
app.controller('housesController',['$http',function($http) {

var main = this;

this.arr = [];
this.houses = [];

console.log("houses controller loaded");

this.baseUrl = 'https://www.anapioficeandfire.com/api';

this.loadHouses = function(){
  $http({
      method: 'GET',
      url: main.baseUrl+"/houses?page=1&pageSize=50",
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

}]);
