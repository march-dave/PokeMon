'use strict';

$(document).ready(init);

function init() {

    getPokeMonUrl();
}

function getPokeMonUrl () {

  var url = 'http://pokeapi.co/api/v2/pokemon/1';
  // var url = 'http://www.omdbapi.com/?t=frozen&y=&plot=short&r=json';

  $.ajax({
    url: url,
    success: function(data) {

      // console.log('data: ', data);
      // console.log('data.id: ', data.id);
      // console.log('data.base_experience: ', data.base_experience);
      // console.log('data.height: ', data.height);
      // console.log('data.is_default: ', data.is_default);
      // console.log('data.order: ', data.order);
      // console.log('data.abilities: ', data.abilities);
      // console.log('data.abilities[0].ability.name: ', data.abilities[0].ability.name);
      // console.log('data.abilities[0].ability.url: ', data.abilities[0].ability.url);

      addpokeMon(data);

      if(data.Response === 'True') {

        // var array = data;

        // console.log('array: ', array);
        // console.log('array.Title: ', array.Title);
        // console.log('array.Year: ', array.Year);
        // console.log('array.Rated: ', array.Rated);
        // console.log('array.Released: ', array.Released);
        // console.log('array.Writer: ', array.Writer);
        // console.log('array.Plot: ', array.Plot);

        // for(var i=0; i < array.length; i++) {

        // }

        // array.forEach( function(c, i, a) {

        //     console.log(c);

        // });

        // console.log(names);

        // var names = NameStorage.get(data);
        // console.log('names: ');
        // console.log(names);

      } else {
        // $movieContainer.empty();
        // var $notFound = $('<h4>').text('Movie Not Found');
        // $('#message').append($notFound);
      }

    }

  });

  // })
  // .done(function( data ) {
  //   if ( console && console.log ) {
  //     console.log( "Sample of data:", data.slice( 0, 100 ) );
  //   }
  // });



  $.ajax({
    url: 'http://pokeapi.co/api/v2/pokemon/1',
    success: function(data) {

    if(data.Response === 'True'){
        // $('#message').empty();
        // var $movies = data.Search;
        // var movieArray = [];

        // for(var i = 0; i < $movies.length; i++){
        //   var $card = addMovie($movies[i]);
        //   movieArray.push($card);
        // }
        // $movieContainer.empty();
        // $movieContainer.append(movieArray);
      }
      else{
        // $movieContainer.empty();
        // var $notFound = $('<h4>').text('Movie Not Found');
        // $('#message').append($notFound);
      }
    }
  })



  // var pokemon = NameStorage.get(data);

  // console.log(pokemon);

}

function addpokeMon(data) {

  // var $pokeMon = $('#pokemonTemplate').clone().removeAttr('id');
  var $pokeMon = $('#pokemonTemplate').clone().removeClass('id');
  $pokeMon.find('.id').text(data.id);
  $pokeMon.find('.base_experience').text(data.base_experience);


  $('.containter').append($pokeMon);


// console.log('data: ', data);
// console.log('data.id: ', data.id);
// console.log('data.base_experience: ', data.base_experience);
// console.log('data.height: ', data.height);
// console.log('data.is_default: ', data.is_default);
// console.log('data.order: ', data.order);
// console.log('data.abilities: ', data.abilities);
// console.log('data.abilities[0].ability.name: ', data.abilities[0].ability.name);
// console.log('data.abilities[0].ability.url: ', data.abilities[0].ability.url);


}

var NameStorage = {
  get: function(data) {
    try {
      var names = JSON.parse(data);
    } catch(err) {
      var names = [];
    }
    return names;
  },
  write: function(names) {
    localStorage.names = JSON.stringify(names);
  }
};

// function movieSearch(url) {
//   var $movieContainer = $('#movieContainer');
//   $.ajax({
//     url: url,
//     success: function(data) {

//     if(data.Response === 'True'){
//         $('#message').empty();
//         var $movies = data.Search;
//         var movieArray = [];

//         for(var i = 0; i < $movies.length; i++){
//           var $card = addMovie($movies[i]);
//           movieArray.push($card);
//         }
//         $movieContainer.empty();
//         $movieContainer.append(movieArray);
//       }
//       else{
//         $movieContainer.empty();
//         var $notFound = $('<h4>').text('Movie Not Found');
//         $('#message').append($notFound);
//       }
//     }
//   })
// }