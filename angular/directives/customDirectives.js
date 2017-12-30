

app.directive("booksDirective",function(){
  return {
    templateUrl: "views/books-view.html",
    controller: function(){
      console.log("books directive loaded");
    }

  };
});


app.directive("charactersDirective",function(){

  return{
    templateUrl: "views/characters-view.html",
    controller: function(){
      console.log("characters directive loaded");
    }
  };

});


app.directive("housesDirective",function(){

  return{
    templateUrl: "views/houses-view.html",
    controller: function(){
      console.log("houses directive loaded");
    }
  };

});
