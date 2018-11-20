$(document).ready(function () {
    $('#message').hide();
    var gameActive = true;
    var cop = new Character('Cop', 'a', 's');
    var robber = new Character('Robber', 'l', ';');
    robber.whenDead(function () { return showResult(robber.name); });
    cop.whenDead(function () { return showResult(cop.name); });
    var showResult = function (name) {
        gameActive = false;
        $('#message').text(name + " is dead");
        $('#message').show();
    };
    var updateProgress = function (target, targetID) {
        var newClass = (target.health > 30) ? 'bg-success' : 'bg-danger';
        $(targetID + ' .progress-bar')
            .css('width', target.health + '%')
            .removeClass('bg-success')
            .removeClass('bg-danger')
            .addClass(newClass);
    };
    $('body').keyup(function (e) {
        if (gameActive) {
            if (e.key == cop.activeKey) {
                cop.shootAt(robber);
                updateProgress(robber, '#robber');
            }
            if (e.key == robber.activeKey) {
                robber.shootAt(cop);
                updateProgress(cop, '#cop');
            }
        }
    });
});
