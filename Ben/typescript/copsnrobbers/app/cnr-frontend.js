// import { Character } from "./copsnrobbers";
$(document).ready(function () {
    var game = new Game();
    game.damageAmount = 2;
    var cop = new Character();
    var robber = new Character();
    $("#result").hide();
    $("body").keyup(function (e) {
        if (e.key == "a") {
            console.log("Cop fired his gun");
            cop.shootAt(robber, game.damageAmount);
            console.log("Robber has " + robber.health + " health remaining");
        }
        if (e.key == "l") {
            console.log("Robber fired his gun");
            robber.shootAt(cop, game.damageAmount);
            console.log("Cop has " + cop.health + " health remaining");
        }
    });
});
