var $firstStage = $('.firstStage');
var count = 0;
$firstStage.waypoint(function(direction) {
  if(direction=='down' && count==0){
      $('.counting1').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },

      {

        duration: 3000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }

      });  
      

    });
    count++;
  }
  else{
    console.log(count);
  }
}, {offset: '60%'});


var $secondStage = $('.secondStage');
var count2 = 0;
$secondStage.waypoint(function(direction) {
  if(direction=='down' && count2==0){
      $('.counting2').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },

      {

        duration: 3000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }

      });  
      

    });
    count2++;
  }
  else{
    console.log(count);
  }
}, {offset: '60%'});


// number count for stats, using jQuery animate

