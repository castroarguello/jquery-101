console.log('players module');

// var main$ = $.get('#main');
var data = {},
    path = 'players/';

$('head').append('<link rel="stylesheet" href="players/players.css" type="text/css" />');

// Load Players template.
$('#main').load(path + 'players.html', function(data) {

  // Load Players JSON.
  $.getJSON(path + 'players.json', function(data) {
    console.log('players.json', data);
    if (data && data.forEach) {
      data.forEach(addPlayer);
    }
  })
  .done(function() {
    console.log( "second success" );
  })
  .fail(function(error, response) {
    console.log( "error", error, response );
  });

  // Add click handler.
    console.log('#btnAdd.click')
  $('#btnAdd').on('click', function(e) {
    let player = {};
    player.name = $('#name').val();
    player.age = $('#age').val();
    player.single = $('#single').is(':checked');
    addPlayer(player);
  });

  console.log('loaded template');
});

function addPlayer(player) {
  var $row = $('<tr>');
  $('<td>').addClass('name').html(player.name).appendTo($row);
  $('<td>').html(player.age).appendTo($row);
  $('<td>').html(player.single ? 'Single' : 'Married').appendTo($row);
  let btn$ = $('<button>').addClass('delete').text('-')
    .on('click', function(e) {
      $(this).closest('tr').remove();
    });
  $('<td>').append(btn$).appendTo($row);
  console.log('addPlayer', player, $row);
  $('table.players tbody').prepend($row);
  // Delete click handler.
}
