// import { Character } from "./copsnrobz";

$(document).ready( () => {
    let game = new Game();
    game.damageAmount = 10;
    let cop = new Character();
    let robber = new Character();
    $('#result').hide();

    let updateProgress = (character:Character, progressBarSelector) => {
        $(progressBarSelector).css('width', character.health + "%");

        if (character.isHealthy()) {
            $(progressBarSelector)
            .remove('bg-danger')
            .remove('bg-primary')
            .addClass('bg-success')
        }
        else {
            $(progressBarSelector)
            .remove('bg-primary')
            .remove('bg-success')
            .addClass('bg-danger')
        }
    }

    let stopGame = (message) => {
        $('#result').text(message).show();
        game.isActive=false;
    }

    $('body').keyup( (e) => {
        if(game.isActive){
            if(e.key=='a' || e.key=='A') {
                cop.shootAt(robber, game.damageAmount);
                updateProgress(robber, '#robber .progress-bar');
                if(robber.isDead()) stopGame("Rob dead af")
            }
            if(e.key=='l' || e.key=='L') {
                robber.shootAt(cop, game.damageAmount);
                updateProgress(cop, '#cop .progress-bar');
                if(cop.isDead()) stopGame("Cop dead af")
            }
        }
    })
}
);
