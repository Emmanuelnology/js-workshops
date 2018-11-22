// import { Character } from "./copsnrobbers";

$(document).ready( () => {
  let game = new Game ();
  game.damageAmount = 2;
  game.isWelsh = false;
  let cop = new Character ();
  let robber = new Character ();
  
  $(".js-modal").hide();
  $(".welsh").hide();
  $(".english").hide();
  $("#result").hide();
  
  let languageSetup = () => {
    if (game.isWelsh) $(".welsh").show();
    else $(".english").show();
  }

  languageSetup();

  let updateProgress = (character:Character, progressBarSelector, warningMessageSelector) => {    
    $(progressBarSelector).css("width", character.health + "%");
    $(progressBarSelector).css("background-color", "rgb(" + (255 - 2.5*character.health) +"," + 2.5*character.health + ", 0");
    if (character.isHealthy()) {
      $(warningMessageSelector).text("");
    }
    else {
      if (game.isWelsh) $(warningMessageSelector).text("Rhybudd! Iechyd isel!");
      else $(warningMessageSelector).text("Warning! Low health!");
    }
  }

  let resetGame = () => {
    $(".js-modal").css("display", "none");
      game.isActive = true;
      cop.resetHealth();
      robber.resetHealth();
      updateProgress(robber, "#robber .progress-bar", "#robber #warning-message");
      updateProgress(cop, "#cop .progress-bar", "#cop #warning-message");
  }
  
  let stopGame = (deadMessage,replayMessage) => {
    $("#js-result").text(deadMessage);
    $("#js-play-again").text(replayMessage);
    $(".js-modal").show();
    game.isActive = false;
    $('#js-play-again').click(function(){
      resetGame();
    })
  }
  
  $("body").keyup( (e) => {
    if (game.isActive){
      if (e.key == "a" || e.key == "A" || e.key == "s" || e.key == "S") {
        cop.shootAt(robber, game.damageAmount);
        updateProgress(robber, "#robber .progress-bar", "#robber #warning-message");
        if (robber.isDead()) {
          if (game.isWelsh) stopGame("Mae robwr yn marw!", "Chwaraewch eto");
          else stopGame("Robber is dead!", "Play again");
        }
      }
      if (e.key == "l" || e.key == "L" || e.key == ";" || e.key == ":") {
        robber.shootAt(cop, game.damageAmount);
        updateProgress(cop, "#cop .progress-bar", "#cop #warning-message");
        if (cop.isDead()) {
          if (game.isWelsh) stopGame("Mae cop yn marw!", "Chwaraewch eto");
          else stopGame("Cop is dead!", "Play again");
        }
      }
    }
  })
});

