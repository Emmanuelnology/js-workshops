$(document).ready(function () {
    var game = new Game();
    game.damageAmount = 2;
    var cop = new Character();
    var robber = new Character();
    $('#results').hide();
    var updateProgress = function (character, progressBarSelector) {
        $(progressBarSelector).css('width', character.health + "%");
        if (character.isHealthy()) {
            $(progressBarSelector)
                .remove('bg-danger')
                .remove('bg-primary')
                .addClass('bg-success');
        }
        else {
            $(progressBarSelector)
                .remove('bg-success')
                .remove('bg-primary')
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
                updateProgress(robber, '#robber .progress-bar');
                if (robber.isDead())
                    stopGame("Robber is dead");
            }
            if (e.key == 'l' || e.key == 'L') {
                robber.shootAt(cop, game.damageAmount);
                updateProgress(cop, '#cop .progress-bar');
                if (cop.isDead())
                    stopGame("Robber is dead");
            }
        }
    });
});
