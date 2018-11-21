// import { Character } from "./copsnrobbers";

$(document).ready( () => {
  let game = new Game ();
  game.damageAmount = 2;
  let cop = new Character ();
  let robber = new Character ();
  
  $("#result").hide();
  
  let updateProgress = (character:Character, progressBarSelector, warningMessageSelector) => {    
    $(progressBarSelector).css("width", character.health + "%");
    $(progressBarSelector).css("background-color", "rgb(" + (255 - 2.5*character.health) +"," + 2.5*character.health + ", 0");
    if (!(character.isHealthy())) {
      $(warningMessageSelector).text("Rhybudd! Iechyd isel!");
    }
  }
  
  let stopGame = (message) => {
    $("#result").text(message).show();
    game.isActive = false;
  }
  
  $("body").keyup( (e) => {
    if (game.isActive){
      if (e.key == "a" || e.key == "A" || e.key == "s" || e.key == "S") {
        cop.shootAt(robber, game.damageAmount);
        updateProgress(robber, "#robber .progress-bar", "#robber #warning-message");
        if (robber.isDead()) {
          stopGame("Mae robwr yn marw!");
        }
      }
      if (e.key == "l" || e.key == "L" || e.key == ";" || e.key == ":") {
        robber.shootAt(cop, game.damageAmount);
        updateProgress(cop, "#cop .progress-bar", "#cop #warning-message");
        if (cop.isDead()) {
          stopGame("Mae cop yn marw!");
        }
      }
    }
  })
});