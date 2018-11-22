// import { Character } from "./copsnrobbers";

$(document).ready( () => {
  $(".js-option-modal").show();
  $(".js-result-modal").hide();
  $(".welsh").hide();
  $(".english").hide();
  $("#result").hide();
  
  let game = new Game ();
  game.damageAmount = 2;
  let cop = new Character ();
  let robber = new Character ();
  
  $('#js-option-welsh').click(function(){
    game.isWelsh = true;
    languageSetup();
  })
  
  $('#js-option-english').click(function(){
    game.isWelsh = false;
    languageSetup();
  })
  
  let languageSetup = () => {
    $(".js-option-modal").hide();
    if (game.isWelsh) $(".welsh").show();
    else $(".english").show();
  }
  
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
    $(".welsh").hide();
    $(".english").hide();
    $(".js-result-modal").hide();
    languageSetup();
    game.isActive = true;
    cop.resetHealth();
    robber.resetHealth();
    updateProgress(robber, "#robber .progress-bar", "#robber #warning-message");
    updateProgress(cop, "#cop .progress-bar", "#cop #warning-message");
  }
  
  let stopGame = (deadMessage,replayMessage,swapMessage) => {
    $("#js-result").text(deadMessage);
    $("#js-play-again").text(replayMessage);    
    $("#js-swap-language").text(swapMessage);
    $(".js-result-modal").show();
    game.isActive = false;
    $('#js-play-again').click(function(){
      resetGame();
    })
    $('#js-swap-language').click(function(){
      game.isWelsh = !game.isWelsh;
      resetGame();
    })
  }
  
  $("body").keyup( (e) => {
    if (game.isActive){
      if (e.key == "a" || e.key == "A" || e.key == "s" || e.key == "S") {
        cop.shootAt(robber, game.damageAmount);
        updateProgress(robber, "#robber .progress-bar", "#robber #warning-message");
        if (robber.isDead()) {
          if (game.isWelsh) stopGame("Mae robwr yn marw!", "Chwaraewch eto", "Play in English");
          else stopGame("Robber is dead!", "Play again", "Chwaraewch yn Gymraeg");
        }
      }
      if (e.key == "l" || e.key == "L" || e.key == ";" || e.key == ":") {
        robber.shootAt(cop, game.damageAmount);
        updateProgress(cop, "#cop .progress-bar", "#cop #warning-message");
        if (cop.isDead()) {
          if (game.isWelsh) stopGame("Mae cop yn marw!", "Chwaraewch eto", "Play in English");
          else stopGame("Cop is dead!", "Play again", "Chwaraewch yn Gymraeg");
        }
      }
    }
  })
});

