// TEXT + COLORS FOR GARMENTS CHANGE

$(".link").click(function(e) {
  e.preventDefault();
  $('#nameColor div').css("display", "none");
  $('#' + $(this).data('rel')).css("display", "block");
});

// HELMET COLORS

$("#blackHelmet").click(function(e) {
  e.preventDefault();
  $('.helmetBlack').css("display", "inline-block");
  $('.helmetWhite').css("display", "none");
  $('.yellowHelmet').removeClass("active");
  $('.blackHelmet').addClass("active");
  $('.whiteHelmet').removeClass("active");

});

$("#yellowHelmet").click(function(e) {
  e.preventDefault();
  $('.helmetBlack').css("display", "none");
  $('.helmetWhite').css("display", "none");
  $('.yellowHelmet').addClass("active");
  $('.blackHelmet').removeClass("active");
  $('.whiteHelmet').removeClass("active");
});

$("#whiteHelmet").click(function(e) {
  e.preventDefault();
  $('.helmetWhite').css("display", "inline-block");
  $('.helmetBlack').css("display", "none");
  $('.yellowHelmet').removeClass("active");
  $('.blackHelmet').removeClass("active");
  $('.whiteHelmet').addClass("active");
});


// GILET COLORS

$("#yellowGilet").click(function(e) {
  e.preventDefault();
  $('.giletPink').css("display", "none");
  $('.giletTurquoise').css("display", "none");
  $('.yellowGilet').addClass("active");
  $('.turquoiseGilet').removeClass("active");
  $('.pinkGilet').removeClass("active");

});

$("#turquoiseGilet").click(function(e) {
  e.preventDefault();
  $('.giletPink').css("display", "none");
  $('.giletTurquoise').css("display", "inline-block");
  $('.yellowGilet').removeClass("active");
  $('.turquoiseGilet').addClass("active");
  $('.pinkGilet').removeClass("active");

});

$("#pinkGilet").click(function(e) {
  e.preventDefault();
  $('.giletPink').css("display", "inline-block");
  $('.giletTurquoise').css("display", "none");
  $('.yellowGilet').removeClass("active");
  $('.turquoiseGilet').removeClass("active");
  $('.pinkGilet').addClass("active");

});

// BIB COLORS

$("#blackBib").click(function(e) {
  e.preventDefault();
  $('.bibNavy').css("display", "none");
  $('.blackBib').addClass("active");
  $('.navyBib').removeClass("active");

});

$("#navyBib").click(function(e) {
  e.preventDefault();
  $('.bibNavy').css("display", "inline-block");
  $('.blackBib').removeClass("active");
  $('.navyBib').addClass("active");

});

// SOCKS COLORS

$("#whiteSocks").click(function(e) {
  e.preventDefault();
  $('.socksGrey').css("display", "none");
  $('.socksBlack').css("display", "none");
  $('.socksPink').css("display", "none");
  $('.whiteSocks').addClass("active");
  $('.greySocks').removeClass("active");
  $('.blackSocks').removeClass("active");
  $('.pinkSocks').removeClass("active");

});

$("#greySocks").click(function(e) {
  e.preventDefault();
  $('.socksGrey').css("display", "inline-block");
  $('.socksBlack').css("display", "none");
  $('.socksPink').css("display", "none");
  $('.whiteSocks').removeClass("active");
  $('.greySocks').addClass("active");
  $('.blackSocks').removeClass("active");
  $('.pinkSocks').removeClass("active");

});

$("#blackSocks").click(function(e) {
  e.preventDefault();
  $('.socksGrey').css("display", "none");
  $('.socksBlack').css("display", "inline-block");
  $('.socksPink').css("display", "none");
  $('.whiteSocks').removeClass("active");
  $('.greySocks').removeClass("active");
  $('.blackSocks').addClass("active");
  $('.pinkSocks').removeClass("active");

});

$("#pinkSocks").click(function(e) {
  e.preventDefault();
  $('.socksGrey').css("display", "none");
  $('.socksBlack').css("display", "none");
  $('.socksPink').css("display", "inline-block");
  $('.whiteSocks').removeClass("active");
  $('.greySocks').removeClass("active");
  $('.blackSocks').removeClass("active");
  $('.pinkSocks').addClass("active");

});



// SHOES COLORS

$("#yellowShoes").click(function(e) {
  e.preventDefault();
  $('.shoesBlack').css("display", "none");
  $('.shoesWhite').css("display", "none");
  $('.shoesPink').css("display", "none");
  $('.yellowShoes').addClass("active");
  $('.blackShoes').removeClass("active");
  $('.whiteShoes').removeClass("active");
  $('.pinkShoes').removeClass("active");

});

$("#blackShoes").click(function(e) {
  e.preventDefault();
  $('.shoesBlack').css("display", "inline-block");
  $('.shoesWhite').css("display", "none");
  $('.shoesPink').css("display", "none");
  $('.yellowShoes').removeClass("active");
  $('.blackShoes').addClass("active");
  $('.whiteShoes').removeClass("active");
  $('.pinkShoes').removeClass("active");

});

$("#whiteShoes").click(function(e) {
  e.preventDefault();
  $('.shoesBlack').css("display", "none");
  $('.shoesWhite').css("display", "inline-block");
  $('.shoesPink').css("display", "none");
  $('.yellowShoes').removeClass("active");
  $('.blackShoes').removeClass("active");
  $('.whiteShoes').addClass("active");
  $('.pinkShoes').removeClass("active");

});

$("#pinkShoes").click(function(e) {
  e.preventDefault();
  $('.shoesBlack').css("display", "none");
  $('.shoesWhite').css("display", "none");
  $('.shoesPink').css("display", "inline-block");
  $('.yellowShoes').removeClass("active");
  $('.blackShoes').removeClass("active");
  $('.whiteShoes').removeClass("active");
  $('.pinkShoes').addClass("active");

});
