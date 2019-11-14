$(document).ready(function () {
  
  $('#burger-form').on('submit', function (event) {
        event.preventDefault();
        if($('#burger-input').val().length !== 0){
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
      }
    });

    $('.devour').on('click','button',function(){
        var id = $(this).attr('id');
        var devour = {ate:true};
        $.ajax({
          method:'PUT',
          url: "/api/burger/"+ id,
          data: devour,
        }).then(function(e){
          console.log(e);
          location.reload();
        });
    });

  





});