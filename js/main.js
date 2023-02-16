"use strict";

$(document).ready(function(){

  $("#showValesCineplanet").click(function() {
    $("#section-cards").hide();
    $("#section-vales-cineplanet").hide();
    $("#section-vales-coney").show();
  });

  $("#showValesDonofrio").click(function() {
    $("#section-cards").hide();
    $("#section-vales-cineplanet").hide();
    $("#section-vales-coney").show();
  });

  $(".showCardsCompra").click(function() {
    $("#section-cards").show();
    $("#section-vales-cineplanet").hide();
    $("#section-vales-coney").hide();
  });

});
