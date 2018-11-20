$(document).ready(function() {
  $('#message').hide();
  
  let gameActive:boolean = true;
  let cop = new Character('Cop','a','s');
  let robber = new Character('Robber','l',';');
  
  robber.whenDead( () => showResult(robber.name) );
  cop.whenDead( () => showResult(cop.name) );
  
  let showResult = (name) => {
    gameActive = false;
    $('#message').text(name + " is dead");
    $('#message').show();
  }
  
  let updateProgress = (target, targetID) => {
    let newClass = (target.health > 30) ? 'bg-success':'bg-danger';
    $(targetID + ' .progress-bar')
      .css('width',target.health + '%')
      .removeClass('bg-success')
      .removeClass('bg-danger')
      .addClass(newClass);
  }
  
  $('body').keyup(function(e){
    if(gameActive){
      if(e.key==cop.activeKey){
        cop.shootAt(robber);
        updateProgress(robber, '#robber');
      }
      if(e.key==robber.activeKey){
        robber.shootAt(cop);
        updateProgress(cop, '#cop');
      }
    }
    
  });

});