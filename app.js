'use strict';

var request = require('request');
var fs = require('fs');


// var _= require('lodash');
var _ = require('lodash/core');


// http://pokeapi.co/api/v2/pokemon/1
// http://swapi.co/api/people/1/


  //Read
  fs.readFile('./pokemon.json', (err, data) => {
  
    if (err) {
      console.log('err:', err);
    } else {
  
  
    }

    console.log('err', err);
    console.log('data', data.toString());

    var name = NameStorage.get(data);
    console.log("name:", name);
    
    // var names = JSON.parse(data);
    // console.log("names:", names);
  })




// request('http://pokeapi.co/api/v2/pokemon/1', (err, res, body) => {
//   if (err) return console.log(err);

//   var array = [];
//   var pokemon = JSON.parse(body);
//   console.log(pokemon);

//   Write
//   array.push(pokemon);
//   fs.writeFile('./pokemon.json', JSON.stringify(array), err => {
//     if(err) return console.log(array);

//     console.log('done!')

//   });

// })



// Read
// fs.readFile('./pokemon.json', (err, data) => {
  
//   if (err) {
//     console.log('err:', err);
//   } else {


//   }
//   console.log('err', err);
//   // console.log('data', data.toString());


//   console.log('parse', JSON.parse(data));
// })

// var data = fs.readFile('./pokemon.json');

// console.log("data: ", data);


function removeName(event) {  
  var index = $(this).index();

  var names = NameStorage.get();
  names.splice(index, 1); // modify
  NameStorage.write(names);

  renderList();
}

function addName() {
  var newName = $('.newName').val();
  $('.newName').val('');

  var names = NameStorage.get();
  names.push(newName); // modify
  NameStorage.write(names);

  renderList();
}

var NameStorage = {
  get: function() {
    try {
      var names = JSON.parse(localStorage.names);
    } catch(err) {
      var names = [];
    }
    return names;
  },
  write: function(names) {
    localStorage.names = JSON.stringify(names);
  }
};









// var _ = require('lodash');
//
// var arr = [1,2,3,3,4,5,5,6,7];
//
//
// console.log(_.chunk(_.shuffle(arr), 2));
//

// var fs = require('fs');
// var str = `\n${Date.now()}`;
//
// fs.readFile('./times.json', (err, data) => {
//
//   if(err) {
//     return; // end the function
//   }
//
//   var arr = JSON.parse(data);
//
//   arr.push(Date.now());
//   fs.writeFile('./times.json', JSON.stringify(arr), err => {
//     if(err) return console.log(err);
//
//     console.log('done!')
//
//   });
//
//
// })

// fs.readFile('./test.txt', (err, data) => {
//
//   if (err) {
//     console.log('err:', err);
//   } else {
//
//
//   }
//   console.log('err', err);
//   console.log('data', data.toString());
// }


// var data = fs.readFileSync('./test.txt');
//
// var str = data.toString();
//
// console.log('str:', str);

// console.log('after');


// console.log('before');
//
// fs.readFile('./test.txt', (err, data) => {
//
//   if (err) {
//     console.log('err:', err);
//   } else {
//
//
//   }
//   console.log('err', err);
//   console.log('data', data.toString());
//
//
// });

// console.log('after');


// setTimeout(function() {
//   // runs asynchronously
//   console.log('done');
//
// }, 0);
//
// console.log('after');



// var res = [1, 2, 3].map(function (num) {
//   return num *2;
// });
//

// console.log("111!");

// var math = require('./math');
// var os = require('os');
// var path = require('path');
//
// // var path = require('/foo')
//
// // console.log(os.cpus());
//
// // console.log( path.join(__dirname + '/newDir') );
// console.log( path.join(__dirname, '..') );
//
//
//
// // console.log( math.sum(2, 4) );
