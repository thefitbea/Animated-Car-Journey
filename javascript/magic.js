$(document).ready(function(){
  // variables
  $surface=$('.surface');
  $car=$('.car');

  $img=$('.car img');
  let flag=true;

const cars=['assets/Img_05.png','assets/Img_06.png'];

  // keypress events

  // DRIVE & STOP
  $(document).on('keypress',function(e){
    // console.log(e.which);

    // to get keycode from console log in chrome dev tools
    // OUTPUT is 13 for ENTER, 119 for W, 115 for S, 100 for D, 97 for A, 108 for L
    if(e.which==13){
      $($surface).toggleClass('moveRight');
      $($car).toggleClass('suspension');
    }
    }
  )

// TURN LIGHTS ON & OFF
  $(document).on('keypress',function(e){
    if(e.which==108){
      if (flag) {
        flag=false;
        $img.attr('src', cars[0]);
      } else {
        flag=true;
        $img.attr('src', cars[1]);
      }
    }
    }
  )
}
);
