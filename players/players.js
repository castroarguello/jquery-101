console.log('players module');

// var main$ = $.get('#main');
var data = {},
    path = 'players/';

$('head').append('<link rel="stylesheet" href="players/players.css" type="text/css" />');

// Load Players template.
$('#main').load(path + 'players.html', function(data){

  // Load Players JSON.
  $.getJSON(path + 'players.json', function(data) {
    console.log('players.json', data);
    if (data && data.forEach) {
      data.forEach(function(player){
        var $row = $('<tr>');
        $('<td>').addClass('name').html(player.name).appendTo($row);
        $('<td>').html(player.age).appendTo($row);
        $('<td>').html(player.single ? 'Single' : 'Married').appendTo($row);
        console.log(player, $row);
        $('table.players tbody').append($row);
      });
    }
  })
  .done(function() {
    console.log( "second success" );
  })
  .fail(function(error, response) {
    console.log( "error", error, response );
  });

  console.log('loaded template');
});

