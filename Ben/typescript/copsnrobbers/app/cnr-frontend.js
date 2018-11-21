// import { Character } from "./copsnrobbers";
$(document).ready(function () {
    var game = new Game();
    game.damageAmount = 2;
    var cop = new Character();
    var robber = new Character();
    $("#result").hide();
    var updateProgress = function (character, progressBarSelector) {
        $(progressBarSelector).css("width", character.health + "%");
        $(progressBarSelector).css("background-color", "rgb(" + (255 - 2.5 * character.health) + "," + 2.5 * character.health + ", 0");
    };
    var stopGame = function (message) {
        $("#result").text(message).show();
        game.isActive = false;
    };
    $("body").keyup(function (e) {
        if (game.isActive) {
            if (e.key == "a" || e.key == "A") {
                cop.shootAt(robber, game.damageAmount);
                updateProgress(robber, "#robber .progress-bar");
                if (robber.isDead()) {
                    stopGame("Mae robwr yn marw!");
                }
            }
            if (e.key == "l" || e.key == "L") {
                robber.shootAt(cop, game.damageAmount);
                updateProgress(cop, "#cop .progress-bar");
                if (cop.isDead()) {
                    stopGame("Mae cop yn marw!");
                }
            }
        }
    });
});
