$(document).ready(function () {

    var game = new Game();
    game.damageAmount = 10;
    var cop = new Character();
    var robber = new Character();


    $('#result').hide();
    $('.img-dead-cop').hide();
    $('.img-dead-robber').hide();

    var updateProgress = function (character, progressBarSelector) {

        $(progressBarSelector).css('width', character.health + "%");
        
        if (character.isHealthy()) {
            $(progressBarSelector)
                .remove('bg-danger')
                .remove('bg-primary')
                .addClass('bg-success');
        } else {
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
                console.log(e.key, cop.healthUpdate());
                $('#health-robber').text("robber's health is " + robber.healthUpdate()).show();
                cop.shootAt(robber, game.damageAmount);
                updateProgress(robber, '#robber .progress-bar', "100%");
                if (robber.isDead()) {
                    $('#health-robber').text("Dead").show();
                    stopGame("Cop wins!");
                    $('.img-dead-robber').show()
                    $('.img-alive-robber').hide()
                }
            }
            if (e.key == 'l' || e.key == 'L') {
                $('#health-cop').text("Cop's health is "+cop.healthUpdate()).show();
                robber.shootAt(cop, game.damageAmount);
                updateProgress(cop, '#cop .progress-bar');
                if (cop.isDead()) {
                    $('#health-cop').text("Dead").show();
                    stopGame("Robber win!");
                    $('.img-dead-cop').show()
                    $('.img-alive-cop').hide()
                }
            }
        }
    });
});