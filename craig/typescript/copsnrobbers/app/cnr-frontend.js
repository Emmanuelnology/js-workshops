$(document).ready(function () {
    var game = new Game();
    game.damageAmount = 3;
    var urlParams = new URLSearchParams(window.location.search);
    var robber = new Character(['a', 's', 'd']);
    robber.name = urlParams.get('robber');
    $('#robber .name').text(robber.name);
    var cop = new Character(['k', 'l', ';']);
    cop.name = urlParams.get('cop');
    $('#cop .name').text(cop.name);
    $('#result').hide();
    $('#cop-message').text(cop.activeKey.toUpperCase());
    $('#robber-message').text(robber.activeKey.toUpperCase());
    var updateProgress = function (character, progressBarSelector) {
        $(progressBarSelector).css('width', character.health + "%");
        $(progressBarSelector)
            .removeClass('bg-primary')
            .css('background-color', character.getHealthColor());
    };
    var updateAllProgress = function () {
        updateProgress(robber, '#robber .health .progress-bar');
        updateProgress(cop, '#cop .health .progress-bar');
        $('#robber-streak').css('width', robber.streak * 2 + '%');
        $('#cop-streak').css('width', cop.streak * 2 + '%');
        if (robber.isDead())
            stopGame("Robber is dead");
        if (cop.isDead())
            stopGame("Cop is dead");
    };
    var stopGame = function (message) {
        $('#result').text(message).show();
        $('.controls').hide();
        game.isActive = false;
    };
    $('body').keyup(function (e) {
        var key = e.key.toLowerCase();
        if (game.isActive) {
            if (cop.isMyKey(key)) {
                cop.shootAt(robber, game.damageAmount, key);
                updateAllProgress();
                $('#cop-message').text(cop.activeKey.toUpperCase());
            }
            if (robber.isMyKey(e.key.toLowerCase())) {
                robber.shootAt(cop, game.damageAmount, key);
                updateAllProgress();
                $('#robber-message').text(robber.activeKey.toUpperCase());
            }
        }
    });
});
