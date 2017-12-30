var app = angular.module('myApp');
app.controller('booksController',['$http',function($http) {

var main = this;

this.arr = [];
this.books = [];

console.log("books controller loaded");

this.baseUrl = 'https://www.anapioficeandfire.com/api';

this.loadBooks = function(){
  $http({
      method: 'GET',
      url: main.baseUrl+"/books?page=1&pageSize=50",
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

}]);
