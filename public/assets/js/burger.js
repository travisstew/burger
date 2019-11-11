$(document).ready(function () {
  
  $('#burger-form').on('submit', function (event) {
        event.preventDefault();
      var burgerName = $('#burger-input').val().trim();
      var ate = false;

      var burgerData = {
        burgerName: burgerName,
        ate: ate
      }

      $.post('/api/burger',burgerData,function(e){
        console.log(e);
        
      }).then(function () {
          location.reload();
        });
       
    
    
    });

  





});