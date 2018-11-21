$(document).ready(function () {
    var game = new Game();
    game.damageAmount = 2;
    var cop = new Character();
    var robber = new Character();
    $('#results').hide();
    $('body').keyup(function (e) {
        if (e.key == 'a') {
            cop.shootAt(robber, game.damageAmount);
            console.log('Robber has ' + robber.health + ' remaining');
        }
        if (e.key == 'l') {
            cop.shootAt(cop, game.damageAmount);
            console.log('Cop has ' + cop.health + ' remaining');
        }
    });
});
