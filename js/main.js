"use strict";

$(document).ready(function(){

  $("#showValesCineplanet").click(function() {
    $("#section-cards").hide();
    $("#section-vales").show();
  });

  $(".showCardsCompra").click(function() {
    $("#section-cards").show();
    $("#section-vales").hide();
  });

});
