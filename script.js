// $('.project_square').hover(function() {
//   $(this).find('img').fadeTo(200, 0.2);
//   $(this).find('p').fadeTo(200, 1);
// }, function() {
//   $(this).find('img').fadeTo(200, 1);
//   $(this).find('p').fadeTo(200, 0);
// });


$('.project_square_background').hover(function() {
  $(this).find('img').fadeTo(200, 0.5);
  $(this).find('p').fadeTo(200, 1);
}, function() {
  $(this).find('img').fadeTo(200, 1);
  $(this).find('p').fadeTo(200, 0);
});