
$(document).ready( () => {
    let game = new Game();
    game.damageAmount = 2;
    let cop = new Character();
    let robber = new Character();
    $('#results').hide();

    $('body').keyup((e) => {
        if (e.key =='a'){
            cop.shootAt(robber, game.damageAmount);
            console.log('Robber has '+ robber.health + ' remaining');
        }
        if (e.key =='l'){
            cop.shootAt(cop, game.damageAmount);
            console.log('Cop has '+ cop.health + ' remaining');
        }        
    })
} );