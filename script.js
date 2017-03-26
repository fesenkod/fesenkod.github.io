
var whatImage = 2;

$('.btn-right').click(function (event) {
  $('.circle').last().addClass('image-faded-right');
  $('.persons-container').prepend('<div class="image-unfaded-right"><img src="man' + whatImage + '.png" alt=""></div>');
  setTimeout(function () {
    $('.image-unfaded-right').removeClass('image-unfaded-right').addClass('circle');
  }, 700);
  setTimeout(function () {
    $('.circle').last().remove();
  }, 700);
  whatImage = (whatImage == 1) ? 2 : 1;
});
