// import { Character } from "./copsnrobbers";

$(document).ready( () => {
  let game = new Game ();
  game.damageAmount = 2;
  let cop = new Character ();
  let robber = new Character ();
  $("#result").hide();
  $("body").keyup( (e) => {
    if (game.isActive){
      if (e.key == "a") {
        cop.shootAt(robber, game.damageAmount);
        $("#robber .progress-bar").css("width", robber.health + "%");
        if (robber.isDead()) {
          $("#result").text("Mae robwr yn marw").show();
          game.isActive = false;
        }
      }
      if (e.key == "l") {
        robber.shootAt(cop, game.damageAmount);
        $("#cop .progress-bar").css("width", cop.health + "%");
        if (cop.isDead()) {
          $("#result").text("Mae cop yn marw").show();
          game.isActive = false;
        }
      }
    }
  })
});