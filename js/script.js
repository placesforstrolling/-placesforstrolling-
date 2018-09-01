$(document).ready(function () {   

$('.question1 .answer1').on('click', function (e) {
  $('.question1 .answer1').css('opacity', '0');
  $('.question1 .answer2').css('opacity', '0');
  $('.question1 .answer3').css('opacity', '0');
  $('.question1 .answer4').css('opacity', '0');
  $('.question1').addClass('active');
  setTimeout(() => {
    $('.question1 .answer1').css('opacity', '1');
    $('.question1 .answer2').css('display', 'none');
    $('.question1 .answer3').css('display', 'none');
    $('.question1 .answer4').css('display', 'none');
    $('.question1 .answer1').off();
  }, 1000);
});
$('.question1 .answer2').on('click', function (e) {
  $('.question1 .answer1').css('opacity', '0');
  $('.question1 .answer2').css('opacity', '0');
  $('.question1 .answer3').css('opacity', '0');
  $('.question1 .answer4').css('opacity', '0');
  $('.question1').addClass('active');
  setTimeout(() => {
    $('.question1 .answer2').css('opacity', '1');
    $('.question1 .answer1').css('display', 'none');
    $('.question1 .answer3').css('display', 'none');
    $('.question1 .answer4').css('display', 'none');
    $('.question1 .answer2').off();
  }, 1000);
});
$('.question1 .answer3').on('click', function (e) {
  $('.question1 .answer1').css('opacity', '0');
  $('.question1 .answer2').css('opacity', '0');
  $('.question1 .answer3').css('opacity', '0');
  $('.question1 .answer4').css('opacity', '0');
  $('.question1').addClass('active');
  setTimeout(() => {
    $('.question1 .answer3').css('opacity', '1');
    $('.question1 .answer2').css('display', 'none');
    $('.question1 .answer1').css('display', 'none');
    $('.question1 .answer4').css('display', 'none');
    $('.question1 .answer3').off();
  }, 1000);
});
$('.question1 .answer4').on('click', function (e) {
  $('.question1 .answer1').css('opacity', '0');
  $('.question1 .answer2').css('opacity', '0');
  $('.question1 .answer3').css('opacity', '0');
  $('.question1 .answer4').css('opacity', '0');
  $('.question1').addClass('active');
  setTimeout(() => {
    $('.question1 .answer4').css('opacity', '1');
    $('.question1 .answer2').css('display', 'none');
    $('.question1 .answer3').css('display', 'none');
    $('.question1 .answer1').css('display', 'none');
    $('.question1 .answer4').off();
  }, 1000);
});




$('.question2 .answer1').on('click', function (e) {
  $('.question2 .answer1').css('opacity', '0');
  $('.question2 .answer2').css('opacity', '0');
  $('.question2 .answer3').css('opacity', '0');
  $('.question2').addClass('active');
  setTimeout(() => {
    $('.question2 .answer1').css('opacity', '1');
    $('.question2 .answer2').css('display', 'none');
    $('.question2 .answer3').css('display', 'none');
    $('.question2 .answer1').off();
  }, 1000);
});
$('.question2 .answer2').on('click', function (e) {
  $('.question2 .answer1').css('opacity', '0');
  $('.question2 .answer2').css('opacity', '0');
  $('.question2 .answer3').css('opacity', '0');
  $('.question2').addClass('active');
  setTimeout(() => {
    $('.question2 .answer2').css('opacity', '1');
    $('.question2 .answer1').css('display', 'none');
    $('.question2 .answer3').css('display', 'none');
    $('.question2 .answer2').off();
  }, 1000);
});
$('.question2 .answer3').on('click', function (e) {
  $('.question2 .answer1').css('opacity', '0');
  $('.question2 .answer2').css('opacity', '0');
  $('.question2 .answer3').css('opacity', '0');
  $('.question2').addClass('active');
  setTimeout(() => {
    $('.question2 .answer3').css('opacity', '1');
    $('.question2 .answer2').css('display', 'none');
    $('.question2 .answer1').css('display', 'none');
    $('.question2 .answer3').off();
  }, 1000);
});




$('.question3 .answer1').on('click', function (e) {
  $('.question3 .answer1').css('opacity', '0');
  $('.question3 .answer2').css('opacity', '0');
  $('.question3 .answer3').css('opacity', '0');
  $('.question3').addClass('active');
  setTimeout(() => {
    $('.question3 .answer1').css('opacity', '1');
    $('.question3 .answer2').css('display', 'none');
    $('.question3 .answer3').css('display', 'none');
    $('.question3 .answer1').off();
  }, 1000);
});
$('.question3 .answer2').on('click', function (e) {
  $('.question3 .answer1').css('opacity', '0');
  $('.question3 .answer2').css('opacity', '0');
  $('.question3 .answer3').css('opacity', '0');
  $('.question3').addClass('active');
  setTimeout(() => {
    $('.question3 .answer2').css('opacity', '1');
    $('.question3 .answer1').css('display', 'none');
    $('.question3 .answer3').css('display', 'none');
    $('.question3 .answer2').off();
  }, 1000);
});
$('.question3 .answer3').on('click', function (e) {
  $('.question3 .answer1').css('opacity', '0');
  $('.question3 .answer2').css('opacity', '0');
  $('.question3 .answer3').css('opacity', '0');
  $('.question3').addClass('active');
  setTimeout(() => {
    $('.question3 .answer3').css('opacity', '1');
    $('.question3 .answer2').css('display', 'none');
    $('.question3 .answer1').css('display', 'none');
    $('.question3 .answer3').off();
  }, 1000);
});



$('.question4 .answer1').on('click', function (e) {
  $('.question4 .answer1').css('opacity', '0');
  $('.question4 .answer2').css('opacity', '0');
  $('.question4 .answer3').css('opacity', '0');
  $('.question4 .answer4').css('opacity', '0');
  $('.question4').addClass('active');
  setTimeout(() => {
    $('.question4 .answer1').css('opacity', '1');
    $('.question4 .answer2').css('display', 'none');
    $('.question4 .answer3').css('display', 'none');
    $('.question4 .answer4').css('display', 'none');
    $('.question4 .answer1').off();
  }, 1000);
});
$('.question4 .answer2').on('click', function (e) {
  $('.question4 .answer1').css('opacity', '0');
  $('.question4 .answer2').css('opacity', '0');
  $('.question4 .answer3').css('opacity', '0');
  $('.question4 .answer4').css('opacity', '0');
  $('.question4').addClass('active');
  setTimeout(() => {
    $('.question4 .answer2').css('opacity', '1');
    $('.question4 .answer1').css('display', 'none');
    $('.question4 .answer3').css('display', 'none');
    $('.question4 .answer4').css('display', 'none');
    $('.question4 .answer2').off();
  }, 1000);
});
$('.question4 .answer3').on('click', function (e) {
  $('.question4 .answer1').css('opacity', '0');
  $('.question4 .answer2').css('opacity', '0');
  $('.question4 .answer3').css('opacity', '0');
  $('.question4 .answer4').css('opacity', '0');
  $('.question4').addClass('active');
  setTimeout(() => {
    $('.question4 .answer3').css('opacity', '1');
    $('.question4 .answer2').css('display', 'none');
    $('.question4 .answer4').css('display', 'none');
    $('.question4 .answer1').css('display', 'none');
    $('.question4 .answer3').off();
  }, 1000);
});
$('.question4 .answer4').on('click', function (e) {
  $('.question4 .answer1').css('opacity', '0');
  $('.question4 .answer2').css('opacity', '0');
  $('.question4 .answer3').css('opacity', '0');
  $('.question4 .answer4').css('opacity', '0');
  $('.question4').addClass('active');
  setTimeout(() => {
    $('.question4 .answer4').css('opacity', '1');
    $('.question4 .answer2').css('display', 'none');
    $('.question4 .answer3').css('display', 'none');
    $('.question4 .answer1').css('display', 'none');
    $('.question4 .answer4').off();
  }, 1000);
});
$('.answer').on('click', function () {
  if ($('.question1').hasClass('active') && $('.question2').hasClass('active') && $('.question3').hasClass('active') && $('.question4').hasClass('active')) {
    setTimeout(() => {
      $('.section-1').addClass('active');
      $('.section-2').removeClass('active');
    }, 2000)
  }
  else {
    return false;
  }
});

  });