// import { Character } from "./copsnrobbers";
$(document).ready(function () {
    var game = new Game;
    game.damageAmount = 5;
    var cop = new Character;
    var robber = new Character;
    $('#result').hide();
    var updateProgress = function (character, progressBarSelector) {
        $(progressBarSelector).css("width", character.health + "%");
        if (character.isHealthy()) {
            $(progressBarSelector)
                .removeClass('bg-danger')
                .removeClass('primary')
                .addClass('bg-success');
        }
        else {
            $(progressBarSelector)
                .removeClass('bg-success')
                .removeClass('primary')
                .addClass('bg-danger');
        }
    };
    var stopGame = function (message) {
        $('#result').text(message).show();
        game.isActive = false;
    };
    $('body').keyup(function (e) {
        if (game.isActive) {
            if (e.key == 'a' || e.key == 'A') {
                cop.shootAt(robber, game.damageAmount);
                updateProgress(robber, "#robber .progress-bar");
                if (robber.isDead())
                    stopGame("Robber is Dead");
            }
            if (e.key == 'l' || e.key == 'L') {
                robber.shootAt(cop, game.damageAmount);
                updateProgress(cop, "#cop .progress-bar");
                if (cop.isDead())
                    stopGame("Cop is dead");
            }
        }
    });
});
