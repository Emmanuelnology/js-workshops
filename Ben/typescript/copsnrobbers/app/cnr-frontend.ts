$(document).ready( () => {
  
  interface Language {
    gameTitle:string;
    copTitle:string;
    robberTitle:string;
    copInstruction:string;
    robberInstruction:string;
    warningMessage:string;
    robberDead:string;
    copDead:string;
    playAgain:string;
    swapLang:string;
  }
  
  let english:Language = {
    gameTitle: "Cops and Robbers",
    copTitle: "Cop",
    robberTitle: "Robber",
    copInstruction: "Press A/S",
    robberInstruction: "Press L/;",
    warningMessage: "Warning! Low health!",
    robberDead: "Robber is dead!",
    copDead: "Cop is dead",
    playAgain: "Play again",
    swapLang: "Chwaraewch yn Gymraeg"
  }
  
  let welsh:Language = {
    gameTitle: "Copiau a Robwyr",
    copTitle: "Cop",
    robberTitle: "Robwr",
    copInstruction: "Pwyswch A/S",
    robberInstruction: "Pwyswch L/;",
    warningMessage: "Rhybudd! Iechyd isel!",
    robberDead: "Mae robwr yn marw!",
    copDead: "Mae cop yn marw",
    playAgain: "Chwaraewch eto",
    swapLang: "Play in English"
  }
  
  let game = new Game ();
  game.damageAmount = 20;
  let cop = new Character ();
  let robber = new Character ();
  
  $(".js-option-modal").show();
  $(".js-result-modal").hide();

  $('#js-option-welsh').click(function(){
    game.language = welsh;
    setLanguage(game.language);
    $(".js-option-modal").hide();
    game.isActive = true;  
  })
  
  $('#js-option-english').click(function(){
    game.language = english;
    setLanguage(game.language);
    $(".js-option-modal").hide();
    game.isActive = true;  
  })
  
  var setLanguage = (lang:Language) => {
    $("h1").text(lang.gameTitle);
    $("#cop h2").text(lang.copTitle);  
    $("#robber h2").text(lang.robberTitle);
    $("#cop .instruction").text(lang.copInstruction);
    $("#robber .instruction").text(lang.robberInstruction);
  }
  
  let updateProgress = (character:Character, progressBarSelector, warningMessageSelector) => {    
    $(progressBarSelector).css("width", character.health + "%");
    $(progressBarSelector).css("background-color", "rgb(" + (255 - 2.5*character.health) +"," + 2.5*character.health + ", 0");
    if (character.isHealthy()) {
      $(warningMessageSelector).text("");
    }
    else {
      $(warningMessageSelector).text(game.language.warningMessage);
    }
  }
  
  let resetGame = () => {
    cop.resetHealth();
    robber.resetHealth();
    updateProgress(robber, "#robber .progress-bar", "#robber #warning-message");
    updateProgress(cop, "#cop .progress-bar", "#cop #warning-message");
    $(".js-result-modal").hide(); 
    game.isActive = true;
  }
  
  let stopGame = (deadMessage) => {
    $("#js-result").text(deadMessage);
    $("#js-play-again").text(game.language.playAgain);    
    $("#js-swap-language").text(game.language.swapLang);
    $(".js-result-modal").show();
    game.isActive = false;
  }
  
  $('#js-play-again').click(function(){
    resetGame();
  })
  
  $('#js-swap-language').click(function(){
    if (game.language == english) {
      game.language = welsh;
      setLanguage(game.language);
      resetGame();
    }
    else if (game.language == welsh) {
      game.language = english;
      setLanguage(game.language);
      resetGame();
    }
  })

  $("body").keyup( (e) => {
    if (game.isActive){
      if (e.key == "a" || e.key == "A" || e.key == "s" || e.key == "S") {
        cop.shootAt(robber, game.damageAmount);
        updateProgress(robber, "#robber .progress-bar", "#robber #warning-message");
        if (robber.isDead()) {
          stopGame(game.language.robberDeadMessage)
        }
      }
      if (e.key == "l" || e.key == "L" || e.key == ";" || e.key == ":") {
        robber.shootAt(cop, game.damageAmount);
        updateProgress(cop, "#cop .progress-bar", "#cop #warning-message");
        if (cop.isDead()) {
          stopGame(game.language.copDeadMessage)
        }
      }
    }
  })

});
